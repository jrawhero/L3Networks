$(window).scroll(function() {
	// data-protection
	document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "block";
    document.getElementById('itCompanyDrop').style.display = "none";
    
	if ($(this).scrollTop() > ($('#rb').offset().top+$('#rb').outerHeight()-$(window).height())){
	   $('#itDataNav2').removeClass('navBgOn');
	   $('#itDataNav1').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#dr').offset().top+$('#dr').outerHeight()-$(window).height())){
	   $('#itDataNav1').removeClass('navBgOn');
	   $('#itDataNav2').addClass('navBgOn');       
	}
});
