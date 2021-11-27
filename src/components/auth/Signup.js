import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {

    onSubmit = (formProps) => {
        console.log(formProps);
    }

    render(){
        // handleSubmit provide by redux-form
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Username</label>
                    <Field 
                        name="username"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        );
    };
}

export default reduxForm({ form: 'signup' })(Signup);