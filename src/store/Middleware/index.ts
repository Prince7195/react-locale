import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';

export class Middleware {
    constructor() { }

    createMiddleware() {
        return applyMiddleware(thunk);
    }
}