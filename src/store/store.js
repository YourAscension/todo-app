import { configureStore } from "@reduxjs/toolkit";
import todoActionsReducer from "../slices/TodoActions";

export const store = configureStore({
  reducer: { todos: todoActionsReducer },
});
