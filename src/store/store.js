import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import reducerBerita from '../reducer/reducerBerita';
import reducerUser from '../reducer/reducerUser';

const rootReducer = combineReducers({
  reducerBerita,
  reducerUser,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(reduxThunk))
)

export default store;

// export default createStore(
//   rootReducer,
// )