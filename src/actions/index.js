import axios from "axios";
import { AUTH_USER } from "./types.action";


export const signup = (formProps) => (dispatch) => {
    const { username, password } = formProps;
    axios.post('http://d.pcrpallet.com/api/users/user_token/', { name: username, password: password });
};