$(document).foundation()

// close foundation modals on click
$('.reveal').on('click', (e) => {
  $('.reveal').foundation('close');
});

// modified animateCSS helper, from https://github.com/daneden/animate.css
function animateCSS(element, animationName, callback, speed = "slow") {
  const node = element;
  node.classList.add('animated', animationName, speed);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName, speed);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd);
};

/** On page load animations **/
$(document).ready(() => {
  const articleGrids = [...document.querySelectorAll('article.grid-container')];
  articleGrids.forEach(article => animateCSS(article, 'fadeIn'));

  /** slide home page portfolio pages up **/
  const portfolioCells = [...document.querySelectorAll('.portfolio-index .cell')];
  portfolioCells.forEach(cell => animateCSS(cell, 'fadeInUp'));
});

