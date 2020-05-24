"use strict";
$(document).ready(function() {
    togglemenu();
    if ($('body').hasClass('layout-6') || $('body').hasClass('layout-7')) {
        togglemenulayout();
    }
    menuhrres();
    var vw = $(window)[0].innerWidth;
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.to-do-list input[type=checkbox]').on('click', function() {
        if ($(this).prop('checked'))
            $(this).parent().addClass('done-task');
        else
            $(this).parent().removeClass('done-task');
    });
    $(".mobile-menu").on('click', function() {
        var $this = $(this);
        $this.toggleClass('on');
    });
    $("#mobile-collapse").on('click', function() {
        if (vw > 991) {
            $(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed");
        }
    });
    $(".mob-toggler").on('click', function() {
        $('.pcoded-header > .collapse,.pcoded-header > .container > .collapse').toggleClass('d-flex');
    });
    $(".search-btn").on('click', function() {
        var $this = $(this);
        $(".main-search").addClass('open');
        if (vw <= 991) {
            $(".main-search .form-control").css({
                'width': '90px'
            });
        } else {
            $(".main-search .form-control").css({
                'width': '150px'
            });
        }
    });
    $(".search-close").on('click', function() {
        var $this = $(this);
        $(".main-search").removeClass('open');
        $(".main-search .form-control").css({
            'width': '0'
        });
    });
    // ==========================================
    // open user list
    $('.displayChatbox').on('click', function() {
        $('.header-user-list').toggleClass('open');
    });
    // open messages
    $('.header-user-list .userlist-box').on('click', function() {
        $('.header-chat').addClass('open');
        $('.header-user-list').toggleClass('msg-open');
    });
    // close user list
    $('.h-back-user-list').on('click', function() {
        $('.header-chat').removeClass('open');
        $('.header-user-list').removeClass('msg-open');
    });

    //  full chat
    $('.h-close-text').on('click', function() {
        $('.header-chat').removeClass('open');
        $('.header-user-list').removeClass('open');
        $('.header-user-list').removeClass('msg-open');
    });
    $('.btn-attach').click(function() {
        $('.chat-attach').trigger('click');
    });
    $('.h-send-chat').on('keyup', function(e) {
        fc(e);
    });
    $('.btn-send').on('click', function(e) {
        cfc(e);
    });
    if (vw <= 991) {
        $(".main-search").addClass('open');
        $(".main-search .form-control").css({
            'width': '60px'
        });
    }
    // Friend scroll
    if ($('.main-friend-cont')[0]) {
        $(".main-friend-cont").each(function() {
            var px = new PerfectScrollbar(this, {
                wheelSpeed: .5,
                swipeEasing: 0,
                suppressScrollX: !0,
                wheelPropagation: 1,
                minScrollbarLength: 40,
            });
        });
    }
    if ($('.main-chat-cont')[0]) {
        var px = new PerfectScrollbar('.main-chat-cont', {
            wheelSpeed: .5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }
    $("#search-friends").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".header-user-list .userlist-box .media-body .chat-header").each(function() {
            var s = $(this).text().toLowerCase();
            $(this).closest('.userlist-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });
    function fc(e) {
        if (e.which == 13) {
            cfc(e)
        }
    };

    function cfc(e) {
        $('.header-chat .main-friend-chat').append('' +
                '<div class="media chat-messages">' +
                    '<div class="media-body chat-menu-reply">' +
                    '<div class="">' +
                        '<p class="chat-cont">' + $('.h-send-chat').val() + '</p>' +
                    '</div>' +
                    '<p class="chat-time">now</p>' +
                '</div>' +
                '<a class="media-right photo-table" href="#!"><img class="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"></a>' +
            '</div>' +
            '');
        frc($('.h-send-chat').val());
        fsc();
        $('.h-send-chat').val(null);
    };

    function frc(wrmsg) {
        setTimeout(function() {
            $('.header-chat .main-friend-chat').append('' +
                '<div class="media chat-messages typing">' +
                    '<a class="media-left photo-table" href="#!"><img class="media-object img-radius img-radius m-t-5" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"></a>' +
                    '<div class="media-body chat-menu-content">' +
                        '<div class="rem-msg">' +
                            '<p class="chat-cont">Typing . . .</p>' +
                        '</div>' +
                        '<p class="chat-time">now</p>' +
                    '</div>' +
                '</div>' +
                '');
            fsc();
        }, 1500);
        setTimeout(function() {
            document.getElementsByClassName("rem-msg")[0].innerHTML = "<p class='chat-cont'>hello dear you write</p> <p class='chat-cont'>" + wrmsg + "</p>";
            $('.rem-msg').removeClass("rem-msg");
            $('.typing').removeClass("typing");
            fsc();
        }, 3000);
    };

    function fsc() {
        var tmph = $('.header-chat .main-friend-chat');
        $('.main-chat-cont.scroll-div').scrollTop(tmph.outerHeight());
    }
    // ==========================================
    if (vw <= 991) {
        $(".main-search").addClass('open');
        $(".main-search .form-control").css({
            'width': '100px'
        });
    }

    if ($('.noti-body')[0]) {
        var px = new PerfectScrollbar('.notification  .noti-body', {
            wheelSpeed: .5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }
    // Menu scroll
    if (!$('.pcoded-navbar').hasClass('theme-horizontal')) {
        var vw = $(window)[0].innerWidth;
        if ($('.navbar-content')[0]) {
            if (vw < 992 || $('.pcoded-navbar').hasClass('menupos-static')) {
                var px = new PerfectScrollbar('.navbar-content', {
                    wheelSpeed: .5,
                    swipeEasing: 0,
                    suppressScrollX: !0,
                    wheelPropagation: 1,
                    minScrollbarLength: 40,
                });
            } else {
                var px = new PerfectScrollbar('.navbar-content', {
                    wheelSpeed: .5,
                    swipeEasing: 0,
                    suppressScrollX: !0,
                    wheelPropagation: 1,
                    minScrollbarLength: 40,
                });
            }
        }
    }
    // search-bar
    $(".pop-search").on('click', function() {
        $(".search-bar").slideToggle("fast");
        $(".search-bar input").focus();
    });
    $(".search-bar .close").on('click', function() {
        $(".search-bar").slideToggle("fast");
    });
    // close card
    $(".card-option .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass('anim-close-card');
        $this.parents('.card').animate({
            'margin-bottom': '0',
        });
        setTimeout(function() {
            $this.parents('.card').children('.card-block').slideToggle();
            $this.parents('.card').children('.card-body').slideToggle();
            $this.parents('.card').children('.card-header').slideToggle();
            $this.parents('.card').children('.card-footer').slideToggle();
        }, 600);
        setTimeout(function() {
            $this.parents('.card').remove();
        }, 1500);
    });
    // reload card
    $(".card-option .reload-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="pct-loader1 anim-rotate"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });
    // collpased and expaded card
    $(".card-option .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        var card = $(port).children('.card-body').slideToggle();
        if (!port.hasClass('full-card')) {
            $(port).css("height", "auto");
        }
        $(this).children('a').children('span').toggle();
    });
    // full card
    $(".card-option .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).children('a').children('span').toggle();
        if (port.hasClass('full-card')) {
            $('body').css('overflow', 'hidden');
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
            var elm = $(port, this);
            var off = elm.offset();
            var l = off.left;
            var t = off.top;
            var docH = $(window).height();
            var docW = $(window).width();
            port.animate({
                'marginLeft': l - (l * 2),
                'marginTop': t - (t * 2),
                'width': docW,
                'height': docH,
            });
        } else {
            $('body').css('overflow', '');
            port.removeAttr('style');
            setTimeout(function() {
                $('html,body').animate({
                    scrollTop: ($(port).offset().top) - 70
                }, 500);
            }, 400);
        }
    });
    // apply matchHeight to each item container's items
    $(".event-btn").each(function() {
        $(this).children('.spinner-border').hide();
        $(this).children('.spinner-grow').hide();
        $(this).children('.load-text').hide();
    });
    $('.event-btn').on('click', function() {
        var $port = $(this);
        $port.children('.spinner-border').show();
        $port.children('.spinner-grow').show();
        $port.children('.load-text').show();
        $port.children('.btn-text').hide();
        $port.attr('disabled', 'true');
        setTimeout(function() {
            $port.children('.spinner-border').hide();
            $port.children('.spinner-grow').hide();
            $port.children('.load-text').hide();
            $port.children('.btn-text').show();
            $port.removeAttr('disabled');
        }, 3000);
    });
    // remove pre-loader start
    setTimeout(function() {
        $('.loader-bg').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 400);
    // remove pre-loader end
});

// ===============
$(window).resize(function() {
    togglemenu();
    menuhrres();
    if ($('body').hasClass('layout-6') || $('body').hasClass('layout-7')) {
        togglemenulayout();
    }
});
// menu [ horizontal configure ]
function menuhrres() {
    var vw = $(window)[0].innerWidth;
    if (vw < 992) {
        setTimeout(function() {
            $(".sidenav-horizontal-wrapper").addClass("sidenav-horizontal-wrapper-dis").removeClass("sidenav-horizontal-wrapper");
            $(".theme-horizontal").addClass("theme-horizontal-dis").removeClass("theme-horizontal");
        }, 400);
    } else {
        setTimeout(function() {
            $(".sidenav-horizontal-wrapper-dis").addClass("sidenav-horizontal-wrapper").removeClass("sidenav-horizontal-wrapper-dis");
            $(".theme-horizontal-dis").addClass("theme-horizontal").removeClass("theme-horizontal-dis");
        }, 400);
    }
    // Menu scroll
    setTimeout(function() {
        if ($('.pcoded-navbar').hasClass('theme-horizontal-dis')) {
            $(".sidenav-horizontal-wrapper-dis").css({
                'height': '100%',
                'position': 'relative'
            });
            if ($('.sidenav-horizontal-wrapper-dis')[0]) {
                var px = new PerfectScrollbar('.sidenav-horizontal-wrapper-dis', {
                    wheelSpeed: .5,
                    swipeEasing: 0,
                    suppressScrollX: !0,
                    wheelPropagation: 1,
                    minScrollbarLength: 40,
                });
            }
        }
    }, 1000);
}
var ost = 0;
$(window).scroll(function() {
    var vw = $(window)[0].innerWidth;
    if (vw >= 768) {
        var cOst = $(this).scrollTop();
        if (cOst == 400) {
            $('.theme-horizontal').addClass('top-nav-collapse');
        } else if (cOst > ost && 400 < ost) {
            $('.theme-horizontal').addClass('top-nav-collapse').removeClass('default');
        } else {
            $('.theme-horizontal').addClass('default').removeClass('top-nav-collapse');
        }
        ost = cOst;
    }
});

// menu [ compact ]
function togglemenu() {
    var vw = $(window)[0].innerWidth;
    if ($(".pcoded-navbar").hasClass('theme-horizontal') == false) {
        if (vw <= 1200 && vw >= 992) {
            $(".pcoded-navbar:not(.theme-horizontal)").addClass("navbar-collapsed");
        }
        if (vw < 992) {
            $(".pcoded-navbar:not(.theme-horizontal)").removeClass("navbar-collapsed");
        }
    }
}
// ===============

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    $('.full-screen > i').toggleClass('icon-maximize');
    $('.full-screen > i').toggleClass('icon-minimize');
}
// =============   layout builder   =============
$.fn.pcodedmenu = function(settings) {
    var oid = this.attr("id");
    var defaults = {
        themelayout: 'vertical',
        MenuTrigger: 'click',
        SubMenuTrigger: 'click',
    };
    var settings = $.extend({}, defaults, settings);
    var PcodedMenu = {
        PcodedMenuInit: function() {
            PcodedMenu.HandleMenuTrigger();
            PcodedMenu.HandleSubMenuTrigger();
            PcodedMenu.HandleOffset();
        },
        HandleSubMenuTrigger: function() {
            var $window = $(window);
            var newSize = $window.width();
            if ($('.pcoded-navbar').hasClass('theme-horizontal') == true || $('.pcoded-navbar').hasClass('theme-horizontal-dis') == true) {
                if ((newSize >= 992 && $('body').hasClass('layout-6') || (newSize >= 992 && $('body').hasClass('layout-7')))) {
                    var $dropdown = $("body[class*='layout-6'] .theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu, body[class*='layout-7'] .theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
                    $dropdown.off('click').off('mouseenter mouseleave').hover(
                        function() {
                            $(this).addClass('pcoded-trigger').addClass('active');
                        },
                        function() {
                            $(this).removeClass('pcoded-trigger').removeClass('active');
                        }
                    );
                } else {
                    if ($('body').hasClass('layout-6') || $('body').hasClass('layout-7')) {
                        if ($('.pcoded-navbar').hasClass('theme-horizontal-dis')) {
                            var $dropdown = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
                            $dropdown.off('click').off('mouseenter mouseleave').hover(
                                function() {
                                    $(this).addClass('pcoded-trigger').addClass('active');
                                },
                                function() {
                                    $(this).removeClass('pcoded-trigger').removeClass('active');
                                }
                            );
                        }
                        if (!$('.pcoded-navbar').hasClass('theme-horizontal-dis')) {
                            var $dropdown = $(".pcoded-navbar:not(.theme-horizontal-dis) .pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li");
                            $dropdown.off('mouseenter mouseleave').off('click').on('click',
                                function() {
                                    var str = $(this).closest('.pcoded-submenu').length;
                                    if (str === 0) {
                                        if ($(this).hasClass('pcoded-trigger')) {
                                            $(this).removeClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideUp();
                                        } else {
                                            $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                            $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                            $(this).addClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideDown();
                                        }
                                    } else {
                                        if ($(this).hasClass('pcoded-trigger')) {
                                            $(this).removeClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideUp();
                                        } else {
                                            $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                            $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                            $(this).addClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideDown();
                                        }
                                    }
                                });
                            $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on('click', function(e) {
                                e.stopPropagation();
                                var str = $(this).closest('.pcoded-submenu').length;
                                if (str === 0) {
                                    if ($(this).hasClass('pcoded-trigger')) {
                                        $(this).removeClass('pcoded-trigger');
                                        $(this).children('.pcoded-submenu').slideUp();
                                    } else {
                                        $('.pcoded-hasmenu li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                        $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                        $(this).addClass('pcoded-trigger');
                                        $(this).children('.pcoded-submenu').slideDown();
                                    }
                                } else {
                                    if ($(this).hasClass('pcoded-trigger')) {
                                        $(this).removeClass('pcoded-trigger');
                                        $(this).children('.pcoded-submenu').slideUp();
                                    } else {
                                        $('.pcoded-hasmenu li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                        $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                        $(this).addClass('pcoded-trigger');
                                        $(this).children('.pcoded-submenu').slideDown();
                                    }
                                }
                            });
                        }
                    } else {
                        if (newSize >= 992) {
                            var $dropdown = $(".pcoded-navbar.theme-horizontal .pcoded-inner-navbar .pcoded-submenu > li.pcoded-hasmenu");
                            $dropdown.off('click').off('mouseenter mouseleave').hover(
                                function() {
                                    $(this).addClass('pcoded-trigger').addClass('active');
                                },
                                function() {
                                    $(this).removeClass('pcoded-trigger').removeClass('active');
                                }
                            );
                        } else {
                            var $dropdown = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li");
                            $dropdown.off('mouseenter mouseleave').off('click').on('click',
                                function() {
                                    var str = $(this).closest('.pcoded-submenu').length;
                                    if (str === 0) {
                                        if ($(this).hasClass('pcoded-trigger')) {
                                            $(this).removeClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideUp();
                                        } else {
                                            $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                            $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                            $(this).addClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideDown();
                                        }
                                    } else {
                                        if ($(this).hasClass('pcoded-trigger')) {
                                            $(this).removeClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideUp();
                                        } else {
                                            $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                            $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                            $(this).addClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideDown();
                                        }
                                    }
                                });
                        }
                    }
                }
            }
            switch (settings.SubMenuTrigger) {
                case 'click':
                    $('.pcoded-navbar .pcoded-hasmenu').removeClass('is-hover');
                    $(".pcoded-inner-navbar .pcoded-submenu > li > .pcoded-submenu > li").on('click', function(e) {
                        e.stopPropagation();
                        var str = $(this).closest('.pcoded-submenu').length;
                        if (str === 0) {
                            if ($(this).hasClass('pcoded-trigger')) {
                                $(this).removeClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideUp();
                            } else {
                                $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                $(this).addClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideDown();
                            }
                        } else {
                            if ($(this).hasClass('pcoded-trigger')) {
                                $(this).removeClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideUp();
                            } else {
                                $('.pcoded-submenu > li > .pcoded-submenu > li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                $(this).addClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideDown();
                            }
                        }
                    });
                    $(".pcoded-submenu > li").on('click', function(e) {
                        e.stopPropagation();
                        var str = $(this).closest('.pcoded-submenu').length;
                        if (str === 0) {
                            if ($(this).hasClass('pcoded-trigger')) {
                                $(this).removeClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideUp();
                            } else {
                                $('.pcoded-hasmenu li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                $(this).addClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideDown();
                            }
                        } else {
                            if ($(this).hasClass('pcoded-trigger')) {
                                $(this).removeClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideUp();
                            } else {
                                $('.pcoded-hasmenu li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                $(this).addClass('pcoded-trigger');
                                $(this).children('.pcoded-submenu').slideDown();
                            }
                        }
                    });
                    break;
            }
        },
        HandleMenuTrigger: function() {
            var $window = $(window);
            var newSize = $window.width();
            if (newSize >= 992) {
                if ($('.pcoded-navbar').hasClass('theme-horizontal') == true) {
                    if ((newSize >= 768 && $('body').hasClass('layout-6') || (newSize >= 768 && $('body').hasClass('layout-7')))) {
                        var $dropdown = $("body[class*='layout-6'] .theme-horizontal .pcoded-inner-navbar > li,body[class*='layout-7'] .theme-horizontal .pcoded-inner-navbar > li ");
                        $dropdown.off('click').off('mouseenter mouseleave').hover(
                            function() {
                                $(this).addClass('pcoded-trigger').addClass('active');
                                if ($('.pcoded-submenu', this).length) {
                                    var elm = $('.pcoded-submenu:first', this);
                                    var off = elm.offset();
                                    var l = off.left;
                                    var w = elm.width();
                                    var docH = $(window).height();
                                    var docW = $(window).width();

                                    var isEntirelyVisible = (l + w <= docW);
                                    if (!isEntirelyVisible) {
                                        var temp = $('.sidenav-inner').attr('style');
                                        $('.sidenav-inner').css({
                                            'margin-left': (parseInt(temp.slice(12, temp.length - 3)) - 80)
                                        });
                                        $('.sidenav-horizontal-prev').removeClass('disabled');
                                    } else {
                                        $(this).removeClass('edge');
                                    }
                                }
                            },
                            function() {
                                $(this).removeClass('pcoded-trigger').removeClass('active');
                            }
                        );
                    } else {
                        if ($('body').hasClass('layout-6') || $('body').hasClass('layout-7')) {
                            if ($('.pcoded-navbar').hasClass('theme-horizontal-dis')) {
                                var $dropdown = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar > li");
                                $dropdown.off('click').off('mouseenter mouseleave').hover(
                                    function() {
                                        $(this).addClass('pcoded-trigger').addClass('active');
                                        if ($('.pcoded-submenu', this).length) {
                                            var elm = $('.pcoded-submenu:first', this);
                                            var off = elm.offset();
                                            var l = off.left;
                                            var w = elm.width();
                                            var docH = $(window).height();
                                            var docW = $(window).width();

                                            var isEntirelyVisible = (l + w <= docW);
                                            if (!isEntirelyVisible) {
                                                var temp = $('.sidenav-inner').attr('style');
                                                $('.sidenav-inner').css({
                                                    'margin-left': (parseInt(temp.slice(12, temp.length - 3)) - 80)
                                                });
                                                $('.sidenav-horizontal-prev').removeClass('disabled');
                                            } else {
                                                $(this).removeClass('edge');
                                            }
                                        }
                                    },
                                    function() {
                                        $(this).removeClass('pcoded-trigger').removeClass('active');
                                    }
                                );
                            }
                            if (!$('.pcoded-navbar').hasClass('theme-horizontal-dis')) {
                                var $dropdown = $(".pcoded-navbar:not(.theme-horizontal-dis) .pcoded-inner-navbar > li");
                                $dropdown.off('mouseenter mouseleave').off('click').on('click',
                                    function() {
                                        if ($(this).hasClass('pcoded-trigger')) {
                                            $(this).removeClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideUp();
                                        } else {
                                            $('li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                                            $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                                            $(this).addClass('pcoded-trigger');
                                            $(this).children('.pcoded-submenu').slideDown();
                                        }
                                    }
                                );
                            }
                        } else {
                            var $dropdown = $(".theme-horizontal .pcoded-inner-navbar > li");
                            $dropdown.off('click').off('mouseenter mouseleave').hover(
                                function() {
                                    $(this).addClass('pcoded-trigger').addClass('active');
                                    if ($('.pcoded-submenu', this).length) {
                                        var elm = $('.pcoded-submenu:first', this);
                                        var off = elm.offset();
                                        var l = off.left;
                                        var w = elm.width();
                                        var docH = $(window).height();
                                        var docW = $(window).width();

                                        var isEntirelyVisible = (l + w <= docW);
                                        if (!isEntirelyVisible) {
                                            var temp = $('.sidenav-inner').attr('style');
                                            $('.sidenav-inner').css({
                                                'margin-left': (parseInt(temp.slice(12, temp.length - 3)) - 80)
                                            });
                                            $('.sidenav-horizontal-prev').removeClass('disabled');
                                        } else {
                                            $(this).removeClass('edge');
                                        }
                                    }
                                },
                                function() {
                                    $(this).removeClass('pcoded-trigger').removeClass('active');
                                }
                            );
                        }
                    }
                }
            } else {
                var $dropdown = $(".pcoded-navbar.theme-horizontal-dis .pcoded-inner-navbar > li");
                $dropdown.off('mouseenter mouseleave').off('click').on('click',
                    function() {
                        if ($(this).hasClass('pcoded-trigger')) {
                            $(this).removeClass('pcoded-trigger');
                            $(this).children('.pcoded-submenu').slideUp();
                        } else {
                            $('li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                            $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                            $(this).addClass('pcoded-trigger');
                            $(this).children('.pcoded-submenu').slideDown();
                        }
                    });
            }
            switch (settings.MenuTrigger) {
                case 'click':
                    $('.pcoded-navbar').removeClass('is-hover');
                    $(".pcoded-inner-navbar > li:not(.pcoded-menu-caption) ").on('click', function() {
                        if ($(this).hasClass('pcoded-trigger')) {
                            $(this).removeClass('pcoded-trigger');
                            $(this).children('.pcoded-submenu').slideUp();
                        } else {
                            $('li.pcoded-trigger').children('.pcoded-submenu').slideUp();
                            $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                            $(this).addClass('pcoded-trigger');
                            $(this).children('.pcoded-submenu').slideDown();
                        }
                    });
                    break;
            }
        },
        HandleOffset: function() {
            switch (settings.themelayout) {
                case 'horizontal':
                    var trigger = settings.SubMenuTrigger;
                    if (trigger === "hover") {
                        $("li.pcoded-hasmenu").on('mouseenter mouseleave', function(e) {
                            if ($('.pcoded-submenu', this).length) {
                                var elm = $('.pcoded-submenu:first', this);
                                var off = elm.offset();
                                var l = off.left;
                                var w = elm.width();
                                var docH = $(window).height();
                                var docW = $(window).width();

                                var isEntirelyVisible = (l + w <= docW);
                                if (!isEntirelyVisible) {
                                    $(this).addClass('edge');
                                } else {
                                    $(this).removeClass('edge');
                                }
                            }
                        });
                    } else {
                        $("li.pcoded-hasmenu").on('click', function(e) {
                            e.preventDefault();
                            if ($('.pcoded-submenu', this).length) {
                                var elm = $('.pcoded-submenu:first', this);
                                var off = elm.offset();
                                var l = off.left;
                                var w = elm.width();
                                var docH = $(window).height();
                                var docW = $(window).width();

                                var isEntirelyVisible = (l + w <= docW);
                                if (!isEntirelyVisible) {
                                    $(this).toggleClass('edge');
                                }
                            }
                        });
                    }
                    break;
                default:
            }
        },
    };
    PcodedMenu.PcodedMenuInit();
};
$("#pcoded").pcodedmenu({
    MenuTrigger: 'click',
    SubMenuTrigger: 'click',
});

// menu [ Mobile ]
$("#mobile-collapse,#mobile-collapse1").click(function(e) {
    var vw = $(window)[0].innerWidth;
    if (vw < 992) {
        $(".pcoded-navbar").toggleClass('mob-open');
        e.stopPropagation();
    }
});
$(window).ready(function() {
    var vw = $(window)[0].innerWidth;
    $(".pcoded-navbar").on('click tap', function(e) {
        e.stopPropagation();
    });
    $('.pcoded-main-container,.pcoded-header').on("click", function() {
        if (vw < 992) {
            if ($(".pcoded-navbar").hasClass("mob-open") == true) {
                $(".pcoded-navbar").removeClass('mob-open');
                $("#mobile-collapse,#mobile-collapse1").removeClass('on');
            }
        }
    });
});
$('.pcoded-navbar .close').on('click', function() {
    var port = $(this);
    port.parents('.card').fadeOut('slow').remove();
});

// active menu item list start
$(".pcoded-navbar .pcoded-inner-navbar a").each(function() {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (!$('body').hasClass('layout-14')) {
        if (this.href == pageUrl && $(this).attr('href') != "") {
            $(this).parent('li').addClass("active");
            if (!$('.pcoded-navbar').hasClass('theme-horizontal')) {
                $(this).parent('li').parent().parent('.pcoded-hasmenu').addClass("active").addClass("pcoded-trigger");
                $(this).parent('li').parent().parent('.pcoded-hasmenu').parent().parent('.pcoded-hasmenu').addClass("active").addClass("pcoded-trigger");
            }
            if ($('body').hasClass('layout-7') || $('body').hasClass('layout-6')) {
                $(this).parent('li').parent().parent('.pcoded-hasmenu').addClass("active").addClass("pcoded-trigger");
                $(this).parent('li').parent().parent('.pcoded-hasmenu').parent().parent('.pcoded-hasmenu').addClass("active").addClass("pcoded-trigger");
                $('.theme-horizontal .pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
            }
            $(this).parent('li').parent().parent('.sidelink').addClass("active");
            $(this).parent('li').parent().parent().parent().parent('.sidelink').addClass("active");
            $(this).parent('li').parent().parent().parent().parent().parent().parent('.sidelink').addClass("active");
            if ($('body').hasClass('layout-1') || $('body').hasClass('layout-9')) {
                var temp = $('.sidelink.active').attr('class');
                temp = temp.replace("sidelink", "");
                temp = temp.replace("active", "");
                $('.sidemenu  .nav-link[data-cont=' + temp.trim() + ']').parent().addClass('active');
            }
        }
    }
});
// active menu item list end
// only heaeder fixed js start
$(window).scroll(function() {
    if (!$('.pcoded-header').hasClass('headerpos-fixed')) {
        if ($(this).scrollTop() > 60) {
            $('.pcoded-navbar.menupos-fixed').css('position', 'fixed');
            $('.pcoded-navbar.menupos-fixed').css('transition', 'none');
            $('.pcoded-navbar.menupos-fixed').css('margin-top', '0px');

        } else {
            $('.pcoded-navbar.menupos-fixed').removeAttr('style');
            $('.pcoded-navbar.menupos-fixed').css('position', 'absolute');
            $('.pcoded-navbar.menupos-fixed').css('margin-top', '56px');
        }
    }
});
// only heaeder fixed js end
