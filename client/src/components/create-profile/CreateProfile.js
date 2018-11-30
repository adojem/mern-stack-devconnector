import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

export class CreateProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         displaySocialInputs: false,
         handle: '',
         company: '',
         website: '',
         location: '',
         status: '',
         skills: '',
         githubusername: '',
         bio: '',
         twitter: '',
         facebook: '',
         linkedin: '',
         youtube: '',
         instagram: '',
         errors: {},
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

      const { createProfile, history } = this.props;
      const {
         handle,
         company,
         website,
         location,
         status,
         skills,
         githubusername,
         bio,
         twitter,
         facebook,
         linkedin,
         youtube,
         instagram,
      } = this.state;

      const profileData = {
         handle,
         company,
         website,
         location,
         status,
         skills,
         githubusername,
         bio,
         twitter,
         facebook,
         linkedin,
         youtube,
         instagram,
      };

      createProfile(profileData, history);
   };

   render() {
      const {
         bio,
         company,
         displaySocialInputs,
         errors,
         facebook,
         githubusername,
         handle,
         instagram,
         linkedin,
         location,
         skills,
         status,
         twitter,
         website,
         youtube,
      } = this.state;

      let socialInputs;

      if (displaySocialInputs) {
         socialInputs = (
            <div>
               <InputGroup
                  placeholder="Twitter Profile URL"
                  name="twitter"
                  icon="fab fa-twitter"
                  value={twitter}
                  error={errors.twitter}
                  onChange={this.onChange}
               />
               <InputGroup
                  placeholder="Facebook Page URL"
                  name="facebook"
                  icon="fab fa-facebook"
                  value={facebook}
                  error={errors.facebook}
                  onChange={this.onChange}
               />
               <InputGroup
                  placeholder="Linkedin Profile URL"
                  name="linkedin"
                  icon="fab fa-linkedin"
                  value={linkedin}
                  error={errors.linkedin}
                  onChange={this.onChange}
               />
               <InputGroup
                  placeholder="Youtube Channel URL"
                  name="youtube"
                  icon="fab fa-youtube"
                  value={youtube}
                  error={errors.youtube}
                  onChange={this.onChange}
               />
               <InputGroup
                  placeholder="Instagram Page URL"
                  name="instagram"
                  icon="fab fa-instagram"
                  value={instagram}
                  error={errors.instagram}
                  onChange={this.onChange}
               />
            </div>
         );
      }

      // Select options for status
      const options = [
         { label: '* Select Professional Status', value: 0 },
         { label: 'Developer', value: 'Developer' },
         { label: 'Junior Developer', value: 'Junior Developer' },
         { label: 'Senior Developer', value: 'Senior Developer' },
         { label: 'Manager', value: 'Manager' },
         { label: 'Student or Learning', value: 'Student or Learning' },
         { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
         { label: 'Intern', value: 'Intern' },
         { label: 'Other', value: 'Other' },
      ];

      return (
         <div className="create-profile">
            <div className="container">
               <div className="row">
                  <div className="ol-md-8 m-auto">
                     <h1 className="display-4 text-center">Create Your Profile</h1>
                     <p className="lead text-center">
                        Let's get some information to make your profile stand out
                     </p>
                     <small className="d-block pb-3">* = required fields</small>
                     <form onSubmit={this.onSubmit}>
                        <TextFieldGroup
                           placeholder="* Profile Handle"
                           name="handle"
                           value={handle}
                           error={errors.handle}
                           info="A unique handle for your profile URL. Your full name, company name, nickname"
                           onChange={this.onChange}
                        />
                        <SelectListGroup
                           placeholder="Status"
                           name="status"
                           value={status}
                           options={options}
                           error={errors.status}
                           info="Give us an idea of where you are in your career"
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Company"
                           name="company"
                           value={company}
                           error={errors.company}
                           info="Could be your own company or one you work for"
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Website"
                           name="website"
                           value={website}
                           error={errors.website}
                           info="Could be your own website or a company one"
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Location"
                           name="location"
                           value={location}
                           error={errors.location}
                           info="City or city & state suggested (eg. Boston, MA)"
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Skills"
                           name="skills"
                           value={skills}
                           error={errors.skills}
                           info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                           onChange={this.onChange}
                        />
                        <TextFieldGroup
                           placeholder="Github Username"
                           name="githubusername"
                           value={githubusername}
                           error={errors.githubusername}
                           info="If you want your latest repos and a Github link, include your username"
                           onChange={this.onChange}
                        />
                        <TextAreaFieldGroup
                           placeholder="Short Bio"
                           name="bio"
                           value={bio}
                           error={errors.bio}
                           info="Tell us a little about yourself"
                           onChange={this.onChange}
                        />

                        <div className="mb-3">
                           <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                 this.setState(preveSate => ({
                                    displaySocialInputs: !preveSate.displaySocialInputs,
                                 }));
                              }}
                           >
                              Add Social Network Links
                           </button>
                           <span className="text-muted">Optional</span>
                        </div>
                        {socialInputs}
                        <input
                           className="btn btn-info btn-block mt-4"
                           type="submit"
                           value="Submit"
                        />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

CreateProfile.propTypes = {
   profile: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   profile: state.profile,
   errors: state.errors,
});

export default connect(
   mapStateToProps,
   { createProfile },
)(withRouter(CreateProfile));
