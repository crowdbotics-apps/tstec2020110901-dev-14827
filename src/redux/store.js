import { appReducer } from "./mainReducer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainSaga } from "./mainSaga";
const sagaMiddleware = createSagaMiddleware();
/**
 * this app uses React Native Debugger, but it works without it
 */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(mainSaga);
export { store };