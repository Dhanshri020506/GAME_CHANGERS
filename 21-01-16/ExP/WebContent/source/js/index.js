$('.toggle').on('click', function() {
  $('.container1').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container1').stop().removeClass('active');
});


