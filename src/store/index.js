import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';
import * as GeneralReducers from './general/reducers';
import * as PostsReducers from './posts/reducers';

const rootReducer = combineReducers({
  ...PostsReducers,
  ...GeneralReducers
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

export default store;
