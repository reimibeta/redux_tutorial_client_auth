import React, { Component } from "react";

class Welcome extends Component {

    render(){
        const { children } = this.props;
        return(
            {children}
        );
    };
}

export default Welcome;