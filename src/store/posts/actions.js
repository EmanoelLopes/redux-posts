import posts from '../../services/posts';
import types from './action-types';
import { setLoading } from '../general/actions';

const getPosts = payload => {
  return {
    type: types.FETCH_POSTS,
    posts: payload
  };
};

const fetchSuccess = payload => {
  return {
    type: types.FETCH_SUCCESS,
    success: true,
    message: payload
  };
};

const fetchFailed = payload => {
  return {
    type: types.FETCH_SUCCESS,
    success: false,
    message: payload
  };
};

const fetchPosts = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const response = await posts.get();
      const fetchedPosts = response.data;
      if (response.status === 200) {
        dispatch(setLoading(false));
        dispatch(fetchSuccess('Request Success!'));
        dispatch(getPosts(fetchedPosts));
      } else if (response.status >= 400) {
        dispatch(setLoading(false));
        dispatch(fetchFailed('Request Failed!'));
      }
    } catch (e) {
      throw new Error(e);
    }
  };
};

export {
  getPosts,
  fetchSuccess,
  fetchFailed,
  fetchPosts
};