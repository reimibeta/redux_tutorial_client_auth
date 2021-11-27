import React, { Component } from "react";
import Test from "./Test";

class Welcome extends Component {

    render(){
        return (
            <div>
                <h3>Welcome! Sign up or Sign in!</h3>
                <Test>
                    <button
                        onClick={() => console.log("test click!")}
                    >Test</button>
                </Test>
            </div>
        );
    };
}

export default Welcome;