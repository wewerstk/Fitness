$(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .right-nav, body').toggleClass('active');
  });


  
});
$(function(){
  $(window).scroll(function(){
    var a = $(this).scrollTop();
    if (a > $(this).height()/3) {

      $('.header__top').addClass('nav-fix');
    } else {
      $('.header__top').removeClass('nav-fix');
    }
  });
});
