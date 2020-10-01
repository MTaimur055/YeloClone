import { createStore, compose } from "redux";

import rootReducers from "./reducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initState = { cart: { items: cartItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  
);
export default store;
