import axios from 'axios';

import { ADD_POST, GET_ERRORS } from './types';

// Add Post
export const addPost = postData => (disptach) => {
   axios
      .post('/api/posts', postData)
      .then(res => dispatchEvent({
         type: ADD_POST,
         payload: res.data,
      }))
      .catch(err => disptach({
         type: GET_ERRORS,
         payload: err.response.data,
      }));
};
