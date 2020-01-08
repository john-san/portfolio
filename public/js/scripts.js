$(document).foundation()

// close foundation modals on click
$('.reveal').on('click', (e) => {
  $('.reveal').foundation('close');
});