import React from "react";
import styled from "styled-components";

function _Image({ svg, webp: _webp, alt, className }) {
  var trace;
  var webp;
  try {
    trace = require(`images/${svg}`);
    webp = require(`images/${_webp}`);
  } catch (error) {
    trace = require(`images/alphabetSVG/question_mark.svg`);
    webp = require(`images/alphabetWEBP/question_mark.webp`);
  }
  return (
    <div className={className}>
      <img src={trace} />
      <img alt={alt} src={webp} />
    </div>
  );
}

const Image = styled(_Image)`
  position: relative;

  > img {
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
