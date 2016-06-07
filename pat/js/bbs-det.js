$(document).ready(function(){
	$(".bbs-function").hide();
	$(".bbs-refer").hide();
	$(".bbs-success").hide();
	$(".bbs-failed").hide();
	$(".bbs-add").hide();
	$(".bbs-back").click(function(){
		window.location='bbs.html';
	});
	$(".fa-angle-down").click(function(){
		$(".bbs-refer").hide();
		$(".bbs-function").toggle();
	});
	$(".bbs-ellipsis").click(function(){
		$(".bbs-function").hide();
		$(".bbs-refer").toggle();
	});
	$(".bbs-function .row .col-xs-4:eq(0)").click(function(){
		$(".bbs-common").hide();
		$(".bbs-doctor").hide();
		$(".bbs-louzhu").show();
		$(".bbs-function").hide();
		$(".bbs-title-txt").html("只看楼主");
	});
	$(".bbs-function .row .col-xs-4:eq(1)").click(function(){
		$(".bbs-common").hide();
		$(".bbs-doctor").show();
		$(".bbs-louzhu").hide();
		$(".bbs-function").hide();
		$(".bbs-title-txt").html("只看医生");
	});
	$(".bbs-function .row .col-xs-4:eq(2)").click(function(){
		$(".bbs-common").show();
		$(".bbs-doctor").show();
		$(".bbs-louzhu").show();
		$(".bbs-function").hide();
		$(".bbs-title-txt").html("全部帖子");
	});
	$("#message-button").bind("click",function(){
		var a=document.getElementById("exampleInputText").value;
		if(a!=""&&a!="@楼主:"){
			$(".bbs-content-answer:last").after(
				"<div class=\"row bbs-content-answer bbs-content-row bbs-common\"><div class=\"row\"><div class=\"col-xs-12\"><img src=\"image/7.jpg\" class=\"img-bbs-user\"><p class=\"bbs-user-name\">何小妮</p></div></div><p class=\"txt-bbs-content\">我也常常觉得脏，怎么办？</p><p style=\"margin: 0 0 0 5%;display: inline-block;\">5-16</p><img class=\"bbs-answer\" src=\"image/消息.svg\"><img class=\"bbs-good\" src=\"image/赞.svg\"></div>"
			);
			var txt=document.getElementById("exampleInputText").value;
			var myDate = new Date();
			var m=myDate.getMonth()+1;
			var d=myDate.getDate();  
			$(".bbs-content-answer:last p:eq(1)").text(a);
			$(".bbs-content-answer:last p:eq(2)").text(m+"-"+d);
			document.getElementById("exampleInputText").value="";
			$(".bbs-success").show();
    		setTimeout(function(){
        		$(".bbs-success").hide();
        	},500);
		}
		else{
			$(".bbs-failed").show();
    		setTimeout(function(){
        		$(".bbs-failed").hide();
        	},500);
		}
	});

	$(document).delegate('.bbs-good', 'click',function(){
		if($(this).attr("src")=="image/赞.svg")
			$(this).attr("src","image/赞(2).svg");
		else
			$(this).attr("src","image/赞.svg");
	});

});