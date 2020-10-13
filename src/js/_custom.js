jQuery(document).ready(function ($) {
  function top_btn() {
    var button = $('.top-btn');
    var height_page = $(document).outerHeight(true);
    var delay = 1000;
    $(window).scroll(function () {
      if ($(this).scrollTop() > (height_page / 2)) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
    button.click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  }
  top_btn();
  $('.hamburger').click(function (e) {
    $('.block-menu').css('bottom', '0');
  });
  $('.close-menu').click(function () {
    $('.block-menu').css('bottom', '140%');

  });
});
