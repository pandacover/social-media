import * as api from '../api';
import { AUTH } from '../action_types/types';

export const createUser = (userdata, history) => async(dispatch) => {
    try {
        const { data } = await api.createUser(userdata);
        dispatch({ type: AUTH, data });
        history.push("/home");
        window.location.reload();

    } catch (error) {
        console.log(error.message);
    }
}

export const loginUser = (userdata, history) => async(dispatch) => {
    try {
        const { data } = await api.loginUser(userdata);
        dispatch({ type: AUTH, data });
        history.push("/home");
        window.location.reload();
        
    } catch (error) {
        console.log(error)
    }
}