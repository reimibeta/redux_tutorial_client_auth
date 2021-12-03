import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../../actions';

class Signout extends Component {

    componentDidMount(){
        // console.log(this.props.signout())
        this.props.signout();
    }

    render(){
        return(
            <div>Please comeback soon!</div>
        );
    };
}

export default connect(null, actions)(Signout);