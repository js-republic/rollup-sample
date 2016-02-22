//import {ajax} from "jquery";
//import {map} from "lodash-es";

import {getJson} from "./api";
import apiKey from "./apiKey";


const moviesUrl = `http://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

(function () {
    getJson(moviesUrl)
        .then(({results}) => results.forEach(movie => {
            const $movie = document.createElement('div');
            $movie.innerHTML = `
                <h3>${movie.original_title} <small>${movie.release_date}</small></h3>
                <img class="thumbnail" src="https://image.tmdb.org/t/p/w1000/${movie.backdrop_path}">
                <p>${movie.overview}</p>
                <div class="callout">
                    <ul class="menu simple">
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            `;
            document.querySelector('.content').appendChild($movie);
        }));
})();