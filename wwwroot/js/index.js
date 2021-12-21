const iframe = document.getElementById("frame");
var page = 1;

function fade(ev) {
    iframe.contentWindow.document.getElementsByClassName("center")[0].style.opacity = 0;
}

function load(ev) {
    setTimeout(() => {
        iframe.setAttribute("src", `pages/${page}.html`);
    }, 500);
}

function nextPage(ev) {
    fade();
    page++;
    load();
}

function prevPage(ev) {
    fade();
    page--;
    load();
}
document.body.onload = load;
document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;