import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types.action";


export const signup = (formProps, callback) => (dispatch) => {
    const { username, password } = formProps;
    axios.post('http://d.pcrpallet.com/api/users/user_token/', 
    { 
        name: username, 
        password: password 
    }).then(response => {
        console.log(response);
        // console.log(response.data.token.access);
        dispatch({ type: AUTH_USER, payload: response.data.token.access });
        //
        callback();
    }).catch(error => {
        console.log(error);
        // console.log(error.response.status);
        // console.log(error.response.data);
        // dispatch({
        //     type: AUTH_ERROR,
        //     payload: "(" + error.response.status + ")" + 'Signup error!'
        // })
    });
    // .catch(e => {
    //     dispatch({
    //         type: AUTH_ERROR,
    //         payload: 'Signup error!'
    //     })
    //     console.log("ERROR", e);
    // });
    // const response = axios.post('http://d.pcrpallet.com/api/users/user_token/', { name: username, password: password });
    // console.log(response);
    // dispatch({ type: AUTH_USER, payload: response.token.access });
};