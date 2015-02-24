$( document ).ready(function() {


    $('.shop-collection').click(function(){
      
  if ($(".collection").css("display") == "none") {
    $(".collection").attr("display","block");
    $("#montblanc .subnavigation").css("display","block")
    $(".collection").slideDown(300);
    $(this).css("color","fff");
    $('.discover').css("display", "none")
    $(".discover-montblanc, .find-stores, .serch-link").css("color","#555");
  }
  else {
    $(".collection").slideUp(300);
    $(".collection").attr("display","none");
     $("#montblanc .subnavigation").slideUp(300)
    $(".discover-montblanc,.find-stores, .serch-link").css("color","#fff");
  } 
  })

    $('.discover-montblanc').click(function(){
      
  if ($(".discover").css("display") == "none") {
    $(".discover").attr("display","block");
    $("#montblanc .subnavigation").css("display","block")
    $(".discover").slideDown(300);
    $(this).css("color","fff");
    $('.collection').css("display", "none")
    $(".shop-collection, .find-stores, .serch-link").css("color","#555");
  }
  else {
    $(".discover").slideUp(300);
    $(".discover").attr("display","none");
    $("#montblanc .subnavigation").slideUp(300)
    $(".shop-collection,.find-stores, .serch-link").css("color","#fff");
  } 

  }) 
$('.site-nav li a').click(function() {
    $('.site-nav li a').removeClass('active');
    $(this).addClass('active');
  });



 $('.btn-navbar').click(function(){
      
  if ($("#montblanc .subnavigation").css("display") == "none") {
    $("#montblanc .subnavigation, .mobile-background ,.collection, .discover").show();
    $('#montblanc').css("overflow","hidden");
    $("#montblanc .subnavigation, #montblanc #content,#montblanc .mobile-navigation").css("margin-left","272px");
  }
  else {
    $("#montblanc .subnavigation, #montblanc #content,#montblanc .mobile-navigation").css("margin-left","0");
    $("#montblanc .subnavigation, .mobile-background,.collection,.discover").hide();
    $('#montblanc').css("overflow","inherit");
  }
    })
});


var top_show = 100; 
  var delay = 1300; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#montblanc .btn-top').fadeIn();
      else $('#montblanc .btn-top').fadeOut();
    });

    $('#montblanc .btn-top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });

  });