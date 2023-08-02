$(document).ready(function() {
    $('.gs__view-pass').click(function() {
        var passwordInput = $(this).prev('.get__pass');
        var passwordValue = passwordInput.val();
        passwordInput.attr('type', 'text');
        $(this).toggleClass('check');
        passwordInput.val(passwordValue);
    });
});
$(document).ready(function() {
    $('.calc__result__button').on('click', function() {
        $(this).addClass('active');
        setTimeout(() => {
            $(this).removeClass('active');
        }, 3000);
    });
});
$('.cpc__item-box').click(function() {
    $('.cpc__item-box').removeClass('select');
    $(this).addClass('select');
});

$(document).ready(function() {
    $(".faq__item-body").click(function() {
        var $parent = $(this).parent(".faq__item-row");
        if ($parent.hasClass("visible")) {
            $parent.removeClass("visible");
        } else {
            $(".faq__item-row").removeClass("visible");
            $parent.addClass("visible");
        }
    });
});

$(".login__action").click(function() {
    $(".modal__overflow-layer,.modal__sign-in").addClass("visible");
});
$(document).ready(function() {

    $(".modal__close").click(function() {
        $(".modal__overflow-layer,.modal__body").removeClass("visible");
    });

});
$(".register__action,.gs__bottom-row button").click(function() {
    $(".modal__overflow-layer,.modal__sign-up").addClass("visible");
});
$(".forgot__row").click(function() {
    $(".modal__overflow-layer,.modal__forgot").addClass("visible");
});
$(".thanks__modal").click(function() {
    $(".modal__sign-up").removeClass("visible");
    $(".modal__thanks").addClass("visible");
});
$(".header__menu-button").click(function() {
    $(".header__navigation,body").toggleClass("visible");
    $(this).toggleClass('check');
});
// window load event makes sure image is // loaded before running animation
$(window).on("load", function() {

    var tl = new TimelineMax({
        repeat: -1
    });
    tl.to(".wave__cal-bg", 300, {
        backgroundPosition: "-2247px 0px",
        //autoRound:false,
        ease: Linear.easeNone
    });

});