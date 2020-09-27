import React from "react";
import Letter from "./Letter";

export default function ImageText({ size, children, onClick }) {
  return (
    <div onClick={onClick}>
      {children.split("").map((val) => {
        return <Letter size={size} char={val} />;
      })}
    </div>
  );
}
