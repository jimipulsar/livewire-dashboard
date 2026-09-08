if ($(".sort-by-product-area").length) {
    var $body = $("body"),
        $cartWrap = $(".sort-by-product-area"),
        $cartContent = $cartWrap.find(".sort-by-dropdown");
    $cartWrap.on("click", ".sort-by-product-wrap", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass("show")) {
            $this.siblings(".sort-by-dropdown").addClass("show").parent().addClass("show");
        } else {
            $this.siblings(".sort-by-dropdown").removeClass("show").parent().removeClass("show");
        }
    });
    /*Close When Click Outside*/
    $body.on("click", function (e) {
        var $target = e.target;
        if (!$($target).is(".sort-by-product-area") && !$($target).parents().is(".sort-by-product-area") && $cartWrap.hasClass("show")) {
            $cartWrap.removeClass("show");
            $cartContent.removeClass("show");
        }
    });
}

/*-----------------------
    Shop filter active
------------------------- */
$(".shop-filter-toogle").on("click", function (e) {
    e.preventDefault();
    $(".shop-product-fillter-header").slideToggle();
});
var shopFiltericon = $(".shop-filter-toogle");
shopFiltericon.on("click", function () {
    $(".shop-filter-toogle").toggleClass("active");
});
//sidebar sticky
if ($(".sticky-sidebar").length) {
    $(".sticky-sidebar").theiaStickySidebar();
}
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
