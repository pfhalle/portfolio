// BURGERMENY

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// DARK MODE
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.innerText = "Light Mode";
}

toggleBtn.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        theme = 'dark';
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

