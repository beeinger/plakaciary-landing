import React from "react";
import styled from "styled-components";
import ImageText from "../components/ImageText";
import {
  grupy,
  fejs_wspieranie,
  plakat_historia,
  zasiegi,
  pomoc_kobieta1,
  pomoc_lgbt1,
  pomoc_kryzys1,
  pomoc_dom1,
} from "../resources/images";

const Layout = styled.div`
  margin: 5vh 15vw 0 15vw;

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

    @media screen and (max-width: 992px) {
      width: 48%;
    }

    @media screen and (max-width: 600px) {
      width: 48%;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
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
  return (
    <Layout>
      <Title>
        <ImageText size="9em">FAQ</ImageText>
        <ImageText size="3em">W TRAKCIE</ImageText>
        <ImageText size="3em">PRACY</ImageText>
      </Title>
      <Body>
        <h1>Spis Treści:</h1>
        <br />
        <ol>
          {titles.map((val, idx) => {
            const href = "#" + val;
            return (
              <>
                <PointerH3 key={idx}>
                  <a href={href}>
                    <li href={href}>{val}</li>
                  </a>
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
          Nie pragniemy nikogo wykluczać z działania, jednak do naszych grup nie
          przyjmujemy cis-panów z następujących powodów:
          <br />
          <br />
          <ol>
            <li>
              Nasza inicjatywa ma na celu pomóc KOBIETOM zająć oddolnie
              przestrzeń publiczną, w której doświadczają one na co dzień
              opresyjnego traktowania, w tym: obmacywania, ekshibicjonizmu,
              atakowania i gwałtów. Przestrzeni, w której nie czują się na co
              dzień bezpiecznie jeśli nie towarzyszy im zaufany mężczyzna.
              Możliwość ‘przejęcia’ tej przestrzeni bez (wspierającej) męskiej
              obecności i poczucie się w niej „silną” jest dla nas zasadnicza i
              uważamy takie doświadczenie za wyzwalające.
            </li>
            <li>
              Na naszych grupach obecne są ofiary przemocy seksualnej, fizycznej
              i innej. Obecność cis-mężczyzn może sprawić, że trudniej będzie im
              się otworzyć. Chcemy również zachować jak największe środki
              bezpieczeństwa aby zapobiec tzw. „wynosicielstwu”, gdyż temat jest
              poważna, a niektóre osoby nie wiedzą czasami gdzie postawić
              granicę do „śmieszkowania”, „tyrania beki” etc.
            </li>
            <li>
              Jest dla nas ważne, aby feminizm był konstruowany przez kobiety i
              żeby to ich głos było słychać. Mężczyźni to nasi sojusznicy –
              zasadniczy i ważny element ruchu – ale tutaj organizujemy się bez
              Was. Ma to na celu zapobiec reprodukowaniu w feminizmie tych
              samych schematów opresji, których kobiety doświadczają poza nim.
            </li>
            <li>
              Niemożliwym jest dla nas tak naprawdę sprawdzenia kto RZECZYWIŚCIE
              kryje się za danym profilem i jakie są jego prawdziwe intencje, a
              czasami – zdarzyło nam się to kilkukrotnie – niektórzy panowie
              pragną dołączyć do naszych grup tylko po to, aby je „rozwalać od
              środka”...
            </li>
          </ol>
          <br />
          Nasze fejsbukowe grupy to nasze "wuefowe szatnie". Jednak to, że nie
          wpuszczamy do nich CIS-mężczyzn nie oznacza, że następnie nie możemy
          wspólnie grać w siatkę czy w kosza.
          <br />
          Panowie TEŻ plakatują - z koleżankami na przykład - i w różnoraki inny
          sposób nam pomagają, np. w organizacji i ogarnianiu ruchu. Ale
          cis-kolegów musimy NAJPIERW poznać w REALU aby przekonać się KIM są i
          CO sobą reprezentują, bo na fejsie jest to po prostu niemożliwe, bo
          każdy jest tu anonimowy. Proponujemy więc wszystkim chętnym kolegom
          dołączać do plakatujących koleżanek… albo, LEPIEJ, ZACHĘCAĆ obecne w
          ich życiu kobiety - przyjaciółki, siostry, koleżanki, koleżanki żony,
          narzeczonej, dziewczyny lub chłopaka, kuzynki, mamy, ciotki i babcie,
          aby ruszyły z Wami w miasto! A następnie podesłały nam owoce Waszej
          wspólnej akcji: abyście mogły dostać instrukcje jak do nas dołączyć
          POZA FEJSEM!
          <br />
          <br />W między czasie, zawsze możesz dorzucić się na plakaciarskie
          materiały: <a href="https://zrzutka.pl/wdy5bp">zrzutka</a>
          <br />
          <br />
          Pamiętaj: nie potrzebujesz naszego błogosławieństwa aby wyjść w miasto
          i plakatować!
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
          Nie pragniemy nikogo wykluczać z działania, jednak do naszych grup nie
          przyjmujemy cis-panów z następujących powodów:
          <br />
          <br />
          <ol>
            <li>
              Nasza inicjatywa ma na celu pomóc KOBIETOM zająć oddolnie
              przestrzeń publiczną, w której doświadczają one na co dzień
              opresyjnego traktowania, w tym: obmacywania, ekshibicjonizmu,
              atakowania i gwałtów. Przestrzeni, w której nie czują się na co
              dzień bezpiecznie jeśli nie towarzyszy im zaufany mężczyzna.
              Możliwość ‘przejęcia’ tej przestrzeni bez (wspierającej) męskiej
              obecności i poczucie się w niej „silną” jest dla nas zasadnicza i
              uważamy takie doświadczenie za wyzwalające.
            </li>
            <li>
              Na naszych grupach obecne są ofiary przemocy seksualnej, fizycznej
              i innej. Obecność cis-mężczyzn może sprawić, że trudniej będzie im
              się otworzyć. Chcemy również zachować jak największe środki
              bezpieczeństwa aby zapobiec tzw. „wynosicielstwu”, gdyż temat jest
              poważna, a niektóre osoby nie wiedzą czasami gdzie postawić
              granicę do „śmieszkowania”, „tyrania beki” etc.
            </li>
            <li>
              Jest dla nas ważne, aby feminizm był konstruowany przez kobiety i
              żeby to ich głos było słychać. Mężczyźni to nasi sojusznicy –
              zasadniczy i ważny element ruchu – ale tutaj organizujemy się bez
              Was. Ma to na celu zapobiec reprodukowaniu w feminizmie tych
              samych schematów opresji, których kobiety doświadczają poza nim.
            </li>
            <li>
              Niemożliwym jest dla nas tak naprawdę sprawdzenia kto RZECZYWIŚCIE
              kryje się za danym profilem i jakie są jego prawdziwe intencje, a
              czasami – zdarzyło nam się to kilkukrotnie – niektórzy panowie
              pragną dołączyć do naszych grup tylko po to, aby je „rozwalać od
              środka”...
            </li>
          </ol>
          <br />
          Nasze fejsbukowe grupy to nasze "wuefowe szatnie". Jednak to, że nie
          wpuszczamy do nich CIS-mężczyzn nie oznacza, że następnie nie możemy
          wspólnie grać w siatkę czy w kosza.
          <br />
          Panowie TEŻ plakatują - z koleżankami na przykład - i w różnoraki inny
          sposób nam pomagają, np. w organizacji i ogarnianiu ruchu. Ale
          cis-kolegów musimy NAJPIERW poznać w REALU aby przekonać się KIM są i
          CO sobą reprezentują, bo na fejsie jest to po prostu niemożliwe, bo
          każdy jest tu anonimowy. Proponujemy więc wszystkim chętnym kolegom
          dołączać do plakatujących koleżanek… albo, LEPIEJ, ZACHĘCAĆ obecne w
          ich życiu kobiety - przyjaciółki, siostry, koleżanki, koleżanki żony,
          narzeczonej, dziewczyny lub chłopaka, kuzynki, mamy, ciotki i babcie,
          aby ruszyły z Wami w miasto! A następnie podesłały nam owoce Waszej
          wspólnej akcji: abyście mogły dostać instrukcje jak do nas dołączyć
          POZA FEJSEM!
          <br />
          <br />W między czasie, zawsze możesz dorzucić się na plakaciarskie
          materiały: <a href="https://zrzutka.pl/wdy5bp">zrzutka</a>
          <br />
          <br />
          Pamiętaj: nie potrzebujesz naszego błogosławieństwa aby wyjść w miasto
          i plakatować!
          <br />
          <br />
          Wspólnie zwalczmy kulturę gwałtu!
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
            <img className="wspieranie" src={fejs_wspieranie} />
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
          Więc po pierwsze: spokojnie! Rozluźniamy pośladki i oddychamy!
          <br />
          <br />
          ŻADNA z PLAKACIAR nie pierd*lnęła „Ci” hasła tu czy tam ANI specjalnie
          ANI na złość. Tak, WIEMY: ciężko może być Ci w to uwierzyć.
          <br />
          <br />
          Wyobraź sobie jednak, że podczas gdy panowie od tysiącleci panoszą się
          w przestrzeni publicznej, my - kobiety - zaczęłyśmy mieć do niej
          dostęp dopiero niedawno i... ciągle się jej uczymy! Po raz PIERWSZY w
          ŻYCIU zajmujemy bowiem dzisiaj przestrzeń publiczną. Przestrzeń, w
          której na co dzień doświadczamy opresyjnego traktowania, takiego jak:
          obmacywania, ekshibicjonizmu, atakowania czy gwałtów. Przestrzeń, w
          której nie czujemy się bezpiecznie jeśli nie towarzyszą nam zaufane
          nam osoby. Przestrzeń, która nosi znamię, piętno, świadectwo
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
