document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll("main.main-root article");
  const navLinks = document.querySelectorAll("a[href^='#']");
  const sectionMap = document.querySelector("#map");

  function toggleArticleVisibility(targetId) {
    articles.forEach((article) => {
      if (`#${article.getAttribute("id")}` === targetId) {
        article.style.display = "flex";
        article.classList.add("active");
      } else {
        article.style.display = "none";
        article.classList.remove("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement && targetElement.tagName.toLowerCase() === "article") {
        ev.preventDefault();
        toggleArticleVisibility(targetId);
      } else if (
        targetElement &&
        targetElement.tagName.toLowerCase() === "section"
      ) {
        ev.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const initialHash = window.location.hash || "#home";
  if (initialHash !== "#home") {
    toggleArticleVisibility(initialHash);
  }
  /* --------------------------------------------------------------- */
  const headerSectionTitles = document.querySelectorAll(".header-btn-title");

  headerSectionTitles.forEach((titleButton) => {
    titleButton.addEventListener("click", () => {
      const parentSection = titleButton.closest("section");

      const menuCategoryGrid = parentSection.querySelector(
        ".menu-category-grid"
      );

      const isHidden =
        window.getComputedStyle(menuCategoryGrid).display === "none";
      menuCategoryGrid.style.display = isHidden ? "flex" : "none";
    });
  });
});
