/* Adding a class to the element when the key is pressed. */
$(document).keydown(function (e) {
    if (e.which == 37) {
        $('.left').addClass('pressed');
        $('.lefttext').text('LEFT');
        $('.left').css('transform', 'translate(0, 2px)');
    } else if (e.which == 38) {
        $('.up').addClass('pressed');
        $('.uptext').text('UP');
        $('.up').css('transform', 'translate(0, 2px)');
        $('.down').css('transform', 'translate(0, 2px)');
        $('.right').css('transform', 'translate(0, 2px)');
    } else if (e.which == 39) {
        $('.right').addClass('pressed');
        $('.righttext').text('RIGHT');
        $('.right').css('transform', 'translate(0, 2px)');
    } else if (e.which == 40) {
        $('.down').addClass('pressed');
        $('.downtext').text('DOWN');
        $('.down').css('transform', 'translate(0, 2px)');
    } else if (e.which == 66) {
        $('.b').text('B');
    } else if (e.which == 65) {
        $('.a').text('A');
    }
});

/* Removing the class 'pressed' and the text when the key is released. */
$(document).keyup(function (e) {
    if (e.which == 37) {
        $('.left').removeClass('pressed');
        $('.lefttext').text('');
        $('.left').css('transform', 'translate(0, 0)');
    } else if (e.which == 38) {
        $('.up').removeClass('pressed');
        $('.uptext').text('');
        $('.up').css('transform', '');
        $('.down').css('transform', '');
        $('.right').css('transform', '');
    } else if (e.which == 39) {
        $('.right').removeClass('pressed');
        $('.righttext').text('');
        $('.right').css('transform', 'translate(0, 0)');
    } else if (e.which == 40) {
        $('.down').removeClass('pressed');
        $('.downtext').text('');
        $('.down').css('transform', 'translate(0, 0)');
    } else if (e.which == 66) {
        $('.b').text('');
    } else if (e.which == 65) {
        $('.a').text('');
    }
});

$('.left').mousedown(function () {
    $('.lefttext').text('LEFT');
    $('.left').addClass('pressed');
    $('.left').css('transform', 'translate(0, 2px)');
});

$('.left').mouseup(function () {
    $('.lefttext').text('');
    $('.left').removeClass('pressed');
    $('.left').css('transform', 'translate(0, 0)');
});

$('.up').mousedown(function () {
    $('.uptext').text('UP');
    $('.up').addClass('pressed');
    $('.up').css('transform', 'translate(0, 2px)');
    $('.down').css('transform', 'translate(0, 2px)');
    $('.right').css('transform', 'translate(0, 2px)');
});

$('.up').mouseup(function () {
    $('.uptext').text('');
    $('.up').removeClass('pressed');
    $('.up').css('transform', '');
    $('.down').css('transform', '');
    $('.right').css('transform', '');
});

$('.right').mousedown(function () {
    $('.righttext').text('RIGHT');
    $('.right').addClass('pressed');
    $('.right').css('transform', 'translate(0, 2px)');
});

$('.right').mouseup(function () {
    $('.righttext').text('');
    $('.right').removeClass('pressed');
    $('.right').css('transform', 'translate(0, 0)');
});

$('.down').mousedown(function () {
    $('.downtext').text('DOWN');
    $('.down').addClass('pressed');
    $('.down').css('transform', 'translate(0, 2px)');
});

$('.down').mouseup(function () {
    $('.downtext').text('');
    $('.down').removeClass('pressed');
    $('.down').css('transform', 'translate(0, 0)');
});

$('.b').mousedown(function () {
    $('.b').text('B');
});

$('.b').mouseup(function () {
    $('.b').text('');
});

$('.a').mousedown(function () {
    $('.a').text('A');
});

$('.a').mouseup(function () {
    $('.a').text('');
});
