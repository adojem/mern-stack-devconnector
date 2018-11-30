import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';

export class Profile extends Component {
   componentDidMount = () => {
      const { getProfileByHandle, match } = this.props;
      if (match.params.handle) {
         getProfileByHandle(match.params.handle);
      }
   };

   render() {
      return (
         <div>
            <ProfileHeader />
            <ProfileAbout />
            <ProfileCreds />
            <ProfileGithub />
         </div>
      );
   }
}

Profile.propTypes = {
   profile: PropTypes.object.isRequired,
   getProfileByHandle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   profile: state.profile,
});

export default connect(
   mapStateToProps,
   { getProfileByHandle },
)(Profile);
