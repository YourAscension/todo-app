import React from "react";

export const useSetPagination = (todos, current, totalPages) => {
  const [currentPage, setCurrentPage] = React.useState(current);
  const [itemsPerPage, setItemsPerPage] = React.useState(totalPages);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = todos.slice(firstItemIndex, lastItemIndex);

  return [currentItems, currentPage, itemsPerPage, setCurrentPage];
};

export const usePagination = (itemsPerPage, totalItems) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return [pageNumbers, totalPages];
};
