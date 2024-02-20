const collapsibles = document.querySelectorAll('.collapsible');
const clickables = document.querySelectorAll('.clickable');

clickables.forEach((click) => {
  click.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('open');
    e.target.classList.toggle('open')
  });
});
