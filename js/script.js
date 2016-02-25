(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        breakpoint: 800,
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          cssmenu.prepend('<div id="menu-button"></div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          multiTg = function() {
           
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          cssmenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = cssmenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          cssmenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            cssmenu.find('ul').show();
            cssmenu.removeClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').hide();
            }
            else {
              cssmenu.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !cssmenu.hasClass("small-screen")) {
            cssmenu.find('ul').hide().removeClass('open');
            cssmenu.addClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(window).load(function() {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  $("#cssmenu").prepend("<div id='menu-line'></div>");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, 
function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});


});
})(jQuery); 


function show(id) {
    document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "none";
    document.getElementById('itLoginDrop').style.display = "none";
    document.getElementById(id).style.display = "block";
 }
 
 function hide() {
    document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "none";
    document.getElementById('itLoginDrop').style.display = "none";
 }

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
      
   if (st > lastScrollTop & st > 100){
		// downscroll code
		$('#headerNav').removeClass('stickyNav');
		$('#stickyNav').addClass('stickyNav');
   } 
   else {
		// upscroll code
		$('#stickyNav').removeClass('stickyNav');
		$('#headerNav').addClass('stickyNav');
   }
   
   if (st < 100) {
	   $('#headerNav').removeClass('stickyNav');
	   $('#stickyNav').removeClass('stickyNav');
   }
   
   lastScrollTop = st;
   
//    $('.stickyNav').click();
   
});

function stickTheNav(id) {
	$('#headerNav').removeClass('stickyNav');
	$('#stickyNav').addClass('stickyNav');
	document.getElementById(id).click();	
}

var extraSpace = 0;
var target;

$(function() 
{
  $('[href*=#]:not([href=#])').click(function() 
  {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
    {		
		target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');		
		
		if (window.pageYOffset < target.offset().top){
			// downscroll code
			$('#headerNav').removeClass('stickyNav');
			$('#stickyNav').addClass('stickyNav');

			extraSpace = 0;
		} 
		else {
			// upscroll code
			$('#stickyNav').removeClass('stickyNav');
			$('#headerNav').addClass('stickyNav');
			extraSpace = 100;
		}
		
		
		if (target.length) {
			$('html,body').animate({scrollTop: target.offset().top - extraSpace}, 1500);
			
			return false;
		}
    }
  }
  );
}
);

var jump=function(e)
{
	if (e){
	   e.preventDefault();
	   target = $(this).attr("href");
	}else{
	   target = location.hash;
	   
	   $('html,body').animate({scrollTop: $(target).offset().top}, 1500, function(){location.hash = target;});
	}
}

$('html, body').hide();

$(document).ready(function()
{	

    $('a[href^=#]').bind("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
		
    }else{
        $('html, body').show();
    }
});