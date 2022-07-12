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
// const form = document.getElementById('form');
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//     method: "POST",
//     body: new FormData(form),
//   }).then(
//     response => response.json(),
//     form.reset(),
//     alert('Ваша заявка принята')

//   )
// });


const form = document.getElementById('form')
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGILagAkK9r-yKzx_HgY5xXFMd0Ml1O0-aXHkENEd9Waj-J0SGY7OJ5ZLOUfDJ844F/exec'

form.addEventListener('submit', e => {
  e.preventDefault()

  console.log(form)
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(
        response => response.json(),
        form.reset(),
        alert('Ваша заявка принята')
    
      )
    .catch(error => alert('Error!', error.message))
})

// showservice
$('#select1').change(function(){
  const val = $(this).val();
  
  
  
  if($('#' + val).length){
    $('#step2').show();
    $('#allshow').hide();
     
    $('#step2 select').hide();
    
    $('#' + val).show();
    
  }else if(val == 'all'){
    
    $('#allshow').show();
    $('#step2').hide();
  }
})

const url = 'https://script.google.com/macros/s/AKfycbwGILagAkK9r-yKzx_HgY5xXFMd0Ml1O0-aXHkENEd9Waj-J0SGY7OJ5ZLOUfDJ844F/exec';









