$(window).scroll(function() {
	// it-management
	document.getElementById('itManDrop').style.display = "block";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "none";
	
	if ($(this).scrollTop() > ($('#managed').offset().top+$('#managed').outerHeight()-$(window).height())){
	   $('#itManNav2').removeClass('navBgOn');
	   $('#itManNav1').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#serviceOp').offset().top+$('#serviceOp').outerHeight()-$(window).height())){
	   $('#itManNav1').removeClass('navBgOn');
	   $('#itManNav2').addClass('navBgOn');       
	}
});
