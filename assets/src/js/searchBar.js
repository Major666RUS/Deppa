// function debounce(func, wait, immediate){
//   var timeout, args, context, timestamp, result;
//   if (null == wait) wait = 100;

//   function later() {
//     var last = Date.now() - timestamp;

//     if (last < wait && last >= 0) {
//       timeout = setTimeout(later, wait - last);
//     } else {
//       timeout = null;
//       if (!immediate) {
//         result = func.apply(context, args);
//         context = args = null;
//       }
//     }
//   };

//   var debounced = function(){
//     context = this;
//     args = arguments;
//     timestamp = Date.now();
//     var callNow = immediate && !timeout;
//     if (!timeout) timeout = setTimeout(later, wait);
//     if (callNow) {
//       result = func.apply(context, args);
//       context = args = null;
//     }

//     return result;
//   };

//   debounced.clear = function() {
//     if (timeout) {
//       clearTimeout(timeout);
//       timeout = null;
//     }
//   };
  
//   debounced.flush = function() {
//     if (timeout) {
//       result = func.apply(context, args);
//       context = args = null;
      
//       clearTimeout(timeout);
//       timeout = null;
//     }
//   };

//   return debounced;
// };

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
    $('.js-searchResults').show();
  }, 1000);

  $('.js-searchInput').on('input', debounceFunc);
})