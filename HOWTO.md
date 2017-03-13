## My Gulp 101

- Konfiguracja środowiska do pracy z HTML5+CSS3+JavaScript.
  * [Atom](https://atom.io) – a hackable text editor for the 21st Century.
    - [Atom Flight Manual](https://atom.io/docs/latest/) – the latest version
    - [Keyboard shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)
  * [Gulp](http://gulpjs.com) – a toolkit for automating painful or
    time-consuming tasks in your development workflow, so you can stop
    messing around and build something.
    - Callum Macrae, [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
    - Mark Goodyear, [Getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  * [Slack](https://slack.com) – where work happens.
    - [Getting Started](https://get.slack.help/hc/en-us/categories/202622877-Slack-Guides)
  * [Git](https://git-scm.com/book/en/v2).
    - [GitHub Account Setup and Configuration](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
    - M. Hartl, [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial)

Zainstaluj [node](https://nodejs.org/en/), a następnie zainstaluj program _gulp_.

```sh
npm install -g gulp
npm install -g livereload # optional
```

Następnie w katalogu głownym repo wykonaj:

```sh
gulp clean
gulp docs
gulp
```

### Nowy projekt H5C3J

Utwórz nowe repozytorium i wykonaj te polecenia w głównym katalogu repozytorium.

```sh
npm init
npm install --save-dev gulp # npm i -D gulp
# dodaj do pliku .gitignore katalogi node_modules
```


### HTML5 + CSS3 + ES6

TODO 1:

- [x] [gulp-server-livereload](https://www.npmjs.com/package/gulp-server-livereload)
  lub gulp-connect (serwer _localhost:8080_) & gulp-livereload
- [x] [delete generated folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
- [ ] concat and minify assets (CSS -> _style.css_)
- [ ] [gulp-markdown](https://www.npmjs.com/package/gulp-markdown)
- [ ] [gulp-asciidoctor](https://github.com/asciidoctor/gulp-asciidoctor)
- [ ] szablony HTML
- [ ] copy only changed files

TODO 2:

- [ ] [Setup a new project with Phenomic](https://phenomic.io/docs/setup/)


### Uruchamiamy stronę na Firebase

TODO







## Techniki Internetowe, 2016/2017

> *Uważaj na człowieka, którego nie interesują szczegóły.*
>
> — William Feather

Kod z rozwiązaniami zadań / gotowe projekty należy umieścić/wdrożyć
na [GitHub Pages](https://pages.github.com) lub
na [Firebase](https://www.firebase.com) albo na innym darmowym serwisie,
na przykład na jednym z [services with great free tiers for developers on a budget](https://github.com/255kb/stack-on-a-budget).

Zapoznać się z notacjami Markdown:

* [GitHub Flavored Markdown](http://guides.github.com/overviews/mastering-markdown/),
  [Mastering Markdown](http://guides.github.com/overviews/mastering-markdown/) i
  [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

i AsciiDoc:

* [AsciiDoctor](http://asciidoctor.org/) – a fast text processor & publishing
  toolchain for converting AsciiDoc to HTML5, DocBook & more.

<!--
  Przeczytać [AsciiDoc New tables]( http://www.methods.co.nz/asciidoc/newtables.html).
-->

W repozytoriach z rozwiązaniami zadań, w pliku _README.md_ (Markdown)
lub _README.adoc_ (AsciiDoctor) krótko opisać rozwiązanie każdego zadania.


### Zaliczenie

1\. [deadline 05.03.2017]

* Utworzyć repozytorium na rozwiązania zadań. Link do repozytorium oraz
  link do stron HTML z rozwiązaniami wpisać w pliku [projects.md](projects.md).
* Zapoznać się z programem [gulp](http://gulpjs.com) ułatwiającym pracę
  z projektami HTML+CSS+JavaScript.
* Do kodu [pierwszej strony WWW](http://info.cern.ch/hypertext/WWW/TheProject.html)
  dodać mapkę okolic CERN. Użyć jednego z komponetów webowych
  [GoogleWebComponents](https://www.webcomponents.org/author/GoogleWebComponents).
  Proces dodawania mapki zautomatyzować za pomocą programu _gulp_;
  zob. [Mapping geoJSON files on GitHub](https://help.github.com/articles/mapping-geojson-files-on-github).

* Do pliku [Gulpfile.js](https://github.com/h5c3j/my_gulp_101/blob/master/gulpfile.js)
  dodać nowe zadanie (_task_) uruchamiające lokalny serwer www z **livereload**.
  Skorzystać z jednej z wtyczek _gulp_, na przykład
  [gulp-server-livereload](https://www.npmjs.com/package/gulp-server-livereload);
  zob. [Mark Goodyear](https://markgoodyear.com/),
  [Getting started with gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  i [Using ES6 with gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/).


2\. [deadline 22.03.2017]

Przejrzeć dokumentację [_GeoJSON_](http://geojson.org/). Napisać
kilka geojsonów i przetestować je na tej stronie:
[Simply edit GeoJSON map data](http://geojson.io).

Utworzyć stronę z mapką korzystającą biblioteki [Leaflet](http://leafletjs.com/).
W kodzie mapki użyć następujących [Geometry Objects](http://geojson.org/geojson-spec.html#geometry-objects): _Point_, _LineString_ i _Polygon_.


3\. [deadline 09.04.2017]

* Przeczytać artykuł Matthew Ström’a
[Design Better Data Tables](https://medium.com/mission-log/design-better-data-tables-430a30a00d8c).
W swoich tabelkach stosować się do „3½ simple rules” z tego artykułu.
* Przeczytać rozdział [Websites. Abandon five obsolete habits](http://practicaltypography.com/websites.html)
  z książki M. Butterick’a [Practical Typography](http://practicaltypography.com);
  zob. też [Google Fonts](https://fonts.google.com/?subset=latin-ext).
* Zapoznać się z elementami, atrybutem i formatem:
  - [figure](http://caniuse.com/#search=figure), [picture](http://caniuse.com/#search=picture)
  - [srcset](http://caniuse.com/#search=srcset)
  - [webfont](http://caniuse.com/#search=webfont)

W HTML tabelę budujemy z następujących elementów: *table*, *tr*, *td*,
*caption*, *thead*, *tbody*, *tfoot*, *colgroup*, *col* (9 znaczników)
oraz z dwóch atrybutów *colspan* i *rowspan* (2 atrybuty).

Responsywne tabele ([Responsive Tables](https://codepen.io/collection/AdGVYP/);
niedziałający przykład z JSON data ;) i
obrazki ([Responsive Images Community Group](https://responsiveimages.org);
[<picture> Element Sample](https://googlechrome.github.io/samples/picture-element/)).

1. Przygotować stronę z kilkoma różnymi i interesującymi tabelkami.
   Następnie dodać responsywność do tabelek.
2. Przygotować stronę z kilkoma różnymi i interesującymi responsywnymi obrazkami
  ([:japanese_ogre:](http://satyr.io) – make prototyping easy with dummy image generator).

Strona powinna korzystać z lokalnych webfont. Na stronach należy uzyć
wszystkich wymienionych powyżej elementów i atrybutów.


4\. [deadline 22.04.2017]

Przygotować stronę ze wzorami matematycznymi.
Matematykę na stronach wpisać w notacji
[MathJax](http://docs.mathjax.org/en/latest/index.html).

Przykładowe repozytorium z GitHub Pages + MathJax –
[RedQueen: An Online Algorithm for Smart Broadcasting in Social Networks](http://learning.mpi-sws.org/redqueen/).
W stopce u dołu strony linki do repozytorium z kodem źródłowym.

<!--

[Carnegie, Mellon](https://github.com/brendano/ark-tweet-nlp/). [tChat](http://www.cs.cmu.edu/~ark/TweetNLP/).

5\. [GitHub Pages](https://pages.github.com) |
  [About GitHub Pages and Jekyll](https://help.github.com/articles/about-github-pages-and-jekyll/) |
  [Firebase](https://firebase.google.com).

W stronach przygotowanych w pkt. 1. (lub nowych) wykorzystać
jeden z frameworków wymienionych poniżej:

* [Bootstrap](http://getbootstrap.com) –
  the most popular HTML, CSS, and JS framework for developing
  responsive, mobile first projects on the web.
* [Material Design Lite](http://www.getmdl.io/).
  Material Design Lite lets you add a Material Design look and feel to your
  websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for
  cross-device use, gracefully degrade in older browsers, and offer an experience
  that is immediately accessible.

-->

<!-- [Repo z rozwiązaniami](https://github.com/wesbos/JavaScript30) -->


### Egzamin (projekty zespołowe)

Podstawy język JavaScript:

- Marijn Haverbeke.
  [Eloquent JavaScript](http://eloquentjavascript.net/)
- Kyle Simpson.
  [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS);
  [polskie tłumaczenia](http://helion.pl/search?szukaj=Simpson)

Zrealizować kilka projektów ze strony
[30 Day Vanilla JS Coding Challenge](https://javascript30.com);
[repo z _starter files_](https://github.com/wesbos/JavaScript30).

<!--

Przygotować prostą aplikację WWW korzystając
z frameworka [Meteor](https://www.meteor.com/). Aplikację
wdrożyć (ang. _deploy_) na zewnętrznym serwerze.

Zamiast frameworka Meteor można użyć frameworka
[React](https://facebook.github.io/react/index.html) –
[Getting Started](https://facebook.github.io/react/docs/getting-started.html),
[Tutorial](https://facebook.github.io/react/docs/tutorial.html),
[React for Beginners](https://reactforbeginners.com/).

Użyteczne linki:

- [Meteor](https://www.meteor.com/)
- David Turnbull.
  [Your First Meteor Application](http://meteortips.com/book/) –
  a Complete Beginner’s Guide to the Meteor JavaScript Framework
- [Discover Meteor](http://book.discovermeteor.com/)
  ([polskie tłumaczenie](http://pl.discovermeteor.com/))
- [Creating your first app in React+Meteor](https://www.meteor.com/tutorials/react/creating-an-app)

-->


## JavaScript 2017 → ∞

[JavaScript in 2015](http://glenmaddern.com/articles/javascript-in-2015)
([YouTube](https://www.youtube.com/watch?v=iukBMY4apvI)).

- Nicholas C. Zakas.
  [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read/)
- John Resig.
  - [Learning Advanced JavaScript](http://ejohn.org/apps/learn/)
  - [Secrets of the JavaScript Ninja, Second Edition](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition)
- [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) –
  Mozilla Developer Network (MDN)

ES6+

- Sindre Sorhus.
  [ES.next showcase](https://github.com/sindresorhus/esnext-showcase)
- Matt Greer.
  [JavaScript Promises ... In Wicked Detail](http://mattgreer.org/articles/promises-in-wicked-detail/)
- Aidan Feldman.
  [Advanced JavaScript](http://advanced-js.github.io/deck/)
- David Leonard. [es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)
– [Minimalist examples of ES6 functionalities](https://github.com/hemanth/paws-on-es6)


## CSS

- [Less](http://lesscss.org)
- [Sass](http://sass-lang.com)

Small frameworks:

- [Bulma](http://bulma.io/) – Sass based


### Różne rzeczy

- [Accelerated Mobile Pages Project](https://www.ampproject.org) – an open source initiative
  that embodies the vision that publishers can create mobile optimized content once and
  have it *load instantly everywhere
