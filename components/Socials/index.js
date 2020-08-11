import React from "react";
import Social from "./Social";
import styled from "styled-components";

function _Socials({ data, className }) {
  return (
    <div className={className}>
      {data.map((val) => (
        <Social variant={val.variant} link={val.link} />
      ))}
    </div>
  );
}

const Socials = styled(_Socials)`
  position: fixed;
  bottom: 56px;
  right: 56px;
`;

export default Socials;
