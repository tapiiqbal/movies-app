class TabsBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s3"><a class="active" href="#new-movie"><i class="material-icons">fiber_new</i></a></li>
                        <li class="tab col s3"><a href="#top-movie"><i class="material-icons">trending_up</i></a></li>
                        <li class="tab col s3"><a href="#favourite-movie"><i class="material-icons">star</i></a></li>
                        <li class="tab col s3"><a href="#tv-movie"><i class="material-icons">tv</i></a></li>
                    </ul>
                </div>
                <div id="new-movie" class="row col s12"></div>
                <div id="top-movie" class="col s12"></div>
                <div id="favourite-movie" class="col s12"></div>
                <div id="tv-movie" class="col s12"></div>
            </div>`;
        const elems = document.querySelector('.tabs');
        M.Tabs.init(elems);
    }
}
customElements.define("tabs-bar", TabsBar);