$(function(){
  function calcColumnWidth() {
    var containerWidth = parseInt($('.container').css('maxWidth'));
    var cartWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
    // var catalogWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
    $('.leftColumn .container').css('marginLeft', ($('body').innerWidth() - containerWidth) / 2);
    if ($('.leftColumn__thin').length) {
      $('.leftColumn .container').css({
        'width': $('body').innerWidth() - cartWrapperWidth - (($('body').innerWidth() - containerWidth) / 2) - 15
      })
    } else {
      $('.leftColumn .container').css({
        'width': containerWidth
      })
    }

    $('.cart_wrapper').css('width', cartWrapperWidth + 'px');
  }
  
  calcColumnWidth();

  $(window).on('resize', function() {
    calcColumnWidth();
  })
  
  $('#cart, .cart_close').click(function() {
    $('.catalog_filtersColumn').toggleClass('col-md-3').toggleClass('col-md-4');
    $('.catalog_productsWrapper').parent().toggleClass('col-md-9').toggleClass('col-md-8');
    $('.catalog_productsFiltersSortResult').toggle();
    calcColumnWidth();
  })
})