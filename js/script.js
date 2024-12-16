
document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    let menuIsOpen = false;


    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
        console.log(`Lien du menu cliqué`);
        if (menuIsOpen){
            menuIsOpen = false;
            menu.style.display = 'none';
        }
        else {
            menuIsOpen = true;
            menu.style.display = 'flex';
        }
    });


    function checkScreenSize() {
  if (window.innerWidth > 768) {
    menu.style.display = 'flex';
  }
}

    window.addEventListener('resize', checkScreenSize);

    document.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêcher la propagation du clic à partir du menu
    });
});