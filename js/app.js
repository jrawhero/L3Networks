// New Js File
(function() {

  $(document).ready(function(){
    var interactive = {

      // Intitialize the program
      init: function() {
        this.cacheDom();
        this.bindEvents();
      },

      // Cache Dome
      cacheDom: function() {
        this.$mainNavItem = $('.main-nav ul li a');
        this.$underNavContainer = $('.under-nav-container');
        this.$window = $(window);
        this.$document = $(document);
      },

      //Bind Events
      bindEvents: function() {
        this.$mainNavItem.on('mouseenter', this.subNavShow);
        this.$document.on('click', this.hideSubNav);
        this.$window.scroll(this.showScrollNav);
        this.$window.scroll(this.fixedSubNav);

        console.log('binding');
      },

      // Show sub nav
      subNavShow: function(e) {
        e.stopPropagation();
        var $subNavToShow = $(this).attr('rel');
        console.log($subNavToShow);

        $('.under-nav-container').find('.under-nav-open').removeClass('under-nav-open');

        $('#'+$subNavToShow).toggleClass('under-nav-open');
      },

      // Hide sub nav when you click off
      hideSubNav: function(e) {
        e.stopPropagation();
        if($('.under-nav-open').hasClass('scrolled')) {
          return
        } else {
          $('.under-nav').removeClass('under-nav-open');
        }
      },

      // Fixed and Skrink Nav
      showScrollNav: function() {
        if($(window).scrollTop() > 30) {
          $('.main-header-container-scroll').addClass('scrolled');
        } else {
          $('.main-header-container-scroll').removeClass('scrolled');
        }
      },

      fixedSubNav: function() {
        var headerHeight = $('.main-header-container').height();
        var currentURL = $(location).attr('pathname');
        console.log(currentURL);
      }


    };

    interactive.init();

    $('.gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      wrapAround: true,
      freeScroll: true,
      autoPlay: 4000,
      prevNextButtons: false,
      pageDots: false
    });
  });

})();
