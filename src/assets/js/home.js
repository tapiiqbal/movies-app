import Api from "../../api/api.js"
document.addEventListener("DOMContentLoaded", () => {

    const nowPlaying = document.querySelector("#now-playing");
    if (nowPlaying) {
        const movieListElement = document.createElement("movie-list");
        Api.getNowMovies().then(function(response) {
            movieListElement.movies = response;
        });
        nowPlaying.appendChild(movieListElement);
    }

    const upComing = document.querySelector("#up-coming");
    if (upComing) {
        const movieListElement = document.createElement("movie-list");
        Api.getUpcomingMovies().then(function(response) {
            movieListElement.movies = response;
        });
        upComing.appendChild(movieListElement);
    }
})