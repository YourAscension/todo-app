import React, { useEffect } from "react";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useSearchSortTodos } from "../../../hooks/useFilter";
import { setFilteredTodo } from "../../../slices/TodoFilter";

function TodoList() {
  const dispatch = useDispatch();

  const { search, isUncompleted } = useSelector((state) => state.filter.filter);
  const todos = useSelector((state) => state.todos.todosArray);

  const filteredTodos = useSearchSortTodos(todos, isUncompleted, search);
  useEffect(() => {
    dispatch(setFilteredTodo(filteredTodos));
  }, [todos, search, isUncompleted]);

  const todosItems = filteredTodos.map((todo, index) => (
    <TodoItem key={todo.id} index={index} todo={todo} />
  ));

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
