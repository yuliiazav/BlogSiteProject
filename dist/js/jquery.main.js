// скрипт для табов
$(document).ready(function() {
    $(function() {
        $('.aboutus__links').click(function() {
            const tab_id = $(this).attr('href');

            $('.aboutus__links').removeClass('active');
            $('.aboutus__details').removeClass('active');

            $(this).addClass('active');
            $(tab_id).addClass('active');
        })
    });
});

// скрипт для бургер меню
$(document).ready(function() {
    $(function() {
        $('.mobile-nav__btn').click(function() {
            $('.mobile-nav').toggleClass('active');
        })
    });
});


//скрипт для slick slider галереи team__gallery

jQuery(function($) {
    jQuery(document).ready(function() {
        $('.team__gallery').slick({
            arrow: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });

    });
});

//скрипт для slick slider галереи achievements

jQuery(function($) {
    jQuery(document).ready(function() {
        $('.achievements__gallery').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    });
});