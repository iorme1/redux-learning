// this file basically going to evaluate any actions that are committed.
// ...example actions can include things like fetching our posts or creating new posts
// ...here we imported our actions "FETCH_POSTS" and "NEW_POST" which are just constants

import { FETCH_POSTS, NEW_POST } from '../actions/types';

// the items array is going to represent our posts that come in from our action,
// our action is where we will put our fetch request
// item is an object that represent the NEW_POST
const initialState = {
  items: [],
  item: {}
};

// this evaluates what "type" we are dealing with
// the action will include a "type", and thats what we are evaluating
// common to use a switch state in here.
export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
      break;
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
      break;
    default:
      return state;
  }
}
