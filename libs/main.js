$(document).ready(function() {
// Slider:
    $("#content").slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

// hover to "Shop Categories":
    $('.shop__categories').hover(function() {
        $('.hidden__menu').css('display', 'block');
        $('.hidden__menu').toggleClass('hiddenActive')
    }, function() {
        $('.hidden__menu').css('display', 'none');
        $('.hidden__menu').toggleClass('hiddenActive')
    });
    
    $('.dropdown__sub').hover(function() {
        $(this).css('display', 'block');
    }, function() {
        $(this).css('display', 'none');
    });


    if( $(window).width() > 991) {
        $('.dropdown__menu222').hover(function() {
            $(this).next().css('display', 'block');
        }, function() {
            $(this).next().css('display', 'none');
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

// Hover to "Sign in":
    $('.sign__in ').click(function() {
        $('.modalWindow').addClass('showModal');
        $('body').css('overflow', 'hidden');
    });
    $('.closeModal ').click(function() {
        $('.modalWindow').removeClass('showModal');
        $('body').css('overflow', 'auto');
    });

// Hover to blocks:
    $('.categories__block').hover(function() {
        $(this).find('.catgories__block__title').css('background', 'rgba(0, 0, 0, 0.5)');
    }, function() {
        $(this).find('.catgories__block__title').css('background', 'transparent');
    });
// Hover to Quote:
    $('#quote__btn').hover(function() {
        $('.korzina__container').addClass('korzina__modal__show');
    }, function() {
        $('.korzina__container').removeClass('korzina__modal__show');
    });
    
    $('.korzina').hover(function() {
        $('.korzina__container').addClass('korzina__modal__show');
    }, function() {
        $('.korzina__container').removeClass('korzina__modal__show');
    });
});