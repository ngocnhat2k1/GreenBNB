$(document).ready(function() {


    $('.crypto__item button').click(function() {
        $('.crypto__item').removeClass('check');

        $(this).parent().addClass('check');

        if ($(this).attr('type-name')) {
            var typeName = $(this).attr('type-name');
        } else {
            var typeName = $(this).parent().attr('data-full');
        }

        $('#chooseNameCoin').text(typeName);
    });


});

function ChooseDropList() {
    $('.choose__drop-list li').click(function() {
        $('.choose__drop-list li').removeClass('check');
        $(this).addClass('check');
        $('.choose__drop-list').addClass('choosed');
    });
}
$(document).ready(function() {
    ChooseDropList();
});

$('.chooseOverflow input').on('input', function() {
    var inputValue = $(this).val();
    var numericValue = inputValue.replace(/[^0-9]+/g, '.');
    $(this).val(numericValue);
});

function faqList() {
    // Скрыть fgL__unswer при загрузке страницы
    $('.fgL__unswer').hide();

    // Добавить класс checked и показать/скрыть fgL__unswer с плавностью при клике на fgL__body
    $('.fgL__body').click(function() {
        $(this).toggleClass('checked');
        $(this).find('.fgL__unswer').slideToggle('fast');
    });
}

// Вызов функции faqList
faqList();

function SignIn() {
    $('.login__action').click(function() {
        $('.modal__overflow-layer').addClass('visible');
        $('.modal__sign-in').addClass('visible');
    });
}

SignIn();

function SignUp() {
    $('.reg__action-link').click(function() {
        $('.modal__sign-in').removeClass('visible');
        $('.modal__sign-up').addClass('visible');
    });
}
$('.registration__action').click(function() {
    $('.modal__overflow-layer').toggleClass('visible');
    $('.modal__sign-up').addClass('visible');
});

SignUp();

function closeModal() {
    $('.modal__close').click(function() {
        $('.modal__overflow-layer').removeClass('visible');
        $('.modal__body').removeClass('visible');
    });
}

closeModal();

function forgotPass() {
    $('.forgot__action-link').click(function() {
        $('.modal__sign-in').removeClass('visible');
        $('.modal__forgot').addClass('visible');
    });
}

forgotPass();

$(".drop__down").click(function() {
    $(".drop__down").toggleClass("visible");
});

function planGroup() {
    $('.plan__standart-action').click(function() {
        $(this).addClass('check');
        $('.plan__premium-action').removeClass('check');
        $('#standart').addClass('visible');
        $('#premium').removeClass('visible');
    });

    $('.plan__premium-action').click(function() {
        $(this).addClass('check');
        $('.plan__standart-action').removeClass('check');
        $('#premium').addClass('visible');
        $('#standart').removeClass('visible');
    });
}

planGroup();

function copyAffiliateLink() {
    // Выбираем текст для копирования
    var textToCopy = $('.urls__copylink').text();

    // Создаем временный элемент textarea для копирования
    var tempTextarea = $('<textarea>');
    tempTextarea.val(textToCopy);
    $('body').append(tempTextarea);

    // Выделяем текст внутри textarea
    tempTextarea.select();
    tempTextarea[0].setSelectionRange(0, 99999); // Для мобильных устройств

    // Копируем текст в буфер обмена
    document.execCommand("copy");

    // Удаляем временный элемент textarea
    tempTextarea.remove();
}

// Назначаем обработчик клика на кнопку urls__copy-button
$('.urls__copy-button').click(function() {
    copyAffiliateLink();
});
$(".mn__reinvest-btn").click(function() {
    $(".modal__reinvest,.modal__overflow-layer").toggleClass("visible");
});
$(".mn__withdrawal-btn").click(function() {
    $(".modal__withdraw,.modal__overflow-layer").toggleClass("visible");
});
$(".cabinetMobile-button,.header__mobileButton").click(function() {
    $("body").toggleClass("visibleNav");
});
if ($(window).width() < 600) {
    $('.footer__social-list').insertAfter('.footer__rightCorner');
    $('.footer__copyright').insertAfter('.footer__rightCorner');
}