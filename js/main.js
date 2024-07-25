$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

       /*if($(window).scrollTop() > 30){
            $('.header').css({'background':'#222', 'box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }else{
            $('.header').css({'background':'none', 'box-shadow' : 'none'});
        
        }*/
    });

    $(document).ready(function () {
        // Check if a header color is stored in the browser's localStorage
        const storedColor = localStorage.getItem('headerColor');
        if (storedColor) {
            // If a color is stored, set the header's background color to that color
            $('.header').css({'background': storedColor, 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'});
        }
    
        // Set the header color to your desired color
        $('.header').css({'background':'#222','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    
        // Store the color in localStorage
        localStorage.setItem('headerColor','#222');
        
        // Before the page unloads (refresh or close), store the header color in localStorage
        $(window).on('beforeunload', function () {
            const headerColor = $('.header').css('background-color');
            if (headerColor) {
                localStorage.setItem('headerColor', headerColor);
            }
        });
    });
    

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-')
    });
});