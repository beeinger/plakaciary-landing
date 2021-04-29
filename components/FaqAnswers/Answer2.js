import React from "react";
import { Red } from "./answerStyles";

const Answer2 = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <ol>
      <li>Potrzebujesz pędzla, dużego wiadra, haseł i kleju.</li>
      <li>Klej możesz zrobić sam.a, hasła również.</li>
      <li>Hasła malowane muszą porządnie wyschnąć zanim ruszysz na miasto.</li>
      <li>
        Klej musi się odstać 30 minut (zarówno kupny jak i ten chałupniczy)
      </li>
      <li>Jesteś gotow*!</li>
      <li>Zrób zdjęcia naklejonym plakatom. (WSKAZÓWKI)</li>
      <li>
        Po dokonaniu selekcji, zapodaj ORYGINAŁAMI zdjęć (co do ich
        rozdzielczości) google drajwem lub WeTransferem na mejla:
        plakaciary@protonmail.com albo - jeśli żaden z ten serwisów nie jest Ci
        po drodze - bezpośrednio na naszą skrzynkę.
      </li>
    </ol>
    <br />
    <ul type="square">
      <li>
        !!! Pamiętaj jednak, że plakatowanie w miejscu do tego niedozwolonym
        bądź bez zezwolenia zarządcy jest wykroczeniem podlegającym karze do 500
        PLN. Miej to KONIECZNIE na uwadze wybierając miejsce pod hasło!{" "}
        <b>NIE</b> kleimy więc na:
      </li>
      <ul type="disc">
        <li>zabytkach,</li>
        <li>biurach,</li>
        <li>
          budynkach czy miejscach użytku publicznego (np. przystankach
          komunikacji miejskiej),
        </li>
        <li>instytucjach publicznych,</li>
        <li>prywatnych domach,</li>
        <li>
          świeżo wyremontowanych (= czystych, nieotagowanych itp.) murach,
        </li>
        <li>
          jakichkolwiek formach sugerujących pracę bądź wkład artystyczny
          (graffiti, mural itp).
        </li>
      </ul>
      <li>
        !!! Wybieramy miejsca „niczyje”, zaniedbane, zapomniane, otagowane, itp.
      </li>
      <li>
        !!! Liczymy się z konsekwencjami i bierzemy odpowiedzialność za swoje
        czyny.
      </li>
    </ul>
    <br />
    <Red>Plakaty plakatami:</Red> Twoje bezpieczeństwo ZAWSZE jest ważniejsze
    niż jakakolwiek akcja. Ufaj sobie i swojemu instyntkowi: priorytet to
    pozostać w jednym kawałku gdyż dwóch takich jak TY po prostu NIE MA!!!
    <br />
    <br />
  </div>
));

export default Answer2;
