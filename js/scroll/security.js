$(window).scroll(function() {
	document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "block";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "none";
    
	// security
	if ($(this).scrollTop() > ($('#sas').offset().top+$('#sas').outerHeight()-$(window).height())){
	   $('#itSecurityNav2').removeClass('navBgOn');
	   $('#itSecurityNav3').removeClass('navBgOn');
	   $('#itSecurityNav4').removeClass('navBgOn');
	   $('#itSecurityNav1').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#tm').offset().top+$('#tm').outerHeight()-$(window).height())){
	   $('#itSecurityNav1').removeClass('navBgOn');
	   $('#itSecurityNav3').removeClass('navBgOn');
	   $('#itSecurityNav4').removeClass('navBgOn');
	   $('#itSecurityNav2').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#eps').offset().top+$('#eps').outerHeight()-$(window).height())){
	   $('#itSecurityNav1').removeClass('navBgOn');
	   $('#itSecurityNav2').removeClass('navBgOn');
	   $('#itSecurityNav4').removeClass('navBgOn');
	   $('#itSecurityNav3').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#va').offset().top+$('#va').outerHeight()-$(window).height())){
	   $('#itSecurityNav1').removeClass('navBgOn');
	   $('#itSecurityNav2').removeClass('navBgOn');
	   $('#itSecurityNav3').removeClass('navBgOn');
	   $('#itSecurityNav4').addClass('navBgOn');       
	}
});
