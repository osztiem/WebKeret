# További információk és leírás a projektel kapcsolat:

A legfontosabb, hogy a `master` branchben található a legfrissebb verzió, és kérem azt vegyék figyelembe! (korábban voltak összeakadásaim a githubon, ezért nem állítottam már át a defaultra stb.)

Maga a projekt kicsit kezdetleges, de arra törekdetem, hogy működőképes maradjon, így kompromiszumokat kellett kötnöm:
<ul>
  <li>Az edit oldal kikerült külön... eredeti tervek szerint a kilistázott ticketekre lehetett volna kattintani, és azon belül lehetett volna törölni/módosítani, sajnos ezt nem tudtam "következmények nélkül" megvalósíítani, így a működőképességet szem előtt tartva, és időhiány tekintetében elvetettem.</li>
  <li>A "Help" oldalon viszonylag könnyen lehet kipróbálni az oldal responzivítását</li>
  <li>Firestore működik, ugye ez a ticketeknél a legelső random karaktersorozatokból álló kulcs is mutatja, de új ticket felvételnél meg is jelenik a listában, így gondolom az is prezentálja annak működését.</li>
  <li>A forráskódhoz túl sok kommentet nem tudok hozzfűzni, úgy gondolom mivel nem lett túl komplex a kód, illetve hosszú (sajnos), így ennek láttam ennek különösebb okát, úgy gondolom az alapvető formázási, és "clean code" alapelveknek megfelel</li>
</ul>

**Host URL:** https://tmforum-serviceproblem.web.app/tickets

## Záró gondolat:
<li>Mivel igen sok hibával küzködtem az elkészülés során, nem tudok 100% biztos lenni, hogy jelenlegi "végső verzió" teljes mértékben hibátlan, így ha valami mégsem működne, vagy nem egyértelmű kérem vegyék fel velem a kapcsolatot!</li>

# AngularTmforumApp

The main features of the app:
- list tickets
- add tickets
- delete tickets
- update tickets details

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
