$(function(){
	$('.testimony img:eq(0)').addClass("ativo").show();
    var texto = $(".ativo").attr("alt");
    $('.testimony').prepend("<p>"+texto+"</p>");
    setInterval(testimony,3000);

    function testimony() {
    	if($('.ativo').next().size()) {
    		$('.ativo').fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    	} else {
    		$('.ativo').fadeOut().removeClass("ativo");
    		$('.testimony img:eq(0)').fadeIn().addClass("ativo");
    	}
    	var texto = $(".ativo").attr("alt");
    	$('.testimony p').hide().html(texto).delay(500).fadeIn();
    }
});