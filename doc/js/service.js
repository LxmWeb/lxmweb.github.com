window.onload=function(){
	$(".add").hide();
	$(".answer-input").hide();
	$(".success").hide();
	$(".all-knowledge-content").hide();
	$(mydoctor);
    $(search);
    $(back);
    $(answer);
    $(good);
    $(enter);
    $(showall);
}

function mydoctor(){
	$(".guide-name:eq(1)").click(function(){
         window.location="我的医生.html";
	});
}

function search(){
	$(".search").click(function(){
        window.location="搜索.html";
	});
}

function back(){
	$(".message-sty").click(function(){
		window.location="消息.html";
	});
}

function answer(){
	
	$(".answer").click(function(){
		$(".answer").css("color","#4876FF");	
		setTimeout(function(){
           $(".answer").css("color","gray");	
       },500);
	    $(".answer-input").show();
	});
	
}

function good(){

	$(".good").click(function(){
		   $(".good").css("color","#4876FF");
		   $(".add").show();
		setTimeout(function(){
           $(".good").css("color","gray");	
       },300);
		setTimeout(function(){
           $(".add").hide();	
       },500);
	});
}

function enter(){
	$("#btn").click(function() {
		setTimeout(function(){
        $(".answer-input").hide();
       },100);
    $(".success").show();
    setTimeout(function(){
        $(".success").hide();
       },500);
	});
	
}
var on=0;
function showall(){
	$(".show-all").click(function(){
		if(on){
            $(this).html("点击展开全文");
            $(".knowledge-content").show();
            $(".all-knowledge-content").hide();
            on=0;
		}
		else {
			$(this).html("点击收回");
            $(".knowledge-content").hide();
            $(".all-knowledge-content").show();
            on=1;
		} 
	});
}