import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  todosArray: [],
};

export const todoActionsSlice = createSlice({
  name: "todosActions",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todosArray = [
        ...state.todosArray,
        { id: uuid(), task: action.payload, completed: false },
      ];
    },
    deleteTodo: (state, action) => {
      state.todosArray = state.todosArray.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted: (state, action) => {
      state.todosArray = state.todosArray.map((todo) => {
        return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
      });
    },
  },
});

export const { setTodo, deleteTodo, toggleTodoCompleted } = todoActionsSlice.actions;

export default todoActionsSlice.reducer;
