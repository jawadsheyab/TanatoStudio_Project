/*global $, alert, console*/

$(function () {
    'use strict';
    
    var scrollButton = $("#scroll-top"),
        
        myHeader = $('.header'),
        
        myIntro = $('.intro');
    
    //Adjust Header Height
    /*
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        myHeader.height($(window).height());
        
        //Adjust Intro Item Center
        myIntro.each(function () {
            $(this).css('padding-top', ($(window).height() - $('.intro').height()) / 2);
        });
    });
    */
    
    
    // Click On Arrow To Down
    $('.header .arrow i').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    // Click On Hire Us Button To Go Our Team
    $('.header .hire').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1500);
    });
    
    // Click On Our Work Button To Go Our Work
    $('.header .work').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
        }, 1500);
    });
    
    // To Open Side Menu In The Same Window
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
    
    
    //Smooth Scroll To Div
    function goToByScroll(id) {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);
    }
    
    //Add Active Class On Links
    $('#my-side-menu a').on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        var href = $(this).attr('href');
        
        goToByScroll(href);
        return false;
    });
    
    
    //Show Hidden Items From Work
    $('.show-more').on('click', function () {
        $('.our-work .hidden').toggleClass('show');
        $(".our-work button").toggleClass('show-less');
    });
    
    // Show Scroll To Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.features').offset().top - 50) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    
    // Click On Button To Scroll Top
    scrollButton.click(function () {
        $('#my-side-menu a').each(function () {
            $(this).removeClass('active');
        });
        goToByScroll('#home');
        return false;
    });
    
    // Click On Brand To Scroll To Top
    $('.my-brand').on('click', function () {
        $('#my-side-menu a').each(function () {
            $(this).removeClass('active');
        });
        
        goToByScroll('#home');
        return false;
    });
    
    
    // Check Testimonials
    function checkClients() {
        var rightArrow = $('.testim .fa-chevron-right'),
            leftArrow = $('.testim .fa-chevron-left');
        
        if ($('.client:first').hasClass('cli-active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('cli-active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .cli-active').fadeOut(300, function () {
                $(this).removeClass('cli-active').next('.client').removeClass('hidden').addClass('cli-active').fadeIn();
                checkClients();
            });
        } else {
            $('.testim .cli-active').fadeOut(300, function () {
                $(this).removeClass('cli-active').prev('.client').addClass('cli-active').fadeIn();
                checkClients();
            });
        }
    });
    
    
    //Add Fixed Navbar On Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= $('.features').offset().top) {
            $('.my-navbar').css({
                position: 'fixed',
                backgroundColor: '#31373d',
                zIndex: 999,
                padding: '10px 0',
                opacity: 0.9
            });
        } else {
            $('.my-navbar').css({
                position: 'absolute',
                background: 'none',
                padding: '20px 0',
                opacity: 1
            });
        }
    });
    
});

function openSlideMenu(e) {
    'use strict';
    $('#my-side-menu').css('width', '204px');
}

function closeSlideMenu() {
    'use strict';
    $('#my-side-menu').css('width', '0');
}

// Click Any Place To Hide Side Navbar
$('body').on('click', function () {
    'use strict';
    $("#my-side-menu").css('width', '0');
});

$('.open-slide').on('click', function (e) {
    'use strict';
    e.stopPropagation();
});