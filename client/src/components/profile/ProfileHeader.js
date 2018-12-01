import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

const ProfileHeader = ({ profile }) => (
   <div className="row">
      <div className="col-md-12">
         <div className="card card-body bg-info text-white mb-3">
            <div className="row">
               <div className="col-4 col-md-3 m-auto">
                  <img src={profile.user.avatar} alt="" className="rounded-circle" />
               </div>
            </div>
            <div className="text-center">
               <h1 className="display-4 text-center">{profile.user.name}</h1>
               <p className="lead text-center">
                  {profile.status}
                  {' '}
                  {!isEmpty(profile.company) && <span>{`at ${profile.company}`}</span>}
               </p>
               <p>{!isEmpty(profile.location) && `at  ${profile.location}`}</p>
               <p>
                  {!isEmpty(profile.website) && (
                     <a
                        href={profile.website}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fas fa-globe fa-2x" />
                     </a>
                  )}
                  {!isEmpty(profile.social && profile.social.twitter) && (
                     <a
                        href={profile.social.twitter}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fab fa-twitter fa-2x" />
                     </a>
                  )}
                  {!isEmpty(profile.social && profile.social.facebook) && (
                     <a
                        href={profile.social.facebook}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fab fa-facebook fa-2x" />
                     </a>
                  )}
                  {!isEmpty(profile.social && profile.social.linkedin) && (
                     <a
                        href={profile.social.linkedin}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fab fa-linkedin fa-2x" />
                     </a>
                  )}
                  {!isEmpty(profile.social && profile.social.youtube) && (
                     <a
                        href={profile.social.youtube}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fab fa-youtube fa-2x" />
                     </a>
                  )}
                  {!isEmpty(profile.social && profile.social.instagram) && (
                     <a
                        href={profile.social.instagram}
                        className="text-white p-2"
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        <i className="fab fa-instagram fa-2x" />
                     </a>
                  )}
               </p>
            </div>
         </div>
      </div>
   </div>
);

ProfileHeader.propTypes = {
   profile: PropTypes.shape({
      user: PropTypes.shape({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
      }),
      company: PropTypes.string,
      location: PropTypes.string,
      social: PropTypes.shape({
         facebook: PropTypes.string,
         instagram: PropTypes.string,
         linkedin: PropTypes.string,
         twitter: PropTypes.string,
         youtube: PropTypes.string,
      }),
   }).isRequired,
};

export default ProfileHeader;
