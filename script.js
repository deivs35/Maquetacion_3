const menutoggle = document.getElementById ('menu-toggle');
const menu = document.getElementById('menu');

menutoggle.addEventListener('click', () => {
    menu.classList.toggle('active')
}) 