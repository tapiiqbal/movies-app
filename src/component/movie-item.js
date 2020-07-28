class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {

        let title = (this._movie.title !== undefined) ? this._movie.title : this._movie.original_name;
        this.innerHTML = `
            <div div class="col s6 m6 l3">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://image.tmdb.org/t/p/original${this._movie.poster_path}">
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                    <br/>
                    <span class="card-title">Title : ${title}</span>
                    <span class="card-title">Rate : <i class="material-icons star tiny" style="color:yellow;">star</i>${this._movie.vote_average}</span>
                    <span class="card-title">Overview : ${this._movie.overview}</span>
                    </div>
                </div>
            </div>`;
    }
}
customElements.define("movie-item", MovieItem);