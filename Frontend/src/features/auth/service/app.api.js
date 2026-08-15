// file for calling all backend api
import axios from 'axios';

const authApiInstance = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
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