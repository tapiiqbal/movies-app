class Api {
    static getNowMovies() {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/movie/now_playing?` + buildURLQuery({
                api_key: apiToken,
                laguage: "en-US",
                page: "1",
                region: ""
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                localStorage.setItem("page-now", responseJson.page);
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }
    static getUpcomingMovies() {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/movie/upcoming?` + buildURLQuery({
                api_key: apiToken,
                laguage: "en-US",
                page: "1",
                region: ""
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                localStorage.setItem("page-now", responseJson.page);
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }

    static getTopMovies() {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/trending/all/day?` + buildURLQuery({
                api_key: apiToken
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }
    static getFavouriteMovies() {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/movie/popular?` + buildURLQuery({
                api_key: apiToken
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }
    static getTvMovies() {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/tv/popular?` + buildURLQuery({
                api_key: apiToken
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }

    static getPageNowMovies(page) {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const buildURLQuery = obj =>
            Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

        return fetch(`https://api.themoviedb.org/3/movie/upcoming?` + buildURLQuery({
                api_key: apiToken,
                laguage: "en-US",
                page: page,
                region: ""
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                localStorage.setItem("page-now", responseJson.page);
                // if (responseJson.total_results > 0) {
                // console.log(responseJson);
                return Promise.resolve(responseJson.results);
                // } else {
                // return Promise.reject(`not found`);
                // }
            })
    }
}
export default Api;