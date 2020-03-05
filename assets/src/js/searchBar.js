$(function(){
  $('.js-search, .js-searchClose').click(function(event) {
    $('.js-searchBarNav').toggle();
    $('.js-searchInput').toggle();
    $('.searchBar_search__desktop').toggle();
    if ($(event.target).is('.js-search')) {
      $('.searchBar_close').css('display', 'flex');
      $('.js-searchInput').focus();
    }
    else {
      $('.searchBar_close').hide();
    }
  });
  $('.searchBar_navItem__hasChildren').click(function(event) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.searchBar_navItem__hasChildren').removeClass('active');
      $(this).addClass('active');
    }
  });
})