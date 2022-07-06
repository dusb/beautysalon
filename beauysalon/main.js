/* <burger */

$('#menu').click(function () {
  $(this).toggleClass('fa-times');
  $('.navbar').toggleClass('nav-toggle');

});






// modal window
$('.open-popup').click(function (e) {
  e.preventDefault();
   $('.popup-bg').fadeIn(500);
});



$('.close-popup').click(function () {
  $('.popup-bg').fadeOut(800);
});
/* mask of tel */
$(document).ready(function () {
  $("#phone").mask("+7 (999) 99-99-999")
});


// sheetdb
const form = document.getElementById('form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  }).then(
    response => response.json(),
    form.reset(),
    alert('Ваша заявка принята')

  )
});





