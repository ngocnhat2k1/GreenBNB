function showModal(iconClass, titleText, messageText) {

    var modal = $('#modal-notice');
    var modalIcon = $('#modal-icon');
    var modalTitle = $('#modal-title');
    var modalMessage = $('#modal-message');

    modalIcon.attr('class', iconClass);
    modalTitle.text(titleText);
    modalMessage.text(messageText);

    modal.addClass('active');
    setTimeout(function() {
        modal.removeClass('active');
    }, 3000);

}

function createModal(iconClass, titleText, messageText) {
    var modal = $('<div>').attr('id', 'modal-notice').addClass('modal__inner notice');
    var modalHeader = $('<div>').addClass('modal__header').appendTo(modal);
    var modalAlertIcon = $('<div>').addClass('modal__alert-icon').appendTo(modalHeader);
    var modalIcon = $('<i>').attr('id', 'modal-icon').addClass(iconClass).appendTo(modalAlertIcon);
    var modalTitle = $('<h2>').attr('id', 'modal-title').addClass('modal__title').text(titleText).appendTo(modalHeader);
    var modalClose = $('<span>').attr('id', 'modal-close').addClass('modal__close').appendTo(modalHeader);
    var modalAlertText = $('<div>').addClass('modal__alert-text').appendTo(modal);
    var modalProgressBar = $('<div>').attr('id', 'modal-progress-bar').addClass('progress_bar').appendTo(modal);

    $('body').append(modal);

    modalClose.on('click', function() {
        hideModal(modal);
    });

    modal.addClass('active');
    setTimeout(function() {
        setTimeout(function() {
            hideModal(modal);
        }, 100);
    }, 5000);
}

function createVideoModal() {

    let modal =
        '<div class="modal__overflow-layer visible">' +
        '<div class="modal__body modal__bonus visible">' +
        '<form>' +
        '<div class="modal__inner">' +
        '<div class="modal__header">' +
        '<h2 class="modal__title">Get a bonus</h2>' +
        '<div class="modal__sub-title">for your video</div>' +
        '<span class="modal__close" id="modal-close"></span>' +
        '</div>' +
        '<div class="modal__item-input">' +
        '<div class="modal__input-title">Link video:</div>' +
        '<input id="videourl" type="text" name="video" value="" placeholder="Enter link video">' +
        '</div>' +
        '<div class="modal__text-area">' +
        '<h3>You can get your bonus</h3>' +
        '<p>Get a bonus from 200 to 50000 miners on your account. You can get the next bonus for a new video in a week.</p>' +
        '</div>' +
        '<div class="modal__button login-modal">' +
        '<button id="sendvid" onClick="">Send</button>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>';

    $('body').append(modal);

    $('#sendvid').on('click', function(event) {
        sendVideoModal(modal, event);
    });

    $('#modal-close').on('click', function() {
        modal.remove();
    });
}

function createAlertModal($alert_title, $title, $text) {

    let modal =
        '<div class="modal__overflow-layer visible" id="alert_modal">' +
        '    <div class="modal__body modal__thanks visible">' +
        '        <div class="modal__inner">' +
        '            <div class="modal__header">' +
        '                <div class="modal__alert-icon"><i class="opps__icon"></i></div>' +
        '                <h2 class="modal__title">' + $alert_title + '</h2>' +
        '                <span class="modal__close" id="modal-close"></span>' +
        '            </div>' +
        '            <div class="modal__alert-text">' +
        '                <div class="modal__alert-title">' + $title + '</div>' +
        '               <div class="modal__alert-text"><p>' + $text + '</p></div>' +
        '            </div>' +
        '            <div class="modal__button">' +
        '                <button id="confirm_modal">OK</button>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    $('body').append(modal);

    $('#modal-close, #confirm_modal').on('click', function() {
        $('#alert_modal').remove();
    });

    setTimeout(function() {
        $('#alert_modal').fadeOut('slow');
    }, 4000);
}

function sendVideoModal(modal, event) {
    event.preventDefault();

    video = $('#videourl').val();

    $.ajax({
        url: '/data/account/video.php',
        data: {
            video: video
        },
        type: 'POST',
        success: function(data) {
            $(".modal__overflow-layer,body,.modal__body").removeClass("visible");
            modal.remove();
        }
    });

};

$(document).on('click', '#modal-close', function(e) {
    e.preventDefault();
    closeModal();
});

function hideModal(modal) {
    modal.animate({
        marginRight: '25px'
    }, {
        duration: 200,
        complete: function() {
            modal.animate({
                left: '100%'
            }, {
                duration: 500,
                complete: function() {
                    modal.remove();
                }
            });
        }
    });
}

function closeModal() {
    var modal = $('#modal-notice');
    hideModal(modal);
}

function deposit() {




    let returnBlock = $('#deposit-error');
    let currency = depositButtonElement.attr('data-currency')
    let amount = depositButtonElement.attr('data-ammount')
    let token = $('#_token').val();

    $.ajax({
        url: '/data/deposit/deposit.php',
        data: {
            currency: currency,
            count: amount,
            _token: token
        },
        type: 'POST',
        success: function(data) {
            if (data.status == 'success') {

                $("#deposit_cur").val(currency);
                $("#deposit_amount").val(amount);

                $("#deposit_short").text(depositButtonElement.attr('data-full'));

                $('#qrimage').attr("src", data.qrcode);
                $('#qrimage').css("display", "flex");

                $('#dep_address').show();

                $('#deposit_address').val(data.address);

                if (data.dest_tag != null) {
                    $('#dep_tag').show();
                    $('#deposit_tag').val(data.dest_tag);
                } else {
                    $('#dep_tag').hide();
                }

                $("#chain").text(data.chain);
                $("#deposit_amount").val(data.amount);
                $("#deposit_amount").prop("disabled", true);
                $("#deposit_amount_title").text('Deposit ammount:');

                $("#deposit_id").val(data.id);


                $(".contact__form button").hide();
                $(".deposit__modal button").hide();
                $(".plusBtn, .minusBtn").hide();
                $("#dep_usd").hide();
                $(".select-coin").hide();

                fetchdata();

                returnData();
                loadDepositsData();

                modalBody.addClass("visible");
                depositBlock.addClass("visible");

            } else {

                if ($("#deposit_address").val()) {

                    if ($('#deposit_tag').val()) {
                        $('#dep_tag').show();
                    }

                    $("#dep_address").show();
                    $("#deposit_amount").prop("disabled", true);
                    $('#qrimage').css("display", "flex");

                    modalBody.addClass("visible");
                    depositBlock.addClass("visible");

                }

                createAlertModal('Hold on there!', data.message, 'Please note that you are limited to making only one address every two minutes.')
            }
        },
        error: function(data) {
            console.log(data);
        }
    });
};

let depositBlock = $(".modal__deposit");
let depositBlockClose = $(".modal__deposit .modal__close");

let modalWithdraw = $(".modal__withdraw");
let withdrawBlockClose = $(".modal__withdraw .modal__close");

let modalBody = $(".modal__overflow-layer");
let depositError = $("#deposit-error");
let depositCurrencyListElement = $(".cdti__grid-list li");

let depositButtonElement = $("#make_deposit");

$(document).ready(function() {

    depositCurrencyListElement.click(function(event) {


        $('.full-name').text($('.cdti__grid-list li.select').data('full'));

        $('#invest_curr').text($('.cdti__grid-list li.select').attr('data-currency'));
        $('#mining_curr').text('usdt');
        $("#invest_ammount").val($('#invest_ammount_crypto').val());

        depositCalculator();

    });

    depositButtonElement.click(function(event) {
        deposit();
    });

    depositBlockClose.click(function(event) {

        depositBlock.removeClass("visible");
        modalBody.removeClass("visible");

        $("#dep_address").hide();
        $('#dep_tag').hide();
        $("#deposit-error").text('');
        $("#deposit_amount").prop("disabled", false);
        $('#qrimage').css("display", "none");
    });


    $('#deposit_form').submit(function(event) {
        event.preventDefault();
        deposit();
    });

});

var statusMap = {
    "-1": {
        className: "status__error",
        statusText: "Error"
    },
    "0": {
        className: "status__progress",
        statusText: "In progress"
    },
    "1": {
        className: "status__success",
        statusText: "Success"
    }
};

function loadTransactionsData() {
    $.ajax({
        url: '/data/block/transactions.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var html = '';
            $.each(data, function(index, value) {

                if ((value.usd) > 0)
                    power = "+ " + value.usd * 100 + ' VH/s';
                else
                    power = value.usd;

                html += '<li class="transaction__table-line historydata-order="' + value.deposit_id + '">';
                html += '    <ul class="transaction__table-row deposit__row">';
                html += '        <li class="transaction__item-row row-size5"><span class="transaction__name">' + value.amount + ' ' + value.currency.toUpperCase() + '</span></li>';
                html += '        <li class="transaction__item-row row-size7"><span class="transaction__date">' + value.endDate + '</span></li>';
                html += '        <li class="transaction__item-row row-size7"><span class="transaction__power">' + power;
                html += '                </span></li>';
                html += '    </ul>';
                html += '</li>';

            });

            $('#depsoits_history').append(html);

            $('.history').click(function(event) {

            });

        }
    });
}

function loadDepositsData() {
    $.ajax({
        url: '/data/block/deposits.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var html = '';
            $.each(data, function(index, value) {

                var statusClass = statusMap[value.status] || "";

                html += '<li class="transaction__table-line historydata-order="' + value.deposit_id + '">';
                html += '    <ul class="transaction__table-row deposit__row">';
                html += '        <li class="transaction__item-row row-size5"><span class="transaction__name">' + value.amount + ' ' + value.currency.toUpperCase() + '</span></li>';
                html += '        <li class="transaction__item-row row-size7"><span class="transaction__date">' + value.endDate + '</span></li>';
                html += '        <li class="transaction__item-row row-size7"><span class="transaction__power">' + value.usd * 100 + '';
                html += '                VH/s</span></li>';
                html += '    </ul>';
                html += '</li>';

            });

            $('#depsoits_history').append(html);

            $('.history').click(function(event) {

            });

        }
    });
}

function loadWithdrawsData() {
    $.ajax({
        url: '/data/block/withdraws.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var html = '';
            $.each(data, function(index, value) {

                var statusClass = statusMap[value.status] || "";


                html += '<li class="transaction__table-line">';
                html += '    <ul class="transaction__table-row deposit__row">';
                html += '        <li class="transaction__item-row row-size1"><span class="transaction__amount"><i';
                html += '                    class="' + value.currency.toLowerCase() + '__logo"></i>' + value.amount + ' ' + value.currency.toUpperCase() + '</span></li>';
                html += '        <li class="transaction__item-row row-size5"><span';
                html += '                class="transaction__date">' + value.date + '</span></li>';
                html += '        <li class="transaction__item-row row-size6"><span';
                html += '                class="transaction__status">' + statusClass['statusText'] + '</span></li>';
                html += '    </ul>';
                html += '</li>';
            });

            $('#wd_table').append(html);

        }
    });
}

function getHistory() {

    $.ajax({
        url: '/data/account/history.php',
        type: 'post',
        data: {
            id: $("#deposit_id").val()
        },
        success: function(data) {
            if (data.status == 'success') {

                $('#qrimage').attr("src", data.qrcode);
                $('#qrimage').css("display", "flex");

                $('#dep_address').show();

                $('#deposit_address').val(data.address);

                if (data.dest_tag != "") {
                    $('#dep_tag').show();
                    $('#deposit_tag').val(data.dest_tag);
                } else {
                    $('#dep_tag').hide();
                }

                $("#deposit_short").text(data.currency.toUpperCase());

                $("#chain").text(data.chain);
                $("#deposit_amount").val(data.amount + data.currency.toUpperCase());
                $("#deposit_amount").prop("disabled", true);
                $("#deposit_amount_title").text('Deposit ammount:');

                depositBlock.find("button").hide();

                fetchdata();
                returnData();

            }
        }
    });
}


function getBonus() {

    $.ajax({
        url: '/data/account/bonus.php',
        data: {},
        type: 'POST',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {

            if (data.status == 'success') {

                $('.modal__layer-overflow').addClass('visible');
                $('#alert_success').addClass('visible');
                var timestamp = (data.time * 1000);
                $('#timer').attr("data-time", timestamp);

                //createModal("succes__icon", "Success", data.text);

                createAlertModal("Success!", data.text, '')

                setTimeout(function() {
                    document.location.reload();
                }, 4000);

            } else {

                //createModal("opps__icon", "Error", data.text);

                createAlertModal("Error!", data.text, '')

                //$('.modal__layer-overflow').addClass('visible');
                //$('#alert_error').addClass('visible');

            }

            $('.alert__text-modal').text(data.text);

        }
    });

};

function calcExchangeUSD(amount, currency) {

    $.ajax({
        url: '/data/mining/exchangeusd.php',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            currency: currency,
            amount: amount,
            '_token': $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        type: 'POST',
        success: function(data) {
            $('#invest_ammount').val(data.incrypto);
        }
    });
}

function calcExchangeCRY(amount, currency) {

    $.ajax({
        url: '/data/mining/exchangecry.php',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            currency: currency,
            amount: amount,
            '_token': $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        type: 'POST',
        success: function(data) {
            $('#invest_usdt').val(data.incrypto);
        }
    });
}

function calcExchangeCrypto() {

    let amount = $('.you__give .calc__drop-item.check').data('amount');
    let currency = $('.you__give .calc__drop-item.check').data('cur');

    $.ajax({
        url: '/data/mining/exchangecrypto.php',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            currency: currency,
            amount: amount,
            '_token': $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        type: 'POST',
        success: function(data) {
            $.each(data.message, function(index, item) {
                $('.you__get').find('[data-cur="' + index + '"]').find('.getAmount').text(item);
            });

        }
    });
}

function calcExchange() {

    //let amount = $('#exGive').val();
    //let currency = $('.giveaway__group ul li.select').data('cur');
    //let currencyEx = $('.get__group ul li.select').data('cur');

    let amount = $('.you__give .calc__drop-item.check').data('amount');
    let currency = $('.you__give .calc__drop-item.check').data('cur');
    let currencyEx = $('.you__get  .calc__drop-item.check').data('cur');

    $.ajax({
        url: '/data/mining/exchange.php',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            currency: currency,
            ammount: amount,
            currencyEx: currencyEx,
            '_token': $('meta[name="csrf-token"]').attr('content'),
        },
        dataType: 'json',
        type: 'POST',
        success: function(data) {

            if (data.status == 'success') {
                createAlertModal("Success", data.message, "");
                setTimeout(function() {
                    document.location.reload();
                }, 3000);
            } else {
                createAlertModal("Error", data.message, "");
            }

        }
    });
}

withdrawBlockClose.click(function() {
    modalBody.removeClass("visible");
    modalWithdraw.removeClass("visible");
    $("#dep_address").hide();
    $("#withdraw-error").text('');
    $("#withdraw_amount").prop("disabled", false);
    modalWithdraw.find("i").removeClass();
});

$(".withdraw").click(function(event) {
    modalBody.addClass("visible");
    modalWithdraw.addClass("visible");

    $("#withdraw_short").text($(this).data('cur').toUpperCase());
    $("#modal_logo").removeClass().addClass($(this).data('cur') + '__logo');
    // modalWithdraw.find("i").addClass($(this).data('icon')+"__logo");
    $("#withdraw_cur").val($(this).data('cur'));
    $("#withdraw_amount").val($(this).data('amount'));
    $("#withdraw_amount_text").text($(this).data('amount') + ' ' + $(this).data('cur').toUpperCase());

    modalBody.find("button").show();
    if ($(this).data('cur') == 'xrp') {
        $('#wd_tag').show();
    } else {
        $('#wd_tag').hide();
    }

});


$(document).ready(function() {

    $('#withdraw_form').submit(function(event) {
        event.preventDefault();
        withdraw();
    });

});

$(".coin__drop-list").on('DOMSubtreeModified', function() {
    calcExchangeCrypto();
});

$('#exGive').on('input', function() {
    calcExchangeCrypto();
});

$('#exchange_btn').on('click', function() {
    calcExchange();
});