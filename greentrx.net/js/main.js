$(document).ready(function() {

    $(".tab-nav-btn").click(function() {
        $(this).parents(".tab-wrap").find(".tab-nav-btn").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".tab-wrap").find(".tab-block").removeClass("active");
        $(this).parents(".tab-wrap").find(".tab-block").eq($(this).index()).addClass("active");
    });

    $('.right-side-button').on('click', function() {
        $('.overlay').addClass('active');
        $('.right-side').addClass('active');
    });

    $('.left-side-button').on('click', function() {
        $('.overlay').toggleClass('active');
        $('.left-side').toggleClass('active');
    });

    $('.overlay').on('click', function() {
        $('.left-side').removeClass('active');
        $('.right-side').removeClass('active');
        $('.overlay').removeClass('active');
    });


    $(".album-action").each(function() {
        var mycookie = $.cookie($(this).attr('name'));
        if (mycookie && mycookie == "false") {
            $(this).toggleClass('active');
            var text = parseInt($(this).find("p").text()) + 1;
            $(this).find("p").text(text);
        }
    });


    $(".album-action").click(function() {

        $.cookie($(this).attr("name"), $(this).hasClass("active"), {
            path: '/',
            expires: 365
        });


        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
            var text = parseInt($(this).find("p").text()) + 1;
        } else {
            var text = parseInt($(this).find("p").text()) - 1;
        }

        $(this).find("p").text(text);

    });



    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    $(".album-date").each(function() {
        var myDate = new Date(this.innerHTML);
        var result = myDate.getTime();
        $(this).text(timeSince(result) + " ago");
    });




    /*menu*/
    var menu = function() {

        $('#btn-menu').click(function() {
            $('.menu-block').animate({
                left: '0px'
            }, 500);
            $("body").addClass('pos-rel');
            $('#mask').fadeIn(300).fadeTo("slow");
        });

        $('.icon-close').click(function() {
            $('.menu-block').animate({
                left: '-400px'
            }, 500);
            $("body").removeClass('pos-rel');
            $('#mask').hide();
        });
    };
    $(document).ready(menu);

    /*modal*/
    $(function() {
        $('.btn-login, .btn-reg, .nav__menu-btn, .forgot-pass').click(function(e) {
            // $("body").addClass('pos-rel');
            $('#mask').fadeIn(300).fadeTo("slow");
        });

        $('.btn-login').click(function(e) {
            e.preventDefault();
            $('.modal-login').css({
                display: 'block'
            });
        });

        $('.forgot-pass').click(function(e) {
            e.preventDefault();
            $('.modal-forgot-password').css({
                display: 'block'
            });
            $('.modal-login').hide();
        });

        $('.login-account').click(function(e) {
            e.preventDefault();
            $('.modal-login').css({
                display: 'block'
            });
            $('.modal-reg').hide();
        });

        $('.btn-reg').click(function(e) {
            e.preventDefault();
            $('.modal-reg').css({
                display: 'block'
            });
        });

        $('.nav__menu-btn').click(function() {
            // e.preventDefault();
            $('.header__nav').animate({
                left: '0px'
            }, 500);
        });

        $('.close, #mask').click(function(e) {
            // e.preventDefault();
            $('#mask, .modal-login, .modal-reg, .modal-forgot-password').hide();
            $('.header__nav').animate({
                left: '-300px'
            }, 500);
        });
    });

    /*confirmed-block прописан на стр. marketing-confirmed*/
    if ($('.confirmed-block').length) {

        let confirmed = document.querySelector('.confirmed-block');

        if ((' ' + confirmed.className + ' ').indexOf(' confirmed-block__d-block ')) {
            $('#mask').css({
                'display': 'block'
            });
        } else {
            $('#mask').css({
                'display': 'none'
            });
        }
    }

    /**/
    $('.btn-out').click(function() {
        $('.block-out').toggle();
    });

    /*calc*/
    $('.calc-cur__investment').click(function() {
        $('.calc-btn__investment, #mask').css('display', 'block');
    });

    $('.calc-cur__period').click(function() {
        $('.calc-btn__period, #mask').css('display', 'block');
    });

    $('.btn-xrp, .btn-xlm, .btn-usd, .btn-eth, .btn-dash, .btn-dgb, .btn-bch, .btn-trx, .btn-btc, .btn-ltc, .btn-ZEC, .btn-doge, #mask').click(function() {
        $('.calc-btn__investment').css('display', 'none');
    });

    $('.btn-xrp, .btn-xlm, .btn-usd, .btn-eth, .btn-dash, .btn-dgb, .btn-bch, .btn-trx, .btn-btc, .btn-ltc, .btn-ZEC, .btn-doge, #mask').click(function() {
        $('.calc-btn__investment').css('display', 'none');
    });

    $('.btn-xrp').click(function() {
        $('.img-xrp, .name-xrp').css('display', 'block');
        $('.img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-xlm').click(function() {
        $('.img-xlm, .name-xlm').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-usd').click(function() {
        $('.img-usd, .name-usd').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .name-eu, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-eth').click(function() {
        $('.img-eth, .name-eth').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-dash').click(function() {
        $('.img-dash, .name-dash').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-dgb').click(function() {
        $('.img-dgb, .name-dgb').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-bch').click(function() {
        $('.img-bch, .name-bch').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-trx').click(function() {
        $('.img-trx, .name-trx').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-btc').click(function() {
        $('.img-btc, .name-btc').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-ltc').click(function() {
        $('.img-ltc, .name-ltc').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ZEC, .name-ZEC, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-ZEC').click(function() {
        $('.img-ZEC, .name-ZEC').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-doge, .name-doge').css('display', 'none');
    });

    $('.btn-doge').click(function() {
        $('.img-doge, .name-doge').css('display', 'block');
        $('.img-xrp, .name-xrp, .img-xlm, .name-xlm, .img-usd, .name-usd, .img-eth, .name-eth, .img-dash, .name-dash, .img-dgb, .name-dgb, .img-bch, .name-bch, .img-trx, .name-trx, .img-btc, .name-btc, .img-ltc, .name-ltc, .img-ZEC, .name-ZEC').css('display', 'none');
    });

    /**/
    $('.calc-cur__period').click(function() {
        $('.calc-btn__period, #mask').css('display', 'block');
    });

    $('.btn-xlm-p, .btn-xrp-p, .btn-eth-p, .btn-dash-p, .btn-dgb-p, .btn-bch-p, .btn-trx-p, .btn-btc-p, .btn-ltc-p, .btn-ZEC-p, .btn-doge-p, #mask').click(function() {
        $('.calc-btn__period, #mask').css('display', 'none');
    });

    $('.btn-xlm-p').click(function() {
        $('.img-xlm-p, .name-xlm-p').css('display', 'block');
        $('.img-eth-p, .name-eth-p, .img-xrp-p, .name-xrp-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-eth-p').click(function() {
        $('.img-eth-p, .name-eth-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-dash-p').click(function() {
        $('.img-dash-p, .name-dash-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-dgb-p').click(function() {
        $('.img-dgb-p, .name-dgb-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-bch-p').click(function() {
        $('.img-bch-p, .name-bch-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-trx-p').click(function() {
        $('.img-trx-p, .name-trx-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-btc-p').click(function() {
        $('.img-btc-p, .name-btc-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-ltc-p').click(function() {
        $('.img-ltc-p, .name-ltc-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-xrp-p').click(function() {
        $('.img-xrp-p, .name-xrp-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-ZEC-p').click(function() {
        $('.img-ZEC-p, .name-ZEC-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-doge-p, .name-doge-p').css('display', 'none');
    });

    $('.btn-doge-p').click(function() {
        $('.img-doge-p, .name-doge-p').css('display', 'block');
        $('.img-xlm-p, .name-xlm-p, .img-xrp-p, .name-xrp-p, .img-eth-p, .name-eth-p, .img-dash-p, .name-dash-p, .img-dgb-p, .name-dgb-p, .img-bch-p, .name-bch-p, .img-trx-p, .name-trx-p, .img-btc-p, .name-btc-p, .img-ltc-p, .name-ltc-p, .img-ZEC-p, .name-ZEC-p').css('display', 'none');
    });

    /*balance*/
    $('.balancebtn1').click(function() {
        $('.balancebtn1').addClass('balancebtn-bg');
        $('.balancebtn2').removeClass('balancebtn-bg');
        $('.balance-replenish').css('display', 'flex');
        $('.balance-withdraw').css('display', 'none');
    });

    $('.balancebtn2').click(function() {
        $('.balancebtn2').addClass('balancebtn-bg');
        $('.balancebtn1').removeClass('balancebtn-bg');
        $('.balance-withdraw').css('display', 'flex');
        $('.balance-replenish').css('display', 'none');
    });

    $('.balance-btc').click(function() {
        $('.balance-btc').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-eth, .balance-bch, .balance-xlm').removeClass('balance-bg');
        $('.balance-img__btc, .name-btc').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__eth, .name-eth, .balance-img__bch, .name-bch').css('display', 'none');
    });

    $('.balance-eth').click(function() {
        $('.balance-eth').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-btc, .balance-bch, .balance-xlm').removeClass('balance-bg');
        $('.balance-img__eth, .name-eth').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__btc, .name-btc, .balance-img__bch, .name-bch').css('display', 'none');
    });

    $('.balance-bch').click(function() {
        $('.balance-bch').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-eth, .balance-btc, .balance-xlm').removeClass('balance-bg');
        $('.balance-img__bch, .name-bch').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-xlm').click(function() {
        $('.balance-xlm').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__xlm, .name-xlm').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-ltc').click(function() {
        $('.balance-ltc').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__ltc, .name-ltc').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-etc').click(function() {
        $('.balance-etc').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__etc, .name-etc').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-eur').click(function() {
        $('.balance-eur').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__eur, .name-eur').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-dash').click(function() {
        $('.balance-dash').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__dash, .name-dash').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-usd').click(function() {
        $('.balance-usd').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-xrp, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__usd, .name-usd').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-xrp').click(function() {
        $('.balance-xrp').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-trx, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__xrp, .name-xrp').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-trx').click(function() {
        $('.balance-trx').addClass('balance-bg');
        $('.balance-zcash, .balance-doge, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__trx, .name-trx').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__doge, .name-doge, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-doge').click(function() {
        $('.balance-doge').addClass('balance-bg');
        $('.balance-zcash, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__doge, .name-doge').css('display', 'block');
        $('.balance-img__zcash, .name-zcash, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    $('.balance-zcash').click(function() {
        $('.balance-zcash').addClass('balance-bg');
        $('.balance-doge, .balance-trx, .balance-xrp, .balance-usd, .balance-dash, .balance-eur, .balance-etc, .balance-ltc, .balance-xlm, .balance-bch, .balance-eth, .balance-btc').removeClass('balance-bg');
        $('.balance-img__zcash, .name-zcash').css('display', 'block');
        $('.balance-img__doge, .name-doge, .balance-img__trx, .name-trx, .balance-img__xrp, .name-xrp, .balance-img__usd, .name-usd, .balance-img__dash, .name-dash, .balance-img__eur, .name-eur, .balance-img__etc, .name-etc, .balance-img__ltc, .name-ltc, .balance-img__xlm, .name-xlm, .balance-img__bch, .name-bch, .balance-img__eth, .name-eth, .balance-img__btc, .name-btc').css('display', 'none');
    });

    /*buy-power*/
    $('.buypower-scr').click(function() {
        $(".purchase-btn").removeClass("active");
        $(this).addClass("active");
        let type = $(this).data('type');
        $('#buy_type').val(type);
        $('.buypower-scr').addClass('buypower-opacity');
        $('.buypower-sha, .buypower-eth').removeClass('buypower-opacity');
        $('.buypower-info__scr').css('display', 'flex');
        $('.buypower-info__sha, .buypower-info__eth').css('display', 'none');
    });

    $('.buypower-sha').click(function() {
        $(".purchase-btn").removeClass("active");
        $(this).addClass("active");
        let type = $(this).data('type');
        $('#buy_type').val(type);
        $('.buypower-sha').addClass('buypower-opacity');
        $('.buypower-scr, .buypower-eth').removeClass('buypower-opacity');
        $('.buypower-info__sha').css('display', 'flex');
        $('.buypower-info__scr, .buypower-info__eth').css('display', 'none');
    });

    $('.buypower-eth').click(function() {
        $(".purchase-btn").removeClass("active");
        $(this).addClass("active");
        let type = $(this).data('type');
        $('#buy_type').val(type);
        $('.buypower-eth').addClass('buypower-opacity');
        $('.buypower-sha, .buypower-scr').removeClass('buypower-opacity');
        $('.buypower-info__eth').css('display', 'flex');
        $('.buypower-info__sha, .buypower-info__scr').css('display', 'none');
    });

    /*partners_page*/
    $('.btn-promothional').click(function() {
        $('.partners-page__referral-block, #mask').css('display', 'block');
    });

    $('.close, #mask').click(function() {
        $('.partners-page__referral-block, #mask').css('display', 'none');
    });

    $('.referral-size1').click(function() {
        $('.referral-info__item1').css('display', 'flex');
        $('.referral-info__item2, .referral-info__item3').css('display', 'none');
    });

    $('.referral-size2').click(function() {
        $('.referral-info__item2').css('display', 'flex');
        $('.referral-info__item1, .referral-info__item3').css('display', 'none');
    });

    $('.referral-size3').click(function() {
        $('.referral-info__item3').css('display', 'flex');
        $('.referral-info__item1, .referral-info__item2').css('display', 'none');
    });

    /*dataTable*/
    $(function() {
        if ($('#withdraw').length) {
            $.fn.DataTable.ext.pager.numbers_length = 5;

            $('#withdraw').DataTable({
                "searching": false,
                "info": false,
                "lengthChange": false,
                "pagingType": "simple_numbers",
                "pageLength": 5,
                "responsive": true,
                "columnDefs": [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ],
                language: {
                    'paginate': {
                        'previous': '<span class="prev-icon" style="color: #8a8891; font-size: 16px"><< <span class="prev-icon_">PREVIOUS</span></span>',
                        'next': '<span class="next-icon" style="color: #8a8891; font-size: 16px"><span class="next-icon_">NEXT </span>>> </span>',
                    }
                }
            });
        }

    });

    /*faq*/
    $('.block__title').click(function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    var active = false;
    $(".show-more").on("click", function() {
        $('.hidden').slideToggle();
        $(this).text(active ? 'Watch more' : 'Watch less')
        active = !active;
    });

    $(document).ready(function() {
        $(window).resize(function() {
            if ($(window).width() >= 768) {
                $('.block__item').addClass('ddd');
            } else {
                $('.block__item').removeClass('ddd');
            }
        });
    });

    /*history*/
    $('.historybtn1').click(function() {
        $('.historybtn1').addClass('balancebtn-bg');
        $('.historybtn2, .historybtn3').removeClass('balancebtn-bg');
        $('#history-replenishment_wrapper').css('display', 'block');
        $('#history-purchase_wrapper, #history-withdrawal_wrapper').css('display', 'none');
    });

    $('.historybtn2').click(function() {
        $('.historybtn2').addClass('balancebtn-bg');
        $('.historybtn1, .historybtn3').removeClass('balancebtn-bg');
        $('#history-purchase_wrapper').css('display', 'block');
        $('#history-replenishment_wrapper, #history-withdrawal_wrapper').css('display', 'none');
    });

    $('.historybtn3').click(function() {
        $('.historybtn3').addClass('balancebtn-bg');
        $('.historybtn1, .historybtn2').removeClass('balancebtn-bg');
        $('#history-withdrawal_wrapper').css('display', 'block');
        $('#history-replenishment_wrapper, #history-purchase_wrapper').css('display', 'none');
    });

    if ($('.history-replenishment').length) {

        let hist = document.querySelector('.history-replenishment');

        if ((' ' + hist.className + ' ').indexOf(' d-blockss ')) {

            $.fn.DataTable.ext.pager.numbers_length = 5;

            $('#history-replenishment').DataTable({
                "searching": false,
                "info": false,
                "lengthChange": false,
                "pagingType": "simple_numbers",
                "pageLength": 5,
                "responsive": true,
                "columnDefs": [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ],
                language: {
                    'paginate': {
                        'previous': '<span class="prev-icon" style="color: #8a8891; font-size: 16px"><< <span class="prev-icon_">PREVIOUS</span></span>',
                        'next': '<span class="next-icon" style="color: #8a8891; font-size: 16px"><span class="next-icon_">NEXT </span>>> </span>',
                    }
                }
            });
        } else {
            $('#history-replenishment').DataTable({
                "paging": false,
                "ordering": false,
                "info": false,
                "pagingType": false
            });
        }
    }

    if ($('.history-purchase').length) {

        let hist = document.querySelector('.history-purchase');

        if ((' ' + hist.className + ' ').indexOf(' d-blockss ')) {

            $.fn.DataTable.ext.pager.numbers_length = 5;

            $('#history-purchase').DataTable({
                "searching": false,
                "info": false,
                "lengthChange": false,
                "pagingType": "simple_numbers",
                "pageLength": 5,
                "responsive": true,
                "columnDefs": [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ],
                language: {
                    'paginate': {
                        'previous': '<span class="prev-icon" style="color: #8a8891; font-size: 16px"><< <span class="prev-icon_">PREVIOUS</span></span>',
                        'next': '<span class="next-icon" style="color: #8a8891; font-size: 16px"><span class="next-icon_">NEXT </span>>> </span>',
                    }
                }
            });
        } else {
            $('#history-purchase').css('display', 'none');
        }
    }

    if ($('.history-withdrawal').length) {

        let hist = document.querySelector('.history-withdrawal');

        if ((' ' + hist.className + ' ').indexOf(' d-blockss ')) {

            $.fn.DataTable.ext.pager.numbers_length = 5;

            $('#history-withdrawal').DataTable({
                "searching": false,
                "info": false,
                "lengthChange": false,
                "pagingType": "simple_numbers",
                "pageLength": 5,
                "responsive": true,
                "columnDefs": [{
                        responsivePriority: 1,
                        targets: 0
                    },
                    {
                        responsivePriority: 2,
                        targets: -1
                    }
                ],
                language: {
                    'paginate': {
                        'previous': '<span class="prev-icon" style="color: #8a8891; font-size: 16px"><< <span class="prev-icon_">PREVIOUS</span></span>',
                        'next': '<span class="next-icon" style="color: #8a8891; font-size: 16px"><span class="next-icon_">NEXT </span>>> </span>',
                    }
                }
            });
        }
    }

    /*mining*/
    $('.buypower-scr').click(function() {
        $('.buypower-scr').addClass('buypower-opacity');
        $('.buypower-sha, .buypower-eth').removeClass('buypower-opacity');
        $('.mining__block-scr').css('display', 'block');
        $('.mining__block-sha, .mining__block-eth').css('display', 'none');
    });

    $('.buypower-sha').click(function() {
        $('.buypower-sha').addClass('buypower-opacity');
        $('.buypower-scr, .buypower-eth').removeClass('buypower-opacity');
        $('.mining__block-sha').css('display', 'block');
        $('.mining__block-scr, .mining__block-eth').css('display', 'none');
    });

    $('.buypower-eth').click(function() {
        $('.buypower-eth').addClass('buypower-opacity');
        $('.buypower-sha, .buypower-scr').removeClass('buypower-opacity');
        $('.mining__block-eth').css('display', 'block');
        $('.mining__block-sha, .mining__block-scr').css('display', 'none');
    });

    $('.down-btc').click(function() {
        $('.block-btc').slideToggle(300);
    });

    $('.down-bch').click(function() {
        $('.block-bch').slideToggle(300);
    });

    $('.down-trx').click(function() {
        $('.block-trx').slideToggle(300);
    });

    $('.down-dash').click(function() {
        $('.block-dash').slideToggle(300);
    });

    $('.down-ltc').click(function() {
        $('.block-ltc').slideToggle(300);
    });

    $('.down-xlm').click(function() {
        $('.block-xlm').slideToggle(300);
    });

    $('.down-doge').click(function() {
        $('.block-doge').slideToggle(300);
    });

    $('.down-ZEC').click(function() {
        $('.block-ZEC').slideToggle(300);
    });

    $('.down-eth').click(function() {
        $('.block-eth').slideToggle(300);
    });

    $('.down-xrp').click(function() {
        $('.block-xrp').slideToggle(300);
    });


    // rangerltc
    if ($('#range-ltc').length || $('#rangeV-ltc').length) {
        const rangeltc = document.getElementById('range-ltc'),
            rangeVltc = document.getElementById('rangeV-ltc'),
            setValueltc = () => {
                const newValue = Number((rangeltc.value - rangeltc.min) * 100 / (rangeltc.max - rangeltc.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVltc.innerHTML = `<span>${rangeltc.value}%</span>`;
                rangeVltc.style.left = `calc(${newValue}% + (${newPosition}px))`;
                // console.log(newValue);
                if (newValue > 0) {
                    document.getElementById('name-ltc').style.color = '#6281e4';
                    document.getElementById('w-ltc').style.display = 'none';
                    document.getElementById('b-ltc').style.display = 'block';
                    document.getElementById('img-ltc').style.borderColor = '#6281e4';
                    document.getElementById('img-ltc').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-ltc').style.color = '#fff';
                    document.getElementById('w-ltc').style.display = 'block';
                    document.getElementById('b-ltc').style.display = 'none';
                    document.getElementById('img-ltc').style.borderColor = '#fff';
                    document.getElementById('img-ltc').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValueltc);
        rangeltc.addEventListener('input', setValueltc);
    }

    // rangerxlm
    if ($('#range-xlm').length || $('#rangeV-xlm').length) {
        const rangexlm = document.getElementById('range-xlm'),
            rangeVxlm = document.getElementById('rangeV-xlm'),
            setValuexlm = () => {
                const newValue = Number((rangexlm.value - rangexlm.min) * 100 / (rangexlm.max - rangexlm.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVxlm.innerHTML = `<span>${rangexlm.value}%</span>`;
                rangeVxlm.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-xlm').style.color = '#6281e4';
                    document.getElementById('w-xlm').style.display = 'none';
                    document.getElementById('b-xlm').style.display = 'block';
                    document.getElementById('img-xlm').style.borderColor = '#6281e4';
                    document.getElementById('img-xlm').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-xlm').style.color = '#fff';
                    document.getElementById('w-xlm').style.display = 'block';
                    document.getElementById('b-xlm').style.display = 'none';
                    document.getElementById('img-xlm').style.borderColor = '#fff';
                    document.getElementById('img-xlm').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuexlm);
        rangexlm.addEventListener('input', setValuexlm);
    }

    // rangerdoge
    if ($('#range-doge').length || $('#rangeV-doge').length) {
        const rangedoge = document.getElementById('range-doge'),
            rangeVdoge = document.getElementById('rangeV-doge'),
            setValuedoge = () => {
                const newValue = Number((rangedoge.value - rangedoge.min) * 100 / (rangedoge.max - rangedoge.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVdoge.innerHTML = `<span>${rangedoge.value}%</span>`;
                rangeVdoge.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-doge').style.color = '#6281e4';
                    document.getElementById('w-doge').style.display = 'none';
                    document.getElementById('b-doge').style.display = 'block';
                    document.getElementById('img-doge').style.borderColor = '#6281e4';
                    document.getElementById('img-doge').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-doge').style.color = '#fff';
                    document.getElementById('w-doge').style.display = 'block';
                    document.getElementById('b-doge').style.display = 'none';
                    document.getElementById('img-doge').style.borderColor = '#fff';
                    document.getElementById('img-doge').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuedoge);
        rangedoge.addEventListener('input', setValuedoge);
    }

    // rangerZEC
    if ($('#range-ZEC').length || $('#rangeV-ZEC').length) {
        const rangeZEC = document.getElementById('range-ZEC'),
            rangeVZEC = document.getElementById('rangeV-ZEC'),
            setValueZEC = () => {
                const newValue = Number((rangeZEC.value - rangeZEC.min) * 100 / (rangeZEC.max - rangeZEC.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVZEC.innerHTML = `<span>${rangeZEC.value}%</span>`;
                rangeVZEC.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-ZEC').style.color = '#6281e4';
                    document.getElementById('w-ZEC').style.display = 'none';
                    document.getElementById('b-ZEC').style.display = 'block';
                    document.getElementById('img-ZEC').style.borderColor = '#6281e4';
                    document.getElementById('img-ZEC').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-ZEC').style.color = '#fff';
                    document.getElementById('w-ZEC').style.display = 'block';
                    document.getElementById('b-ZEC').style.display = 'none';
                    document.getElementById('img-ZEC').style.borderColor = '#fff';
                    document.getElementById('img-ZEC').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValueZEC);
        rangeZEC.addEventListener('input', setValueZEC);
    }

    // rangerbtc
    if ($('#range-btc').length || $('#rangeV-btc').length) {
        const rangebtc = document.getElementById('range-btc'),
            rangeVbtc = document.getElementById('rangeV-btc'),
            setValuebtc = () => {
                const newValue = Number((rangebtc.value - rangebtc.min) * 100 / (rangebtc.max - rangebtc.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVbtc.innerHTML = `<span>${rangebtc.value}%</span>`;
                rangeVbtc.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-btc').style.color = '#6281e4';
                    document.getElementById('w-btc').style.display = 'none';
                    document.getElementById('b-btc').style.display = 'block';
                    document.getElementById('img-btc').style.borderColor = '#6281e4';
                    document.getElementById('img-btc').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-btc').style.color = '#fff';
                    document.getElementById('w-btc').style.display = 'block';
                    document.getElementById('b-btc').style.display = 'none';
                    document.getElementById('img-btc').style.borderColor = '#fff';
                    document.getElementById('img-btc').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuebtc);
        rangebtc.addEventListener('input', setValuebtc);
    }

    // rangerbch
    if ($('#range-bch').length || $('#rangeV-bch').length) {
        const rangebch = document.getElementById('range-bch'),
            rangeVbch = document.getElementById('rangeV-bch'),
            setValuebch = () => {
                const newValue = Number((rangebch.value - rangebch.min) * 100 / (rangebch.max - rangebch.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVbch.innerHTML = `<span>${rangebch.value}%</span>`;
                rangeVbch.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-bch').style.color = '#6281e4';
                    document.getElementById('w-bch').style.display = 'none';
                    document.getElementById('b-bch').style.display = 'block';
                    document.getElementById('img-bch').style.borderColor = '#6281e4';
                    document.getElementById('img-bch').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-bch').style.color = '#fff';
                    document.getElementById('w-bch').style.display = 'block';
                    document.getElementById('b-bch').style.display = 'none';
                    document.getElementById('img-bch').style.borderColor = '#fff';
                    document.getElementById('img-bch').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuebch);
        rangebch.addEventListener('input', setValuebch);
    }

    // rangertrx
    if ($('#range-trx').length || $('#rangeV-trx').length) {
        const rangetrx = document.getElementById('range-trx'),
            rangeVtrx = document.getElementById('rangeV-trx'),
            setValuetrx = () => {
                const newValue = Number((rangetrx.value - rangetrx.min) * 100 / (rangetrx.max - rangetrx.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVtrx.innerHTML = `<span>${rangetrx.value}%</span>`;
                rangeVtrx.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-trx').style.color = '#6281e4';
                    document.getElementById('w-trx').style.display = 'none';
                    document.getElementById('b-trx').style.display = 'block';
                    document.getElementById('img-trx').style.borderColor = '#6281e4';
                    document.getElementById('img-trx').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-trx').style.color = '#fff';
                    document.getElementById('w-trx').style.display = 'block';
                    document.getElementById('b-trx').style.display = 'none';
                    document.getElementById('img-trx').style.borderColor = '#fff';
                    document.getElementById('img-trx').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuetrx);
        rangetrx.addEventListener('input', setValuetrx);
    }

    // rangerdash
    if ($('#range-dash').length || $('#rangeV-dash').length) {
        const rangedash = document.getElementById('range-dash'),
            rangeVdash = document.getElementById('rangeV-dash'),
            setValuedash = () => {
                const newValue = Number((rangedash.value - rangedash.min) * 100 / (rangedash.max - rangedash.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVdash.innerHTML = `<span>${rangedash.value}%</span>`;
                rangeVdash.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-dash').style.color = '#6281e4';
                    document.getElementById('w-dash').style.display = 'none';
                    document.getElementById('b-dash').style.display = 'block';
                    document.getElementById('img-dash').style.borderColor = '#6281e4';
                    document.getElementById('img-dash').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-dash').style.color = '#fff';
                    document.getElementById('w-dash').style.display = 'block';
                    document.getElementById('b-dash').style.display = 'none';
                    document.getElementById('img-dash').style.borderColor = '#fff';
                    document.getElementById('img-dash').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuedash);
        rangedash.addEventListener('input', setValuedash);
    }

    // rangereth
    if ($('#range-eth').length || $('#rangeV-eth').length) {
        const rangeeth = document.getElementById('range-eth'),
            rangeVeth = document.getElementById('rangeV-eth'),
            setValueeth = () => {
                const newValue = Number((rangeeth.value - rangeeth.min) * 100 / (rangeeth.max - rangeeth.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVeth.innerHTML = `<span>${rangeeth.value}%</span>`;
                rangeVeth.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-eth').style.color = '#6281e4';
                    document.getElementById('w-eth').style.display = 'none';
                    document.getElementById('b-eth').style.display = 'block';
                    document.getElementById('img-eth').style.borderColor = '#6281e4';
                    document.getElementById('img-eth').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-eth').style.color = '#fff';
                    document.getElementById('w-eth').style.display = 'block';
                    document.getElementById('b-eth').style.display = 'none';
                    document.getElementById('img-eth').style.borderColor = '#fff';
                    document.getElementById('img-eth').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValueeth);
        rangeeth.addEventListener('input', setValueeth);
    }

    // rangerxrp
    if ($('#range-xrp').length || $('#rangeV-xrp').length) {
        const rangexrp = document.getElementById('range-xrp'),
            rangeVxrp = document.getElementById('rangeV-xrp'),
            setValuexrp = () => {
                const newValue = Number((rangexrp.value - rangexrp.min) * 100 / (rangexrp.max - rangexrp.min)),
                    newPosition = 10 - (newValue * 0.2);
                rangeVxrp.innerHTML = `<span>${rangexrp.value}%</span>`;
                rangeVxrp.style.left = `calc(${newValue}% + (${newPosition}px))`;
                if (newValue > 0) {
                    document.getElementById('name-xrp').style.color = '#6281e4';
                    document.getElementById('w-xrp').style.display = 'none';
                    document.getElementById('b-xrp').style.display = 'block';
                    document.getElementById('img-xrp').style.borderColor = '#6281e4';
                    document.getElementById('img-xrp').classList.add("pulse");
                } else if (newValue <= 0) {
                    document.getElementById('name-xrp').style.color = '#fff';
                    document.getElementById('w-xrp').style.display = 'block';
                    document.getElementById('b-xrp').style.display = 'none';
                    document.getElementById('img-xrp').style.borderColor = '#fff';
                    document.getElementById('img-xrp').classList.remove("pulse");
                }
            };
        document.addEventListener("DOMContentLoaded", setValuexrp);
        rangexrp.addEventListener('input', setValuexrp);
    }

    /*parallax*/
    if ($('#scene-img1').length) {
        var scene = document.getElementById('scene-img1');
        var input = document.getElementById('scene-btn1');
        var parallax = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true,
            inputElement: input
        });
    }
    if ($('#scene-img2').length) {
        var scene = document.getElementById('scene-img2');
        var input = document.getElementById('scene-btn2');
        var parallax = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true,
            inputElement: input
        });
    }

    if ($('#scene-img3').length) {
        var scene = document.getElementById('scene-img3');
        var input = document.getElementById('scene-btn3');
        var parallax = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true,
            inputElement: input
        });
    }

    if ($('#scene-img4').length) {
        var scene = document.getElementById('scene-img4');
        var input = document.getElementById('scene-btn4');
        var parallax = new Parallax(scene, {
            hoverOnly: true,
            relativeInput: true,
            inputElement: input
        });
    }



})