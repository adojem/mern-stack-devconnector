import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

const ProfileAbout = ({ profile }) => {
   // Get first name
   const firstName = profile.user.name.trim().split(' ')[0];
   // skill list
   const skills = profile.skills.map(skill => (
      <div className="p-3" key={skill}>
         <i className="fa fa-check">{skill}</i>
      </div>
   ));

   return (
      <div className="row">
         <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
               {!isEmpty(profile.bio) && (
                  <Fragment>
                     <h2 className="h3 text-center text-info">{`${firstName}'s Bio`}</h2>
                     <p className="lead">
                        <span>{profile.bio}</span>
                     </p>
                     <hr />
                  </Fragment>
               )}
               <h3 className="text-center text-info">Skill Set</h3>
               <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                     {skills}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

ProfileAbout.propTypes = {
   profile: PropTypes.shape({
      user: PropTypes.shape({
         name: PropTypes.string.isRequired,
      }),
      bio: PropTypes.string,
      skill: PropTypes.arrayOf(PropTypes.string),
   }).isRequired,
};

export default ProfileAbout;
