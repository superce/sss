// banner轮播
function imgReload()

{

	var imgHeight = 0;

	var wtmp = $("body").width();

	$("#b06 ul li").each(function(){

        $(this).css({width:wtmp + "px"});

    });

	$(".sliderimg").each(function(){

		$(this).css({width:wtmp + "px"});

		imgHeight = $(this).height();

	});

}



$(window).resize(function(){imgReload();});



$(document).ready(function(e) {

	imgReload();

    var unslider06 = $('#b06').unslider({

		dots: true,

		fluid: true

	}),

	data06 = unslider06.data('unslider');



	$('.unslider-arrow06').click(function() {

        var fn = this.className.split(' ')[1];

        data06[fn]();

    });

});
// 豆腐块
$(document).ready(function(e) {
    var unslider04 = $('#b04').unslider({
		dots: true
	}),
	data04 = unslider04.data('unslider');
	$('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
});
// 返回顶部

$("#return").click(function(event){
			event.preventDefault();
			// $(window).scrollTop(0)
			$("body,html").animate({"scrollTop":0},2000)
		})
		$(window).scroll(function(e){
			e.preventDefault();
			var top = $(this).scrollTop();
			if(top > 100){
				$("#return").fadeIn(300)
			}else{
				$("#return").fadeOut(300)
			}
		})
