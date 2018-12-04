import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
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
         postId,
         auth: {
            user: { name, avatar },
         },
         addComment,
      } = this.props;

      const newComment = { text, name, avatar };

      addComment(postId, newComment);
      this.setState({ text: '' });
   };

   render() {
      const { errors, text } = this.state;

      return (
         <div className="post-form mb-3">
            <div className="card card-info">
               <div className="card-header bg-info text-white">Make a comment...</div>
               <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                     <div className="form-group">
                        <TextAreaFieldGroup
                           placeholder="Reply to post"
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

CommentForm.propTypes = {
   addComment: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   postId: PropTypes.string.isRequired,
   errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

export default connect(
   mapStateToProps,
   { addComment },
)(CommentForm);
