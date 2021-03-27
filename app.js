
const burger = document.querySelector(".burger");

const sidebar = document.querySelector('.sidebar');

const closeBtn = document.querySelector('#closeBtn');

// burger event
burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-close');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-close');
})