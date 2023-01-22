import React from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./TodoForm.module.css";
import { setTodo, setTest } from "../../../slices/TodoActions";
import { useDispatch } from "react-redux";

function TodoForm() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

  const formTodoHandler = (e) => {
    e.preventDefault();
    dispatch(setTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={formTodoHandler} className={styles.formContainer}>
      <Input type="text" value={input} onInput={(e) => setInput(e.target.value)} />
      <Button type="primary">Добавить</Button>
    </form>
  );
}

export default TodoForm;
