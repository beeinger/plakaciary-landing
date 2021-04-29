import { HelpContainer, Red } from "./answerStyles";

import { Image } from "next/image";
import React from "react";

const Answer15 = React.forwardRef((props, ref) => (
  <div ref={ref}>
    Przeczytałyśmy Twoją wiadomość dokładnie i z uwagą.
    <br />
    <br />
    Publikujemy zdjęcia plakatów haseł mówiących o doświadczeniach związanych z
    przemocą, nie jesteśmy jednak specjalistkami z zakresu zarządzania
    sytuacjami kryzysowymi, ani przemocowymi. Nie możemy się zatem wypowiadać
    ani doradzać Ci w Twojej sytuacji. Musisz koniecznie zgłosić się do
    wyspecjalizowanych jednostek pomocowych.
    <br />
    <br />
    Ogólnie przyjęta zasada jest jednak prosta: jeśli podejrzewasz jakiekolwiek{" "}
    <u>
      <b>zagrożenie życia</b>
    </u>{" "}
    – Twoje bądź drugiej osoby –{" "}
    <u>
      <b>KONIECZNIE</b> zgłoś sytuację pod numer alarmowy: <Red>112</Red>.
    </u>{" "}
    <br />
    <br />
    Zgłoszenia, które należy zgłaszać pod 112 to między innymi:
    <ul>
      <li>zagrożenia życia, zdrowia i bezpieczeństwa,</li>
      <li>zagrożenia mienia i środowiska (sytuacje nagłe),</li>
      <li>zagrożenia czyjejś wolności,</li>
      <li>przestępstw lub zakłócania porządku publicznego,</li>
      <li>
        kiedy niezbędne jest natychmiastowe działanie Policji, Państwowej Straży
        Pożarnej lub Państwowego Ratownictwa Medycznego.
      </li>
    </ul>
    <br />
    Więcej informacji znajdziesz pod{" "}
    <a
      target="_blank"
      href="https://www.gov.pl/web/numer-alarmowy-112/co-zglaszac"
    >
      tym
    </a>{" "}
    adresem.
    <br />
    <br />
    Oprócz tego, podsyłamy cały zestaw różnych telefonów i namiarów na
    organizacje specjalizujących się w tych kwestiach. NAPISZ do nich lub
    ZADZWOŃ - będą one w stanie LEPIEJ Cię poprowadzić, niż my. Każda z tych
    organizacji może zaproponować Ci inne podejście, w każdej będziesz mógł
    porozmawiać z innymi osobami, w niektórych masz do dyspozycji również mejle.
    Musisz popróbować - do skutku!
    <br />
    <br />
    <HelpContainer>
      <Image
        className="kryzys"
        src={require(`images/pomoc_kryzys1.jpg?webp`)}
        width={560}
        height={960}
      />
      <Image
        className="lgbt"
        src={require(`images/pomoc_lgbt1.jpg?webp`)}
        width={560}
        height={960}
      />
      <Image
        className="dom"
        src={require(`images/pomoc_dom1.jpg?webp`)}
        width={560}
        height={960}
      />
      <Image
        className="kobieta"
        src={require(`images/pomoc_kobieta1.jpg?webp`)}
        width={560}
        height={960}
      />
    </HelpContainer>
  </div>
));

export default Answer15;
