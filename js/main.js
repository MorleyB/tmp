/************************************************************************
// For extensive details about creating a Populr theme, please visit
// http://developers.populr.me/theming
*/
$( ".slide a" ).addClass( "fancybox" );
$("slide a[href^='http']").attr('target','');
$(document).ready(function() {
	$(".fancybox").fancybox();
	});

// $(document).on('pop-initialized', function(){
//
// });
