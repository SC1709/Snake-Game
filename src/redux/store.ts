import { combineReducers } from "redux";
import rootSlice from "./rootSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  root: rootSlice,
});

const store = configureStore({
  reducer,
});

// RootState type
export type myState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;