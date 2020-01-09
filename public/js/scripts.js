$(document).foundation()

// close foundation modals on click
$('.reveal').on('click', (e) => {
  $('.reveal').foundation('close');
});

// modified animateCSS helper, from https://github.com/daneden/animate.css
function animateCSS(element, animationName, callback) {
  const node = element;
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd);
};


$(document).ready(() => {
  const portfolioCells = [...document.querySelectorAll('.portfolio-index .cell')];
  portfolioCells.forEach((cell) => {
    animateCSS(cell, 'fadeInLeft');
  });
});