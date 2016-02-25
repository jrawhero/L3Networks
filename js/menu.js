$(function() {
  
  $('nav ul li a').on('click', function(e) {
    e.stopPropagation();
    
    var $subNavToShow = $(this).attr('rel');
    var $underNavContainer = $('.under-nav-container');
    
    console.log($subNavToShow);
    
    $underNavContainer.find('.under-nav-open').removeClass('under-nav-open');
    $('#'+$subNavToShow).toggleClass('under-nav-open');
  });

  $(document).on('click', function(e){
     console.log('hello');
    e.stopPropagation();
     $('.under-nav').removeClass('under-nav-open');
  });
  
});