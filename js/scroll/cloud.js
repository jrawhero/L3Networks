$(window).scroll(function() {
	// cloud
	document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "block";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "none";
	
	if ($(this).scrollTop() > ($('#privateCloud').offset().top+$('#privateCloud').outerHeight()-$(window).height())){
	   $('#itCloudNav2').removeClass('navBgOn');
	   $('#itCloudNav1').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#cloudIntegration').offset().top+$('#cloudIntegration').outerHeight()-$(window).height())){
	   $('#itCloudNav1').removeClass('navBgOn');
	   $('#itCloudNav2').addClass('navBgOn');       
	}
});
