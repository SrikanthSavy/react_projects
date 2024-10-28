import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  //Addin style for each Tag selected
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className="tag"
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};
// const Tag = (props) => {
//   return <button className="tag"> {props.tagName}</button>;
// };

export default Tag;