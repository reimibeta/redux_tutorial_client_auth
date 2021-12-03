import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {

    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    
    shouldNavigateAway() {
      if(!this.props.navigate){
        console.log("NAV", 'none');
      } else {
        console.log("NAV", 'yes');
      }
      if (!this.props.auth) {
          this.props.navigate('/');
          console.log("AUTH", "none");
      } else {
          console.log("AUTH", "yes");
      }
    }

    render() {     
      // if(!this.props.auth){
        // return <Redirect to="/signup"
        // return <Navigate to={<Signup />} />;
      // } else {
        return <ChildComponent {...this.props} />;
      // }
    }
  }

  function mapStateToProps(state) {
    console.log("State", state);
    return { auth: state.auth.authenticated };
  }

  function WithNavigate(state){
    console.log("STATE", state);
    let navigate = useNavigate();  
    return (
      <ComposedComponent { ...state } navigate={navigate} />
    );
  }

  return connect(mapStateToProps)(WithNavigate);
  // return connect(mapStateToProps)(ComposedComponent);
};
