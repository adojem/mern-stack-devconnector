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
      const { profile, loading } = this.props.profile;
      let profileContent;

      if (profile == null || loading) {
         profileContent = <Spinner />;
      }
      else {
         profileContent = (
            <div>
               <div className="row">
                  <div className="col-md-6">
                     <Link to="/profiles" className="btn btn-light mb33 float-left">
                        Back To Profile
                     </Link>
                  </div>
                  <div className="col-md6" />
               </div>
               <ProfileHeader profile={profile} />
               <ProfileAbout profile={profile} />
               {(profile.experience.length > 0 || profile.education.length > 0) && (
                  <ProfileCreds education={profile.education} experience={profile.experience} />
               )}
               <ProfileGithub />
            </div>
         );
      }

      return (
         <div className="profile">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">{profileContent}</div>
               </div>
            </div>
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
