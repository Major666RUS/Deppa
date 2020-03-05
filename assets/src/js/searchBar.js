$(function(){
  $('.js-search, .js-searchClose').click(function(event) {
    $('.js-searchBarNav').toggle();
    $('.js-searchInput').toggle();
    $('.searchBar_search__desktop').toggle();
    if ($(event.target).is('.js-search')) {
      $('.searchBar_close').css('display', 'flex');
    }
    else {
      $('.searchBar_close').hide();
    }
  });
})