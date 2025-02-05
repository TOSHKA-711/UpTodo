import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import DialogSlice from "./Slices/DialogsSlice";
import TasksSlice from "./Slices/TasksSlice";
import OneTaskSlice from "./Slices/OneTaskSlice";

export const store = configureStore({
  reducer: {
    DialogsReducer: DialogSlice,
    TasksReducer: TasksSlice,
    OneTaskReducer: OneTaskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
