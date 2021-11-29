import axios from "axios";
import { AUTH_USER } from "./types.action";


export const signup = (formProps) => (dispatch) => {
    const { username, password } = formProps;
    axios.post('http://d.pcrpallet.com/api/users/user_token/', 
    { 
        name: username, 
        password: password 
    }).then(response => {
        console.log(response.data.token.access);
        dispatch({ type: AUTH_USER, payload: response.data.token.access });
    });
    // const response = axios.post('http://d.pcrpallet.com/api/users/user_token/', { name: username, password: password });
    // console.log(response);
    // dispatch({ type: AUTH_USER, payload: response.token.access });
};