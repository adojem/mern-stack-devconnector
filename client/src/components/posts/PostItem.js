import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
   onDeleteClick = id => () => {
      this.props.deletePost(id);
   };

   onLikeClick = id => () => {
      this.props.addLike(id);
   };

   onDislikeClick = id => () => {
      this.props.removeLike(id);
   };

   findUserLike(likes) {
      const { auth } = this.props;
      if (likes.filter(like => like.user === auth.user.id).length > 0) {
         return true;
      }
      return false;
   }

   render() {
      const { post, auth } = this.props;

      return (
         <div className="card card-body mb-3">
            <div className="row">
               <div className="col-md-2">
                  <a href="#">
                     <img className="rounded-circle d-none d-md-block" src={post.avatar} alt="" />
                  </a>
                  <p className="text-center">{post.name}</p>
               </div>
               <div className="col-md-10">
                  <p className="lead">{post.text}</p>
                  <button
                     className="btn btn-light mr-1"
                     type="button"
                     onClick={this.onLikeClick(post._id)}
                  >
                     <i
                        className={classnames('fas fa-thumbs-up', {
                           'text-info': this.findUserLike(post.likes),
                        })}
                     />
                  </button>
                  <span className="badge badge-light">{post.likes.length}</span>
                  <button
                     className="btn btn-light mr-1"
                     type="button"
                     onClick={this.onDislikeClick(post._id)}
                  >
                     <i className="text-secondary fas fa-thumbs-down" />
                  </button>
                  <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                     Comments
                  </Link>
                  {post.user === auth.user.id && (
                     <button
                        className="btn btn-danger mr-1"
                        type="button"
                        onClick={this.onDeleteClick(post._id)}
                     >
                        <i className="fas fa-times" />
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   }
}

PostItem.propTypes = {
   post: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
   }).isRequired,
   auth: PropTypes.object.isRequired,
   deletePost: PropTypes.func.isRequired,
   addLike: PropTypes.func.isRequired,
   removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
});

export default connect(
   mapStateToProps,
   { deletePost, addLike, removeLike },
)(PostItem);
