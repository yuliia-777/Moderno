$(function () {



    var mixer = mixitup('.products__inner');



    $(".stars-rate").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });



    $('.products-slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });




});