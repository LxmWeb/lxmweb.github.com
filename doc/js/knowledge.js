$(knowledgeskip);
function knowledgeskip(){
	$(".write-page").hide();
	$(".write-answer-none").hide();
	$(".write-answer-succeed").hide();
	$(".knowledge-ctx-title").click(function(){
        window.location.href="knowledge-article.html";
	});
	$(".knowledge-ctx-word").click(function(){
        window.location.href="knowledge-article.html";
	});
	$(".knowledge-font-collect").click(function(){
        $(this).css("color","red");
    });
	$(".knowledge-font-right").click(function(){
        window.location.href="firstpage.html";
	});
	$(".knowledge-font-edit").click(function(){
        $(".knowledge-page").hide();
        $(".write-page").show();
	});
	$(".write-cancel").click(function(){
        $(".knowledge-page").show();
        $(".write-page").hide();
	});
	var inputtexthead,inputctx;
	$(".write-send").click(function(){
		inputtexthead=$(".write-article-title").val();
		inputctx=$(".write-article").val();
		if(inputtexthead==""||inputctx==""){
            $(".write-answer-none").show();
            setTimeout(function(){
               $(".write-answer-none").hide();
            },500);
		}
		else{
            $(".write-answer-succeed").show();
            setTimeout(function(){
               $(".write-answer-succeed").hide();
               $(".knowledge-page").append("<div class=\"row knowledge-ctx-box\"><div class=\"col-xs-12 knowledge-ctx\"><div class=\"col-xs-10 knowledge-ctx-title\">"+inputtexthead+"</div><div class=\"col-xs-2 knowledge-font-collect\"><i class=\"fa fa-star-o knowledge-font-star\"></i></div><div class=\"col-xs-12 knowledge-ctx-word\">"+inputctx+"</div><div class=\"col-xs-6 knowledge-ctx-more\">点击展开全文</div></div></div>")
               $(".knowledge-font-collect").bind("click",function(){
               	   $(this).css("color","red");
               });
               $(".knowledge-ctx-title").bind("click",function(){
			        window.location.href="knowledge-article.html";
			   });
			   $(".knowledge-ctx-word").bind("click",function(){
			        window.location.href="knowledge-article.html";
			   });
               $(".knowledge-page").show();
	           $(".write-page").hide();
            },500);
		}
	});
	$(".write-article-title").val("");
	$(".write-article").val("");
}