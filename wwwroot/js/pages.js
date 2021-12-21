document.body.onload = () => {
    document.getElementsByClassName("center")[0].style.opacity = 1;
    var fades = document.querySelectorAll("[class*=\"fade\"]");
    var reg = /^fade/;
    for (const elem of fades) {
        var delay = 0;
        for (const cls of elem.classList) {
            if (reg.test(cls)) {
                delay = cls.slice(5);
                break;
            }
        }
        elem.style.setProperty("transition", `opacity 0.5s ease ${delay}s`);
        elem.style.setProperty("opacity", 1);
    }
};