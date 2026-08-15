import { body, validationResult } from 'express-validator';


function validateRequest(req, res, next) {

    const errors = validationResult(req);

    // checking is error found or not
    if(!errors.isEmpty()) {
        // if error found, then returning directly with appropriate status code
        res.status(400).json({
            errors: errors.array(),
        })
    }

    // if any error is not found, then passing flow to next
    next();

}


// validation of data while receiving it in req.body
// registeration validation so that data may not reaches in DB in different format
export const validateRegister = [
    body("fullname")
        .notEmpty().withMessage("fullname is required")
        .isLength({ min: 3 }).withMessage("fullname must be atleast 3 characters long"),
    body("email")
        .isEmail().withMessage("Invalid email format"),
    body("password")
        .isLength({ min: 6 }).withMessage("Password must be 6 characters long"),
    body("contact")
        .notEmpty().withMessage("Contact is required")
        .matches(/^\d{10}$/).withMessage("Contact must be 10-digit number"),
    body("isSeller")
        .isBoolean().withMessage("isSeller must be a boolean value"),


    // calling validatRequest middleware for finding if any error found or not
    validateRequest
]   