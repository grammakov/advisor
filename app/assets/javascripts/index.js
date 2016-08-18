// Content hide/show for index page
$('.view-source .hide').hide();

$(function(){
    $('.view-source .hide').hide();
    $a = $('.view-source a');
    $a.on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('blue-color');

        if ($(this).is('.blue-color')) {
            $(this).prev().addClass('minus')
        } else {
            $(this).prev().removeClass('minus')
        }

        // $a.not(this).next().slideUp(500); // Hide next slide. Cool option but...
        $(this).next().slideToggle(500);
    });
});


$(document).ready(function() {
    // $('.second-box').hide();
    $('.second-box, .third-box, .last-box').hide();

    $('.icon-box').click(function() {
        // Hide previous box
        var activeBox = $('.active-box');
        var boxForHideClass = activeBox.attr('data-type');
        $('.' + boxForHideClass).hide();

        // Set new active icon
        activeBox.removeClass('active-box');
        $(this).addClass('active-box');

        // Show text box
        var className = $(this).attr('data-type');
        $('.' + className).fadeIn(1000);


    });
});
