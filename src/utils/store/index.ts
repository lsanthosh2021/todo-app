import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./reducers/todoreducer";

export const store = configureStore({
  reducer: { todo: todoreducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
