import React from "react";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.todosArray);

  const todosItems = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  return (
    <div className={styles.container}>
      <TodoFilter />
      <hr />
      <TodoForm />
      <div className={styles.todoListContainer}>{todosItems}</div>
    </div>
  );
}

export default TodoList;
