// New Js File
(function() {

  $(document).ready(function(){
    var interactive = {

      // Intitialize the program
      init: function() {
        this.cacheDom();
        this.bindEvents();
        this.mainSlider();
      },

      // Cache Dome
      cacheDom: function() {
        this.$mainNavItem = $('.main-nav ul li a');
        this.$underNavContainer = $('.under-nav-container');
        this.$window = $(window);
        this.$document = $(document);
        this.$underNavLink = $('.under-nav ul li a');
        this.$underNavScrollLink = $('.under-nav-scroll ul li a');
      },

      //Bind Events
      bindEvents: function() {
        this.$mainNavItem.on('mouseenter', this.subNavShow);
        this.$document.on('click', this.hideSubNav);
        this.$window.scroll(this.showScrollNav);
        this.$window.scroll(this.fixedSubNav);
        this.$underNavLink.on('click', this.scrollToClickedNav);
        this.$underNavScrollLink.on('click', this.scrollToClickedNav);
        console.log(this.$underNavLink);

        console.log('binding');
      },

      mainSlider: function() {
        $('.gallery').flickity({
          // options
          cellAlign: 'left',
          contain: true,
          wrapAround: false,
          freeScroll: true,
          autoPlay: 5000,
          prevNextButtons: false,
          pageDots: true
        });
      },

      // Show sub nav
      subNavShow: function(e) {
        e.stopPropagation();
        var $subNavToShow = $(this).attr('rel');
        console.log($subNavToShow);

        $('.under-nav-container').find('.under-nav-open').removeClass('under-nav-open');
        // $('.under-nav-container-scroll').find('.under-nav-open').removeClass('under-nav-open');

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
          $('.under-nav-scroll').addClass('scrolled');
          $('under-nav-scroll').addClass('under-nav-open');
        } else {
          $('.main-header-container-scroll').removeClass('scrolled');
          $('.under-nav-scroll').removeClass('scrolled');
        }
      },

      fixedSubNav: function() {
        var headerHeight = $('.main-header-container').height();
        var currentURL = $(location).attr('pathname');
        console.log(currentURL);
      },

      scrollToClickedNav: function() {
         //The scroll animation
      			var menuLink = $(this).attr('href');
            console.log(menuLink);
      			$('html, body').animate({
      				'scrollTop': $(menuLink).offset().top - 50
            }, 1500, 'easeOutExpo');
      }

    };

    interactive.init();

  });

})();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});




