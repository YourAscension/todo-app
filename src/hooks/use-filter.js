import React from "react";

export const useSortUncompleted = (todos, isUncompleted) => {
  const uncompletedTodos = React.useMemo(() => {
    if (isUncompleted) {
      return todos.filter((todo) => todo.completed === false);
    }
    return todos;
  }, [todos, isUncompleted]);

  return uncompletedTodos;
};

export const useSearchSortTodos = (todos, isUncompleted, search) => {
  const sortedTodos = useSortUncompleted(todos, isUncompleted);

  const searchedAndSortedTodos = React.useMemo(() => {
    return sortedTodos.filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()));
  }, [sortedTodos, search]);

  return searchedAndSortedTodos;
};
