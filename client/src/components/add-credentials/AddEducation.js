import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         school: '',
         degree: '',
         fieldofstudy: '',
         from: '',
         to: '',
         current: false,
         description: '',
         errors: {},
         disabled: false,
      };
   }

   componentWillReceiveProps = (nextProps) => {
      if (nextProps.errors) {
         this.setState({ errors: nextProps.errors });
      }
   };

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = (e) => {
      e.preventDefault();

      const {
         school, degree, fieldofstudy, from, to, current, description,
      } = this.state;
      const { addEducation, history } = this.props;

      const eduData = {
         school,
         degree,
         fieldofstudy,
         from,
         to,
         current,
         description,
      };

      addEducation(eduData, history);
   };

   onCheck = () => {
      this.setState(state => ({
         disabled: !state.disabled,
         current: !state.current,
      }));
   };

   render() {
      const {
         current,
         degree,
         description,
         disabled,
         errors,
         fieldofstudy,
         from,
         school,
         to,
      } = this.state;

      return (
         <div className="add-education">
            <div className="cotainer">
               <div className="row">
                  <div className="col-md-8 m-auto">
                     <Link to="/dashboard" className="btn btn-light">
                        Go Back
                     </Link>
                     <h1 className="display-4 text-center">Add Education</h1>
                     <p className="lead text-center">
                        Add any school, bootcamp, etc that you have attended
                     </p>
                     <small className="d-block pb-3">* = required fields</small>
                     <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                           placeholder="* School"
                           name="school"
                           value={school}
                           error={errors.school}
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="* Degree or Certification"
                           name="degree"
                           value={degree}
                           error={errors.degree}
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="* Field of Study"
                           name="fieldofstudy"
                           value={fieldofstudy}
                           error={errors.fieldofstudy}
                           onChange={this.onChange}
                        />
                        <h2 className="h6">From Date</h2>
                        <TextFieldGroup
                           type="date"
                           name="from"
                           value={from}
                           error={errors.from}
                           onChange={this.onChange}
                        />
                        <h2 className="h6">To Date</h2>
                        <TextFieldGroup
                           type="date"
                           name="to"
                           value={to}
                           error={errors.to}
                           disabled={disabled}
                           onChange={this.onChange}
                        />
                        <div className="form-check mb-4">
                           <label htmlFor="current" className="form-check-label">
                              <input
                                 type="checkbox"
                                 id="current"
                                 className="form-check-input"
                                 name="current"
                                 value={current}
                                 checked={current}
                                 onChange={this.onCheck}
                              />
                              Current Job
                           </label>
                        </div>
                        <TextFieldGroup
                           placeholder="Program Description"
                           name="description"
                           value={description}
                           error={errors.description}
                           info="Tell us about the program that you were in"
                           onChange={this.onChange}
                        />
                        <input
                           type="submit"
                           value="Submit"
                           className="btn btn-info btn-block mt-4"
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

AddEducation.propTypes = {
   addEducation: PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   profile: state.profile,
   errors: state.errors,
});

export default connect(
   mapStateToProps,
   { addEducation },
)(withRouter(AddEducation));
