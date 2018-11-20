import { createStore } from "redux";
import { Reducers } from "./Reducer";
import { Middleware } from "./Middleware";

const reducerClass = new Reducers();
const middlewareClass = new Middleware();

export const store = createStore(reducerClass.createReducer(), {}, middlewareClass.createMiddleware());