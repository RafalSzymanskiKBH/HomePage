   console.log("Czesc!");
{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const changeDark = document.querySelector(".js-changeDark");
        body.classList.toggle("cs--dark");

        changeDark.innerText =
            (body.classList.contains("cs--dark")) ? "jasny" : "ciemny";
    };

    const toggleTable = () => {
        const table__gym = document.querySelector(".js--table__gym");
        const changeTable = document.querySelector(".js--changeTable");

        table__gym.classList.toggle("js--changeTable");

        changeTable.innerText =
            (table__gym.classList.contains("js--changeTable")) ? "Otworz" : "Usun";
    };

    const togglePicture = () => {
        const header__pictureSport = document.querySelector(".js--header__pictureSport");
        const changePicture = document.querySelector(".js--changePicture");
        header__pictureSport.classList.toggle("js--changePicture");

        changePicture.innerText =
            (header__pictureSport.classList.contains("js--changePicture")) ? "Otworz" : "Usun";
        
    };

    const init = () => {
        const navigation__dark = document.querySelector(".js--navigation__buttonDark");
        navigation__dark.addEventListener("click", toggleBackground);
        const table__button = document.querySelector(".js--table__button");
        table__button.addEventListener("click", toggleTable);
        const section__buttonPicture = document.querySelector(".js--section__buttonPicture");
        section__buttonPicture.addEventListener("click", togglePicture);
    };

    init();

}