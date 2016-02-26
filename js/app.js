// New Js File
(function() {

  $(document).ready(function(){
    var interactive = {
      init: function() {
        this.cacheDom();
        this.bindEvents();
      },

      cacheDom: function() {
        this.$mainNavItem = $('.main-nav ul li a');
        this.$underNavContainer = $('.under-nav-container');
        this.$window = $(window);
        this.$document = $(document);
      },

      bindEvents: function() {
        this.$mainNavItem.on('click', this.subNavShow);
        this.$document.on('click', this.hideSubNav);
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
        $('.under-nav').removeClass('under-nav-open');
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
