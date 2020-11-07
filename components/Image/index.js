import React from "react";
import styled from "styled-components";
import { default as NextImage } from "next/image";

function _Image({ src, alt, className, onClick }) {
  var trace;
  var webp;
  try {
    trace = require(`images/${src}?trace`).trace;
    webp = require(`images/${src}?webp`);
  } catch (error) {
    trace = require(`images/alphabet/question_mark.png?trace`).trace;
    webp = require(`images/alphabet/question_mark.png?webp`);
  }
  return (
    <div className={className} onClick={onClick}>
      <img className="img" src={trace} />
      <img className="img" alt={alt} src={webp} />
    </div>
  );
}

const Image = styled(_Image)`
  position: relative;

  > .img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
`;

export default Image;
