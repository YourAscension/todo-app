import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  todosArray: [
    {
      id: uuid(),
      task: "Купить молока",
      completed: false,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
    {
      id: uuid(),
      task: "Купить еду",
      completed: true,
    },
  ],
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
      console.log("deleted");
      state.todosArray = state.todosArray.filter((todo) => todo.id != action.payload);
    },
    toggleTodoCompleted: (state, action) => {
      console.log("toggle");
      state.todosArray = state.todosArray.map((todo) => {
        return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
      });
    },
  },
});

export const { setTodo, deleteTodo, toggleTodoCompleted } = todoActionsSlice.actions;

export default todoActionsSlice.reducer;
