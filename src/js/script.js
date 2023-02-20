$('.destinations__slider').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: true
            }
        }
    ]
});