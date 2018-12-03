import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PostFeed extends Component {
   render() {
      const { posts } = this.props;

      return <div />;
   }
}

PostFeed.propTypes = {
   posts: PropTypes.array.isRequired,
};

export default PostFeed;
