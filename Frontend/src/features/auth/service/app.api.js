// file for calling all backend api
import axios from 'axios';

const authApiInstance = axios.create({
    baseURL: '/api/auth', // no need of complete url, bcz we have set proxy instead of using cors
    withCredentials: true, // for setting up cookies
})

// function for calling register api of backend
export async function register({ email, password, fullname, contact, isSeller }) {

    // calling register api
    const response = await authApiInstance.post('/register', {
        email, 
        password, 
        fullname, 
        contact,
        isSeller,
    })

    return response.data
}

// function for calling login api of backend
export async function login({ email, password }) {

    const response = await authApiInstance.post('/login', {
        email, 
        password,
    })

    return response.data;
}
