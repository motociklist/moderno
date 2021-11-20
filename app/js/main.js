$(function() {

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.product-slider-inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    var mixer = mixitup('.products-inner-box');


});