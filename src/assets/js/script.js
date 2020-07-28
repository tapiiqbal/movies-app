import "../../component/movie-list.js";
import "../../component/movie-item.js";
import "../../component/carousel-list.js";
import "../../component/carousel-item.js";
import Api from "../../api/api.js"
document.addEventListener("DOMContentLoaded", () => {


    const newId = document.querySelector('#new-movie');
    if (newId) {
        const movieListElement = document.createElement("movie-list");
        Api.getNowMovies().then(function(response) {
            movieListElement.movies = response;
        });

        newId.appendChild(movieListElement);
    }

    const topId = document.querySelector('#top-movie');
    if (topId) {
        const movieListElement = document.createElement("movie-list");
        Api.getTopMovies().then(function(response) {
            movieListElement.movies = response;
        });
        topId.appendChild(movieListElement);
    }

    const favouriteId = document.querySelector("#favourite-movie");
    if (favouriteId) {
        const movieListElement = document.createElement("movie-list");
        Api.getFavouriteMovies().then(function(response) {
            movieListElement.movies = response;
        });
        favouriteId.appendChild(movieListElement);
    }

    const tvId = document.querySelector("#tv-movie");
    if (tvId) {
        const movieListElement = document.createElement("movie-list");
        Api.getTvMovies().then(function(response) {
            movieListElement.movies = response;
        });
        tvId.appendChild(movieListElement);
    }
    // window.onscroll = function() { onScroll() };
    // function onScroll() {
    //     console.log("scroll")
    // }

    // window.addEventListener('scroll', () => {
    //     let page = parseInt(localStorage.getItem("page-now")) + 1;
    //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //     const scrolled = window.scrollY;


    //     // console.log(scrollable);
    //     // console.log(scrolled);
    //     if (Math.ceil(scrolled) === scrollable) {
    //         const movieListElement = document.createElement("movie-list");
    //         Api.getPageNowMovies(page).then(function(response) {
    //             movieListElement.movies = response;
    //         });

    //         newId.appendChild(movieListElement);
    //     }

    // })
})