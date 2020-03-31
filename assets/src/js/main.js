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
//= cart.js

/* scroll script */
$(function(){
  var scrollDif = window.scrollY;

  function scrollInit() {
    if (window.innerWidth >= 980) {
      if (window.scrollY >= 70) {
        // $('body').css('paddingTop', '62px');
        $('.searchBar').addClass('position-sticky');
      } else {
        // $('body').css('paddingTop', '0px');
        $('.searchBar').removeClass('position-sticky');
      }
    }
  }

  scrollInit();

  $(window).on('resize', scrollInit);

  $(window).on('scroll', function(e) {
    if (window.innerWidth >= 980) {
      if (window.scrollY >= 70) {
        // $('body').css('paddingTop', '62px');
        $('.searchBar').addClass('position-sticky');
      } else {
        // $('body').css('paddingTop', '0px');
        $('.searchBar').removeClass('position-sticky');
      }
    }
  });

  // Varitations

  var originalSrc, originalSku, originalHref, originalTitle, originalPrice, originalInStock, original = 1;

  $('.catalog_productsTileItem').hover(function() {
    original = 1;
  });

  $('.catalog_productsListItem').hover(function() {
    original = 1;
  });

  $('.product_variations').hover(function() {
    original = 1;
  });


  $('.catalog_productsTileItemVariationsForm').on('change', function() {
    var $this = $(this);
    var $productItem = $(this).parents('.catalog_productsTileItem');

    $productItem.find('.catalog_productsTileItemImage img').attr('src', $this.find('input[type="radio"]:checked').attr('data-image'));
    $productItem.find('.catalog_productsTileItemImage img').attr('alt', $this.find('input[type="radio"]:checked').attr('data-title'));
    $productItem.find('.catalog_productsTileItemImage img').attr('title', $this.find('input[type="radio"]:checked').attr('data-title'));
    originalSrc = $this.find('input[type="radio"]:checked').attr('data-image');
    $productItem.find('.catalog_productsTileItemSku').html($this.find('input[type="radio"]:checked').attr('data-sku'));
    originalSku = $this.find('input[type="radio"]:checked').attr('data-sku');
    
    if (+$this.find('input[type="radio"]:checked').attr('data-instock') == 1) {
      $productItem.find('.catalog_productsTileItemPrice').removeClass('catalog_productsTileItemPrice__noPrice').html($this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>');          
      originalPrice = $this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>';
      originalInStock = 1;
    } else {
      $productItem.find('.catalog_productsTileItemPrice').addClass('catalog_productsTileItemPrice__noPrice').html('Нет в наличии');
      originalPrice = 'Нет в наличии';
      originalInStock = 0;
    }

    $productItem.find('.catalog_productsTileItemImage').attr('href', $this.find('input[type="radio"]:checked').attr('data-href'));
    originalHref = $this.find('input[type="radio"]:checked').attr('data-href');
    $productItem.find('.catalog_productsTileItemTitle').attr('href', $this.find('input[type="radio"]:checked').attr('data-href'));

    $productItem.find('.catalog_productsTileItemTitle').html($this.find('input[type="radio"]:checked').attr('data-title'));
    originalTitle = $this.find('input[type="radio"]:checked').attr('data-title');
  });
  
  $('.catalog_productsListItem form').on('change', function() {
    var $this = $(this);
    var $productItem = $(this).parents('.catalog_productsListItem');

    $productItem.find('.catalog_productsListItemImage img').attr('src', $this.find('input[type="radio"]:checked').attr('data-image'));
    $productItem.find('.catalog_productsListItemImage img').attr('alt', $this.find('input[type="radio"]:checked').attr('data-title'));
    $productItem.find('.catalog_productsListItemImage img').attr('title', $this.find('input[type="radio"]:checked').attr('data-title'));
    originalSrc = $this.find('input[type="radio"]:checked').attr('data-image');
    $productItem.find('.catalog_productsListItemSku > .sku').html($this.find('input[type="radio"]:checked').attr('data-sku'));
    originalSku = $this.find('input[type="radio"]:checked').attr('data-sku');
    
    if (+$this.find('input[type="radio"]:checked').attr('data-instock') == 1) {
      $productItem.find('.catalog_productsListItemPrice').removeClass('catalog_productsListItemPrice__noPrice').html($this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>');          
      $productItem.find('.catalog_productsListItemPriceBlock').removeClass('catalog_productsListItemPriceBlock__noPrice');
      originalPrice = $this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>';
      originalInStock = 1;
    } else {
      $productItem.find('.catalog_productsListItemPrice').addClass('catalog_productsListItemPrice__noPrice').html('Нет в наличии');
      $productItem.find('.catalog_productsListItemPriceBlock').addClass('catalog_productsListItemPriceBlock__noPrice');
      originalPrice = 'Нет в наличии';
      originalInStock = 0;
    }

    $productItem.find('.catalog_productsListItemImage').attr('href', $this.find('input[type="radio"]:checked').attr('data-href'));
    originalHref = $this.find('input[type="radio"]:checked').attr('data-href');
    $productItem.find('.catalog_productsListItemTitle').attr('href', $this.find('input[type="radio"]:checked').attr('data-href'));

    $productItem.find('.catalog_productsListItemTitle').html($this.find('input[type="radio"]:checked').attr('data-title'));
    originalTitle = $this.find('input[type="radio"]:checked').attr('data-title');
  });

  $('.catalog_productsTileItemVariations > label').hover(function() {
    var $this = $(this).find('input[name="productVariation"]');
    var $productItem = $(this).parents('.catalog_productsTileItem');
    

    if (original == 1) {
      originalSrc = $productItem.find('.catalog_productsTileItemImage img').attr('src');
      originalSku = $productItem.find('.catalog_productsTileItemSku').html();
      originalInStock = $productItem.find('.catalog_productsTileItemPrice .rouble').length > 0 ? 1 : 0;
      originalPrice = $productItem.find('.catalog_productsTileItemPrice').html();
      originalHref = $productItem.find('.catalog_productsTileItemImage').attr('href');
      originalTitle =  $productItem.find('.catalog_productsTileItemTitle').html();
      original = 0;
    }

    $productItem.find('.catalog_productsTileItemImage img').attr('src', $this.attr('data-image'));
    $productItem.find('.catalog_productsTileItemImage img').attr('title', $this.attr('data-title'));
    $productItem.find('.catalog_productsTileItemImage img').attr('alt', $this.attr('data-title'));
    $productItem.find('.catalog_productsTileItemSku').html($this.attr('data-sku'));

    if (+$this.attr('data-instock') == 1) {
      $productItem.find('.catalog_productsTileItemPrice').removeClass('catalog_productsTileItemPrice__noPrice').html($this.attr('data-price') + '<span class="rouble">₽</span>');          
    } else {
      $productItem.find('.catalog_productsTileItemPrice').addClass('catalog_productsTileItemPrice__noPrice').html('Нет в наличии');
    }

    $productItem.find('.catalog_productsTileItemImage').attr('href', $this.attr('data-href'));
    $productItem.find('.catalog_productsTileItemTitle').attr('href', $this.attr('data-href'));

    $productItem.find('.catalog_productsTileItemTitle').html($this.attr('data-title'));

  }, function() {
    var $this = $(this).find('input[name="productVariation"]');
    var $productItem = $(this).parents('.catalog_productsTileItem');

    $productItem.find('.catalog_productsTileItemImage img').attr('src', originalSrc);
    $productItem.find('.catalog_productsTileItemImage img').attr('title', originalTitle);
    $productItem.find('.catalog_productsTileItemImage img').attr('alt', originalTitle);
    $productItem.find('.catalog_productsTileItemSku').html(originalSku);

    if (+originalInStock == 1) {
      $productItem.find('.catalog_productsTileItemPrice').removeClass('catalog_productsTileItemPrice__noPrice').html(originalPrice);          
    } else {
      $productItem.find('.catalog_productsTileItemPrice').addClass('catalog_productsTileItemPrice__noPrice').html('Нет в наличии');
    }

    $productItem.find('.catalog_productsTileItemImage').attr('href', originalHref);
    $productItem.find('.catalog_productsTileItemTitle').attr('href', originalHref);

    $productItem.find('.catalog_productsTileItemTitle').html(originalTitle);
  });
  
  //List

  $('.catalog_productsListItemVariations > label').hover(function() {
    var $this = $(this).find('input[name="productVariation"]');
    var $productItem = $(this).parents('.catalog_productsListItem');
    

    if (original == 1) {
      originalSrc = $productItem.find('.catalog_productsListItemImage img').attr('src');
      originalSku = $productItem.find('.catalog_productsListItemSku > .sku').html();
      originalInStock = $productItem.find('.catalog_productsListItemPrice .rouble').length > 0 ? 1 : 0;
      originalPrice = $productItem.find('.catalog_productsListItemPrice').html();
      originalHref = $productItem.find('.catalog_productsListItemImage').attr('href');
      originalTitle =  $productItem.find('.catalog_productsListItemTitle').html();
      original = 0;
    }

    $productItem.find('.catalog_productsListItemImage img').attr('src', $this.attr('data-image'));
    $productItem.find('.catalog_productsListItemImage img').attr('title', $this.attr('data-title'));
    $productItem.find('.catalog_productsListItemImage img').attr('alt', $this.attr('data-title'));
    $productItem.find('.catalog_productsListItemSku > .sku').html($this.attr('data-sku'));

    if (+$this.attr('data-instock') == 1) {
      $productItem.find('.catalog_productsListItemPrice').removeClass('catalog_productsListItemPrice__noPrice').html($this.attr('data-price') + '<span class="rouble">₽</span>');          
      $productItem.find('.catalog_productsListItemPriceBlock').removeClass('catalog_productsListItemPriceBlock__noPrice');
    } else {
      $productItem.find('.catalog_productsListItemPrice').addClass('catalog_productsListItemPrice__noPrice').html('Нет в наличии');
      $productItem.find('.catalog_productsListItemPriceBlock').addClass('catalog_productsListItemPriceBlock__noPrice');
    }

    $productItem.find('.catalog_productsListItemImage').attr('href', $this.attr('data-href'));
    $productItem.find('.catalog_productsListItemTitle').attr('href', $this.attr('data-href'));

    $productItem.find('.catalog_productsListItemTitle').html($this.attr('data-title'));

  }, function() {
    var $productItem = $(this).parents('.catalog_productsListItem');

    $productItem.find('.catalog_productsListItemImage img').attr('src', originalSrc);
    $productItem.find('.catalog_productsListItemImage img').attr('title', originalTitle);
    $productItem.find('.catalog_productsListItemImage img').attr('alt', originalTitle);
    $productItem.find('.catalog_productsListItemSku > .sku').html(originalSku);

    if (+originalInStock == 1) {
      $productItem.find('.catalog_productsListItemPrice').removeClass('catalog_productsListItemPrice__noPrice').html(originalPrice);          
      $productItem.find('.catalog_productsListItemPriceBlock').removeClass('catalog_productsListItemPriceBlock__noPrice');
    } else {
      $productItem.find('.catalog_productsListItemPrice').addClass('catalog_productsListItemPrice__noPrice').html('Нет в наличии');
      $productItem.find('.catalog_productsListItemPriceBlock').addClass('catalog_productsListItemPriceBlock__noPrice');
    }

    $productItem.find('.catalog_productsListItemImage').attr('href', originalHref);
    $productItem.find('.catalog_productsListItemTitle').attr('href', originalHref);

    $productItem.find('.catalog_productsListItemTitle').html(originalTitle);
  });

  // Product page
  $('.product_addToCartForm').on('change', function() {
    var $this = $(this);

    $this.find('.product_photoWrapper img').attr('src', $this.find('input[type="radio"]:checked').attr('data-image'));
    $this.find('.product_photoWrapper img').attr('alt', $this.find('input[type="radio"]:checked').attr('data-title'));
    $this.find('.product_photoWrapper img').attr('title', $this.find('input[type="radio"]:checked').attr('data-title'));
    originalSrc = $this.find('input[type="radio"]:checked').attr('data-image');
    $this.find('.product_sku .sku').html($this.find('input[type="radio"]:checked').attr('data-sku'));
    originalSku = $this.find('input[type="radio"]:checked').attr('data-sku');
    
    if (+$this.find('input[type="radio"]:checked').attr('data-instock') == 1) {
      $this.find('.product_priceBlock').removeClass('product_priceBlock__noPrice');
      $this.find('.product_price').html($this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>');          
      originalPrice = $this.find('input[type="radio"]:checked').attr('data-price') + '<span class="rouble">₽</span>';
      originalInStock = 1;
    } else {
      $this.find('.product_priceBlock').addClass('product_priceBlock__noPrice');
      $this.find('.product_price').html('Нет в наличии');
      originalPrice = 'Нет в наличии';
      originalInStock = 0;
    }

    $this.find('.product_title').html($this.find('input[type="radio"]:checked').attr('data-title'));
    originalTitle = $this.find('input[type="radio"]:checked').attr('data-title');
  });

  $('.product_addToCartForm .product_variations > label').hover(function() {
    var $this = $(this).find('input[name="productVariation"]');
    var $productItem = $(this).parents('.product_addToCartForm');
    

    if (original == 1) {
      originalSrc = $productItem.find('.product_photoWrapper img').attr('src');
      originalSku = $productItem.find('.product_sku .sku').html();
      originalInStock = $productItem.find('.product_price .rouble').length > 0 ? 1 : 0;
      originalPrice = $productItem.find('.product_price').html();
      originalTitle =  $productItem.find('.product_title').html();
      original = 0;
    }

    $productItem.find('.product_photoWrapper img').attr('src', $this.attr('data-image'));
    $productItem.find('.product_photoWrapper img').attr('title', $this.attr('data-title'));
    $productItem.find('.product_photoWrapper img').attr('alt', $this.attr('data-title'));
    $productItem.find('.product_sku .sku').html($this.attr('data-sku'));

    if (+$this.attr('data-instock') == 1) {
      $productItem.find('.product_priceBlock').removeClass('product_priceBlock__noPrice');
      $productItem.find('.product_price').html($this.attr('data-price') + '<span class="rouble">₽</span>');          
    } else {
      $productItem.find('.product_priceBlock').addClass('product_priceBlock__noPrice');
      $productItem.find('.product_price').html('Нет в наличии');
    }

    $productItem.find('.product_title').html($this.attr('data-title'));

  }, function() {
    var $this = $(this).find('input[name="productVariation"]');
    var $productItem = $(this).parents('.product_addToCartForm');

    $productItem.find('.product_photoWrapper img').attr('src', originalSrc);
    $productItem.find('.product_photoWrapper img').attr('title', originalTitle);
    $productItem.find('.product_photoWrapper img').attr('alt', originalTitle);
    $productItem.find('.product_sku .sku').html(originalSku);

    if (+originalInStock == 1) {
      $productItem.find('.product_priceBlock').removeClass('product_priceBlock__noPrice');
      $productItem.find('.product_price').html(originalPrice);          
    } else {
      $productItem.find('.product_priceBlock').addClass('product_priceBlock__noPrice');
      $productItem.find('.product_price').html('Нет в наличии');
    }

    $productItem.find('.product_title').html(originalTitle);
  });


  // Product image hover data-changing effect
  $.each( $('.catalog_productsTileItem'), function() { 
    var variationsNumber = $(this).find('input[name="productVariation"]').length;
    var hoverBlockWidth = 100/variationsNumber;

    for (var i = 0; i < variationsNumber; i++) {
      $(this).find('.catalog_productsTileItemImage').append('<span class="productImageHover" data-id="' + i + '" style="width:' + hoverBlockWidth + '%;left:' + hoverBlockWidth*i + '%;"></span>');
    }
  });

  $.each( $('.catalog_productsTileItem'), function() {
    var $item = $(this);
    $item.find('.productImageHover').hover(function() {
      $item.find('.catalog_productsTileItemVariations > label').eq($(this).attr('data-id')).trigger('mouseover');
      $item.find('.catalog_productsTileItemVariations > label').eq($(this).attr('data-id')).find('.catalog_productsTileItemVariation').addClass('hovered');
    }, function() {
      $item.find('.catalog_productsTileItemVariations > label').eq($(this).attr('data-id')).trigger('mouseout');
      $item.find('.catalog_productsTileItemVariations > label').eq($(this).attr('data-id')).find('.catalog_productsTileItemVariation').removeClass('hovered');
    });
  });

  // List
  $.each( $('.catalog_productsListItem'), function() { 
    var variationsNumber = $(this).find('input[name="productVariation"]').length;
    var hoverBlockWidth = 100/variationsNumber;

    for (var i = 0; i < variationsNumber; i++) {
      $(this).find('.catalog_productsListItemImage').append('<span class="productImageHover" data-id="' + i + '" style="width:' + hoverBlockWidth + '%;left:' + hoverBlockWidth*i + '%;"></span>');
    }
  });

  $.each( $('.catalog_productsListItem'), function() {
    var $item = $(this);
    $item.find('.productImageHover').hover(function() {
      $item.find('.catalog_productsListItemVariations > label').eq($(this).attr('data-id')).trigger('mouseover');
      $item.find('.catalog_productsListItemVariations > label').eq($(this).attr('data-id')).find('.catalog_productsListItemVariation').addClass('hovered');
    }, function() {
      $item.find('.catalog_productsListItemVariations > label').eq($(this).attr('data-id')).trigger('mouseout');
      $item.find('.catalog_productsListItemVariations > label').eq($(this).attr('data-id')).find('.catalog_productsListItemVariation').removeClass('hovered');
    });
  });

  // Product page
  $.each( $('.product_addToCartForm'), function() { 
    var variationsNumber = $(this).find('.product_variations').eq(0).find('input[name="productVariation"]').length;
    var hoverBlockWidth = 100/variationsNumber;

    for (var i = 0; i < variationsNumber; i++) {
      $(this).find('.product_photoWrapper').append('<span class="productImageHover" data-id="' + i + '" style="width:' + hoverBlockWidth + '%;left:' + hoverBlockWidth*i + '%;"></span>');
    }
  });

  $.each( $('.product_addToCartForm'), function() {
    var $item = $(this);
    $item.find('.productImageHover').hover(function() {
      $item.find('.product_variations:visible > label').eq($(this).attr('data-id')).trigger('mouseover');
      $item.find('.product_variations:visible > label').eq($(this).attr('data-id')).find('.product_variation').addClass('hovered');
    }, function() {
      $item.find('.product_variations:visible > label').eq($(this).attr('data-id')).trigger('mouseout');
      $item.find('.product_variations:visible > label').eq($(this).attr('data-id')).find('.product_variation').removeClass('hovered');
    });
  });
});