// Импортируем jQuery
//= ../../../node_modules/jquery/dist/jquery.js

// Импортируем Popper
//= ../../../node_modules/popper.js/dist/umd/popper.js

// Импортируем необходимые js-файлы Bootstrap 4
//= ../../../node_modules/bootstrap/js/dist/util.js
//= ../../../node_modules/bootstrap/js/dist/alert.js
//= ../../../node_modules/bootstrap/js/dist/button.js
//= ../../../node_modules/bootstrap/js/dist/carousel.js
//= ../../../node_modules/bootstrap/js/dist/collapse.js
//= ../../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../../node_modules/bootstrap/js/dist/popover.js
//= ../../../node_modules/bootstrap/js/dist/scrollspy.js
//= ../../../node_modules/bootstrap/js/dist/tab.js
//= ../../../node_modules/bootstrap/js/dist/toast.js

// Импортируем другие js-файлы
//= ion.rangeSlider.min.js
//= searchBar.js
//= mainMenu.js
//= footer.js
//= modal.js

/* scroll script */
$(function(){
  var scrollDif = window.scrollY

  function scrollInit() {
    if (window.innerWidth >= 980) {
      if (window.scrollY < 70) {
        $('body').css('paddingTop', '0px');
        $('.searchBar').removeClass('position-fixed');
        $('.header').removeClass('position-fixed');
        $('.searchBar').css('top', '0px');
      } else {
        $('body').css('paddingTop', '132px');
        $('.searchBar').css('top', '70px');
        $('.searchBar').addClass('position-fixed');
        $('.header').addClass('position-fixed');
      }
    }
    else {
      $('.searchBar').css('top', '64px');
      $('body').css('paddingTop', '116px');
    }
  }

  scrollInit();

  $(window).on('resize', scrollInit);

  $(window).on('scroll', function(e) {
    if (window.innerWidth >= 980) {
      scrollDif = window.scrollY - scrollDif;
      if (scrollDif > 10) {
        if (window.scrollY >= 70) {
          $('body').css('paddingTop', '62px');
          $('.searchBar').addClass('position-fixed');
          $('.searchBar').css('top', '0px');
          $('.header').animate({
            height: '0'
          }, 250, 'linear', function() {
            $('.header').removeClass('position-fixed');
          })
        }
      } else if (scrollDif < -10) {
        if (window.scrollY < 70) {
          $('body').css('paddingTop', '0px');
          $('.searchBar').removeClass('position-fixed');
          $('.header').removeClass('position-fixed');
          $('.searchBar').css('top', '0px');
        } else {
          $('body').css('paddingTop', '132px');
          $('.searchBar').css('top', '70px');
          $('.header').addClass('position-fixed');
          $('.header').animate({
            height: '70px'
          }, 250, 'linear');
        }
      }
      scrollDif = window.scrollY;
    }
  })
})