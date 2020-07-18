$(function () {



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



    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });



    $('.icon-th-list').on('click', function () {
        $('.new-items__page .products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function () {
        $('.new-items__page .products__item').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $('.icon-th-large').addClass('active');
    });



    $('.header__menu-btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.header__user-btn').on('click', function () {
        $('.header__box-panel').toggleClass('active');
    });



    var mixer = mixitup('.products__inner');



});