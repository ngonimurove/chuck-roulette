import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";
import config from "../config";
import rootReducer from "../reducers";
import appEpics from "../epics/appEpics";

const epicMiddleware = createEpicMiddleware(appEpics);

const middleware = config.isDevelopment
  ? [logger, epicMiddleware]
  : [epicMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
