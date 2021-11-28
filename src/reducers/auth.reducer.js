import actions from "redux-form/lib/actions";
import { AUTH_USER } from "../actions/types.action";

const INITIAL_STATE = {
    authenicated: '',
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action){
    if (actions.type === AUTH_USER){
        return { ...state, authenicated: action.payload };
    }
    return state;
}