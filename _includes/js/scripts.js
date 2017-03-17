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

	    $('#calendar').fullCalendar({
	        googleCalendarApiKey: 'AIzaSyB3lVlBUFAYDVTwWSohEqoAV_lyNbUeq_w',
	        events: {
	            googleCalendarId: '6pqcuft524al8kcnb8v31tl0s4@group.calendar.google.com'
	        },
			timeFormat: 'h(:mm)a',
		    eventRender: function(event, element) {
				element.attr("href", event.description)
		    }
	    });
		
	    $('#calendarmini').fullCalendar({
			header: false,
			footer: false,
			views: {
		        listAll: {
		              type: 'list',
		              duration: { days: 365 },
		              buttonText: '365 day'
		          }
			},
			defaultView: 'listAll',
			height: 280,
	        googleCalendarApiKey: 'AIzaSyB3lVlBUFAYDVTwWSohEqoAV_lyNbUeq_w',
	        events: {
	            googleCalendarId: '6pqcuft524al8kcnb8v31tl0s4@group.calendar.google.com'
	        },
			timeFormat: 'h(:mm)a',
			displayEventEnd: false,
		    eventRender: function(event, element) {
				element.find('a').attr("href", event.description);
		    }
	    });

//Initialise google form

		// Validate Forms

		$("#contact-form").validate({
				rules: {
					email: "required",
				},
				messages: {
					email: "We need your email address to contact you.",
				},
				submitHandler: function(form) {
					form.submit();
				}
		});
});

$("#Glide").glide({
    type: "carousel"
});


var $window = $(window);
var lastWindowWidth = $window.width();

$(window).resize(function() {
    var windowWidth = $window.width();

    /* Use !== operator instead of !=. */
    if (lastWindowWidth !== windowWidth) {
    var container_width = $('#fb-teaser').width();    
    $('#fb-teaser').html('<div class="fb-page" data-href="https://www.facebook.com/yourprojectyes" data-width="' + container_width + '" data-height="450" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
    FB.XFBML.parse();   
}
});

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
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


jQuery(function(){  
  jQuery.mark.jump();
});