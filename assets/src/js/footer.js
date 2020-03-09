$(function(){
  $('.js-footerToggle').click(function(event) {
    if (window.innerWidth < 768) {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    }
  })
  $(window).resize(function() {
    if (window.innerWidth < 768) {
      $('.footer_sectionList').hide();
    } else {
      $('.footer_sectionList').show();
    }
  });
})
