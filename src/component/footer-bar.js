class FooterBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            color: black;
            text-align: center;
            padding: 10px;
        }
        </style>
        <div class="row">
            <div class="col-md-6">
                <span>Copyright I.M Industri</span>
            </div>
            <div class="col-md-6 text-right">
                <small>© 2019-2020</small>
            </div>
        </div>`;
    }

}

customElements.define("footer-bar", FooterBar);