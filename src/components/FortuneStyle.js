import React from "react";
import Card from './Card';

const FortuneStyle = ({ onStyleSelection }) => {
  const handleStyleSelection = (style) => {
    if (typeof onStyleSelection === "function") {
      onStyleSelection(style);
    }
  };

  return (
      <div className="cards">
      <h2>Select Fortune Style</h2>
        <span onClick={() => handleStyleSelection("riddle")}>
          <Card front={""} backText={"Riddle"}/>
        </span>
        <span onClick={() => handleStyleSelection("mystic")}>
          <Card front={""} backText={"Mystic"}/>
        </span>
        <span onClick={() => handleStyleSelection("honest")}>
          <Card front={""} backText={"Dark"}/>
        </span>
        <span onClick={() => handleStyleSelection("inspiring")}>
          <Card front={""} backText={"Inspiring"}/>
        </span>
      </div>
  );
};

export default FortuneStyle;