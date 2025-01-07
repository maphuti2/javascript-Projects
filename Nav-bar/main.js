const menu = document.getElementById('mn');
const headerItems = document.querySelectorAll('.nav-list ul');

menu.addEventListener('click', () => {
    headerItems.forEach(item => {item.classList.toggle('navlist-active');})
});