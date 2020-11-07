import React from "react";
import styled from "styled-components";
import{default as NextImage}from "next/image"

function _Image({ src, alt, className }) {
  return (
    <div className={className}>
      <img className="img" src={require(`images/${src}?trace`).trace} />
      <NextImage className="img" alt={alt} src={require(`images/${src}?webp`)} layout="fill" />
    </div>
  );
}

const Image = styled(_Image)`
  position: relative;

  >.img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export default Image;
