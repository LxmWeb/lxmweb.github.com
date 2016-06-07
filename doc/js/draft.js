$(draftskip);
function draftskip(){
	$(".draft-edit-box").hide();
	$(".draft-answer-succeed").hide();
	$(".draft-type1-ctx-delete-box").hide();
	$(".draft-type2-ctx-delete-box").hide();
	$(".draft-right").click(function(){
        window.location.href="me.html";
	});
	$(".draft-type2-ctx").hide();
    $(".draft-type1-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".draft-type2-title").css("border-bottom-color","#DCDCDC");
        $(".draft-type1-ctx").show();
        $(".draft-type2-ctx").hide();
	});
	$(".draft-type2-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".draft-type1-title").css("border-bottom-color","#DCDCDC");
        $(".draft-type2-ctx").show();
        $(".draft-type1-ctx").hide();
	});
	var knowhidden=1;
	$(".draft-type1-ctx-more").click(function(){
        if(knowhidden==1){
           $(".draft-type1-ctx-word").css("height","100%");
	       $(".draft-type1-ctx-more").text("收起");
	       knowhidden=0;
        }
        else{
        	$(".draft-type1-ctx-word").css("height","40px");
	        $(".draft-type1-ctx-more").text("点击展开全文");
	        knowhidden=1;
        }
	});
	var parhidden=1;
	$(".draft-type2-ctx-more").click(function(){
        if(parhidden==1){
           $(".draft-type2-description").css("height","100%");
	       $(".draft-type2-ctx-more").text("收起");
	       parhidden=0;
        }
        else{
        	$(".draft-type2-description").css("height","80px");
	        $(".draft-type2-ctx-more").text("点击展开全文");
	        parhidden=1;
        }
	});
	$(".draft-type1-font-collect").click(function(){
        $(this).parent().remove();
        $(".draft-answer-succeed").show();
            setTimeout(function(){
               $(".draft-answer-succeed").hide();
            },500);
	});
	$(".draft-type2-font-collect").click(function(){
        $(this).parent().remove();
        $(".draft-answer-succeed").show();
            setTimeout(function(){
               $(".draft-answer-succeed").hide();
            },500);
	});
	$(".draft-alter").click(function(){
		$(".draft-edit-box").show();
		$(".draft-head-box").hide();
		$(".draft-type1-ctx-delete-box").show();
		$(".draft-type2-ctx-delete-box").show();
	});
	$(".draft-finish").click(function(){
		$(".draft-edit-box").hide();
		$(".draft-head-box").show();
		$(".draft-type1-ctx-delete-box").hide();
		$(".draft-type2-ctx-delete-box").hide();
	});
	$(".draft-type1-ctx-delete-box").click(function(){
		$(this).parent().remove();
	});
	$(".draft-type2-ctx-delete-box").click(function(){
		$(this).parent().remove();
	});
}