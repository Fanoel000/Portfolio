const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
});


