$('.navbar').hide();
$("#left-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#left-scroll").offset().top
    }, 750);
});
$("#right-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#right-scroll").offset().top
    }, 750);
});
//navbar toggle
$("#nav-open").click(function() {
  $('#nav-open').fadeOut();  
  $('.navbar').fadeIn();
});
$("#nav-close").click(function() {
    $('.navbar').fadeOut();
    $('#nav-open').fadeIn();
});
//navbar links