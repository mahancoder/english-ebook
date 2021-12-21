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
    page++;
    fade();
    load();
}

function prevPage(ev) {
    page--;
    try {
        fade();
    }
    catch (c) {
        console.log("Fade error")
    }
    load();
}
document.body.onload = load;
document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;