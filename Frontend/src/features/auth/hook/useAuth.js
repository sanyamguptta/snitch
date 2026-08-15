// for managing state & service layer, we use hook layer

// importing all actions from state layer
import { setUser, setLoading, setError } from "../state/auth.slice";
// importing register from service layer
import { register } from "../service/app.api";
import { useDispatch } from "react-redux";

export const useAuth = () => {

    const dispatch = useDispatch();

    // calling handleRegister funtion for calling backend api
    // data comes & state updated using dispatch
    async function handleRegister({ email, password, fullname, contact, isSeller = false }) {

        const data = await register({ email, password, fullname, contact, isSeller });

        // setting received user data into state
        dispatch(setUser(data.user));
    }

    return {
        handleRegister,
    }
}