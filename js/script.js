$(function () {
    let emailElement = $('#email');

    // Smooth scrolling header elements
    $('header nav a')
        .click(function (event) {
            var target = $(this.hash);
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        });

    $('#updates').on('submit', 'form', function (event) {
        event.preventDefault();
        let email = emailElement.val();
        if(validateEmail(email)){
            alert('Thanks for subscribing!');
        } else {
            alert('Please enter a valid email address');
            emailElement.focus();
        }
    });

    $('.carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
    });

});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}