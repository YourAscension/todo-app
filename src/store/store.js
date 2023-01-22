import { configureStore } from "@reduxjs/toolkit";
import todoActionsReducer from "../slices/todo-actions";
import filterSliceReducer from "../slices/todo-filter";

export const store = configureStore({
  reducer: { todos: todoActionsReducer, filter: filterSliceReducer },
});
