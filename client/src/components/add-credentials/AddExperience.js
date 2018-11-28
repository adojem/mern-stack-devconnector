import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';

class AddExperience extends Component {
   constructor(props) {
      super(props);
      this.state = {
         company: '',
         title: '',
         location: '',
         from: '',
         to: '',
         current: false,
         description: '',
         errors: {},
         disabled: false,
      };
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = (e) => {
      e.preventDefault();
   };

   onCheck = () => {
      this.setState(state => ({
         disabled: !state.disabled,
         current: !state.current,
      }));
   };

   render() {
      const {
         company,
         current,
         description,
         disabled,
         errors,
         from,
         location,
         title,
         to,
      } = this.state;

      return (
         <div className="add-experience">
            <div className="cotainer">
               <div className="row">
                  <div className="col-md-8 m-auto">
                     <Link to="/dashboard" className="btn btn-light">
                        Go Back
                     </Link>
                     <h1 className="display-4 text-center">Add Experience</h1>
                     <p className="lead text-center">
                        Add any or position that you have had in the past or current
                     </p>
                     <small className="d-block pb-3">* = required fields</small>
                     <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                           placeholder="* Company"
                           name="company"
                           value={company}
                           error={errors.company}
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="* Job Title"
                           name="title"
                           value={title}
                           error={errors.title}
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Location"
                           name="location"
                           value={location}
                           error={errors.location}
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
                           placeholder="Job Description"
                           name="description"
                           value={description}
                           error={errors.description}
                           info="Tell us about the position"
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

AddExperience.propTypes = {
   profile: PropTypes.object.isRequired,
   errors: PropTypes.object,
};

const mapStateToProps = state => ({
   profile: state.profile,
   errors: state.errros,
});

export default connect(mapStateToProps)(withRouter(AddExperience));
