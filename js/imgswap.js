$(".fotothumb").click(function(){
	var imgsrc = $(this).attr('src');
	//console.log(imgsrc);
	$("#img-swap").prop('src', imgsrc);
});
