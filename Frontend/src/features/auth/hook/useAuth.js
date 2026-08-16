// for managing state & service layer, we use hook layer

// importing all actions from state layer
import { setUser, setLoading, setError } from "../state/auth.slice";
// importing register and login from service layer
import { login, register } from "../service/app.api";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    // calling handleRegister function for calling backend api
    // data comes & state updated using dispatch
    async function handleRegister({ email, password, fullname, contact, isSeller = false }) {
        try {
            dispatch(setLoading(true));
            const data = await register({ email, password, fullname, contact, isSeller });

            // setting received user data into state
            dispatch(setUser(data.user));
            return data;
        } catch (err) {
            dispatch(setError(err.response?.data?.message || err.message));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    }

    // calling handleLogin function for calling backend login api
    async function handleLogin({ email, password }) {
        try {
            dispatch(setLoading(true));
            const data = await login({ email, password });

            // setting received user data into state
            dispatch(setUser(data.user));
            return data;
        } catch (err) {
            dispatch(setError(err.response?.data?.message || err.message));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    }

    return {
        loading,
        handleRegister,
        handleLogin,
    }
}