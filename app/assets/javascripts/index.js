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

        // $a.not(this).next().slideUp(500); // Hide next slide
        $(this).next().slideToggle(500);
    });
});
