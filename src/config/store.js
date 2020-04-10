import Users from "../store/user/reducer"

import createLogger from "redux-logger"
import apiMiddleware from "../middlewares/api"
import { createStore, applyMiddleware, combineReducers } from "redux"

export let Middlewares

// if production or load by server
if (process.env.NODE_ENV == "production" || typeof window == "undefined") {
  Middlewares = applyMiddleware(apiMiddleware)
} else {
  Middlewares = applyMiddleware(apiMiddleware, createLogger)
}

const preloadedState = typeof window != "undefined" ? window.__data__ : {}

// combine reducers here
export const Reducers = combineReducers({
  Users
})

export default createStore(Reducers, preloadedState, Middlewares)
