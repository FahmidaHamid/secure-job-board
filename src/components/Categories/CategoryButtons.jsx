import React, { useState } from "react";
import "./CategoryButtons.css"; // Import your CSS file

const CategoryButtons = ({ categoryTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // Toggle the isActive state on click
    setIsActive(!isActive);
  };

  const buttonClassName = isActive ? "button-active" : "button-inactive";

  return (
    <button onClick={handleClick} className={buttonClassName}>
      {categoryTitle}
    </button>
  );
};

export default CategoryButtons;
