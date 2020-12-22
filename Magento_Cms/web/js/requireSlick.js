require([
    'jquery',
    'slick'
], function ($) {
    $(document).ready(function () {
        $(".dqa-usp-message-content").slick({
            slidesToShow: 6,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        speed: 300,
                        dots: false,
                        arrows: false
                    }
                    },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        speed: 300,
                        arrows: false,
                        dots: false,
                    }
                    },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 300,
                    arrows: false,
                    dots: false,
                    
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300,
                    arrows: false,
                    dots: false,
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
});