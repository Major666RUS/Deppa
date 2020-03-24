$(function(){

  checkCartVisibility(true);

  $('#cart, .cart_close').on('click', function () { 
      var containerWidth = parseInt($('.container').css('maxWidth'));
      var cartWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
      if ($('#cart').attr('data-cart-visible') == 'hidden') {
        checkCartVisibility(); 
        $('.cart_wrapper').css('position', '');
        $('.cart_wrapper').animate({
          width: cartWrapperWidth
        });
      } else {
        checkCartVisibility(); 
        $('.cart_wrapper').css('position', 'fixed');
        $('.cart_wrapper').animate({
          width: 0
        }); 
      }
      $('.catalog_productsFiltersSortResult').toggle();
      $('.catalog_filtersColumn').toggleClass('col-md-3').toggleClass('col-md-4');
      $('.catalog_productsWrapper').parent().toggleClass('col-md-9').toggleClass('col-md-8');
  });

  function checkCartVisibility(reverse) {  
    var containerWidth = parseInt($('.container').css('maxWidth'));
    var cartWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
      if (reverse) {                   
          if ($('#cart').attr('data-cart-visible') == 'hidden') {
              // $('.leftColumn').css('width', '100%');
              $('.leftColumn .container').css({
                'width': containerWidth
              })
              $('.leftColumn').removeClass('leftColumn__thin');
              $('.catalog_productsTile').removeClass('catalog_productsTile__2');
              $('#cart').attr('data-cart-visible', 'hidden');
          } else {
              // $('.leftColumn').css('width', 'calc(100% - 400px)');
              $('.leftColumn .container').css({
                'width': $('body').innerWidth() - cartWrapperWidth - (($('body').innerWidth() - containerWidth) / 2) - 15,
                // 'minWidth': $('body').innerWidth() - Math.min(cartWrapperWidth, 405) - (($('body').innerWidth() - containerWidth) / 2) - 15
              })
              $('.leftColumn').addClass('leftColumn__thin');
              $('.catalog_productsTile').addClass('catalog_productsTile__2');
              $('#cart').attr('data-cart-visible', 'visible');
          }
      } else {                    
          if ($('#cart').attr('data-cart-visible') == 'visible') {
              // $('.leftColumn').css('width', '100%');
              $('.leftColumn .container').css({
                'width': containerWidth
              })
              $('.leftColumn').removeClass('leftColumn__thin');
              $('.catalog_productsTile').removeClass('catalog_productsTile__2');
              $('#cart').attr('data-cart-visible', 'hidden');
          } else {
              // $('.leftColumn').css('width', 'calc(100% - 400px)');
              $('.leftColumn .container').css({
                'width': $('body').innerWidth() - cartWrapperWidth - (($('body').innerWidth() - containerWidth) / 2) - 15,
                // 'minWidth': $('body').innerWidth() - Math.min(cartWrapperWidth, 405) - (($('body').innerWidth() - containerWidth) / 2) - 15
              })
              $('.leftColumn').addClass('leftColumn__thin');
              $('.catalog_productsTile').addClass('catalog_productsTile__2');
              $('#cart').attr('data-cart-visible', 'visible');
          }
      }
  }

  // cart - delete Item
  $('.cart_itemDelete').on('click', function() {
    $(this).parents('.cart_item').remove();
  });

  function calcColumnWidth() {
    var containerWidth = parseInt($('.container').css('maxWidth'));
    var cartWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
    // var catalogWrapperWidth = containerWidth / 12 * 3 - 15 + (($('body').innerWidth() - containerWidth) / 2);
    $('.leftColumn .container').css('marginLeft', ($('body').innerWidth() - containerWidth) / 2);
    if ($('.leftColumn__thin').length) {
      $('.leftColumn .container').css('width', $('body').innerWidth() - cartWrapperWidth);
      $('.leftColumn .container').css({
        'width': $('body').innerWidth() - cartWrapperWidth - (($('body').innerWidth() - containerWidth) / 2) - 15
      })
    } else {
      $('.leftColumn .container').css('width', '');
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

  if ($('.homePage_grid .cart_wrapper').length) {
    checkCartVisibility(); 
    $('.cart_wrapper').css('position', 'fixed');
    $('.cart_wrapper').animate({
      width: 0
    }); 
  }
})