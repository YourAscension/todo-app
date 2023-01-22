import React from "react";
import Input from "../../UI/Input/Input";
import { searchIcon } from "../../../assets/icons/svgIcons";
import styles from "./Filter.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setIsUncompleted } from "../../../slices/todo-filter";

function Filter() {
  const dispatch = useDispatch();
  const { search, isUncompleted } = useSelector((state) => state.filter.filter);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.filterForm}>
      <Input
        value={search}
        onInput={(e) => dispatch(setSearch(e.target.value))}
        type="text"
        icon={searchIcon}
      />
      <Checkbox checked={isUncompleted} onChange={() => dispatch(setIsUncompleted())}>
        Невыполненые
      </Checkbox>
    </form>
  );
}

export default Filter;
