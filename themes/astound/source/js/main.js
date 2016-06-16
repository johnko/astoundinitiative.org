(function ($) {
    // Highlight current nav item
    $('#menu-navigation-menu > .depth0').each(function () {
        if ($(this).attr('data-url') == location.href.replace(RegExp("http?://[^/]*"),"")) {
            $(this).addClass('current-menu-item');
        }
    });


	$('#myCarousel').carousel();
	$('#subCarousel').carousel();

})(jQuery);
