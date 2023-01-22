import React from "react";
import Button from "../../UI/Button/Button";
import Checkbox from "../../UI/Checkbox/Checkbox";
import styles from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoCompleted } from "../../../slices/TodoActions";

function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const compeletedStyles = todo.completed
    ? [styles.itemTitleText, styles.completed].join(" ")
    : styles.itemTitleText;

  const deleteTodoItemHandle = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo(todo.id));
  };

  const toggleTodoHandle = () => {
    dispatch(toggleTodoCompleted(todo.id));
  };
  return (
    <div className={styles.todoItemContainer}>
      <div className={styles.itemTitle}>
        <Checkbox onChange={toggleTodoHandle} checked={todo.completed}>
          <h2 className={compeletedStyles}>{todo.task}</h2>
        </Checkbox>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={deleteTodoItemHandle} type="delete">
          X
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
