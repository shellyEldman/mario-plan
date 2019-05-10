import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {signOut} from '../../store/actions/authActions';

const SignInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut} href="/">Log Out</a></li>
            <li><NavLink className="btn btn-floating pink lighten-1" to="/">{props.profile.initials}</NavLink></li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignInLinks);