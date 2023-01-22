import React from "react";
import Input from "../../UI/Input/Input";
import { searchIcon } from "../../../assets/icons/svgIcons";
import styles from "./TodoFilter.module.css";
import Checkbox from "../../UI/Checkbox/Checkbox";
import ToolTip from "../../UI/ToolTip/ToolTip";
import { useTooltip } from "../../../hooks/useTooltip";

function TodoFilter() {
  const searchInputRef = React.useRef();
  const [isActive, coords, showTooltip] = useTooltip(searchInputRef, 3000);
  React.useEffect(() => {
    showTooltip();
  }, []);
  return (
    <form className={styles.filterForm}>
      <ToolTip isActive={isActive} target={coords}>
        Найдите задачу
      </ToolTip>
      <Input ref={searchInputRef} type="text" icon={searchIcon} />
      <Checkbox>Невыполненые</Checkbox>
    </form>
  );
}

export default TodoFilter;
