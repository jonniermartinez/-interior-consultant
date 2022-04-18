function burguerToX() {
    // const iconNav = document.getElementById("icon-nav");
    // iconNav.className += " active";
    // // iconNav.removeClass('button-nav--toggle');

    const navList = document.getElementById("nav-list");
    navList.className += " displayNone";
    const activate = document.getElementById("menu");
    activate.classList.remove('displayNone');
    const content = document.getElementById("content");
    content.className += " displayNone"
}
function XtoBurger() {
    const navList = document.getElementById("nav-list");
    navList.classList.remove('displayNone');
    const activate = document.getElementById("menu");
    activate.className += " displayNone";
    const content = document.getElementById("content");
    content.classList.remove('displayNone');

}