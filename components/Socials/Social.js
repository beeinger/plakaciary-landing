import React from "react";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { RiSnapchatLine } from "react-icons/ri";
import styled from "styled-components";

function _Social({ variant, link, size, className }) {
  const default_size = "56px";
  const variants = {
    twitter: <FiTwitter size={size || default_size} />,
    instagram: <FiInstagram size={size || default_size} />,
    facebook: <FiFacebook size={size || default_size} />,
    snapchat: <RiSnapchatLine size={size || default_size} />,
  };
  return (
    <a className={className} href={link}>
      {variants[variant]}
    </a>
  );
}

const Social = styled(_Social)`
  color: ${({ color }) => color || "black"};
  text-decoration: none;
  margin: 0 8px 0 8px;
`;

export default Social;
