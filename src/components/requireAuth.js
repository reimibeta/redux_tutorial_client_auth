import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {

    // constructor(props){
    //   super(props);
    //   this.props.navigate('/');
    //   // this.props.history('/');
    //   console.log(this.props);
    //   // useEffect();
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
          console.log(this.props.navigate);
          // React.useEffect();
          // this.props.navigate('/');
          this.props.navigate('/');
          console.log("AUTH", "none");
      } else {
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
    return (
      <ComposedComponent { ...stats } navigate={navigate} />
    );
  }

  return connect(mapStateToProps)(WithNavigate);
};
