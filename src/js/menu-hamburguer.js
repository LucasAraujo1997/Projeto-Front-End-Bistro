document.addEventListener("DOMContentLoaded", () => {
  const hamburguerMenu = document.querySelector(".hamburguer-menu");
  const menuList = document.querySelector(".menu");

  hamburguerMenu.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (menuList.classList.contains("active")) {
        menuList.classList.remove("active");
      }
    }
  });
});
