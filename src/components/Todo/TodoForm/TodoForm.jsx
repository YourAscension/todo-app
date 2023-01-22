import React from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from "./TodoForm.module.css";
import { setTodo, setTest } from "../../../slices/TodoActions";
import { setSearch } from "../../../slices/TodoFilter";
import { useDispatch } from "react-redux";
import ToolTip from "../../UI/ToolTip/ToolTip";
import { useTooltip } from "../../../hooks/useTooltip";

function TodoForm() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef();
  const [isActive, coords, showTooltip] = useTooltip(inputRef, 3000);

  const formTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      showTooltip();
    } else {
      dispatch(setTodo(input));
      dispatch(setSearch(""));
      setInput("");
    }
  };

  return (
    <form onSubmit={formTodoHandler} className={styles.formContainer}>
      <ToolTip isActive={isActive} target={coords}>
        Введите название задачи
      </ToolTip>
      <Input ref={inputRef} type="text" value={input} onInput={(e) => setInput(e.target.value)} />
      <Button type="primary">Добавить</Button>
    </form>
  );
}

export default TodoForm;
