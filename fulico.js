$(function(){
    $(window).scroll(function(){
        var scrollPosi = $(document).scrollTop();
        $('#copy').animate({
			backgroundPositionY: (-scrollPosi / 3 + "px")
		}, 100);
    })

});