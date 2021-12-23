const iframe = document.getElementById("frame");
var page = 1;
var audio = new Audio();
var playing = false;
function fade(ev) {
    iframe.contentWindow.document.getElementsByClassName("center")[0].style.opacity = 0;
}

function load(ev) {
    setTimeout(() => {
        iframe.setAttribute("src", `pages/${page}.html`);
    }, 500);
    audio = new Audio(`sounds/${page}.mp3`);
    audio.addEventListener("loadeddata", () => { document.getElementById("sound").style.backgroundImage = "url(\"wwwroot/sound.png\")"; document.getElementById("sound").disabled = false; } );
    audio.addEventListener("ended", () => { document.getElementById("sound").style.backgroundImage = "url(\"wwwroot/sound.png\")"; playing=false; } );
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
function toggle() {
    if (playing) {
        audio.pause();
        playing = false;
        document.getElementById("sound").style.backgroundImage = "url(\"wwwroot/sound.png\")";
    }
    else {
        audio.play();
        playing = true;
        document.getElementById("sound").style.backgroundImage = "url(\"wwwroot/pause.png\")";
    }
}
document.body.onload = load;
document.getElementById("next").onclick = nextPage;
document.getElementById("prev").onclick = prevPage;
document.getElementById("sound").onclick = toggle;