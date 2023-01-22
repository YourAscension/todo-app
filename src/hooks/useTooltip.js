import React from "react";

const useTooltip = (target, time) => {
  const [isActive, setActive] = React.useState("");
  const [coords, setCoords] = React.useState({});

  const showTooltip = () => {
    setCoords(target.current.getBoundingClientRect());
    setActive(true);
    target.current.focus();
    setTimeout(() => setActive(false), time);
  };
  return [isActive, coords, showTooltip];
};

export { useTooltip };
