class CarouselList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        const moviesHTML = this._movies.map(dt=>{
            let dtInnerHTML = ``;
            return dtInnerHTML += `
                <a class="carousel-item" href="#"><img src="https://image.tmdb.org/t/p/original${dt.poster_path}"></a>`; 
            
        });
        this.innerHTML = `
            <div class="carousel">
                ${moviesHTML.join('')}
            </div>`;

        const elemsCarousel = document.querySelectorAll('.carousel');
        const instancesCarousel = M.Carousel.init(elemsCarousel, {
            duration: 300,
            dist: -200,
            shift: 0,
            padding: 0,
            numVisible: 0,
            fullWidth: true,
            indicators: false,
            noWrap: false,
        });
    }
}
customElements.define("carousel-list", CarouselList);