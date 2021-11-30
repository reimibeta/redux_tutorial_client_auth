import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default ChildComponent => {
  class ComposedComponent extends Component {

    // redirect(){
    //     useEffect(() => {
    //             // setTimeout(() => {
    //             //   setCount((count) => count + 1);
    //             // }, 1000);
    //         this.props.navigate('/');
    //     });
    // }
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
        
        if (!this.props.auth) {
            // useEffect(() => {
                // setTimeout(() => {
                //   setCount((count) => count + 1);
                // }, 1000);
            this.props.navigate('/');
            // });
            console.log("AUTH", "none");
        } else if (this.props.auth.trim() === "") {
        //     this.props.navigate('/');
            console.log("AUTH", "yes");
        }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    //   console.log("State", state);
    return { auth: state.auth.authenticated };
  }

  function WithNavigate(stats){
        let navigate = useNavigate();
        return <ComposedComponent { ...stats } navigate={navigate} />
    }

  return connect(mapStateToProps)(WithNavigate);
};