const collapsibles = document.querySelectorAll('.collapsible');
const clickables = document.querySelectorAll('.clickable');
const topNav = document.querySelector('.top-nav');
const togglerImg = document.querySelector('.toggler');
const togglerContainer = document.querySelector('.toggler-container');

// Collapsibles

clickables.forEach((click) => {
  click.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('open');
    e.target.classList.toggle('open');
  });
});

function topNavAnimation() {
  myWindowWith = window.innerWidth;
  if (myWindowWith > '768px') {
    togglerContainer.addEventListener('click', () => {
      topNav.classList.toggle('active');
      // topNav.classList.add('active');
    });
  } else {
    togglerContainer.addEventListener('click', () => {
      topNav.classList.toggle('active');
      topNav.classList.toggle('topnav-max-heith');
    });
  }
}
// Top nav animation
let myWindowWith;
window.addEventListener('DOMContentLoaded', () => {
  topNavAnimation();
});
// window.addEventListener('resize', () => {
//   topNavAnimation();
// });
// console.log(myWindowWith + ' is ');

// Top Nav Menu Toggler Animation

togglerContainer.addEventListener('click', () => {
  togglerImg.classList.toggle('toggler-active');
});
