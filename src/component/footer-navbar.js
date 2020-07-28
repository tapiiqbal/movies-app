class FooterNavbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </head>
        <style>
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #131313;
            color: white;
            text-align: center;
            z-index: 1;
            padding: 0px;
            border-radius: 5px;
        }
        
        .nav {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        
        .nav li {
            display: inline;
            margin-left: 20px;
        }
        
        .nav a {
            display: inline-block;
            padding: 10px;
            width: 14%;
            text-align: center;
            transition: all 0.3s ease;
            color: white;
            font-size: 28px;
        }
        </style>
        <footer>
            <div class="footer">
                <ul class="nav">
                    <li><a href="/"><i class="fa fa-home"></i></a></li>
                    <li><a href="/about/"><i class="fa fa-search"></a></li>
                    <li><a href="/about/"><i class="fa fa-envelope"></i></a></li>
                    <li><a href="/about/"><i class="fa fa-globe"></i></a></li>
                    <li><a href="/about/"><i class="fa fa-trash"></i></a></li>
                </ul>
            </div>
        </footer>`;
    }
}
customElements.define("footer-navbar", FooterNavbar);