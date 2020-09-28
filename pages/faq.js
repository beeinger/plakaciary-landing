import React from "react";
import styled from "styled-components";
import ImageText from "../components/ImageText";
import grupy from "../resources/images/grupy.png";

const Layout = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin: 5vh 15vw 0 15vw;

  @media screen and (max-width: 992px) {
    margin: 5vh 8vw 0 7vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7em;
    margin: 5vh 8vw 0 7vw;
  }

  img {
    width: 100%;
    height: auto;
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
          <img src={grupy} />
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
          <img src={grupy} />
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
        </ol>
      </Body>
    </Layout>
  );
}
