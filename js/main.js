/************************************************************************
// For extensive details about creating a Populr theme, please visit
// http://developers.populr.me/theming
*/
$( ".slide a" ).addClass( "various iframe youtube" );
$("slide a[href^='http']").attr('target','');
$(document).ready(function() {
    $(".fancybox").fancybox();
    }); 
    
$("a.youtube").click(function() {
    $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'     : 680,
            'height'        : 495,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
                 'wmode'        : 'transparent',
                'allowfullscreen'   : 'true'
            }
        });

    return false;
});

// $(document).on('pop-initialized', function(){
//
// });
