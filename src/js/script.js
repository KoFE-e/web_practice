const hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu_mobile__close'),
      menuLinks = document.querySelectorAll('.menu_mobile__link'),
      menu = document.querySelector('.menu_mobile'),
      overlay = document.querySelector('.overlay'),
      loginBtn = document.querySelector('.menu__btn'),
      modalLogin = document.querySelector('.modal_login'),
      modalRegister = document.querySelector('.modal_register')
      registerLink = document.querySelector('.modal__account__register'),
      loginLink = document.querySelector('.modal__account__login');

loginLink.addEventListener('click', () => {
    modalRegister.classList.remove('active');
    modalLogin.classList.add('active');
});

registerLink.addEventListener('click', () => {
    modalLogin.classList.remove('active');
    modalRegister.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    modalLogin.classList.add('active');
});

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

menuLinks.forEach( item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

overlay.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
    if (modalLogin.classList.contains('active')) {
        modalLogin.classList.remove('active');
        overlay.classList.remove('active');
    }
    if (modalRegister.classList.contains('active')) {
        modalRegister.classList.remove('active');
        overlay.classList.remove('active');
    }
});

$(document).ready(function() {
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
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 300);
        e.preventDefault();
        return false;
    });
});