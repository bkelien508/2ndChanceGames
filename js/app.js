var games = {
    name: 'SuperMarioWorld',
    developer: 'Nintendo',
    released: '1990'
};

$(window).scroll(function() {
    $('header').css('top', $(this).scrollTop() + "px");
});