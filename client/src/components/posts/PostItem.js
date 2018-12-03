import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';

class PostItem extends Component {
   onDeleteClick = id => () => {
      console.log(id);
   };

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
                  <button className="btn btn-light mr-1" type="button">
                     <i className="text-info fas fa-thumbs-up" />
                     <span className="badge badge-light">{post.likes.length}</span>
                  </button>
                  <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                     Comments
                  </Link>
                  {post.user === auth.user.id && (
                     <button
                        className="btn btn-danger mr-1"
                        type="button"
                        onChange={this.onDeleteClick(post._id)}
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
      name: PropTypes.string.isRequired,
   }).isRequired,
   auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
   auth: state.auth,
});

export default connect(mapStateToProps)(PostItem);
