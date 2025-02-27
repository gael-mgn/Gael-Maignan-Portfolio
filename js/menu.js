
let menuOpened = false;
let loaded = false;
let menusss = false;


function toggleMenu() {
    const menu = document.getElementById('menu');

    if (menuOpened) {
        menuOpened = false;
        menu.style.display = "none";

    }
    else {
        menuOpened = true;
        menu.style.display = "flex";
    }
    menusss = true;


}

