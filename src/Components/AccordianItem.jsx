import React, { useState } from "react";
import "../styles.css";

export default function AccordianItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="itemContainer">
      <div className="title" onClick={toggleIsOpen}>
        {isOpen ? (
          <div className="arrow">{"→"}</div>
        ) : (
          <div className="arrow">{"↓"}</div>
        )}
        <div>{title}</div>
      </div>
      {isOpen && content}
    </div>
  );
}
