$(function () {
    
   'use strict';
    
    // Adjast slider height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height( winH + ( upperH + navH));

    
    // work shuffle
    $('.work ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active')
        
        if($(this).data('class') == 'all') {
            $('.shuffle-images .col-md').css('opacity', '1');
        } else {
            $('.shuffle-images .col-md').css('opacity', '0.1');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
    
    //price table add class active in the card
    $('.pricing-table .card').click(function () {
        
       $(this).addClass('activep').parent().siblings().children().removeClass('activep'); 
    });
    
    // show the image full screen
    $('.work .work-overlay .clicable-button').click(function () {
        $('.work .work-overlay-full').css('transform' , 'scale(1)');
        $('body').css('overflow' , 'hidden');
    });
    
    $('.work .work-overlay-full .close-icon').click(function () {
         $('.work .work-overlay-full').css('transform' , 'scale(0)');
         $('body').css('overflow' , 'visible');
    });
    
    
});