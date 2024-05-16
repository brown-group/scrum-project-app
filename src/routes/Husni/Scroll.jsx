import{ useEffect } from 'react';

function ScrollNavbar() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const menu = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      header.classList.toggle("shadow", window.scrollY > 0);
      navbar.classList.remove("active");
    };

    const handleMenuClick = () => {
      navbar.classList.toggle("active");
    };

    window.addEventListener("scroll", handleScroll);
    menu.addEventListener("click", handleMenuClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.removeEventListener("click", handleMenuClick);
    };
  }, []);

//   return null; // Since this component only deals with side effects, it doesn't render anything
}

export default ScrollNavbar;
