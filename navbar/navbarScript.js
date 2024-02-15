const navList = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});
