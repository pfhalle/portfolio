const burger = document.getElementById('burger-toggle');
const menu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    // Slår på/av 'active' klassen på menyen så den slider inn
    menu.classList.toggle('active');
    
    // Slår på/av 'open' klassen på burgeren så den blir et kryss
    burger.classList.toggle('open');
});