import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ImageText from "../components/ImageText";
import Router from "next/router";
import {
  grupy,
  sponsor,
  plakat_historia,
  zasiegi,
  pomoc_kobieta1,
  pomoc_lgbt1,
  pomoc_kryzys1,
  pomoc_dom1,
  home,
  arrowUp,
} from "../resources/images";

const Layout = styled.div`
  margin: 5vh 15vw 0 15vw;

  .backArrow {
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

  .wspieranie {
    width: 70%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .pomoc {
    width: 33%;
    height: auto;

    @media screen and (max-width: 992px) {
      width: 48%;
      height: auto;
    }

    @media screen and (max-width: 600px) {
      width: 48%;
      height: auto;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  > img {
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
`;

const Body = styled.div`
  font-size: 1.2em;
  font-family: "Roboto", sans-serif;
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SpaceAround = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 992px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

const Red = styled.b`
  color: red;
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

  const [FirstHY, setFirstHY] = useState(3);

  function scroll() {
    setFirstHY(
      document
        .getElementById("Czy można się do Was jakoś dołączyć?")
        .getBoundingClientRect().y
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  return (
    <Layout>
      {FirstHY <= 2 && (
        <img
          className="backArrow"
          src={arrowUp}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          height="8%"
        />
      )}
      <Title>
        <img src={home} onClick={() => Router.push("/")} height="8%" />
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
                <PointerH3 key={idx}>
                  <li
                    onClick={() =>
                      document.getElementById(val).scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {val}
                  </li>
                </PointerH3>
                <br />
              </>
            );
          })}
        </ol>
        <hr />
        <hr />
        <hr />
        <br />
        <ol>
          <h3 id={titles[0]}>
            <li>{titles[0]}</li>
          </h3>
          Tak, tak i taaaaaaaaaaaak!!! Na wiele sposobów:
          <br />
          <ul>
            <li>plakatując</li>
            <li>wspierając ruch organizacyjno-administracyjnie</li>
            <li>
              pomagając nam finansowo:{" "}
              <a href="https://zrzutka.pl/wdy5bp">zrzutka</a>
            </li>
            <li>
              odstępując nam mury lub witryny którymi zarządzasz lub posiadasz
              pod plakaty
            </li>
            <li>
              opowiadając o plakatach chętnym do słuchania z Waszych kręgów: w
              szkole, w pracy, u fryzjera, u kosmetyczki, w warsztatcie
              samochodowym czy na pifku z kumpelkami czy kumplami itp.
            </li>
          </ul>
          <h3>DOŚĆ MILCZENIA – CZAS MÓWIENIA!</h3>
          Oto nasze aktualnie zidentyfikowane potrzeby, ułożone według pilności:
          <br />
          <br />
          <ul>
            <li>
              <b>Prawniczki</b> - Wszelkie osoby obeznane z prawem PILNIE
              poszukiwane! Porady, zadania i informacje na wagę złota.
            </li>
            <br />
            <li>
              <b>Policja</b> - Masz w rodzinie policjanta? A może kiedyś miałaś
              „przyjemność” zgłosić zajście? Albo komuś towarzyszyć? Albo
              siedzieć w pace? A może masz jakieś inne kontakty z mundurowymi?
              Każde doświadczenie, info czy kontakty są ważne i potrzebne więc
              zgłaszać się!
            </li>
            <br />
            <li>
              <b>Procedury</b> - osoba, która usiądzie na 4 literach tak długo
              jak trza, poszuka info, rozkminie o co chodzi i rozpisze jak
              krowie na rowie. Hejt w internecie, gwałty, pobicia ALE NIE TYLKO:
              wszystko co jest potrzebne i przydatne.
            </li>
            <br />
            <li>
              <b>Baza Wiedzy</b> – lubisz drążyć tematy, kochasz statystyki a
              dyskurs na ”tematy które złoszczą” to Twoje hobby? Tutaj się
              zrealizujesz! Chcemy zbudować prawdziwą, przystępną, czytelną
              (wspólnie z graficzkami i osobami od komputerów) bazę danych na
              temat przemocy, której doświadczają kobiety, a którą stale
              podważają panowie, którzy „wiedzą więcej i lepiej”
            </li>
            <br />
            <li>
              <b>Komentarze</b> - przeglądanie zostawianych pod postami
              komentarzy, robienie screenów tych, które zawierają wyzwiska i
              groźby, oraz usuwanie spamu i innych, które nie powinny mieć
              miejsca
            </li>
            <br />
            <li>
              <b>PDF</b> – dla tych, które nie mogą malować, dziergamy hasła z
              zeskanowanych liter w Adobie. Posiadasz licencję, cracka lub coś w
              tym stylu? Potrzebujemy Cię natychmiast!
            </li>
            <br />
            <li>
              <b>Grafika/fine arts</b> - Komputerowe malowanki, grafiki, loga i
              ogólne wymysły artystyczno-kreatywne to Twój żywioł? Cudownie!
              Zawsze potrzebny jest ktoś, kto umie coś więcej niż obraz Picasso
              w Paintcie...
            </li>
            <br />
            <li>
              <b>Pisanie</b> - Masz smykałkę do pisania? Zarzucim tematem a Ty
              go nam sprzedasz, drożej niżmyśmy go zakupiły? Polska język
              trudna? Kochamy!
            </li>
            <br />
            <li>
              <b>Komputery</b> - Tworzenie stron, projektów, design czy różne
              sprytne rozwiązania IT nie są ci obce? Może umiesz programować,
              albo po prostu spędzać czas na tworzeniu stron, aplikacji lub
              czegokolwiek w systemie binarnym? Umiejętności na wagę komputera!
            </li>
            <br />
            <li>
              <b>Fotografowanie</b> - Fotki, foteczki ale także filmiki z
              każdego miasta. Jak nie Twoje własne, to nasze na edycję, obróbkę
              i przeróbkę. Na akcje jak i inne projekty.
            </li>
            <br />
            <li>
              <b>Media</b> - Kontakt z mediami. Każda forma jest dobra i prędzej
              czy później nam się może przydać. Jacyś znajomi dziennikarze? Mejl
              do kogoś w radiu albo jakiegoś serwisu online? Pisać!
            </li>
            <br />
            <li>
              <b>Grupy FB</b> - Głównym zadaniem takowych osób będzie moderacja
              naszych grupek, weryfikacja osób chcących dołączyć, przeglądanie
              profilu, wszystko byśmy czuły się bezpieczne
            </li>
            <br />
            <li>
              <b>Cięta riposta</b> - Umiesz wymyślać docinki? A może masz jakiś
              pakiet ciętej riposty i memów do zgłoszenia? Bierzemy je tutaj!!!
            </li>
            <br />
            <li>
              <b>Twitter</b> - Obsługa tej totalnie magicznej aplikacji. Każdy
              post jest ważny. A jeszcze ważniejszy cięty - acz niewulgarny -
              język połączony z humorem i przeszywającą wizją burdelu zwanego
              Polską.
            </li>
            <br />
            <li>
              <b>Hurtownia</b> - Powszechne zakupki. Masz nosa do promocji? A
              może znajomych w sklepach? Wiesz gdzie warto kupować? Klikaj, rób
              fotki i zgłaszaj takie miejsca.
            </li>
            <br />
          </ul>
          Zaangażowanie czasowe szacujemy – pi razy oko – na pół godziny
          dziennie. Marzy nam się współpraca z osobami, które byłyby w stanie
          dołączyć do nas na przynajmniej 12 miesięcy. Nie podejmuj. decyzji
          pochopnie: pracy jest trochę ale trud się opłaca a satysfakcja jest
          ogromna.
          <br />
          <br />
          <h3 id={titles[1]}>
            <li>{titles[1]}</li>
          </h3>
          <ol>
            <li>Potrzebujesz pędzla, dużego wiadra, haseł i kleju.</li>
            <li>Klej możesz zrobić sam.a, hasła również.</li>
            <li>
              Hasła malowane muszą porządnie wyschnąć zanim ruszysz na miasto.
            </li>
            <li>
              Klej musi się odstać 30 minut (zarówno kupny jak i ten
              chałupniczy)
            </li>
            <li>Jesteś gotow*!</li>
            <li>Zrób zdjęcia naklejonym plakatom. (WSKAZÓWKI)</li>
            <li>
              Po dokonaniu selekcji, zapodaj ORYGINAŁAMI zdjęć (co do ich
              rozdzielczości) google drajwem lub WeTransferem na mejla:
              plakaciary@protonmail.com albo - jeśli żaden z ten serwisów nie
              jest Ci po drodze - bezpośrednio na naszą skrzynkę.
            </li>
          </ol>
          <br />
          <ul type="square">
            <li>
              !!! Pamiętaj jednak, że plakatowanie w miejscu do tego
              niedozwolonym bądź bez zezwolenia zarządcy jest wykroczeniem
              podlegającym karze do 500 PLN. Miej to KONIECZNIE na uwadze
              wybierając miejsce pod hasło! <b>NIE</b> kleimy więc na:
            </li>
            <ul type="disc">
              <li>zabytkach,</li>
              <li>biurach,</li>
              <li>
                budynkach czy miejsach użytku publicznego (np. przystankach
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
              !!! Wybieramy miejsca „niczyje”, zaniedbane, zapomniane,
              otagowane, itp.
            </li>
            <li>
              !!! Liczymy się z konsekwencjami i bierzemy odpowiedzialność za
              swoje czyny.
            </li>
          </ul>
          <br />
          <Red>Plakaty plakatami:</Red> Twoje bezpieczeństwo ZAWSZE jest
          ważniejsze niż jakakolwiek akcja. Ufaj sobie i swojemu instyntkowi:
          priorytet to pozostać w jednym kawałku gdyż dwóch takich jak TY po
          prostu NIE MA!!!
          <br />
          <br />
          <h3 id={titles[2]}>
            <li>{titles[2]}</li>
          </h3>
          Wszystko zależy od tego GDZIE plakatujesz:
          <ul>
            <li>Czy budynek należy do Ciebie?</li>
            <li>Zarządzasz murami danego obiektu?</li>
            <li>
              A może kleisz od wewnątrz okien lub witryny swojego lokalu bądź
              mieszkania?
            </li>
            <li>
              Plakatujesz w miejscu przeznaczonym na ogłoszenia tj. tablica lub
              słup?
            </li>
          </ul>
          <br />
          👍🏻 W tych wypadkach wszystko jest w porząsiu! 👍🏻
          <br />
          <br />
          Plakatowanie natomiast w miejscach do tego nieprzeznaczonych bądź bez
          zezwolenia zarządcy jest wykroczeniem podlegającym art. 63a z Kodeksu
          Wykroczeń a co za tym idzie, karze grzywny do 500 PLN lub ograniczeniu
          wolności. Pamiętaj o tym wybierając miejsce pod hasło!
          <br />
          <b>NIE</b> kleimy więc na:
          <ul>
            <li>zabytkach,</li>
            <li>biurach,</li>
            <li>
              budynkach czy miejsach użytku publicznego (np. przystankach
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
          <br />
          Wybieramy miejsca „niczyje”, zaniedbane, zapomniane, itp. Liczymy się
          z konsekwencjami i bierzemy odpowiedzialność za swoje czyny.
          <br />
          Przestrzegamy tych zasad, aby:
          <ul>
            <li>
              nie podejmować zbyt dużego ryzyka (ewentualnego mandatu czy
              „obrazy stanu”)
            </li>
            <li>
              nie odwracać uwagi z tematu „przemocy” i „feminizmu” na temat
              „wandalizmu” czy „prowokowania fanów Legii”
            </li>
            <li>
              nie dać się zamalować przez „urażonych grafficiarzy” (uczucia ma
              każdy!)
            </li>
            <li>nasze przesłanie ostało się na danym murze jak najdłużej!</li>
          </ul>
          ✊🏻🖤
          <br />
          <br />
          PS.
          <br />
          Zawsze nosimy przy sobie dowód dożsamości.
          <h3 id={titles[3]}>
            <li>{titles[3]}</li>
          </h3>
          PLAKACIARY działają wszędzie tam, gdzie znajdzie się entuzjastyczna
          para rąk chętna do wyklejenia chociażby jednego hasła.
          <br />
          Jesteśmy SAMOORGANIZUJĄCYM się ODDOLNYM ruchem KOBIECYM (& spółki) co
          oznacza, że NAJPEWNIEJSZYM sposobem na to aby plakaty pojawiły się w
          Twoim mieście, jest samodzielne zorganizowanie akcji.
          <br />
          Wszystkie potrzebne informacje znajdziesz na naszych grupach*, tam też
          masz największe szanse na znaleznienie kompanek, jeśli w Twoim gronie
          brak chętnych na akty nieposłuszeństwa obywatelskiego. To wszystko
          znajdziesz w zakładce GRUPY na naszym fan peju:
          <br />
          <br />
          <img src={grupy} width="100%" height="auto" />
          <br />
          <br />
          Oto istniejące obecnie grupy:
          <br />
          <br />
          <ul type="none">
            <li>
              <a href="https://www.facebook.com/groups/514364832501689/">
                GŁÓWNA
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3007416046037370/">
                BIAŁYSTOK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/325704052142275/">
                BYDGOSZCZ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/475746909807420/">
                GDAŃSK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/396313641355103/">
                GDYNIA
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/725898911309859/">
                KATOWICE
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/306427564053769/">
                ŁÓDŹ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1151844395173413/">
                PŁOCK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1168242550192721/">
                POZNAŃ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3112062832353559/">
                RADOM
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/326412045067526/">
                SIERADZ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/739830603247569/">
                SZCZECIN
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1645432458954212/">
                SUWAŁKI
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/591017498450521/">
                TORUŃ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/651314545801553/">
                WARSZAWA
              </a>
            </li>
            <li>
              <a href=" https://www.facebook.com/groups/633115283990140/">
                WROCŁAW
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3572321602787471/">
                ZABRZE
              </a>
            </li>
          </ul>
          <br />
          Jeśli Twojego miasta jeszcze nie ma – daj nam znać, założymy.
          <br />
          Będziesz pierwsza, ktoś w końcu zawsze musi. We Francji była to
          Marguerite, we Wrocławiu Karolina...
          <br />
          <br />
          *fejsbukowe grupy zamknięte są dla CIS-panów, ale nie ruch sam w
          sobie. Więcej tutaj.
          <br />
          <br />
          tutaj
          <br />
          <br />
          Dzięki za zainteresowanie PLAKACIARAMI.
          <br />
          <br />
          Super, że chcesz do nas dołączyć i że widzisz potrzebę działania! HELL
          YEAH!!! PLAKACIARY to samoorganizujący się ruch oddolny, otwarty dla
          każdej NIEprzemocowej OSOBY, która pragnie plakatować feministyczne,
          anty-przemocowe, anty-opresyjne hasła i która zgadza się z naszymi
          wartościami oraz naszym sposobem działania.
          <br />
          <br />
          Wiedz jednak, iż z pewnych powodów, przedstawionymi poniżej, do
          naszych grup na fejsbuku, nie przyjmujemy CIS-panów. Jest to
          motywowane następującymi kwestiami:
          <br />
          <br />
          <ol>
            <li>
              nasza inicjatywa ma na celu pomóc KOBIETOM zająć oddolnie
              przestrzeń publiczną, w której doświadczają na co dzień
              opresyjnego traktowania, w tym: obmacywania, ekshibicjonizmu,
              atakowania i gwałtów. Przestrzeni, w której nie czują się na
              codzień bezpiecznie jeśli nie towarzyszy im zaufany mężczyzna.
              Możliwość PRZEJĘCIA tej przestrzeni bez (wspierającej) męskiej
              obecności i poczucie się w niej SILNĄ i SPRAWCZĄ jest dla nas
              zasadnicza i uważamy takie doświadczenie za wyzwalające i
              NIEZBĘDNE do życia dla KAŻDEJ z nas.
            </li>
            <li>
              na naszych grupach obecne są ofiary przemocy seksualnej,
              fizycznej, psychicznej i innej. Obecność mężczyzn może sprawić, że
              mogą poczuć się one przez nich onieśmielone i trudniej będzie im
              przez to się otworzyć czy zaangażować. Pragniemy również zachować
              jak największe środki bezpieczeństwa gdyż temat jest dużego
              kalibru, a nie wszyscy zostali wyposażeni w minimum inteligencji
              emocjonalnej niezbędnej do obracania się w takich problematykach.
            </li>
            <li>
              ważne jest dla nas, aby feminizm był konstruowany przez kobiety i
              żeby to ICH głos było słychać. Wyraźnie i GŁOŚNO. Mężczyźni to
              nasi sojusznicy – zasadniczy i ważny element ruchu – ale ich
              obecność jest niezbędna w nieco innym wymiarze. Ma to na celu
              zapobiec reprodukowaniu w feminizmie tych samych schematów
              opresji, których kobiety doświadczają poza nim. To tyle jeśli
              chodzi o część teoretyczną i o grupy fesjbuskowe.
            </li>
          </ol>
          <br />
          Chłopaki TEŻ plakatują - z koleżankami! Albo pomagają nam w
          organizacji i ogarnianiu ruchu. Ale musimy ich NAJPIERW poznać w REALU
          aby przekonać się kim są i co sobą reprezentują, bo na fejsie jest to
          po prostu niemożliwe. Każdy jest tu anonimowy, więc nasze fejsbukowe
          grupy są dla nas takimi "wuefowymi szatniami". Ale tylko dlatego że
          nie wpuszczamy do nich CIS-chłopaków nie znaczy, że potem nie możemy
          razem grać w siatkę czy w kosza, no nie?
          <br />
          Proponujemy więc dołączyć Ci do plakatujących już koleżanek… albo –
          LEPIEJ – do ZACHĘCENIA wahających się lub nieśmiałych dziewczyn
          (przyjaciółek, sióstr, koleżanek, żony, kuzynek, mamy, babci czy też
          tej super fajnej pani sklepowej co się z nią zaśmiewasz przy każdym
          kupnie pifka) aby poszły z Tobą na miasto! Podzielcie się następnie z
          nami owocami Waszej akcji, a resztę instrukcji już Wam podeślemy!
          <br />
          <br />
          Wspólnie zwalczmy kulturę gwałtu!
          <h3 id={titles[4]}>
            <li>{titles[4]}</li>
          </h3>
          Ile głów i temperamentów, tyle sposobów!
          <br />
          Niektóre z nas opowiadają o PLAKACIARACH znajomym i we własnych
          kręgach znajdują chętne.ych. Inne zapodają anonsami na naszych
          plakaciarskich grupach* fesjbukowych a jeszcze inne.i znajdują
          kompanki.ów w pokrewnych ideowo środowiskach aktywistycznych na
          dzielni.
          <br />
          Naszą fejsbukową społeczność znajdziesz w zakładce GRUPY na naszym fan
          peju:
          <br />
          <br />
          <img src={grupy} width="100%" height="auto" />
          <br />
          <br />
          Oto istniejące obecnie grupy:
          <br />
          <br />
          <ul type="none">
            <li>
              <a href="https://www.facebook.com/groups/514364832501689/">
                GŁÓWNA
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3007416046037370/">
                BIAŁYSTOK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/325704052142275/">
                BYDGOSZCZ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/475746909807420/">
                GDAŃSK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/396313641355103/">
                GDYNIA
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/725898911309859/">
                KATOWICE
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/306427564053769/">
                ŁÓDŹ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1151844395173413/">
                PŁOCK
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1168242550192721/">
                POZNAŃ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3112062832353559/">
                RADOM
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/326412045067526/">
                SIERADZ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/739830603247569/">
                SZCZECIN
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1645432458954212/">
                SUWAŁKI
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/591017498450521/">
                TORUŃ
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/651314545801553/">
                WARSZAWA
              </a>
            </li>
            <li>
              <a href=" https://www.facebook.com/groups/633115283990140/">
                WROCŁAW
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/3572321602787471/">
                ZABRZE
              </a>
            </li>
          </ul>
          <br />
          Jeśli Twojego miasta jeszcze nie ma – daj nam znać, założymy.
          <br />
          Będziesz pierwsza, ktoś w końcu zawsze musi. We Francji była to
          Marguerite, we Wrocławiu Karolina...
          <br />
          <br />
          *fejsbukowe grupy zamknięte są dla CIS-panów, ale nie ruch sam w
          sobie. Więcej tutaj.
          <br />
          <br />
          tutaj
          <br />
          <br />
          Dzięki za zainteresowanie PLAKACIARAMI.
          <br />
          <br />
          Super, że chcesz do nas dołączyć i że widzisz potrzebę działania! HELL
          YEAH!!! PLAKACIARY to samoorganizujący się ruch oddolny, otwarty dla
          każdej NIEprzemocowej OSOBY, która pragnie plakatować feministyczne,
          anty-przemocowe, anty-opresyjne hasła i która zgadza się z naszymi
          wartościami oraz naszym sposobem działania.
          <br />
          <br />
          Wiedz jednak, iż z pewnych powodów, przedstawionymi poniżej, do
          naszych grup na fejsbuku, nie przyjmujemy CIS-panów. Jest to
          motywowane następującymi kwestiami:
          <br />
          <br />
          <ol>
            <li>
              nasza inicjatywa ma na celu pomóc KOBIETOM zająć oddolnie
              przestrzeń publiczną, w której doświadczają na co dzień
              opresyjnego traktowania, w tym: obmacywania, ekshibicjonizmu,
              atakowania i gwałtów. Przestrzeni, w której nie czują się na
              codzień bezpiecznie jeśli nie towarzyszy im zaufany mężczyzna.
              Możliwość PRZEJĘCIA tej przestrzeni bez (wspierającej) męskiej
              obecności i poczucie się w niej SILNĄ i SPRAWCZĄ jest dla nas
              zasadnicza i uważamy takie doświadczenie za wyzwalające i
              NIEZBĘDNE do życia dla KAŻDEJ z nas.
            </li>
            <li>
              na naszych grupach obecne są ofiary przemocy seksualnej,
              fizycznej, psychicznej i innej. Obecność mężczyzn może sprawić, że
              mogą poczuć się one przez nich onieśmielone i trudniej będzie im
              przez to się otworzyć czy zaangażować. Pragniemy również zachować
              jak największe środki bezpieczeństwa gdyż temat jest dużego
              kalibru, a nie wszyscy zostali wyposażeni w minimum inteligencji
              emocjonalnej niezbędnej do obracania się w takich problematykach.
            </li>
            <li>
              ważne jest dla nas, aby feminizm był konstruowany przez kobiety i
              żeby to ICH głos było słychać. Wyraźnie i GŁOŚNO. Mężczyźni to
              nasi sojusznicy – zasadniczy i ważny element ruchu – ale ich
              obecność jest niezbędna w nieco innym wymiarze. Ma to na celu
              zapobiec reprodukowaniu w feminizmie tych samych schematów
              opresji, których kobiety doświadczają poza nim. To tyle jeśli
              chodzi o część teoretyczną i o grupy fesjbuskowe.
            </li>
          </ol>
          <br />
          Chłopaki TEŻ plakatują - z koleżankami! Albo pomagają nam w
          organizacji i ogarnianiu ruchu. Ale musimy ich NAJPIERW poznać w REALU
          aby przekonać się kim są i co sobą reprezentują, bo na fejsie jest to
          po prostu niemożliwe. Każdy jest tu anonimowy, więc nasze fejsbukowe
          grupy są dla nas takimi "wuefowymi szatniami". Ale tylko dlatego że
          nie wpuszczamy do nich CIS-chłopaków nie znaczy, że potem nie możemy
          razem grać w siatkę czy w kosza, no nie?
          <br />
          Proponujemy więc dołączyć Ci do plakatujących już koleżanek… albo –
          LEPIEJ – do ZACHĘCENIA wahających się lub nieśmiałych dziewczyn
          (przyjaciółek, sióstr, koleżanek, żony, kuzynek, mamy, babci czy też
          tej super fajnej pani sklepowej co się z nią zaśmiewasz przy każdym
          kupnie pifka) aby poszły z Tobą na miasto! Podzielcie się następnie z
          nami owocami Waszej akcji, a resztę instrukcji już Wam podeślemy!
          <h3 id={titles[5]}>
            <li>{titles[5]}</li>
          </h3>
          Świetnie! Nie wymyśliłybyśmy lepszego spożytkowania pustych metrów
          kwadratowych!
          <br />
          <br />
          <i>
            Oups! Kliknąłaś.eś tu z czystej ciekawości? Spoczko! Kliknij{" "}
            <a href="#here">TUTAJ</a> aby dowiedzieć się PO CO warto odstąpić
            nam swój mur lub witrynę!
          </i>
          <br />
          <br />
          Proponujemy wybranie hasła z listy{" "}
          <a href="https://drive.google.com/file/d/1pDy7BPWXHF9-bWy_vYkalzj_MLwntc1F/view?usp=sharing">
            haseł już ułożonych
          </a>{" "}
          ale można też zaproponować swoje własne.
          <br />
          <br />
          Następnie potrzebny będzie nam adres Państwa muru czy witryny, jej
          zdjęcie oraz wymiary abyśmy mogły ocenić czy wybrane hasło na pewno
          się na niej zmieści – PLAKACIARY to w końcu profesjonalistki w tej
          kwestii.
          <br />
          <br />
          W ramach podziękowania za udostępnienie muru/witryny proponujemy
          zamieszczenie specjalnego postu na naszych dwóch głównych kanałach
          społecznościowych (Facebook i Twitter), które łącznie skupiają - na
          dzień dzisiejszy - ponad 28 tys. obserwujących (te liczby stale rosną)
          i na których każdy post generuje ponad 527-tysięczny zasięg i
          80-tysięczną aktywność obserwujących. Post specjalny to jedno zdjęcie
          z napisem: "ONI NAS WSPIERAJĄ @TAG":
          <br />
          <br />
          <Center>
            <img className="wspieranie" src={sponsor} />
          </Center>
          <br />
          <br />
          Zamieszczony powyżej przykład opublikowany został na samym początku
          naszej działaności: 13.02.2020.
          <br />
          <br />
          Liczba odbiorców i aktywności zależy – jak w przypadku KAŻDEJ
          publikacji – od HASŁA. Im bardziej ODWAŻNE, MOCNE, PORUSZAJĄCE tym
          większy potencjał na wstrząśnięcie „netosferą”.
          <br />
          <br />
          Najlepszym przykładem jest nasz - najpopularniejszy dotychczas post -
          plakat-historia:
          <br />
          <br />
          <Center>
            <img src={plakat_historia} width="100%" height="auto" />
          </Center>
          <br />
          <br />
          W przeciągu zaledwie pięciu dni osiągnął on zasięg, który przerósł
          nasze najśmielsze oczekiwania:
          <br />
          <br />
          <Center>
            <img src={zasiegi} width="100%" height="auto" />
          </Center>
          <br />
          <br />
          Tak więc, DOBRY wybór hasła to PODSTAWA sukcesu!
          <br />
          <br />
          Plakaty powinny zdobić Państwa elewację 7 dni (klejone na klej do
          tapet, wystarczy je zmoczyć aby je odkleić). Każdy dzień ekstra będzie
          oczywiście super ekstra. Plakaty mogą zostać wyklejone przez naszą
          ekipę jeśli tylko takowa powstała już w Państwa regionie lub mogą
          Państwo zająć się wykonastwem samodzielnie: dostarczymy wszystkich
          instrukcji po otrzymaniu adresu, zdjęć i wymiarów muru/witryny na
          mejla: plakaciary@protonmail.com.
          <br />
          <br />
          Wspólnie zwalczymy kulturę gwałtu!
          <br />
          <br />
          <br />
          <br />
          <i>
            <b id="here">TUTAJ</b>
            <br />
            <br />
            PO CO warto odstąpić nam swój mur lub witrynę?
          </i>
          <br />
          <br />
          Aby w AKTYWNY i PRAKTYCZNY sposób włączyć się do walki z PRZEMOCĄ
          wyrządzanom kobietom i mniejszościom w Polsce.
          <br />
          <br />
          Aby pomóc w WAŻNEJ, MĄDREJ, POTRZEBNEJ, NIEZBĘDNEJ, INETLIGENTNEJ,
          SKUETCZNEJ i MOCNEJ akcji edukacyjno-informacyjnej!
          <br />
          <br />
          Aby ułatwić działalność PLAKACIAROM, które – operując w nocy -
          narażając swoje bezpieczeństwo oraz plakatując w miejscach do tego
          nieprzeznaczonych i/lub bez zgody zarządców/właścicieli, ryzykują
          mandaty do 500 pln lub karę pozbawienia wolności.
          <br />
          <br />
          Aby zmieniać świat poprzez działanie na rzecz zrównoważonego rozwoju,
          inspirowanie i łączenie społeczności. Taka jest definicja Corporate
          Social Responsibility czyli, z angielskiego, Społecznej
          Odpowiedzialność Biznesu. Oznacza ona zaangażowanie biznesu, który w
          swoich działaniach uwzględnia interesy społeczne.
          <br />
          <br />
          Kredytodawcy czy konsumenci bardziej zainteresowani są współpracą z
          odpowiedzialnymi firmami, które oprócz dobrych wyników finansowych
          zarządzane są w sposób przejrzysty, odpowiedzialnie budują swój
          wizerunek i mają dobre relacje z otoczeniem. Dla wielu inwestorów,
          wiarygodność finansowa firmy uzależniona jest bowiem od jej
          wiarygodności społecznej.
          <h3 id={titles[6]}>
            <li>{titles[6]}</li>
          </h3>
          <u>Po pierwsze</u>: super ekstra i gratulujemy udanej akcji!!!
          <br />
          <br />
          <u>Po drugie</u>: prosimy o podesłanie nam zdjęć w ich oryginalnej
          rodzielczości (wielkości) google drajwem, WeTransferem lub
          bezpośrednio na mejla plakaciary@protonmail.com. Zamieś.ć.cie w tytule
          lub linku informacje: ilość plakatów, ilość dziewczyn, ilość osób
          niebinarnych/queer/xxx, ilość chłopaków, czas akcji, ilość miast,
          nazwa miast. Różnego rodzaju komunikatory zmniejszają rodzielczość
          zdjęć i nie nadają się one później do publikacji. Odpowiednia jakość
          to pliki wielkości MB. Jeśli widzisz gdziesz „KB”, oznacza to, że
          rozmiar jest za mały.
          <br />
          <br />
          <u>Po trzecie</u>: jeżeli któreś z haseł zostało wyklejone na
          graffiti, najprawdopodobniej nie będziemy mogły go opublikować. Nie z
          powodu hasła, bo wszystkie oczywiście są NAJLEPSZE, ale tak jak MY
          wkurzamy się kiedy ktoś NAS zrywa, tak wkurzają się na nas graficiarze
          kiedy ich zaklejamy, co można zrozumieć. No i jak Kuba bogu tak bóg
          Kubie... A jako iż nasze media mają coraz większy zasięg i
          grafficiarze również bacznie nas obserwują, wystarczy jedno krzywe
          zdjęcie (z plakatem na graffiti), by od razu popędzili pod mur i nas
          zerwali, a dodatkowo zalali wiadomościami, niektórymi bardzo
          agresywnymi.
          <br />
          <br />
          Posługujemy się plakatami, bo są BARDZO SKUTECZNYM środkiem przekazu o
          praktycznie ZEROWEJ SZKODLIWOŚCI SPOŁECZNEJ. Pamiętamy o tym ZAWSZE
          wybierając miejsca do klejenia: ograniczamy zapobiegawczo wywołanie
          potencjalnego WQRWu.
          <br />
          <br />
          Dzięki temu:
          <ul>
            <li>
              nie odwracacamy uwagi z „przemocy” i „feminizmu” na temat
              „wandalizmu” czy „prowokowania fanów Legii”
            </li>
            <li>nie dajemy się zamalować przez rozgniewanych grafficiarzy</li>
            <li>mniej wrogów to – potencjalnie – więcej sojusznijów</li>
            <li>
              nasze plakaty ostają się na murze – mamy nadzieję – nieco dłużej!
            </li>
          </ul>
          <br />
          Dzięki za zrozumienie i nie wahaj.cie się podesłać więcej sugestii!
          <h3 id={titles[7]}>
            <li>{titles[7]}</li>
          </h3>
          <u>Po pierwsze</u>: PLAKACIARA bez mandatu to jak uczeń bez pały!!!
          Zawsze jest ten pierwszy!!!
          <br />
          <br />
          <u>Po drugie</u>: prosimy o podesłanie nam zdjęć wyklejonych haseł i
          mandat.u.ów w ich oryginalnej rodzielczości (wielkości) google
          drajwem, WeTransferem lub bezpośrednio na mejla
          plakaciary@protonmail.com. Zamieś.ć.cie w tytule lub linku informacje:
          ilość plakatów, ilość dziewczyn, ilość osób niebinarnych/queer/xxx,
          ilość chłopaków, czas akcji, ilość miast, nazwa miast. Różnego rodzaju
          komunikatory zmniejszają rodzielczość zdjęć i nie nadają się one
          później do publikacji. Odpowiednia jakość to pliki wielkości MB. Jeśli
          widzisz gdziesz „KB”, oznacza to, że rozmiar jest za mały.
          <br />
          <br />
          <u>Po trzecie</u>: ściągnij.cie{" "}
          <a href="https://discord.com">DISCORDA</a>* i zapodaj.cie loginem
          żebyśmy mogły się z Tobą.Wami skontakować
          <br />
          <br />
          <b>*DISCORD</b> – internetowy komunikator podobny do WhatsAppa,
          umożliwiający komunikację pisaną, audio oraz wideo (indywidualną oraz
          grupową), przesyłanie danych, plików itp. itd. zapewniający wysoką
          jakością szyfrowania danych, nie wymagający podawania numeru telefonu
          <h3 id={titles[8]}>
            <li>{titles[8]}</li>
          </h3>
          Super, że masz pomysł i ochotę działać! Jak nie TY i MY, nikt nie
          zrobi tego za nas!
          <br />
          <br />
          Miej jednak na względzie, że PLAKACIARY to bardzo mała grupka osób,
          które latają z plakatami po nocach a na dniach żonglują pomiędzy
          pracą, życiem i niedospaniem i mają bardzo małą dodatkową możliwość
          przerobową. Jeśli chcesz więc coś nam zaproponować lub zasugerować,
          najpewniejszym sposobem na wcielenie Twojego zamysłu w życie jest
          dołączenie się do nas aby zająć się jego stroną wykonawczą,
          szczególnie jeśli mówimy o kwestiach logistyczno-administracyjnych.
          <br />
          <br />
          Jakikolwiek masz pomysł, miej również na uwadze, że tematem PRZEWODNIM
          PLAKACIAR jest WALKA Z PRZEMOCĄ WOBEC KOBIET. Regularnie wspierają one
          jednak również grupy mniejszościowe gdyż w Polsce dyskryminacja dotyka
          KAŻDEJ OSOBY niebędącej *białym heteronomatywnym cis-mężczyzną*, a
          DYSKRYMINACJA TO PRZEMOC wobec jednostki jej doświadczającej. Zatem
          każdy przedstawiony nam pomysł musi BEZWGLĘDNIE uzwględniać tematykę
          walki z przemocą wobec kobiet.
          <br />
          <br />
          Myślisz aby spróbować czegoś innego niż plakatów? PLAKACIARY również
          nad tym myślą! Plakaty są SKUTECZNE bo mają szczególną, łatwą do
          rozpoznania, rzucająca się w oczy formę estetyczną:
          <br />
          <br />
          - po pierwsze, PISANE są ODRĘCZNIE, wybijając się tym samym z chaosu
          komputerowo-produkowanych reklam i ulotek, które oklejają nasze
          miasta,
          <br />
          <br />
          - po drugie, litery są MOCNE, GRUBE, szalono CZARNE, zrywając tym
          samym ze stereotypowym myśleniem o kobietach jako istotach „kruchych,
          ładnych i delikatnych”.
          <br />
          <br />
          - po trzecie, duże, mocne i czarne litery, są LEPIEJ widoczne z daleka
          i DOBRZE kontrastują ze śnieżnobiałym tłem kartek A4.
          <br />
          <br />
          To ta forma przekazu SPRAWDZA się, odnosi SUKCES i to jej sugerujemy
          się trzymać jeśli chcecie kontynuować plakaciarską tradycję.
          <br />
          <br />
          Twoja propozycja spełnia powyższe kryteria? Super!
          <br />
          <br />
          Pisz na: plakaciary@protonmail.com, zamieszczając specyfikację
          projektu, czyli kto, kiedy, gdzie, ile, z czego, za co, w jakim
          nakładzie (rąk, energii, czasu...) itp., itd. Im więcej informacji –
          przedstawionych w zwięzłej i czytelnej formie – tym łatwiej będzie nam
          się do nich odnieść.
          <h3 id={titles[9]}>
            <li>{titles[9]}</li>
          </h3>
          Dobrze się składa bo BARDZO potrzeba nam rąk do pracy!
          <br />
          <br />
          Oto nasze aktualnie zidentyfikowane potrzeby, ułożone według pilności:
          <br />
          <br />
          <ul>
            <li>
              <b>Prawniczki</b> - Wszelkie osoby obeznane z prawem PILNIE
              poszukiwane! Porady, zadania i informacje na wagę złota.
            </li>
            <br />
            <li>
              <b>Policja</b> - Masz w rodzinie policjanta? A może kiedyś miałaś
              „przyjemność” zgłosić zajście? Albo komuś towarzyszyć? Albo
              siedzieć w pace? A może masz jakieś inne kontakty z mundurowymi?
              Każde doświadczenie, info czy kontakty są ważne i potrzebne więc
              zgłaszać się!
            </li>
            <br />
            <li>
              <b>Procedury</b> - osoba, która usiądzie na 4 literach tak długo
              jak trza, poszuka info, rozkminie o co chodzi i rozpisze jak
              krowie na rowie. Hejt w internecie, gwałty, pobicia ALE NIE TYLKO:
              wszystko co jest potrzebne i przydatne.
            </li>
            <br />
            <li>
              <b>Baza Wiedzy</b> – lubisz drążyć tematy, kochasz statystyki a
              dyskurs na ”tematy które złoszczą” to Twoje hobby? Tutaj się
              zrealizujesz! Chcemy zbudować prawdziwą, przystępną, czytelną
              (wspólnie z graficzkami i osobami od komputerów) bazę danych na
              temat przemocy, której doświadczają kobiety, a którą stale
              podważają panowie, którzy „wiedzą więcej i lepiej”
            </li>
            <br />
            <li>
              <b>Komentarze</b> - przeglądanie zostawianych pod postami
              komentarzy, robienie screenów tych, które zawierają wyzwiska i
              groźby, oraz usuwanie spamu i innych, które nie powinny mieć
              miejsca
            </li>
            <br />
            <li>
              <b>PDF</b> – dla tych, które nie mogą malować, dziergamy hasła z
              zeskanowanych liter w Adobie. Posiadasz licencję, cracka lub coś w
              tym stylu? Potrzebujemy Cię natychmiast!
            </li>
            <br />
            <li>
              <b>Grafika/fine arts</b> - Komputerowe malowanki, grafiki, loga i
              ogólne wymysły artystyczno-kreatywne to Twój żywioł? Cudownie!
              Zawsze potrzebny jest ktoś, kto umie coś więcej niż obraz Picasso
              w Paintcie...
            </li>
            <br />
            <li>
              <b>Pisanie</b> - Masz smykałkę do pisania? Zarzucim tematem a Ty
              go nam sprzedasz, drożej niżmyśmy go zakupiły? Polska język
              trudna? Kochamy!
            </li>
            <br />
            <li>
              <b>Komputery</b> - Tworzenie stron, projektów, design czy różne
              sprytne rozwiązania IT nie są ci obce? Może umiesz programować,
              albo po prostu spędzać czas na tworzeniu stron, aplikacji lub
              czegokolwiek w systemie binarnym? Umiejętności na wagę komputera!
            </li>
            <br />
            <li>
              <b>Fotografowanie</b> - Fotki, foteczki ale także filmiki z
              każdego miasta. Jak nie Twoje własne, to nasze na edycję, obróbkę
              i przeróbkę. Na akcje jak i inne projekty.
            </li>
            <br />
            <li>
              <b>Media</b> - Kontakt z mediami. Każda forma jest dobra i prędzej
              czy później nam się może przydać. Jacyś znajomi dziennikarze? Mejl
              do kogoś w radiu albo jakiegoś serwisu online? Pisać!
            </li>
            <br />
            <li>
              <b>Grupy FB</b> - Głównym zadaniem takowych osób będzie moderacja
              naszych grupek, weryfikacja osób chcących dołączyć, przeglądanie
              profilu, wszystko byśmy czuły się bezpieczne
            </li>
            <br />
            <li>
              <b>Cięta riposta</b> - Umiesz wymyślać docinki? A może masz jakiś
              pakiet ciętej riposty i memów do zgłoszenia? Bierzemy je tutaj!!!
            </li>
            <br />
            <li>
              <b>Twitter</b> - Obsługa tej totalnie magicznej aplikacji. Każdy
              post jest ważny. A jeszcze ważniejszy cięty - acz niewulgarny -
              język połączony z humorem i przeszywającą wizją burdelu zwanego
              Polską.
            </li>
            <br />
            <li>
              <b>Hurtownia</b> - Powszechne zakupki. Masz nosa do promocji? A
              może znajomych w sklepach? Wiesz gdzie warto kupować? Klikaj, rób
              fotki i zgłaszaj takie miejsca.
            </li>
            <br />
          </ul>
          Zaangażowanie czasowe szacujemy – pi razy oko – na pół godziny
          dziennie. Marzy nam się o współpracy z osobami, które byłyby w stanie
          dołączyć do nas na przynajmniej 12 miesięcy. Nie podejmuj.cie decyzji
          pochopnie: pracy jest trochę ale trud się opłaca a satysfakcja jest
          ogromna.
          <h3 id={titles[10]}>
            <li>{titles[10]}</li>
          </h3>
          Tak, tak, tak!
          <br />
          Prosimy jedynie o otagowanie nas, załączenie orygnialnego postu lub
          innego odnośnika, który będzie odpowiedni dla obranej przez Ciebie
          formy publikacji.
          <br />
          Dzięki temu, osoby pragnące dołączyć do naszej akcji lub porozumieć
          się z nami będą mogły z łatwością nawiązać z nami kontakt.
          <h3 id={titles[11]}>
            <li>{titles[11]}</li>
          </h3>
          Również tak uważamy!
          <br />
          <br />
          Jak widać, hasła PLAKACIAR trafiają dokładnie tam gdzie boli i
          najwyraźniej tylko ich zerwanie lub przerobienie przynosi co
          poniektórym ulgę.
          <br />
          <br />
          W idealnym świecie, PLAKACIAR byłoby po kilka w każdej dzielnicy i co
          noc mogłybyy każde hasło naprawić bądź ściagnąć jego resztki. W
          rzeczywistości jest ich jednak zaledwie tylko po kilka na miasto,
          czasami plakaty wykleja jedna osoba, czasami mówimy o jednorazowej
          akcji wykonanej przez Plakaciarę, która przejazdem zahaczyła o dane
          miasto.
          <br />
          <br />
          Tak więc podobnie jak najpewniejszym sposobem aby plakaty pojawiły się
          w danym mieście to samodzielne zorganizowanie akcji, tak samo
          najpewniejszym sposobem aby ich resztki z danego muru zniknęły to
          samodzielne podjęcie akcji ich odplakatowania.Z większości murów
          schodzą za zwykłym pociągnięciem kartki, na tych nieco bardziej
          gładkich należy je zmoczyć wodą, najlepiej ciepłą i chwilę poczekać.
          Sposób działania jak z tapetami!
          <h3 id={titles[12]}>
            <li>{titles[12]}</li>
          </h3>
          Cieszymy się i służymy pomocą!
          <br />
          <br />
          Prosimy na wstępie zapoznać się z dwoma dobrze opracowanymi
          artykułami, które razem wzięte, w wyczerpujący sposób przedstawiają
          nasz ruch:
          <ul>
            <li>
              <a href="https://www.v-mag.pl/nie-jestes-sama-sobie-winna">
                v mag
              </a>{" "}
              - opublikowany 14/03/2020
            </li>
            <li>
              <a href="https://www.newsweek.pl/polska/spoleczenstwo/wykrzycz-swoj-gniew-i-bol-na-murze-kim-sa-plakaciary-przeciwko-przemocy-wobec-kobiet/4sj08ch">
                Newsweek
              </a>{" "}
              - opublikowany 13/09/2020
            </li>
          </ul>
          <br />
          Pomogą one przygotować Pani.u bazę materiału, podejście, zainspirować
          i opracować pytania.
          <br />
          <br />
          Zdjęcia w oryginalnej rozdzielczości dostępne są do ściągnięcia z
          naszego google{" "}
          <a href="https://drive.google.com/drive/folders/1pto7xUjXqo3Ql4xnWM026694hDFmBvWK?usp=sharing">
            drajwa
          </a>
          . Pliki posegregowane są w folderach według dat publikacji na naszym
          fan pejdżu.
          <br />
          <br />
          Jeśli pragną Pan.i towarzyszyć nam w jednej z naszych akcji, prosimy
          mieć na uwadze, że PLAKACIARY to samoorganizujący się oddolny ruch
          nieposłuszeństwa obywatelskiego jeszcze w swoich początkach: nie mamy
          żadnego wglądu w częstotliwość czy pewność realizacji organizowanych
          akcji. Najprężniej działającą grupą, z którą kontakt i organizacja
          akcji jest najpewniejsza jest obecnie Wrocław i to z nią są największe
          szanse na zrealizowanie materiału.
          <br />
          <br />
          Aby móc omówić dalsze szczegóły – oraz w trosce o zachowanie naszej
          anonimowości - prosimy o ściągnięcie komunikatora DISCORD* i przełanie
          nam zdjęcia ekranu zawierającego login, abyśmy mogły się połączyć i
          tam następnie kontynuować omawiawianie szczegółów.
          <br />
          <br />
          Naszym jedynym imperatywem jest potrzeba autoryzacji materiału przed
          publikacją: to wszystko!
          <br />
          <br />
          <b>*DISCORD</b> – internetowy komunikator podobny do WhatsAppa,
          umożliwiający komunikację pisaną, audio oraz wideo (indywidualną oraz
          grupową), przesyłanie danych, plików itp. itd. zapewniający wysoką
          jakością szyfrowania danych, nie wymagający podawania numeru telefonu
          <h3 id={titles[13]}>
            <li>{titles[13]}</li>
          </h3>
          Prosimy o przesyłanie propozycjy na mejla: plakaciary@protonmail.com,
          zamieszczając specyfikację propozycji, czyli kto, kiedy, gdzie, ile, z
          czego, za co, w jakim nakładzie (rąk, energii, czasu...) itp., itd. Im
          więcej informacji – przedstawionych w zwięzłej i czytelnej formie –
          tym łatwiej będzie nam się do nich odnieść.
          <h3 id={titles[14]}>
            <li>{titles[14]}</li>
          </h3>
          Przeczytałyśmy Twoją wiadomość dokładnie i z uwagą.
          <br />
          <br />
          Publikujemy zdjęcia plakatów haseł mówiących o doświadczeniach
          związanych z przemocą, nie jesteśmy jednak specjalistkami z zakresu
          zarządzania sytuacjami kryzysowymi, ani przemocowymi. Nie możemy się
          zatem wypowiadać ani doradzać Ci w Twojej sytuacji. Musisz koniecznie
          zgłosić się do wyspecjalizowanych jednostek pomocowych.
          <br />
          <br />
          Ogólnie przyjęta zasada jest jednak prosta: jeśli podejrzewasz
          jakiekolwiek{" "}
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
              kiedy niezbędne jest natychmiastowe działanie Policji, Państwowej
              Straży Pożarnej lub Państwowego Ratownictwa Medycznego.
            </li>
          </ul>
          <br />
          Więcej informacji znajdziesz pod{" "}
          <a href="https://www.gov.pl/web/numer-alarmowy-112/co-zglaszac">
            tym
          </a>{" "}
          adresem.
          <br />
          <br />
          Oprócz tego, podsyłamy cały zestaw różnych telefonów i namiarów na
          organizacje specjalizujących się w tych kwestiach. NAPISZ do nich lub
          ZADZWOŃ - będą one w stanie LEPIEJ Cię poprowadzić, niż my. Każda z
          tych organizacji może zaproponować Ci inne podejście, w każdej
          będziesz mógł porozmawiać z innymi osobami, w niektórych masz do
          dyspozycji również mejle. Musisz popróbować - do skutku!
          <br />
          <br />
          <SpaceAround>
            <img className="pomoc" src={pomoc_kryzys1} />
            <img className="pomoc" src={pomoc_lgbt1} />
          </SpaceAround>
          <br />
          <br />
          <SpaceAround>
            <img className="pomoc" src={pomoc_dom1} />
            <img className="pomoc" src={pomoc_kobieta1} />
          </SpaceAround>
          <h3 id={titles[15]}>
            <li>{titles[15]}</li>
          </h3>
          Słyszymy.
          <br />
          <br />
          Głównie dzięki temu, że był*ś w stanie do nas napisać i zwerbalizować
          swój gniew i frustrację związane z kartkami przyklejonymi do muru na
          klajster z mąki... Dobrze jest móc się wqrwić i ten wqrw komuś
          wytupać, nie?
          <br />
          <br />
          Mamy nadzieję, że właścicielom murów, po których się udzielasz,
          również udzielasz podobnej galanterii? Szczególnie gdyż - jeśli się
          nie mylim - trzeba zdrowo się namęczyć by graffiti usunąć (czy innego
          typu permanentne wyrazy działalności artystycznej zmaterializowane na
          murach). W przeciwieństwie do naszych plakatów.
          <br />
          <br />
          Więc po pierwsze: spokojnie! Rozluźniamy pośladki i oddychamy! ŻADNA z
          PLAKACIAR nie pierd*lnęła „Ci” hasła tu czy tam ANI specjalnie ANI na
          złość. Tak, WIEMY: ciężko może być Ci w to uwierzyć.
          <br />
          <br />
          Wyobraź sobie jednak, że podczas gdy panowie od tysiącleci panoszą się
          w przestrzeni publicznej, my - kobiety - zaczynamy mieć do niej dostęp
          dopiero od niedawna... i ciągle się z nią oswajamy! Przestrzeń, w
          której na co dzień doświadczamy opresyjnego traktowania takiego jak
          obmacywanie, wgapianie się, wygwizdy, ekshibicjonizm, atakowanie,
          napady czy gwałty. Przestrzeń, w której nie czujemy się bezpiecznie
          jeśli nie towarzyszą nam zaufane nam osoby. Przestrzeń, która
          przesiąknięta BEZPRAWIEM wyrządzanej nam w niej od tysiącleci
          przemocy, nosi znamię i świadectwo naszych krzywd, bólu, doświadczanej
          w niej przez nas opresji, przemocy, cierpienia i gwałtów.
          <br />
          <br />
          Czy z tym krótkim wstępem, łatwiej jesteś w stanie sobie wyobrazić, że
          kiedy wychodzisz po raz pierwszy Graffiti zostało Ci zaklejone?
          <br />
          <br />
          Uważamy bowiem, że "WINA" określa UMYŚLNE spowodowanie szkody (
          <a href="https://pl.wikipedia.org/wiki/Wina#:~:text=Wina%20%E2%80%93%20okre%C5%9Blony%20w%20przepisach%20prawnych,(nieodzowny%20sk%C5%82adnik%20ka%C5%BCdego%20przest%C4%99pstwa).&text=Prawo%20cywilne%20wyr%C3%B3%C5%BCnia%20win%C4%99%20umy%C5%9Bln%C4%85,przekroczenie%20zakazu%20nieczynienia%20drugiemu%20szkody">
            definicja
          </a>
          ).
          <br />
          <br />
          To tak jak powiedzieć, że jeśli bobas ucząc się chodzić potrąci wazę,
          to jest to jego wina. Nie do końca - w naszym mniemaniu - ... bo nie
          zrobił tego UMYŚLNIE.
          <br />
          <br />
          Przypomnijmy więc, że kobiety dopiero od niecałych stu lat, w
          niektórych miejscach od niecałych 50, a w innych od jeszcze krótszego
          czasu, cieszą się statutem niezależnych osób fizycznych posiadających
          - ciągle tylko - CZĘŚĆ praw i obowiązków mężczyzn. Od niedawna
          przejmują stanowiska zajmowane dotychczas od tysięcy lat przez
          mężczyzn, od niedawna rządzą co poniektórymi krajami, od niedawna
          wchodzą w niektóre sektory zawodowe, od niedawna wykonują niektóre
          zadania itp. To samo jest z przestrzenią publiczną, którą –
          przypominamy – zająć może KAŻDY: plakaciary, sikacz-pijacz albo
          kolega-konkurent graficiarz, który by tam potencjalnie mógł i
          „przysłowiowego” ch@ja-w@ja wysmarować.
          <br />
          <br />
          To panowie dotychczas rządzili przestrzenią publiczną i – śmiemy
          przypuszczać – roszczą sobie zwyczajnie prawo do opierd@lania nas,
          żeśmy ŚMIAŁY im dotknąć! Nieważne, że to tylko kartki przyklejone na
          klajster z mąki. Bośmy NA PEWNO specjalnie te plakaty NA ZŁOŚĆ im tam
          walnęły. Bo my „oczywiście” DOKŁADNIE ZNAMY savoir-faire uliczny, bo
          każda z nas od lat WIEKÓW wychodzi i zajmuje przestrzeń publiczną,
          wiec mamy dużą wprawę, wiemy DOKŁADNIE co, z czym i jak to się je i
          NIGDY nie popełniamy ŻADNYCH błędów. Pomijamy oprócz tego fakt, że
          niektóre z plakatów wyklejane są w miejscach, w których DOSZŁO do
          aktów AGRESJI do których nawiązują nasze hasła.
          <br />
          <br />
          To wszystko jest jednak tak naprawdę nieważne. Można się z nami
          zgadzać i można się z nami NIE zgadzać. To co JEST WAŻNE, to fakt, że
          nie ma ŻADNEGO USPRAWIEDLIWIENIA dla PRZEMOCY. Język jakim napisał do
          nas ten człowiek musi zostać WYPLENIONY. Jest OGROMNE
          prawdopodobieństwo, że jeśliby nas spotkał na ulicy, to by nam
          zwyczajnie WYRZĄDZIŁ KRZYWDĘ.
          <br />
          <br />
          To JEST PROBLEM. Nie graffiti i nie plakaty. Po prostu.
          <br />
          <br />
          Przypominamy Więc - PONOWNIE - że rozmawiamy o przestrzeni PUBLICZNEJ
          (na środku skrzyżowania) którą zająć może KAŻDY: plakaciary,
          sikacz-pijacz albo kolega-graficiarz, który by Wam tam potencjalnie
          mógł i „przysłowiowego” ch@ja-w@ja wysmarować.
          <br />
          <br />
          Wbrew pozorom zatem, jeśli miejsce pracy w miejscu publicznym nie
          zostało zabezpieczone ani choćby oznakowane, to osoba za to
          odpowiedzialna powinna ponieść konsekwencje swojego zaniedbania
          zamiast obarczać innych winną za swój błąd.
          <br />
          <br />
          My - wyobraźcie Panowie sobie - RÓWNIEŻ robimy nasze akcje
          plakaciarskie CHARYTATYWNIE.
          <br />
          <br />
          Wykonujemy ważną pracę edukacyjną, którą POWINNO ŚWIADCZYĆ PAŃSTWO,
          ale której nie świadczy. Z powodu tych braków programowych, zamiast
          kraju równości i sprawiedliwości, mamy kraj, w którym kobiety traktuje
          się protekcjonalnie, lekceważąco, nie na serio i w którym doświadczają
          one dzień w dzień przemocy fizycznej, emocjonalnej, seksualnej i
          seksistowskiej. Ale spoks, rozumiemy: koledzy po fachu mają wqrwa.
          <br />
          <br />
          No bo przecież Wy FACECI jesteście i to do Was JEDYNYCH świat
          należy!!! Rządzicie przestrzenią publiczną!!! Oznaczona czy nie,
          należy nas opierd@lić żeśmy ŚMIAŁY dotknąć! Ch@j że to tylko kartki
          przyklejone na klajster z mąki. Bośmy NA PEWNO *specjalnie* te plakaty
          NA ZŁOŚĆ Wam tam walnęły. Przecież DOKŁADNIE WIEDZIAŁYŚMY, że tam
          mural ma na Hospicjum dla Kobiet powstać, a my ani nie kobiety ani nie
          chorujemy! I od LAAAAT, sorry, od WIEKÓW wychodzimy i zajmujemy
          przestrzeń publiczną, wiec mamy dużą wprawę, wiemy DOKŁADNIE co, z
          czym i jak to się je i NIGDY nie popełniamy ŻADNYCH błędów.
          <br />
          <br />
          No po prostu włosy z głowy sobie rwiemy! Co robić? Czy mamy stawiać
          się do siedziby Waszej firmy, by się zgłaszać po wpierdol? Oczywiście
          na szczęście - dzięki Waszemu charytatywnemu muralowi - będziemy
          wiedziały, którędy do hospicjum, wiec rozwiąże to WSZYSTKIE nasze
          problemy!
          <br />
          Więc zamiast rzucać się, ze Wam dziewczyny przykleiły kilka kartek na
          mur, zastanówcie się PO CO angażujecie się charytatywnie w projekt,
          jeżeli NIJAK ma się on do tego co reprezentujecie SOBĄ, swoim sposobem
          komunikacji (agresywny, pobłażliwy, protekcjonalny, lekceważący...).
          <br />
          Bo z tego co MY tu poczytałyśmy sobie, to pachnie nam tu trickiem
          magickiem PRu na „czyste sumienie”...
          <br />
          <br />
          PS.
          <br />
          Żeby zadość uczynić za trud usunięcia naszych plakatów, podsuwamy
          gratisowo rozwiązanie umożliwiające zabezpieczenie terenu pracy (bo
          nie byliście w stanie sobie go wyobrazić)
          <h3 id={titles[16]}>
            <li>{titles[16]}</li>
          </h3>
          <h3 id={titles[17]}>
            <li>{titles[17]}</li>
          </h3>
          We wszystkich innych kwestiach piszcie do nas na mejla:
          plakaciary@protonmail.com
        </ol>
      </Body>
    </Layout>
  );
}
