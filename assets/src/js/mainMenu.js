$(function(){
  $('.js-menuToggle, .mainMenu_overlay').click(function(){
    $('.js-menuToggle').toggleClass('header_burger__open');
    $('body').toggleClass('noScroll');
    $('.mainMenu').toggleClass('mainMenu__open');
    $('.mainMenu_overlay').toggleClass('mainMenu_overlay__visible');
  });
  $('.js-menuItemFirst').click(function(){
    $('.mainMenu_wrapper').scrollTop(0);
    $('.mainMenu_firstLevel').addClass('mainMenu_firstLevel__openSecond');
    $(this).next().addClass('mainMenu_secondLevel__open');
    setTimeout(function(){
      $('.mainMenu_link__FL').hide();
    },300);
    return false;
  });
  $('.js-menuItemSecond').click(function(){
    $('.mainMenu_wrapper').scrollTop(0);
    $('.mainMenu_firstLevel').addClass('mainMenu_firstLevel__openThird');
    $(this).next().addClass('mainMenu_thirdLevel__open');
    setTimeout(function(){
      $('.mainMenu_link__SL').hide();
    },300);
    return false;
  });
  $('.js-menuReturnFirst').click(function(){
    var $this = $(this);
    $('.mainMenu_link__FL').show();
    $('.mainMenu_wrapper').scrollTop(0);
    $('.mainMenu_firstLevel').removeClass('mainMenu_firstLevel__openSecond');
    setTimeout(function(){
      $this.parent('.mainMenu_secondLevel').removeClass('mainMenu_secondLevel__open');
    },300);
  });
  $('.js-menuReturnSecond').click(function(){
    var $this = $(this);
    $('.mainMenu_link__SL').show();
    $('.mainMenu_wrapper').scrollTop(0);
    $('.mainMenu_firstLevel').removeClass('mainMenu_firstLevel__openThird');
    setTimeout(function(){
      $this.parent('.mainMenu_thirdLevel').removeClass('mainMenu_thirdLevel__open');
    },300);
  });
});