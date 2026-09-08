/*------ Hero slider 1 ----*/
$(".hero-slider-1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    loop: true,
    dots: true,
    arrows: true,
    prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-angle-left"></i></span>',
    nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-angle-right"></i></span>',
    appendArrows: ".hero-slider-1-arrow",
    autoplay: true
});
/*Carausel 8 columns*/
$(".carausel-8-columns").each(function (key, item) {
    var id = $(this).attr("id");
    var sliderID = "#" + id;
    var appendArrowsClassName = "#" + id + "-arrows";

    $(sliderID).slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
        appendArrows: appendArrowsClassName
    });
});

/*Carausel 10 columns*/
$(".carausel-10-columns").each(function (key, item) {
    var id = $(this).attr("id");
    var sliderID = "#" + id;
    var appendArrowsClassName = "#" + id + "-arrows";

    $(sliderID).slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
        appendArrows: appendArrowsClassName
    });
});

/*Carausel 4 columns*/
$(".carausel-4-columns").each(function (key, item) {
    var id = $(this).attr("id");
    var sliderID = "#" + id;
    var appendArrowsClassName = "#" + id + "-arrows";

    $(sliderID).slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
        appendArrows: appendArrowsClassName
    });
});
/*Carausel 4 columns*/
$(".carausel-3-columns").each(function (key, item) {
    var id = $(this).attr("id");
    var sliderID = "#" + id;
    var appendArrowsClassName = "#" + id + "-arrows";

    $(sliderID).slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
        appendArrows: appendArrowsClassName
    });
});
