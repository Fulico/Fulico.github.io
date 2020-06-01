$(function(){
    $(window).scroll(function(){
        var scrollPosi = $(document).scrollTop();
        if (scrollPosi > 0 ){
            $('header').css('box-shadow','0px 2px 2px')
        }
    });

    

});