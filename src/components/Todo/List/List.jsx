import React, { useEffect } from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useSearchSortTodos } from "../../../hooks/use-filter";
import { setFilteredTodo } from "../../../slices/todo-filter";
import { taskIcon } from "../../../assets/icons/svgIcons";
import Pagination from "../Pagination/Pagination";
import { useSetPagination } from "../../../hooks/use-pagination";

function List() {
  const dispatch = useDispatch();

  const { search, isUncompleted, todos } = useSelector((state) => {
    return {
      ...state.persistedReducer.filters.filter,
      todos: state.persistedReducer.todos.todosArray,
    };
  });

  const filteredTodos = useSearchSortTodos(todos, isUncompleted, search);

  useEffect(() => {
    dispatch(setFilteredTodo(filteredTodos));
  }, [search, isUncompleted, todos]);

  const [currentItems, currentPage, itemsPerPage, setCurrentPage] = useSetPagination(
    filteredTodos,
    1,
    10
  );

  const todosItems = currentItems.map((todo, index) => (
    <Item key={todo.id} index={itemsPerPage * (currentPage - 1) + index} todo={todo} />
  ));

  const listContent = todosItems.length ? (
    <div className={styles.listContainer}>{todosItems}</div>
  ) : (
    <div className={styles.noTask}>
      <div>{taskIcon}</div>
      <h2>Нет задач</h2>
    </div>
  );

  return (
    <div className={styles.container}>
      {listContent}
      <div>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredTodos.length}
          paginate={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default List;
