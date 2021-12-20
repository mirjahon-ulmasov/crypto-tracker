import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postAPI } from "../services/PostService";
import { userAPI } from "../services/UserService";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  users: userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postAPI.middleware)
      .concat(userAPI.middleware),
});

export default store;

export type appStore = typeof store;
export type appDispatch = appStore["dispatch"];
export type rootState = ReturnType<typeof rootReducer>;
