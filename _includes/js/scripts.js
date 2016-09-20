$(document).ready(function() {

		// Menu Bar

		var menuToggle = $('#js-mobile-menu').unbind();

		menuToggle.on('click', function(e) {
			e.preventDefault();
			$('#js-navigation-menu').slideToggle(function() {
				$('#js-mobile-menu').toggleClass('active');
				if ($('#js-navigation-menu').is(':hidden')) {
					$('#js-navigation-menu').removeAttr('style');
				}
			});
		});

		// Search Bar
		$('.search-tools').removeClass("show");
		$('#js-search-toggle').attr({
			href: "javascript:void(0)"
		});
		$('#js-search-toggle').addClass("show");
		$('#js-search-toggle').click(function() {
			$(".search-tools").toggle();
			$('#js-search-toggle').toggleClass('active');
		});

//Initialise google form

		// Validate Forms

		$("#contact-form").validate({
				rules: {
					email: "required",
				},
				messages: {
					email: "We need your email to send you updates.",
				},
				submitHandler: function(form) {
					form.submit();
				}
		});
});

(function(jQuery) {
	jQuery.mark = {
		jump: function(options) {
			var defaults = {
				selector: 'a.scroll-on-page-link'
			};
			if (typeof options == 'string') {
				defaults.selector = options;
			}
			options = jQuery.extend(defaults, options);
			return jQuery(options.selector).click(function(e) {
				var jumpobj = jQuery(this);
				var target = jumpobj.attr('href');
				var thespeed = 1000;
				var offset = jQuery(target).offset().top;
				jQuery('html,body').animate({
					scrollTop: offset
				}, thespeed, 'swing');
				e.preventDefault();
			});
		}
	};
})(jQuery);

(function ($) { 
jQuery(function() {
	jQuery.mark.jump();
});
