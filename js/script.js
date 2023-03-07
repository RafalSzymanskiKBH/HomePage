console.log("Czesc!");

const section__buttonPicture = document.querySelector(".section__buttonPicture");
const table__button = document.querySelector(".table__button");
const navigation__dark = document.querySelector(".navigation__dark");
const body = document.querySelector(".body");
const table__gym = document.querySelector(".table__gym");
const header__pictureSport = document.querySelector(".header__pictureSport");
const changeDark = document.querySelector(".changeDark");
const changeTable = document.querySelector(".changeTable");
const changePicture = document.querySelector(".changePicture");

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