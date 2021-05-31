import {
  Answer1,
  Answer10,
  Answer11,
  Answer12,
  Answer13,
  Answer14,
  Answer15,
  Answer16,
  Answer18,
  Answer2,
  Answer3,
  Answer4,
  Answer5,
  Answer6,
  Answer7,
  Answer8,
  Answer9,
} from "../components/FaqAnswers";
import React, { useEffect, useRef, useState } from "react";

import Fuse from "fuse.js";
import ImageText from "../components/ImageText";
import Router from "next/router";
import styled from "styled-components";

const Layout = styled.div`
  margin: 5vh 15vw 0 15vw;

  .backArrow {
    height: 8%;
    cursor: pointer;
    position: fixed;
    left: 5vw;
    bottom: 5vh;
  }

  @media screen and (max-width: 992px) {
    margin: 5vh 8vw 0 6vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7em;
    margin: 5vh 8vw 0 6vw;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  .home {
    position: absolute;
    cursor: pointer;
    right: 20vw;
    top: 5vh;

    @media screen and (max-width: 992px) {
      right: 8px;
      top: 8px;
    }

    @media screen and (max-width: 600px) {
      right: 8px;
      top: 8px;
    }
  }

  .find {
    position: absolute;
    cursor: pointer;
    right: 20vw;
    top: 15vh;

    border: 10px solid green;

    @media screen and (max-width: 992px) {
      right: 8px;
      top: 8px;
    }

    @media screen and (max-width: 600px) {
      right: 8px;
      top: 8px;
    }
  }
`;

const Body = styled.div`
  font-size: 1.2em;
  font-family: "Roboto", sans-serif;
`;

const PointerH3 = styled.h3`
  cursor: pointer;

  width: fit-content;

  margin-block-start: 0.33em;
  margin-block-end: 0.33em;

  box-sizing: border-box;
  border-bottom: 1px solid white;

  transition: all 200ms ease;

  :hover {
    color: dimgrey;
    border-bottom: 1px solid dimgrey;
  }
`;

export default function faq() {
  const titles = [
    "Czy można się do Was jakoś dołączyć?",
    "Czego potrzebuję aby zacząć plakatować?",
    "Czy plakatowanie jest legalne?",
    "Czy działacie w całej Polsce?",
    "Nie chcę plakatować sam.a, jak mogę znaleźć kompanki do wspólnych wyjść?",
    "Jestem właścicielką.em lub zarządzam murem/witryną i pragnę odstąpić ją pod Wasze plakaty!",
    "Wyplakatował*m hasła!",
    "Plakatowałam.em i dostałam.em mandat.",
    "Mam suuuuuuuuuper pomysł! Co powiecie na....?",
    "Chcę włączyć się do budowania ruchu PLAKACIAR!",
    "Czy mogę użyć Waszych zdjęć/plakatów do...?",
    "Plakaty są fajne, ale poobdzierane ich resztki zostawione na ścianach już mniej.",
    "Jestem z mediów i chciał.a.bym zrobić o PLAKACIARACH materiał.",
    "Jesteśmy organizacją/firmą/inną strukturą i mamy propozyję!",
    "Help! Potrzebuję ochrony przed przemocą!",
    "Ejjjj, zakleiłyście moje dzieło!",
    "A niech was ©∞&$!#%@?¥§¿!!!",
    "Coś innego (zaskoczcie nas!)",
  ];
  const [Show, setShow] = useState(false);
  const [Ys, setYs] = useState([]);
  const [MaxY, setMaxY] = useState(undefined);
  const [bottomId, setBottomId] = useState();
  const [id, setId] = useState(undefined);

  const answer1 = useRef();
  const answer2 = useRef();
  const answer3 = useRef();
  const answer4 = useRef();
  const answer5 = useRef();
  const answer6 = useRef();
  const answer7 = useRef();
  const answer8 = useRef();
  const answer9 = useRef();
  const answer10 = useRef();
  const answer11 = useRef();
  const answer12 = useRef();
  const answer13 = useRef();
  const answer14 = useRef();
  const answer15 = useRef();
  const answer16 = useRef();
  const answer18 = useRef();

  function scroll() {
    if (window.pageYOffset > MaxY && (bottomId === 16 || bottomId === 17)) {
      window.history.pushState(null, null, "#pytanie_" + (bottomId + 1));
      setId(bottomId);
    } else {
      for (var i = 0; i < Ys.length; i++) {
        if (
          Ys[i] < window.pageYOffset &&
          window.pageYOffset < Ys[i + 1] &&
          id !== i
        ) {
          setShow(true);
          window.history.pushState(null, null, "#pytanie_" + (i + 1));
          setId(i);
          break;
        } else if (window.pageYOffset < Ys[0] && id !== "faq") {
          setShow(false);
          window.history.pushState(null, null, "/faq");
          setId("faq");
          break;
        }
      }
    }
  }

  function search() {
    const options = {
      includeScore: true,
    };
    const refs = [
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
      answer9,
      answer10,
      answer11,
      answer12,
      answer13,
      answer14,
      answer15,
      answer16,
      answer18,
    ];
    const answers = [];
    const text = "komunikator";
    for (let i = 0; i < refs.length; i++) {
      const answer = refs[i].current.textContent;
      answers.push(answer);
    }

    const fuse = new Fuse(answers, options);

    const found = fuse.search(text);
    console.log(found);
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  useEffect(() => {
    var notStatedYs = [];
    setMaxY(document.body.clientHeight - window.innerHeight);
    for (var i = 0; i < titles.length; i++) {
      const distance = document
        .getElementById("pytanie_" + (i + 1))
        .getBoundingClientRect().y;
      const y = Math.floor(window.pageYOffset + distance - 1);
      notStatedYs.push(y);
    }
    setYs(notStatedYs);
    if (window.pageYOffset > notStatedYs[0]) {
      setShow(true);
    }
  }, []);

  return (
    <Layout>
      {Show && (
        <img
          className="backArrow"
          src={require(`images/back_up.webp`)}
          onClick={() => {
            window.history.pushState(null, null, "/faq");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setBottomId(null);
          }}
        />
      )}
      <Title>
        <img
          className="home"
          src={require(`images/Home.webp`)}
          onClick={() => Router.push("/")}
          height="8%"
        />
        <img
          className="find"
          src={require(`images/Home.webp`)}
          onClick={search}
          height="8%"
        />
        <ImageText size="9em">FAQ</ImageText>
        <ImageText size="3em">W TRAKCIE</ImageText>
        <ImageText size="3em">PRACY</ImageText>
      </Title>
      <Body>
        <h1>Spis Treści:</h1>
        <br />
        <ol>
          {titles.map((val, idx) => {
            return (
              <>
                <PointerH3 key={"h3" + idx}>
                  <li
                    onClick={() => {
                      window.history.pushState(
                        null,
                        null,
                        "#pytanie_" + (idx + 1)
                      );
                      idx === 16 || idx === 17
                        ? setBottomId(idx)
                        : setBottomId(idx);
                      document
                        .getElementById("pytanie_" + (idx + 1))
                        .scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    {val}
                  </li>
                </PointerH3>
                <br key={"br" + idx} />
              </>
            );
          })}
        </ol>
        <hr />
        <hr />
        <hr />
        <br />
        <ol>
          <h3 id={"pytanie_1"}>
            <li>{titles[0]}</li>
          </h3>
          <Answer1 ref={answer1} />
          <h3 id={"pytanie_2"}>
            <li>{titles[1]}</li>
          </h3>
          <Answer2 ref={answer2} />
          <h3 id={"pytanie_3"}>
            <li>{titles[2]}</li>
          </h3>
          <Answer3 ref={answer3} />
          <h3 id={"pytanie_4"}>
            <li>{titles[3]}</li>
          </h3>
          <Answer4 ref={answer4} />
          <h3 id={"pytanie_5"}>
            <li>{titles[4]}</li>
          </h3>
          <Answer5 ref={answer5} />
          <h3 id={"pytanie_6"}>
            <li>{titles[5]}</li>
          </h3>
          <Answer6 ref={answer6} />
          <h3 id={"pytanie_7"}>
            <li>{titles[6]}</li>
          </h3>
          <Answer7 ref={answer7} />
          <h3 id={"pytanie_8"}>
            <li>{titles[7]}</li>
          </h3>
          <Answer8 ref={answer8} />
          <h3 id={"pytanie_9"}>
            <li>{titles[8]}</li>
          </h3>
          <Answer9 ref={answer9} />
          <h3 id={"pytanie_10"}>
            <li>{titles[9]}</li>
          </h3>
          <Answer10 ref={answer10} />
          <h3 id={"pytanie_11"}>
            <li>{titles[10]}</li>
          </h3>
          <Answer11 ref={answer11} />
          <h3 id={"pytanie_12"}>
            <li>{titles[11]}</li>
          </h3>
          <Answer12 ref={answer12} />
          <h3 id={"pytanie_13"}>
            <li>{titles[12]}</li>
          </h3>
          <Answer13 ref={answer13} />
          <h3 id={"pytanie_14"}>
            <li>{titles[13]}</li>
          </h3>
          <Answer14 ref={answer14} />
          <h3 id={"pytanie_15"}>
            <li>{titles[14]}</li>
          </h3>
          <Answer15 ref={answer15} />
          <h3 id={"pytanie_16"}>
            <li>{titles[15]}</li>
          </h3>
          <Answer16 ref={answer16} />
          <h3 id={"pytanie_17"}>
            <li>{titles[16]}</li>
          </h3>
          <h3 id={"pytanie_18"}>
            <li>{titles[17]}</li>
          </h3>
          <Answer18 ref={answer18} />
        </ol>
      </Body>
    </Layout>
  );
}
