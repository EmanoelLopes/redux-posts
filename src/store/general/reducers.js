import types from './action-types';
import initialState from './initialState';

const isLoading = function isLoading (state = initialState.isLoading, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export {
  isLoading
};