$(document).ready(function () {
    $('.footer p:first-child').append(data.year);
    $('.fecha').html(data.period);

    $('img.img-card, img.img-landscape').on('click', function () {
        var me = $(this);
        $('.modal img').attr('src', me.attr('src'));
        $('.modal p').html(me.attr('alt'));
        $('.modal').show();
    });

    $('.close').on('click', function () {
        $('.modal').hide();
    });

    $('#scroll').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});