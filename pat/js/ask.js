window.onload=function(){
   $(back);
   $(message);
   $(chatdoctor);
}
function back(){
	$(".ask-back").click(function(){
		window.location="服务.html";
	});
}
function message(){
	$(".ask-sty").click(function(){
		window.location="消息.html";
	});
}
function chatdoctor(){
	$(".recommend-doctor").click(function(){
        window.location="对话.html"
	});
}