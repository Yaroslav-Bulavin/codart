$(document).ready(function () {

    const header = $("#header");
    const nav = $("#nav");
    const telephone = $("#header__tel");
    const logo = $("#logo");
    let headerH = header.innerHeight();
    let scrollOffset = $(window).scrollTop();

    FixedHeader(scrollOffset);

    $(window).on("scroll", function (event) {
        event.preventDefault();
        scrollOffset = $(this).scrollTop();
        FixedHeader(scrollOffset);
    });

    function FixedHeader(scrollOffset) {
        if (scrollOffset >= headerH) {
            header.addClass("fixed");
            nav.addClass("header-fixed");
            telephone.addClass("header-fixed");
            logo.addClass("header-fixed");
        } else {
            header.removeClass("fixed");
            nav.removeClass("header-fixed");
            telephone.removeClass("header-fixed");
            logo.removeClass("header-fixed");
        }
    }

    // Navigation scroll to block

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;
        $("#nav-toggle").removeClass("active");
        $(".menu").removeClass("active");
        $(".content").removeClass("active");
        $(".nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });

    // Accordeon

    $(".accordeon__item").on("click", function(){
        if ($(this).hasClass("active")){

            $(this).removeClass("active");
            $(this).addClass("disable");
        }
        else {
            $(".accordeon__item").removeClass("active");
            $(".accordeon__item").addClass("disable");

            $(this).removeClass("disable");
            $(this).addClass("active");
        }

    });

    // Burger

    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $(".content").toggleClass("active");
    });

    // Filter second page

    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');

        $("[data-category]").each(function () {
            var filterWork = $(this).data('category');

            if (filterWork != cat) {
                $(this).addClass("hide");
                $(".project__nav a").removeClass("active");
            } else {
                $(this).removeClass("hide");
                $("[data-filter]").addClass("active");
            }
        });

    })
});