$(document).ready(function() {

  new WOW().init();

  $('#fullpage').fullpage({
    scrollBar: true,
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Skills','Portfolio', 'Contact'],
    loopBottom: true,
    sectionSelector: 'section'
  });

  $(window).scroll(function(e){
      var scrolled = $(window).scrollTop();
      if(scrolled < 750){
          parallax()
      }
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    $('#parallax').css('background-positionY',(scrolled * -0.5)+'px');
  };

});
