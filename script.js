// Abre e fecha o menu mobile
const menuIcon = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show");

  // Troca o ícone: hambúrguer ↔ X
  if (menu.classList.contains("show")) {
    menuIcon.classList.replace("bi-list", "bi-x");
  } else {
    menuIcon.classList.replace("bi-x", "bi-list");
  }
});
