(function (d) { d.fn.visible = function (e, i) { var a = d(this).eq(0), f = a.get(0), c = d(window), g = c.scrollTop(); c = g + c.height(); var b = a.offset().top, h = b + a.height(); a = e === true ? h : b; b = e === true ? b : h; return !!(i === true ? f.offsetWidth * f.offsetHeight : true) && b <= c && a >= g } })(jQuery);

$(document).ready(function () {
    $(window).scroll(function () {

        /* Intro */
        if ($('#intro').visible(true)) { $('#intro').addClass('open'); }
        if (!$('#intro').visible(true)) { $('#intro').removeClass('open'); }

        /* Single Choice */
        if ($('#single-choice').visible(true)) { $('#single-choice').addClass('open'); }
        if (!$('#single-choice').visible(true)) { $('#single-choice').removeClass('open'); }

        /* Multiple Text */
        if ($('#multiple-text').visible(true)) { $('#multiple-text').addClass('open'); }
        if (!$('#multiple-text').visible(true)) { $('#multiple-text').removeClass('open'); }

        /* Multiple Choice */
        if ($('#multiple-choice').visible(true)) { $('#multiple-choice').addClass('open'); }
        if (!$('#multiple-choice').visible(true)) { $('#multiple-choice').removeClass('open'); }

        /* Select */
        if ($('#select').visible(true)) { $('#select').addClass('open'); }
        if (!$('#select').visible(true)) { $('#select').removeClass('open'); }

        /* Text */
        if ($('#text').visible(true)) { $('#text').addClass('open'); }
        if (!$('#text').visible(true)) { $('#text').removeClass('open'); }

        /* Info */
        if ($('#info').visible(true)) { $('#info').addClass('open'); }
        if (!$('#info').visible(true)) { $('#info').removeClass('open'); }

    });

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 150
        }, 500);
        return false;
    });

});