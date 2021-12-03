import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
  class ComposedComponent extends Component {

    // Our component just got rendered
    componentDidMount() {
      // this.shouldNavigateAway();
      const { navigate } = this.props;
      navigate('/');
    }

    // Our component just got updated
    componentDidUpdate() {
      const { navigate } = this.props;
      navigate('/');
      // this.shouldNavigateAway();
    }
    
    shouldNavigateAway() {
      if(!this.props.navigate){
        console.log("NAV", 'none');
      } else {
        console.log("NAV", 'yes');
        // this.props.navigate('/');
      }
      if (!this.props.auth) {
          // this.props.navigate('/');
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
