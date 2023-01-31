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

let soft = document.getElementById("linkSoft");
let softTarget = document.getElementById("softTarget");

soft.addEventListener("click", function () {
    softTarget.scrollIntoView({ behavior: "smooth", block: "start" });
});



let themeButton = document.getElementById("themeButton");
let themeNow = 0;

themeButton.onclick = function () {
    if (themeNow == 0) {
        document.getElementById("theme").href = "dark.css";
        document.getElementById("L").style.display = "none";
        document.getElementById("D").style.display = "block";
        themeNow += 1;
    } else {
        document.getElementById("theme").href = "light.css";
        document.getElementById("L").style.display = "block";
        document.getElementById("D").style.display = "none";
        themeNow -= 1;
    };
};

let descOne = document.getElementById("descOne");
let blockOne = document.getElementById("blockOne");
blockOne.style.display = "none";

descOne.onclick = function () {
    if (blockOne.style.display == "none") {
        blockOne.style.display = "block";
    } else {
        blockOne.style.display = "none";
    };
};

let descTwo = document.getElementById("descTwo");
let blockTwo = document.getElementById("blockTwo");
blockTwo.style.display = "none";

descTwo.onclick = function () {
    if (blockTwo.style.display == "none") {
        blockTwo.style.display = "block";
    } else {
        blockTwo.style.display = "none";
    };
};

let descThree = document.getElementById("descThree");
let blockThree = document.getElementById("blockThree");
blockThree.style.display = "none";

descThree.onclick = function () {
    if (blockThree.style.display == "none") {
        blockThree.style.display = "block";
    } else {
        blockThree.style.display = "none";
    };
};

let descFour = document.getElementById("descFour");
let blockFour = document.getElementById("blockFour");
blockFour.style.display = "none";

descFour.onclick = function () {
    if (blockFour.style.display == "none") {
        blockFour.style.display = "block";
    } else {
        blockFour.style.display = "none";
    };
};

let descFive = document.getElementById("descFive");
let blockFive = document.getElementById("blockFive");
blockFive.style.display = "none";

descFive.onclick = function () {
    if (blockFive.style.display == "none") {
        blockFive.style.display = "block";
    } else {
        blockFive.style.display = "none";
    };
};

let descSix = document.getElementById("descSix");
let blockSix = document.getElementById("blockSix");
blockSix.style.display = "none";

descSix.onclick = function () {
    if (blockSix.style.display == "none") {
        blockSix.style.display = "block";
    } else {
        blockSix.style.display = "none";
    };
};

window.onload = function () {
    let button = document.getElementById("button");
    let menu = document.getElementById("menu");
};
