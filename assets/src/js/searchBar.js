function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

$(function(){
  $('.js-search, .js-searchClose').click(function(event) {
    $('.js-searchBarNav').toggle();
    $('.js-searchInput').toggle();
    $('.js-searchResults').hide();
    $('.searchBar_search__desktop').toggle();
    if ($(event.target).is('.js-search')) {
      $('.searchBar_close').css('display', 'flex');
      $('.js-searchInput').focus();
    }
    else {
      $('.searchBar_close').hide();
      $('.js-searchInput').val('');
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

  var debounceFunc = debounce(function() {

    // имитация запроса
    //if (window.innerWidth > 979) {
      $('.js-searchResults').show();
      $('body').addClass('noScroll');
    //}
  }, 1000);

  $('.js-searchClear').on('click', function() {
    $('.js-searchInput').val('');
    $('.js-searchResults').hide();
    $('body').removeClass('noScroll');
    $('.searchBar_closeMobile').css('display', 'none');
  });

  $('.js-searchInput').on('input', function() {
    if (window.innerWidth < 979) {
      if ($('.js-searchInput').val()) {
        $('.searchBar_closeMobile').css('display', 'flex');
      } else {
        $('.searchBar_closeMobile').css('display', 'none');
      }
    }
    debounceFunc();
  });
})