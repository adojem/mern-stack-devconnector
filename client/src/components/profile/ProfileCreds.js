import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileCreds = ({ experience, education }) => {
   const expItems = experience.map(exp => (
      <li className="list-group-item" key={exp._id}>
         <h3 className="h4">{exp.company}</h3>
         <p>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>
            {' - '}
            {exp.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
         </p>
         <p>
            <strong>Position: </strong>
            {exp.title}
         </p>
         <p>
            {exp.location !== '' && (
               <span>
                  <strong>Location: </strong>
                  {exp.location}
               </span>
            )}
         </p>
         <p>
            {exp.description !== '' && (
               <span>
                  <strong>Description: </strong>
                  {exp.description}
               </span>
            )}
         </p>
      </li>
   ));

   const eduItems = education.map(edu => (
      <li className="list-group-item" key={edu._id}>
         <h3 className="h4">{edu.school}</h3>
         <p>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment>
            {' - '}
            {edu.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
         </p>
         <p>
            <strong>Degree: </strong>
            {edu.degree}
         </p>
         <p>
            <strong>Field Of Study: </strong>
            {edu.fieldofstudy}
         </p>
         <p>
            {edu.description !== '' && (
               <span>
                  <strong>Description: </strong>
                  {edu.description}
               </span>
            )}
         </p>
      </li>
   ));

   return (
      <div className="row">
         {experience.length > 0 && (
            <div className="col-md-6">
               <h2 className="h3 text-center text-info">Experience</h2>
               {expItems.length > 0 && <ul className="list-group">{expItems}</ul>}
            </div>
         )}
         {education.length > 0 && (
            <div className="col-md-6">
               <h2 className="h3 text-center text-info">Education</h2>
               {eduItems.length > 0 && <ul className="list-group">{eduItems}</ul>}
            </div>
         )}
      </div>
   );
};

ProfileCreds.propTypes = {
   experience: PropTypes.arrayOf(PropTypes.object),
   education: PropTypes.arrayOf(PropTypes.object),
};

export default ProfileCreds;
