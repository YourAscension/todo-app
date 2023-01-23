import React from "react";
import styles from "./Pagination.module.css";
import uuid from "react-uuid";
import { usePagination } from "../../../hooks/use-pagination";

function Pagination(props) {
  const { currentPage, itemsPerPage, totalItems, paginate } = props;

  const [pageNumbers, totalPages] = usePagination(itemsPerPage, totalItems);

  if (totalPages === 1) {
    return null;
  }

  const previousPageButton = currentPage > 1 && (
    <button onClick={() => paginate(currentPage - 1)} className={styles.pageButton}>
      {"<"}
    </button>
  );

  const nextPageButton = totalPages > currentPage && (
    <button onClick={() => paginate(currentPage + 1)} className={styles.pageButton}>
      {">"}
    </button>
  );
  const pageButtons = pageNumbers.map((pageNumber) => {
    return (
      <button
        key={uuid()}
        onClick={() => paginate(pageNumber)}
        className={
          currentPage === pageNumber
            ? [styles.pageButton, styles.active].join(" ")
            : styles.pageButton
        }
      >
        {pageNumber}
      </button>
    );
  });

  return (
    <div className={styles.pagination}>
      {previousPageButton}
      {pageButtons}
      {nextPageButton}
    </div>
  );
}

export default Pagination;
