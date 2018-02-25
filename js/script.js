//Mobile menu
$('.nav-open').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('nav-open--show');
});

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width > 1000) {
  $('.nav__item').hover(function() {
    $(this).find('.nav__popup').stop().slideToggle('fast');
  });
}
