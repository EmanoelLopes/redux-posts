import initialState from './state';
import types from './action-types';

const posts = function posts (state = initialState.posts, action) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return action.posts;
    default:
      return state;
  }
};

const requests = function requests (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILED:
      return {
        success: action.success,
        message: action.message
      };
    default:
      return state;
  }
};

export {
  posts,
  requests
};