import { AUTH_ERROR, AUTH_USER } from "../actions/types.action";

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action){
    if (action.type === AUTH_USER){
        return { ...state, authenicated: action.payload };
    }
    if (action.type === AUTH_ERROR){
        return { ...state, errorMessage: action.payload };
    }
    return state;
}