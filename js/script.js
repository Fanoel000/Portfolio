const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  const isActive = navList.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", isActive); // acessibilidade
  // Alterna a classe 'active' para mostrar ou esconder o menu
});
