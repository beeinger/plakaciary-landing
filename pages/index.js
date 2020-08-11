import React from "react";
import styled from "styled-components";
import ImageText from "../components/ImageText";
import Socials from "../components/Socials";

const Title = styled.div`
  margin: 12.5vh 0px 0px 48px;

  @media screen and (max-width: 992px) {
    margin: 8vh 0px 0px 48px;
  }

  @media screen and (max-width: 600px) {
    margin: 6vh 0px 0px 48px;
  }
`;

const data = [
  { variant: "twitter", link: "https://twitter.com/plakaciary" },
  {
    variant: "instagram",
    link: "https://www.instagram.com/plakaciary_polska/",
  },
  {
    variant: "facebook",
    link: "https://www.facebook.com/plakaciary",
  },
];

export default function Main() {
  return (
    <>
      <Title>
        <ImageText>PLAKACIARY</ImageText>
        <ImageText>NADCHODZĄ</ImageText>
      </Title>
      <Socials data={data} />
    </>
  );
}
