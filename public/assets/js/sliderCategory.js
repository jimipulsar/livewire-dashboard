$(document).ready(function () {
    $('#categories .list-second-level').hide();

    $('#categories li').click(function () {

        var $this = $(this);
        var id = $this.data('id');

        // Collapse siblings
        $this.siblings('li[data-id!="' + id + '"]').children('i').addClass('fi-rs-angle-small-right').removeClass('fi-rs-angle-small-down');
        $this.siblings('div[data-id!="' + id + '"]').hide();

        $this.children('i').toggleClass('fi-rs-angle-small-right').toggleClass('fi-rs-angle-small-down');
        $this.siblings('div[data-id="' + id + '"]').toggle();
    });

});
// Slider Range JS
if ($("#slider-range").length) {
    // $(".noUi-handle").on("click", function () {
    //     $(this).width(50);
    // });
    var rangeSlider = document.getElementById("slider-range");
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ".",
        prefix: "€"
    });
    noUiSlider.create(rangeSlider, {
        start: [1, 1000],
        step: 1,
        range: {
            min: [0],
            max: [2000]
        },
        format: moneyFormat,
        connect: true
    });

    // Set visual min and max values and also update value hidden form inputs
    rangeSlider.noUiSlider.on("update", function (values, handle) {
        document.getElementById("slider-range-value1").innerHTML = values[0];
        document.getElementById("slider-range-value2").innerHTML = values[1];
        document.getElementsByName("min-value").value = moneyFormat.from(values[0]);
        document.getElementsByName("max-value").value = moneyFormat.from(values[1]);
    });
}
/*------ ScrollUp -------- */
$.scrollUp({
    scrollText: '<i class="fi-rs-arrow-small-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade"
});
/*-----------------
       Menu Stick
   -----------------*/
var header = $(".sticky-bar");
var win = $(window);
win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
        header.removeClass("stick");
        $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
        $(".header-style-2 .categories-button-active").removeClass("open");
    } else {
        header.addClass("stick");
    }
});

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
/*------ Product slider active 1 ----*/
$(".product-slider-active-1").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    loop: true,
    dots: false,
    arrows: true,
    prevArrow: '<span class="pro-icon-1-prev"><i class="fi-rs-angle-small-left"></i></span>',
    nextArrow: '<span class="pro-icon-1-next"><i class="fi-rs-angle-small-right"></i></span>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
