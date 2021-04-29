import styled from "styled-components";

export const Red = styled.b`
  color: red;
`;

export const HelpContainer = styled.div`
  display: grid;
  grid-template:
    "kryzys lgbt" auto
    "dom kobieta" auto
    / auto auto;
  gap: 24px 16px;

  .kryzys {
    grid-area: kryzys;
  }

  .lgbt {
    grid-area: lgbt;
  }

  .dom {
    grid-area: dom;
  }

  .kobieta {
    grid-area: kobieta;
  }
`;
