import types from './action-types';

const setLoading = (payload) => {
  return {
    type: types.SET_LOADING,
    isLoading: payload,
  }
};

export {
  setLoading
}