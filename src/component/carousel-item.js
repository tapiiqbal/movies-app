class CarouselItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <a class="carousel-item" href="#one!"><img src="https://image.tmdb.org/t/p/original${this._movie.poster_path}"></a>`;
    }
}
customElements.define("carousel-item", CarouselItem);