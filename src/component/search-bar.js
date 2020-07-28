class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <div class="row mt-3 justify-content-center">
            <div class="col-md-8">
                <h1 class="text-center">Search Movie</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Movie title.." id="searchElement">
                    <div class="input-group-append">
                        <button class="btn btn-dark" type="button" id="searchButton">Search</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);