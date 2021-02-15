$(document).ready(function() {
    $('.shop__categories').hover(function() {
        $('.hidden__menu').css('display', 'block');
    }, function() {
        $('.hidden__menu').css('display', 'none');
    });

    
    $('.dropdown__sub').hover(function() {
        $(this).css('display', 'block');
    }, function() {
        $(this).css('display', 'none');
    });


    if( $(window).width() < 991) {
        $('.dropdown__link').hover(function() {
            $('#dropdown__sub').css('display', 'none');
        });
        $('.dropdown__link22').click(function() {
            // alert('Hello');
        });
    }
    else {
        $('#selling__brands').hover(function() {
            $('#dropdown__sub').css('display', 'block');
        }, function() {
            $('#dropdown__sub').css('display', 'none');
        });
        
        $('#other__brands').hover(function() {
            $('#other__sub').css('display', 'block');
        }, function() {
            $('#other__sub').css('display', 'none');
        });
    }

// Click burger menu:
    $('.burger__menu').click(function() {
        $('.hidden__menu').toggleClass('activeClass');
    });

    $('.dropdown__subBtn').click(function() {
        $(this).parent().next().toggleClass('showMenu');
        $(this).prev().toggleClass('changeColor');
        $(this).toggleClass('rotateArrow');
    });
    $('.vektor__down').click(function() {
        $(this).parent().next().toggleClass('showSub');
        $(this).prev().toggleClass('changeSubColor');
        $(this).toggleClass('rotateSubArrow');
    });
});