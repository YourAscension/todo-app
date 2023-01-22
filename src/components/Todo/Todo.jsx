import React from "react";
import styles from "./Todo.module.css";
import TodoList from "./TodoList/TodoList";
import TodoStatistic from "./TodoStatistic/TodoStatistic";

const Todo = () => {
  return (
    <div className={styles.todoContainer}>
      <TodoList />
      <TodoStatistic />
    </div>
  );
};

export default Todo;
