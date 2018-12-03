import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         text: '',
         errors: {},
      };
   }

   static getDerivedStateFromProps(nextProps) {
      if (nextProps.errors) {
         return {
            errors: nextProps.errors,
         };
      }
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = (e) => {
      e.preventDefault();

      const { text } = this.state;
      const {
         auth: {
            user: { name, avatar },
         },
         addPost,
      } = this.props;

      const newPost = { text, name, avatar };

      addPost(newPost);
      this.setState({ text: '' });
   };

   render() {
      const { errors, text } = this.state;

      return (
         <div className="post-form mb-3">
            <div className="card card-info">
               <div className="card-header bg-info text-white">Say Something...</div>
               <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                        <TextAreaFieldGroup
                           placeholder="Create a post"
                           name="text"
                           value={text}
                           error={errors.text}
                           onChange={this.onChange}
                        />
                     </div>
                     <button type="submit" className="btn btn-dark">
                        Submit
                     </button>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

PostForm.propTypes = {
   addPost: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

export default connect(
   mapStateToProps,
   { addPost },
)(PostForm);
