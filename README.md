# myGulp501

- Setting up work environment - HTML5+CSS3+JavaScript:
  + [Brackets](http://brackets.io/) - A modern, open source text editor that understands web design.
    - [Brackets API](http://brackets.io/docs/current/modules/brackets.html)
    - [Brackets Shortcuts](https://github.com/adobe/brackets/wiki/Brackets-Shortcuts)
  + [Gulp](http://gulpjs.com/) - gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can     stop messing around and build something.
    - Callum Macrae, [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
    - Mark Goodyear, [Getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)
  + [Git](https://git-scm.com/book/pl/v1/Pierwsze-kroki-Instalacja-Git) - Installing Git
  + [Node.js](https://nodejs.org/en/) - Installing Node.js
  + Installing Gulp globally:
  
    ```sh
    npm install gulp -g
    ```
    
  + Installing Gulp locally in our project directory:
  
    ```sh
    npm init
    npm install gulp --save-dev
    # add node_modules to .gitignore file
    ```


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


+ [CERN map](https://wojsamjan.github.io/myGulp501/cern.html)
+ [GeoJSON with Leaflet](https://wojsamjan.github.io/myGulp501/leaflet.html)
