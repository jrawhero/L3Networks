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
      },

      bindEvents: function() {
        this.$mainNavItem.on('click', this.subNavShow);
        console.log('binding');
      },

      // Show sub nav
      subNavShow: function(e) {
        e.stopPropagation();
        var $subNavToShow = $(this).attr('rel');
        console.log($subNavToShow);

        $('.under-nav-container').find('.under-nav-open').removeClass('under-nav-open');

        $('#'+$subNavToShow).toggleClass('under-nav-open');
      }
    };

    interactive.init();
  });

})();
