import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // apparently because the file inside reducers folder is called index.js, we dont have to specify it i guess.

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
