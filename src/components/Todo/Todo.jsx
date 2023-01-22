import React from "react";
import styles from "./Todo.module.css";
import List from "./List/List";
import Statistic from "./Statistic/Statistic";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";

const Todo = () => {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoContent}>
        <Filter />
        <hr />
        <Form />
        <List />
      </div>
      <Statistic />
    </div>
  );
};

export default Todo;
