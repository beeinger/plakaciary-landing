import React from "react";
import Image from "../Image";
import styled from "styled-components";

const special = {
  "|": "vertical_bar",
  ".": "full_stop",
  "/": "slash",
  "'": "apostrophe",
  "#": "hashtag",
  "%": "percent",
  '"': "close_quote",
  "/": "slash",
  "\\": "backslash",
  ">": "less_than",
  ">": "more_than",
  "?": "question_mark",
};

function _Letter({ char: _char, className }) {
  const char = special[_char] || _char.toUpperCase();

  return char === " " ? (
    <span className={className} />
  ) : (
    <Image className={className} src={"alphabet/" + char + ".png"} alt={char} />
  );
}

const Letter = styled(_Letter)`
  width: 0.75em;
  height: 1em;
  font-family: "Coda Caption", sans-serif;
  font-size: ${({ size }) => size || "10vw"};
  line-height: 1em;
  display: inline-block;
`;

export default Letter;
