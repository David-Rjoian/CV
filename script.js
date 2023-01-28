window.onload = function () {
    let button = document.getElementById("button");
    let menu = document.getElementById("menu");
}

let counter = 0;

button.onclick = function () {
    if (counter == 0) {
        menu.style.transform = "translate(0px,0px)";
        counter += 1;
    } else {
        menu.style.transform = "translate(-80%,0px)";
        counter -= 1;
    };
};

let main = document.getElementById("linkMain");

main.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

let work = document.getElementById("linkWork");
let workTarget = document.getElementById("workTarget");

work.addEventListener("click", function () {
    workTarget.scrollIntoView({ behavior: "smooth", block: "start" });
});

let edu = document.getElementById("linkEdu");
let eduTarget = document.getElementById("eduTarget");

edu.addEventListener("click", function () {
    eduTarget.scrollIntoView({ behavior: "smooth", block: "start" });
});

let lang = document.getElementById("linkLang");
let langTarget = document.getElementById("langTarget");

lang.addEventListener("click", function () {
    langTarget.scrollIntoView({ behavior: "smooth", block: "start" });
});

let prog = document.getElementById("linkProg");
let progTarget = document.getElementById("progTarget");

prog.addEventListener("click", function () {
    progTarget.scrollIntoView({ behavior: "smooth", block: "start" });
});

let themeButton = document.getElementById("themeButton");
let themeNow = 0;

themeButton.onclick = function () {
    if (themeNow == 0) {
        document.getElementById("theme").href = "dark.css";
        themeNow += 1;
    } else {
        document.getElementById("theme").href = "light.css";
        themeNow -= 1;
    };
};

if (window.innerWidth < 1300) {
    menu.style.display = "none";
    themeButton.style.display = "none";
};
