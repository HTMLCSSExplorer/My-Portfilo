const collapsibles = document.querySelectorAll('.collapsible');
const clickables = document.querySelectorAll('.clickable');
const topNav = document.querySelector('.top-nav');
// Collapsibles

clickables.forEach((click) => {
  click.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('open');
    e.target.classList.toggle('open');
  });
});
// Top nav animation
document.querySelector('.toggler-container').addEventListener('click', () => {
  topNav.classList.toggle('max-width');
});
