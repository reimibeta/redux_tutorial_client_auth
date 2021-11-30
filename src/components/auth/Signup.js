import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from '../../actions';

class Signup extends Component {

    onSubmit = (formProps) => {
        console.log(formProps);
        this.props.signup(formProps);
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
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign Up!</button>
            </form>
        );
    };
}


function mapStateToProps(state){
    console.log("STATE", state.auth);
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions), //state
    reduxForm({ form: 'signup' })
)(Signup);