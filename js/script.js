console.log("Czesc!");

let section__buttonPicture = document.querySelector(".section__buttonPicture");
let table__button = document.querySelector(".table__button");
let navigation__dark = document.querySelector(".navigation__dark");
let body = document.querySelector(".body");
let table__gym = document.querySelector(".table__gym");
let header__pictureSport = document.querySelector(".header__pictureSport");
let changeDark = document.querySelector(".changeDark");
let changeTable = document.querySelector(".changeTable");
let changePicture = document.querySelector(".changePicture");

table__button.addEventListener("click", () => {
    table__gym.classList.toggle("js--changeTable");

    changeTable.innerText =
        (table__gym.classList.contains("js--changeTable")) ? "Otworz" : "Usun";

});

section__buttonPicture.addEventListener("click", () => {
    header__pictureSport.classList.toggle("js--changePicture");

    changePicture.innerText =
        (header__pictureSport.classList.contains("js--changePicture")) ? "Otworz" : "Usun";
});
navigation__dark.addEventListener("click", () => {
    body.classList.toggle("cs--dark");

    changeDark.innerText =
        (body.classList.contains("cs--dark")) ? "jasny" : "ciemny";
});