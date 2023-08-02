var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    $(".close_alert").click(function(event) {
        $('.modal__alert').removeClass('visible');
        $('.modal__layer-overflow').removeClass('visible');
    });

    function timer() {

        var bonusdate = $("#timer").data("time");

        var countDownDate = new Date(bonusdate).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("timer").innerHTML = "Next bonus in " + hours + ":" +
                minutes + ":" + seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "GET BONUS";
            }
        }, 1000);
    }



    function withdraw() {

        let returnBlock = $('#withdraw-error');

        let currency = $('#withdraw_cur').val();
        let amount = $('#withdraw_amount').val();
        let wallet = $('#withdraw_wallet').val();
        let tag = $('#withdraw_tag').val();

        let token = $('#_token').val();

        $.ajax({
            url: '/data/ajax/withdraw.php',
            data: {
                currency: currency,
                count: amount,
                wallet: wallet,
                tag: tag,
                _token: token
            },
            type: 'POST',
            success: function(data) {

                $(".modal-block").hide();

                if (data.status == 'error') {
                    $('.modal__layer-overflow').addClass('visible');
                    createAlertModal("Error", data.message, '');
                    returnBlock.text(data.message);
                } else if (data.status == 'success') {
                    returnBlock.text(data.message);
                    createAlertModal("Success", data.message, '');
                    setTimeout(function() {
                        $('.confirm-but').css('display', 'none');
                        $('.confirm_true').css('display', 'none');
                        $('#textalert').html('');
                        document.location.reload();
                    }, 4000);
                }
            }
        });
    };

    var returnData = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                setInterval(fetchdata, 30000);
            }
        };
    })();

    function reinvest() {

        let currency = $('#reivest_cur').val();
        let amount = $('#reivest_amount').val();

        $.ajax({
            url: '/data/mining/reinvest.php',
            data: {
                currency: currency,
                amount: amount,
                '_token': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {
                if (data.status == 'success') {

                    $('.modal__layer-overflow').addClass('visible');
                    $('#alert_success').addClass('visible');
                    $('#textalert').text(data.text);
                    $('.modal__reinvest').removeClass('visible');

                    //alert(data.message);

                    createAlertModal('Success!', data.message, ' ');

                    setTimeout(function() {
                        $('.confirm-but').css('display', 'none');
                        $('.confirm_true').css('display', 'none');
                        $('#textalert').html('');
                        createModal("succes__icon", "Success", data.text);
                        document.location.reload();
                    }, 5000);
                } else {

                    $('.modal__layer-overflow').addClass('visible');
                    $('#alert_error').addClass('visible');
                    $('#textalert').text(data.text);
                    $('.modal__reinvest').removeClass('visible');

                    //createModal("opps__icon", "Error", data.text);
                    createAlertModal('Error!', data.message, ' ');

                }

                $('.alert__text-modal').text(data.message);
                $('#reivest-error').text(data.message);

            }
        });

    };


    function fetchdata() {

        $.ajax({
            url: '/data/account/fetch.php',
            type: 'post',
            data: {
                id: $("#deposit_id").val()
            },
            success: function(data) {
                if (data.status == 'success') {
                    $('#deposit-error').text('Success. Redirecting...');
                    setTimeout(function() {
                        window.location.href = '/dashboard';
                    }, 2000);
                } else {
                    $('#deposit-error').text(data.deposited + ' recived of ' + data.awaiting);
                    $('#deposit-text').text(data.text);
                }
            }
        });
    }



    function mining(thiss) {
        const currencies = [
            'btc',
            'ada',
            'bch',
            'trx',
            'bnb',
            'doge',
            'ltc',
            'shib',
            'link',
            'eth',
            'etc',
            'xrp',
            'dot',
            'usdt',
            'zec'
        ];

        instokPercent();

        let ajaxData = {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        };

        currencies.forEach(function(currency) {
            ajaxData[currency] = parseInt($('#js-amount-input-' + currency).val());
        });

        console.log(ajaxData);

        $.ajax({
            url: '/data/mining/savemining.php',
            data: ajaxData,
            type: 'POST',
            success: function(data) {
                if (data.status == 'success') {

                } else {

                }

                currencies.forEach(function(currency) {
                    $('#paySecond_' + currency).val(data.mining.payInSecond[currency]);
                });

                miningCalculator();
            },
            error: function() {

            }

        });

    };

    function instokPercent() {

        let countSha256 = 0;
        let cursha = parseFloat($('#hs_sha256').text());

        $('.quantity-field').each(function(index) {
            countSha256 = parseInt(countSha256) + parseInt($(this).val());
        });
        $('#hs_used_sha256').html(countSha256);
        $('#hs_stock_sha256').html(100 - countSha256);
        $('#hs_instock_sha256').html(((100 - countSha256) / 100 * cursha).toFixed(3));
        $('#hs_sha256_stock').html(((100 - countSha256) / 100 * cursha).toFixed(3));

    }

}


$(document).ready(function() {

    $(".currency__item").click(function() {
        $(".modal-block").hide();

        $("input[name*='currency']").val($(this).attr("data-coin"));
        $("input[name*='paysystem']").val($(this).attr("data-coin"));
        $(".depcurr").text($(this).attr("data-coin").toUpperCase());

        $(".modal").css("display", "flex");
        $(".modal-block.deposit").css("display", "block");
    });


    $('.calc-purc').click(function() {
        let currency = $(this).data('currency');
        //alert ($(this).data('currency'));
        $('#buy_currency').val(currency);

        buyCalculator();
    });

    $(".profit_calculate__btn").on('DOMSubtreeModified', function() {
        calculator();
    });





    $("#usdcount").on("input", function() {
        calcExchangeUsd();
    });



    setInterval(function() {
        counter();
    }, 1000);

    var timeoutId1 = 0;

    $('#buy_amount').keyup(function() {
        clearTimeout(timeoutId1);
        timeoutId1 = setTimeout(function() {
            buyCalculator();
        }, 1000);
    });

    $('.range-percent').on('DOMSubtreeModified', function() {
        thiss = $(this);
        clearTimeout(timeoutId1);
        timeoutId1 = setTimeout(function() {


            //alert("Button Style Change event fired");
            mining(thiss);;
        }, 1000);

    });


    //getSidebarStat();

    $('.mining_home_anim').each(function(index) {
        let counter = $(this);

        let interval = setInterval(function() {
            let currentCount = parseFloat(counter.text());
            let newCount = currentCount + parseFloat((Math.random() * (0.0001 - 0.1500) + 0.1500));

            counter.text(newCount.toFixed(4));
        }, 500);

    });

    $('#scene-btn1, #scene-btn2, #scene-btn3, #scene-btn4').click(function() {
        let action = $(this).data('action');
        let type = $(this).data('type');

        let urls = {
            'promo': '/partners',
            'mining': '/mining',
            'support': '/support',
            'calculator': '/calculator',
        };

        if (action == 'auth') {
            location.href = urls[type];
        } else {
            $('#mask').fadeIn(300).fadeTo("slow");
            $('.modal-reg').css({
                display: 'block'
            });
        }
    });

    $('.show_reg').click(function() {
        $('#mask').fadeIn(300).fadeTo("slow");
        $('.modal-reg').css({
            display: 'block'
        });
    });

    $('.calc_invest_but').click(function() {
        let currency = $(this).data('currency');
        $('#invest_curr').val(currency);

        calculator();
    });
    $('.calc_mining_but').click(function() {
        let currency = $(this).data('currency');
        $('#mining_curr').val(currency);

        calculator();
    });


    $('#supportForm').submit(function(event) {
        event.preventDefault();

        let returnBlock = $('#return_support');
        returnBlock.hide();
        returnBlock.html('');
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                returnBlock.addClass(data.class);
                returnBlock.html(data.message);
                returnBlock.show();

                setTimeout(function() {
                    document.location.reload();
                }, 2000);
            },
            error: function(data) {
                console.log(data);
            }
        });
    });

    $('#register-form').on('submit', function(e) {
        e.preventDefault();

        $('.error-opacit').hide();
        $('.error-opacit').html('');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                location.href = '/mining'
            },
            error: function(data) {
                console.log(data);
                Object.entries(data.responseJSON.errors).forEach(([key, value]) => {

                    $('#regError_' + key).show();
                    $('#regError_' + key).html(value);
                });

            }
        });
    });

    $('#login-form').on('submit', function(e) {
        e.preventDefault();

        $('.error-opacit').hide();
        $('.error-opacit').html('');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                location.href = '/mining'
            },
            error: function(data) {
                Object.entries(data.responseJSON.errors).forEach(([key, value]) => {
                    $('#loginError_' + key).show();
                    $('#loginError_' + key).html(value);
                });
            }
        });
    });

    $('#passRecovery11Form').submit(function(event) {
        event.preventDefault();

        let returnBlock = $('#pass_recovery_return');
        returnBlock.hide();
        returnBlock.html('');
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                returnBlock.addClass(data.class);
                returnBlock.html(data.message);
                returnBlock.show();
            },
            error: function(data) {
                console.log(data);
            }
        });
    });

    $('.balance-available__item').click(function() {
        let currency = $(this).data('currency');

        $('.deposit_pane, .withdraw_pane').hide();
        $('#depPane_' + currency).show();
        $('#withPane_' + currency).show();
    });

    $('.deposit_form').submit(function(event) {
        event.preventDefault();


        let returnBlock = $(this).find('.return_deposit');
        returnBlock.html('');
        returnBlock.hide();
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                if (data.status == 'success') {
                    location.href = data.url;
                } else {
                    returnBlock.addClass(data.class);
                    returnBlock.html(data.message);
                    returnBlock.show();
                    createModal("opps__icon", "Error", data.message);
                }
            },
            error: function(data) {
                console.log(data);
            }
        });
    });



    $('.buy_currency').click(function() {
        let currency = $(this).data('currency');

        $('.buy_cur_balance').css('display', 'none');
        $('.buy_cur_balance.balance_' + currency).css('display', 'flex');

        $('#buy_currency').val(currency);

        buyCalculator();
    });
    $('.buy_type').click(function() {
        let type = $(this).data('type');
        $('#buy_type').val(type);
    });







    $('#orderScrypt, #orderSha256, #orderEthash').click(function() {
        let type = $(this).data('type');
        let currency = $('#buy_currency').val();
        let amount = $('#buy_amount').val();

        let returnBlock = $('.buy_return_' + type);
        returnBlock.html('');
        returnBlock.hide();
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: '/data/mining/order.php',
            data: {
                '_token': $('meta[name="csrf-token"]').attr('content'),
                type: type,
                currency: currency,
                amount: amount,
            },
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            success: function(data) {
                returnBlock.addClass(data.class);
                returnBlock.html(data.message);
                returnBlock.show();

                if (data.status != 'error') {
                    setTimeout(function() {
                        document.location.reload();
                    }, 1000);
                }
            }
        });
    });

    $('#conf-cancel-exchange').click(function() {
        $('.exchange-but').css('display', 'none');
    });

    $('#conf-cancel-reinvest').click(function() {
        $('.reinvest-but').css('display', 'none');
    });

    $('#banner_but').click(function() {
        $('.referral-but').css('display', 'flex');
    });

    $('.exchange_button').click(function() {
        //let conf = confirm("Are you sure you want to exchange?");
        let ammount = $('#cryptocount').val();
        let currency = ($('.calculate__btn_main').text().replace(/\s+/g, "")).replace('+', '');

        $.ajax({
            url: '/data/mining/exchange.php',
            data: {
                currency: currency,
                ammount: ammount,
                '_token': $('meta[name="csrf-token"]').attr('content')
            },
            type: 'POST',
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {
                if (data.status == 'success') {
                    $('.confirm-but').css('display', 'flex');
                    $('.confirm_true').css('display', 'flex');
                    $('#textalert').html(data.message);
                    alert(data.message);
                    setTimeout(function() {
                        $('.confirm-but').css('display', 'none');
                        $('.confirm_true').css('display', 'none');
                        $('#textalert').html('');

                        document.location.reload();
                    }, 2000);
                } else {
                    $('.confirm-but').css('display', 'flex');
                    $('.confirm_false').css('display', 'flex');
                    $('#textalert').html(data.message);
                    alert(data.message);
                    setTimeout(function() {
                        $('.confirm-but').css('display', 'none');
                        $('.confirm_false').css('display', 'none');
                        $('#textalert').html('');
                    }, 2000);
                }
            }
        });
    });




    $('#accountChangePassword').submit(function(event) {
        event.preventDefault();
        let returnBlock = $('#accountChangePassword_return');
        returnBlock.hide();
        returnBlock.html('');
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                returnBlock.addClass(data.class);
                returnBlock.html(data.message);
                returnBlock.show();
            },
            error: function(data) {
                console.log(data);
            }
        });
    });
    $('#saveAccountForm').submit(function(event) {
        event.preventDefault();
        let returnBlock = $('#accountSave_return');
        returnBlock.hide();
        returnBlock.html('');
        returnBlock.removeClass('alert-error alert-success');

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                returnBlock.addClass(data.class);
                returnBlock.html(data.message);
                returnBlock.show();
            },
            error: function(data) {
                console.log(data);
            }
        });
    });

    $('.referral-size2').click(function() {
        $('.referral-info__item2').css('display', 'flex');
        $('.referral-info__item1, .referral-info__item3, .referral-info__item4, .referral-info__item5').css('display', 'none');

        $('.bn_img').hide();
        $('.bn_200').show();

    });


    $('.referral-size4').click(function() {
        $('.referral-info__item4').css('display', 'flex');
        $('.referral-info__item1, .referral-info__item2, .referral-info__item3, .referral-info__item5').css('display', 'none');

        $('.bn_img').hide();
        $('.bn_468').show();
    });

    $('.referral-size5').click(function() {
        $('.referral-info__item5').css('display', 'flex');
        $('.referral-info__item1, .referral-info__item2, .referral-info__item3, .referral-info__item4').css('display', 'none');

        $('.bn_img').hide();
        $('.bn_728').show();
    });

});

function buyCalculator() {
    let amount = $('#usd_ammount').val();

    $.ajax({
        url: '/data/mining/calchash.php',
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            amount: amount,
        },
        dataType: 'json',
        type: 'POST',
        success: function(data) {
            $('#buy_power').html(parseFloat(data.hash.purchased).toFixed(2));
            $('#buy_percent').html(parseFloat(data.hash.percent).toFixed(1));
            $('#buy_profit').html("$ " + parseFloat(data.hash.profit).toFixed(2));
        }
    });
}



function calculator() {

    let count = $('#invest_ammount').val();
    let days = $('#calc_days_val').val();
    let invest_curr = $('#invest_curr').text();
    let mining_curr = $('#mining_curr').text();

    $.ajax({
        url: '/data/calculator/index.php',
        type: "POST",
        //dataType: 'json',
        data: {
            count: count,
            days: days,
            invest_curr: invest_curr,
            mining_curr: mining_curr,
        },
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {
            if (data.status == 'success') {
                $('#retcalc_days').text(data.days);
                $('#retcalc_hash').text(data.hash);
                $('#retcalc_hashname').text(data.hashname);
                $('#retcalc_perday').text(data.perday + "%");
                $('#retcalc_profit').text("$ " + data.profit + " " + data.profitdays);

                $('.cpc__group-list li').removeClass('select');
                addClassToLiElementsBefore(data.level + 1);

            } else {
                $('#retcalc_days').text(0);
                $('#retcalc_hash').text(0.00);
                $('#retcalc_perday').text(0 + "%");
                $('#retcalc_profit').text(0 + " USDT");
            }
        }
    });


}

function depositCalculator() {

    let count = $('#invest_ammount').val();
    let invest_curr = $('#invest_curr').text();
    let mining_curr = $('#mining_curr').text();

    $.ajax({
        url: '/data/calculator/deposit.php',
        type: "POST",
        //dataType: 'json',
        data: {
            count: count,
            invest_curr: invest_curr,
            mining_curr: mining_curr,
        },
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {
            if (data.status == 'success') {
                $('#retcalc_days').text(data.days);

                $('#retcalc_hash').text(data.hash);
                $('#retcalc_perday').text(data.perday + "%");
                $('#retcalc_profit').text(data.profit + " $ " + data.profitdays);

                if (invest_curr != "usdt") {
                    $('#invest_ammount_inusd').val(data.usd);
                } else {
                    $('#invest_ammount_crypto').val(data.count);
                }

                $('.cpc__group-list li').removeClass('select');
                addClassToLiElementsBefore(data.level);

                var full = $('.cdti__grid-list li.select').data('full');
                var cur = $('.cdti__grid-list li.select').data('currency');
                var ammount = $('#invest_ammount_crypto').val();

                $("#make_deposit").attr('data-full', full);
                $("#make_deposit").attr('data-currency', cur);
                $("#make_deposit").attr('data-ammount', ammount);

            } else {
                $('#retcalc_days').text(0);
                $('#retcalc_hash').text(0.00);
                $('#retcalc_perday').text(0 + "%");
                $('#retcalc_profit').text(0 + " USDT");
            }
        }
    });


}


function addClassToLiElementsBefore(index) {
    $('.cpc__group-list li:lt(' + index + ')').addClass('select');
}


function copy(string) {
    var copyText = document.querySelector("#" + string);
    copyText.select();
    document.execCommand("copy");

    alert('Copied');
}

function miningCalculator() {
    const currencies = [
        'btc',
        'ada',
        'bch',
        'trx',
        'bnb',
        'doge',
        'ltc',
        'shib',
        'link',
        'eth',
        'etc',
        'xrp',
        'dot',
        'usdt',
        'zec'
    ];

    currencies.forEach(function(currency) {
        let paySec = parseFloat($('#paySecond_' + currency).val());
        let payHour = paySec * 3600;

        $('#cm_hour_' + currency).html(payHour.toFixed(10));
        $('#cm_day_' + currency).html((payHour * 24).toFixed(10));
        $('#cm_month_' + currency).html((payHour * 24 * 31).toFixed(10));
        $('#cm_3month_' + currency).html((payHour * 24 * 31 * 3).toFixed(10));
        $('#cm_6month_' + currency).html((payHour * 24 * 31 * 6).toFixed(10));
        $('#cm_year_' + currency).html((payHour * 24 * 365).toFixed(10));

    });
}


$('.quantity-q').on('input', function() {

    const currencies = [
        'btc',
        'ada',
        'bch',
        'trx',
        'bnb',
        'doge',
        'ltc',
        'shib',
        'link',
        'eth',
        'etc',
        'xrp',
        'dot',
        'usdt',
        'zec'
    ];

    let rangeInput = $(this);

    if (rangeInput.data('type') == 'sha256') {
        let countAll = 0;
        $('.quantity-sha256').each(function(index) {
            if ($(rangeInput).attr('id') != $(this).attr('id')) {
                countAll = parseInt(countAll) + parseInt($(this).val());
            }
        });
        if ((parseInt($(rangeInput).val()) + parseInt(countAll)) > 100) {
            $(rangeInput).val(100 - countAll)
        }
    }

    $(this).closest('.mining-cur__left').find('.range-numb').html($(this).val() + '%');

    instokPercent();

    let ajaxData = {
        '_token': $('meta[name="csrf-token"]').attr('content'),
    };

    currencies.forEach(function(currency) {
        ajaxData[currency] = parseInt($('#rng_' + currency).val());
    });

    //console.log(ajaxData);

    $.ajax({
        url: '/ajax/mining/saveMining',
        data: ajaxData,
        type: 'POST',
        success: function(data) {
            if (data.status == 'success') {
                $('#confirm_true').css('display', 'flex');
                $('#confirm_true .conf_text').html(data.message);

                setTimeout(function() {
                    $('#confirm_true').css('display', 'none');
                    $('#confirm_true .conf_text').html('');
                }, 2000);
            } else {
                $('#confirm_false').css('display', 'flex');
                $('#confirm_false .conf_text').html(data.message);

                setTimeout(function() {
                    $('#confirm_false').css('display', 'none');
                    $('#confirm_false .conf_text').html('');
                }, 2000);
            }

            currencies.forEach(function(currency) {
                $('#paySecond_' + currency).val(data.mining.payInSecond[currency]);

            });

            miningCalculator();
        },
        error: function(data) {
            console.log(data);
        }
    });

});

//setInterval(function() { counter(); }, 1000);

function counter() {
    $('.pay_in_second').each(function(index) {
        if ($(this).val() > 0) {
            // alert($(this).parent().parent().html());
            let numb = $(this).parent().parent().parent().find(".mining_numb");
            //alert($(this).parent().parent().parent().parent().parent().html());
            let newCount = parseFloat($(numb).text()) + parseFloat($(this).val());
            //alert(newCount);
            $(numb).text(newCount.toFixed(12).substring(0, 14));
        }
    });
}