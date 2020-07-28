const loadPage = async(page) => {
    const response = await fetch('pages/' + page + '.html');
    // get Html
    const responseHtml = await response.text();
    // get element
    const content = document.querySelector("#body-content");

    if (response.status == 200) content.innerHTML = responseHtml;
    else if (response.status == 404) {
        loadPage("404");
    } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
    }
}

let page = window.location.hash.substr(1);
if (page === "") loadPage("detail");
else loadPage(page);