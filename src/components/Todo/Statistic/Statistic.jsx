import React from "react";
import styles from "./Statistic.module.css";
import { doneIcon, importantIcon } from "../../../assets/icons/svgIcons";
import { useSelector } from "react-redux";

function Statistic() {
  const totalCount = useSelector((state) => state.persistedReducer.filters.filteredTodos.length);

  const completedCount = useSelector((state) =>
    state.persistedReducer.filters.filteredTodos.filter((todo) => todo.completed === true)
  ).length;
  const uncompletedCount = totalCount - completedCount;
  return (
    <div>
      <hr />
      <div className={styles.todoStatistic}>
        <div className={styles.statisticContainer}>Всего задач: {totalCount}</div>
        <div className={styles.statisticContainer}>
          <div className={styles.todoStatisticIcon}>
            {importantIcon}
            <span>{uncompletedCount}</span>
          </div>
          <div className={styles.todoStatisticIcon}>
            {doneIcon}
            <span>{completedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
