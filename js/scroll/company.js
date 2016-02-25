$(window).scroll(function() {
	// company
	document.getElementById('itManDrop').style.display = "none";
    document.getElementById('itCloudDrop').style.display = "none";
    document.getElementById('itSecurityDrop').style.display = "none";
    document.getElementById('itDataDrop').style.display = "none";
    document.getElementById('itCompanyDrop').style.display = "block";
    
	if ($(this).scrollTop() > ($('#au').offset().top+$('#au').outerHeight()-$(window).height())){
	   $('#itCompanyNav2').removeClass('navBgOn');
	   $('#itCompanyNav1').addClass('navBgOn');       
	}
	if ($(this).scrollTop() > ($('#cu').offset().top+$('#cu').outerHeight()+$('#cu').outerHeight()+$('#cu').outerHeight()-$(window).height())){
	   $('#itCompanyNav1').removeClass('navBgOn');
	   $('#itCompanyNav2').addClass('navBgOn');       
	}
});
