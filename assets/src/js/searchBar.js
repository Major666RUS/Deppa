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
  $('.js-catalog').click(function(event) {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(this).next('.searchBar_catalogWrapper').slideUp();
    } else {
      $('.searchBar_navItem__hasChildren').removeClass('active');
      if ($('.searchBar_catalogWrapper:visible').length) {
        var _this = $(this);
        $('.searchBar_catalogWrapper:visible').slideUp(400, function() {
          _this.parent().addClass('active');
          _this.next('.searchBar_catalogWrapper').slideToggle();
        });
      } else {
        $(this).parent().addClass('active');
        $(this).next('.searchBar_catalogWrapper').slideToggle();
      }
    }
  });
  $('.searchBar_devicesBrand').click(function() {
    $('.searchBar_devicesBrand, .searchBar_devicesListItem, .searchBar_devicesList').removeClass('active');
    $('[data-id=' + $(this).attr('data-id') + ']').addClass('active');
  });
  $('.searchBar_devicesListItem').click(function() {
    $('.searchBar_devicesListItem, .searchBar_devicesListItem > .searchBar_devicesList').removeClass('active');
    $('[data-id=' + $(this).attr('data-id') + ']').addClass('active');
  })
})