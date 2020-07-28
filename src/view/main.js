import { async } from 'regenerator-runtime';
import '../component/search-bar';
import DataSource from '../data/data-source';

function main() {
    window.onload = async() => {
        try {
            const movieItemElement = document.querySelector('.play-now-movie');
            const results = await DataSource.SearchPlayNowMovie();
            for (let result of results) {
                let movieItem = document.createElement('div');
                movieItem.setAttribute("class", "col-md-3");
                movieItem.innerHTML = `
                <div class="ibox">
                    <div class="ibox-content product-box">
                        <a><img src="https://image.tmdb.org/t/p/original${result.poster_path}"></a>
                        <div class="product-desc">
                            <small class="text-muted">${result.original_title}</small>
                            <a href="#" class="product-name"> <i class="fa fa-star"><span
                                        class="text-star">${result.vote_average}</span></i></a>
                            <div class="small m-t-xs">
                            </div>
                            <div class="m-t text-righ">
                                <a class="btn btn-xs btn-outline btn-primary detail-movie" id="detail-${result.id}">Detail<i class="fa fa-long-arrow-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>`;
                movieItemElement.append(movieItem);

                let item = movieItemElement.querySelector(`#detail-${result.id}`);
                let onClick = function(Movie) {
                    return function() {
                        notify(`${Movie.title} coming soon!`);
                    }
                }
                item.addEventListener('click', onClick(result))
            }
        } catch (error) {}
    };

    const notify = (message) => {
        swal({
            title: message,
        });
    }

    const searchElement = document.querySelector("search-bar");
    const onButtonSearchClicked = async() => {
        let removeElement = document.querySelectorAll("#movie-list");
        try {
            if (removeElement.length > 0) {
                for (let i = 0; i < removeElement.length; i++) {
                    removeElement[i].parentNode.removeChild(removeElement[i]);
                }
            }
            const results = await DataSource.SearchMovie(searchElement.value);
            for (let result of results) {
                $('.movie-item').append(` 
                <div class ="col-md-3" id ="movie-list">
                    <div class ="ibox">
                        <div class ="ibox-content product-box">
                        <a> <img src ="https://image.tmdb.org/t/p/original${result.poster_path}"></a> 
                            <div class ="product-desc">
                                <small class ="text-muted">${result.original_title}</small> 
                                <a href ="#" class ="product-name"> <i class ="fa fa-star"><span class ="text-star">${result.vote_average}</span></i></a> 
                                <div class ="small m-t-xs">
                                </div> 
                                <div class ="m-t text-righ">
                                    <a href = "#" class ="btn btn-xs btn-outline btn-primary search-movie" id="search-detail${result.id}">Detail<i class ="fa fa-long-arrow-right"></i></a >
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div>`);
                let searchItem = document.querySelector(`#search-detail${result.id}`);
                // console.log(searchItem);

                let searchItemClick = function(Movie) {
                    return function() {
                        notify(`${Movie.title} coming soon!`);
                    }
                }
                searchItem.addEventListener('click', searchItemClick(result))
            }
        } catch (error) {
            let message = `${searchElement.value} is not found`;
            notify(message);
        }
    }
    if (searchElement) {
        searchElement.clickEvent = onButtonSearchClicked;
    }
}
export default main;