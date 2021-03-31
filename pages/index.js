import Head from "next/head";
import ImageText from "../components/ImageText";
import React from "react";
import Router from "next/router";
import Socials from "../components/Socials";
import styled from "styled-components";

const Title = styled.div`
  margin: 10vh 0px 0px 48px;

  @media screen and (max-width: 992px) {
    margin: 8vh 0px 0px 48px;
  }

  @media screen and (max-width: 600px) {
    margin: 6vh 0px 0px 32px;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  pointer-events: none;
`;

const FAQ = styled.div`
  position: fixed;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);

  > div {
    cursor: pointer;
  }
`;

const data = [
  { variant: "twitter", link: "https://twitter.com/plakaciary" },
  {
    variant: "instagram",
    link: "https://www.instagram.com/plakaciary",
  },
  {
    variant: "facebook",
    link: "https://www.facebook.com/plakaciary",
  },
  {
    variant: "snapchat",
    link: "https://www.snapchat.com/add/plakaciary_pl",
  },
];

export default function Main() {
  return (
    <>
      <Head>
        <title>Plakaciary.pl - Strona głowna</title>
      </Head>
      <Title>
        <ImageText>PLAKACIARY</ImageText>
        <ImageText>NADCHODZĄ</ImageText>
      </Title>
      <FAQ>
        <div>
          <ImageText size="3em" onClick={() => Router.push("/faq")}>
            FAQ
          </ImageText>
        </div>
      </FAQ>
      <Socials data={data} />
    </>
  );
}
