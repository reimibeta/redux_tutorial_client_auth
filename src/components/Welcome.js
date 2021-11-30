import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

class Welcome extends Component {

    render(){
        return (
            <div>
                <h3>Welcome! Sign up or Sign in!</h3>
                <Test>
                    <button
                        onClick={() => this.props.navigate('/feature')}
                    >Test</button>
                </Test>
            </div>
        );
    };
}

function WithNavigate(stats){
    let navigate = useNavigate();  
    return (
      <Welcome { ...stats } navigate={navigate} />
    );
  }

export default WithNavigate;