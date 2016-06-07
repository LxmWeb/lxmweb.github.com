$(mypatientskip);
function mypatientskip(){
	$(".mypatient-right").click(function(){
        window.location.href="me.html";
	});
	$(".pat-object").click(function(){
		$(this).css("background-color","#f2f2f2");
        window.location.href="object.html";
	});
}