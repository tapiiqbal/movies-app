class DataSource {

    static SearchMovie(keyword) {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(`https://api.themoviedb.org/3/search/movie?` + $.param({
                api_key: apiToken,
                laguage: "en-US",
                query: keyword,
                page: "",
                include_adult: "",
                region: "",
                year: "",
                primary_release_year: ""
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.total_results > 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            })


    }

    static SearchPlayNowMovie(keyword) {
        const apiToken = "5e7d0a96ebb185659f3b32eea432df33";

        const options = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?` + $.param({
                api_key: apiToken,
                laguage: "en-US",
                page: "1",
                region: ""
            }), options)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.total_results > 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            })
    }
}
const showResponseMessage = (message = "Check your internet connection") => {
    alert(message)
};
export default DataSource;