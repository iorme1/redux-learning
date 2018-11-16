// each action is going to be a function that we need to export.
// the "thunk" middleware we are using in this app allows us to
// call the "dispatch" function directly so that we can make asynchronous requests.


import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post =>
    dispatch({
      type: NEW_POST,
      payload: post
  }))
};
