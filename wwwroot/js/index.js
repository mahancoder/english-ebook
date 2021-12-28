const iframe = document.getElementById("frame");
var page = 1;
var audio = new Audio();
var playing = false;
function fade(ev) {
    iframe.contentWindow.document.getElementsByClassName("center")[0].style.opacity = 0;
}

const playButton = document.getElementById("sound");
function load(ev) {
    setTimeout(() => {
        iframe.setAttribute("src", `pages/${page}.html`);
    }, 500);
    audio = new Audio(`sounds/${page}.m4a`);
    audio.addEventListener("loadeddata", () => { playButton.style.backgroundImage = "url(\"wwwroot/sound.png\")"; playButton.disabled = false; } );
    audio.addEventListener("ended", () => { playButton.style.backgroundImage = "url(\"wwwroot/sound.png\")"; playing=false; } );
}

function nextPage(ev) {
    if (page == 19) {
        return;
    }
    page++;
    playButton.disabled = true;
    playButton.style.backgroundImage = "url(\"wwwroot/loading.gif\")";
    fade();
    load();
}

function prevPage(ev) {
    if (page == 1) {
        return;
    }
    page--;
    playButton.disabled = true;
    playButton.style.backgroundImage = "url(\"wwwroot/loading.gif\")";
    try {
        fade();
    }
    catch (c) {
        console.log("Fade error")
    }
    load();
}
function toggle() {
    if (playing) {
        audio.pause();
        playing = false;
        playButton.style.backgroundImage = "url(\"wwwroot/sound.png\")";
    }
    else {
        audio.play();
        playing = true;
        playButton.style.backgroundImage = "url(\"wwwroot/pause.png\")";
    }
}
document.body.onload = load;
document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;
playButton.onclick = toggle;