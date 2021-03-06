import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

export class Navbar extends Component {
   onLogoutClick = (e) => {
      e.preventDefault();
      const { clearCurrentProfile, logoutUser } = this.props;
      clearCurrentProfile();
      logoutUser();
   };

   render() {
      const { isAuthenticated, user } = this.props.auth;

      const authLinks = (
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
               <Link to="/feed" className="nav-link">
                  Post Feed
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/dashboard" className="nav-link">
                  Dashboard
               </Link>
            </li>
            <li className="nav-item">
               <a href="#" className="nav-link" onClick={this.onLogoutClick}>
                  <img
                     className="rounded-circle"
                     src={user.avatar}
                     alt={user.name}
                     title="You must have a Gravatar connected to your email to display an image"
                     style={{ width: '25px', marginRight: '5px' }}
                  />
                  Logout
               </a>
            </li>
         </ul>
      );

      const guestLinks = (
         <ul className="navbar-nav ml-auto">
            <li className="nav-item">
               <Link to="/register" className="nav-link">
                  Sign Up
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/login" className="nav-link">
                  Login
               </Link>
            </li>
         </ul>
      );

      return (
         <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
               <div className="container">
                  <Link to="/" className="navbar-brand">
                     DevConnector
                  </Link>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#mobile-nav"
                  >
                     <span className="navbar-toggler-icon" />
                  </button>

                  <div className="collapse navbar-collapse" id="mobile-nav">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <Link to="/profiles" className="nav-link">
                              Developer
                           </Link>
                        </li>
                     </ul>
                     {isAuthenticated ? authLinks : guestLinks}
                  </div>
               </div>
            </nav>
         </div>
      );
   }
}

Navbar.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   clearCurrentProfile: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
});

export default connect(
   mapStateToProps,
   { logoutUser, clearCurrentProfile },
)(Navbar);
