function mobileNav(){
    const navBtnOpen = document.querySelector("#modalOpen");
    const navBtnClose = document.querySelector("#modalClose");

    const navOverlay = document.querySelector("#mobileNavOverlay");
    const mobileNav = document.querySelector("#mobileNav");
    
    navBtnOpen.onclick = toogleMobileNav;
    navBtnClose.onclick = toogleMobileNav;
    navOverlay.onclick = toogleMobileNav;

    function toogleMobileNav(){
        navOverlay.classList.toggle("mobile-nav-overlay--open");
        mobileNav.classList.toggle("mobile-nav--open");
        document.body.classList.toggle("no-scroll");
    }
}

mobileNav();