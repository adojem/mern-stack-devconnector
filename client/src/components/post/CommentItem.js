import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
   onDeleteClick = (postId, commendId) => () => {
      this.props.deleteComment(postId, commendId);
   };

   render() {
      const { comment, postId, auth } = this.props;

      return (
         <div className="post-form mb-3">
            <div className="card card-body mb-3">
               <div className="row">
                  <div className="col-md-2">
                     <a href="#">
                        <img
                           className="rounded-circle d-none d-md-block"
                           src={comment.avatar}
                           alt={comment.name}
                        />
                     </a>
                     <p className="text-center">{comment.name}</p>
                  </div>
                  <div className="col-md-10">
                     <p className="lead">{comment.text}</p>
                     {comment.user === auth.user.id && (
                        <button
                           className="btn btn-danger mr-1"
                           type="button"
                           onClick={this.onDeleteClick(postId, comment._id)}
                        >
                           <i className="fas fa-times" />
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

CommentItem.propTypes = {
   deleteComment: PropTypes.func.isRequired,
   comment: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
   }).isRequired,
   postId: PropTypes.string.isRequired,
   auth: PropTypes.shape({
      user: PropTypes.shape({
         id: PropTypes.string.isRequired,
      }).isRequired,
   }).isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
});

export default connect(
   mapStateToProps,
   { deleteComment },
)(CommentItem);
