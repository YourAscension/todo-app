import React from "react";
import Input from "../../UI/Input/Input";
import { searchIcon } from "../../../assets/icons/svgIcons";
import styles from "./TodoFilter.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";

function TodoFilter() {
  return (
    <form className={styles.filterForm}>
      <Input type="text" icon={searchIcon} />
      <Checkbox>Невыполненые</Checkbox>
    </form>
  );
}

export default TodoFilter;
