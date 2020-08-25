import React from "react";
import {
  Link,
  Redirect
} from "react-router-dom/cjs/react-router-dom.min";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";

const Landing = ({
  isAuthenticated
}) => {
  if (isAuthenticated) {
    return <Redirect to = '/dashboard' / > ;
  }

  return ( <
    section class = 'landing' >
    <
    div class = 'dark-overlay' >
    <
    div class = 'landing-inner' >
    <
    h1 class = 'x-large' > DeFiCon < /h1> <
    p class = 'lead' >
    Create a developer profile / portfolio, share posts and get help from other Defi developers, Welcome to the world of Decentralised Finance!!!
    <
    /p> <
    div class = 'buttons' >
    <
    Link to = '/register'
    class = 'btn btn-primary' >
    Sign Up <
    /Link> <
    Link to = '/login'
    class = 'btn btn-light' >
    Login <
    /Link> <
    /div> <
    /div> <
    /div> <
    /section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);