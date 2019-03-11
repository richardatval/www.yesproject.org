$(document).ready(function() {

    if (document.location.pathname == "/yes-films/") {
        $.getJSON("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=30&playlistId=PLpaj2LoHcuo-QKBv3L0NKWPZX0Dq5qwre&fields=items&key=AIzaSyB3lVlBUFAYDVTwWSohEqoAV_lyNbUeq_w", function(result) {
            $.each(result.items, function(i, item) {
                $("#videos").append('<div class="teaser-wrapper"><div class="teaser">' + '<a data-id="' + item.contentDetails.videoId + '" class="modal-trigger" href="javascript:void(0);"><img src="https://img.youtube.com/vi/' + item.contentDetails.videoId + '/0.jpg"></a><a data-id="' + item.contentDetails.videoId + '" class="modal-trigger" href="javascript:void(0);"><h4>'+ item.snippet.title + '</a></h4><p>' + item.snippet.description.split(' ', 15).join(' ') + '…</p></div></div>');
            });
        
        
            $('.modal-trigger').click(function() {
                var id = $(this).data("id");
                $('.modal-content').append('<div class="video"><div class="video-wrapper"><iframe id="#youtube" src="https://www.youtube-nocookie.com/embed/' + id + '?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen="true" allowscriptaccess="always"></iframe></div></div>');
                $('.modal').toggleClass('is-active');
            });

            $(".modal-fade-screen, .modal-close").on("click", function(e) {
                $('.modal').removeClass('is-active');
                $('.modal-content').empty();
                e.stopPropagation();
                $('iframe#youtube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            });
        });
    }

 

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
                duration: {
                    days: 365
                },
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

    $(".jotform-form").validate({
        rules: {
            q4_email: "required",
        },
        messages: {
            q4_email: "We need your email address to contact you.",
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

$('.glide').each(function(){
    var item = $(this);
    var d = new Date();
    item.attr('id', 'glide-'+d.getTime());

    $('#'+item.attr('id')).glide({
        autoplay: false,
        arrows: '#'+item.attr('id'),
        navigation: '#'+item.attr('id'),
        arrowLeftText: '<div></div>',
        arrowRightText: '<div></div>'
    });
});
/* Facebook embed facility triggers only on width change fixing bug on mobile */

var $window = $(window);
var lastWindowWidth = $window.width();

$(window).resize(function() {
    var windowWidth = $window.width();

    if (lastWindowWidth !== windowWidth) {
        var container_width = $('#fb-teaser').width();
        $('#fb-teaser').html('<div class="fb-page" data-href="https://www.facebook.com/yourprojectyes" data-width="' + container_width + '" data-height="450" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
        FB.XFBML.parse();
    }
});

$(function() {
    $('.modal-trigger').click(function() {
        $('.modal').toggleClass('is-active');
    });

    $(".modal-fade-screen, .modal-close").on("click", function(e) {
        $('.modal').removeClass('is-active');
        e.stopPropagation();
        $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
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


jQuery(function() {
    jQuery.mark.jump();
});


