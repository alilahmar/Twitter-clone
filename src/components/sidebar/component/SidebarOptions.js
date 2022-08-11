import React from "react";
import "./sidebarOption.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    //if active the sidebarOption--active css
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
