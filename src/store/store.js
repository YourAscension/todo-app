import { configureStore } from "@reduxjs/toolkit";
import todoActionsReducer from "../slices/TodoActions";
import filterSliceReducer from "../slices/TodoFilter";

export const store = configureStore({
  reducer: { todos: todoActionsReducer, filter: filterSliceReducer },
});
