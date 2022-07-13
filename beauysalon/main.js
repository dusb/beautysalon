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






// showservice
$('#select1').change(function () {
  const val = $(this).val();



  if ($('#' + val).length) {
    $('#step2').show();
    $('#allshow').hide();

    $('#step2 select').hide();

    $('#' + val).show();

  } else if (val == 'all') {

    $('#allshow').show();
    $('#step2').hide();
  }
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbxtHa6HriiYbtjTv98-a-pkGpyayqFC_gMAJbVhofFuzJ8VCjoK2S7gMnx55O9o7YKmwg/exec'
const form = document.querySelector('#form')
const btn = document.querySelector('#submit')


form.addEventListener('submit', e => {
  e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Отправляем..."

  console.log(form)
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      btn.disabled = false
      btn.innerHTML = "Ваша заявка принята"
      alert('Ваша заявка принята', response)
      form.reset()
    })
    .catch(error => {
      btn.disabled = false
      btn.innerHTML = "Submit"
      alert('Ошибочка, попробуйте снова:(', error.message)
    })
})







