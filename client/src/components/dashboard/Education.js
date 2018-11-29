import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
   onDeleteClick = id => () => {
      this.props.deleteEducation(id);
   };

   render() {
      const education = this.props.education.map(edu => (
         <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
               <Moment format="YYYY/MM/DD">{edu.form}</Moment>
               {' - '}
               {edu.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
            </td>
            <td>
               <button
                  className="btn btn-danger"
                  type="button"
                  onClick={this.onDeleteClick(edu._id)}
               >
                  Delete
               </button>
            </td>
         </tr>
      ));

      return (
         <div>
            <h2 className="h4 mb-4">Education Credentials</h2>
            <table className="table">
               <thead>
                  <tr>
                     <th>School</th>
                     <th>Degree</th>
                     <th>Years</th>
                     <th />
                  </tr>
               </thead>
               <tbody>{education}</tbody>
            </table>
         </div>
      );
   }
}

Education.propTypes = {
   education: PropTypes.array.isRequired,
};

export default connect(
   null,
   { deleteEducation },
)(Education);
