import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { savingMiddleware } from "./middlewares/saving-middleware";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(savingMiddleware, thunk)
);
