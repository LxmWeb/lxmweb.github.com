$(goodpostskip);
function goodpostskip(){
	$(".write-page").hide();
	$(".good-post-comment-ctx").hide();
	$(".good-post-answer-enter").hide();
	$(".good-post-comment-result").hide();
	$(".good-post-answer-none").hide();
    $(".good-post-answer-succeed").hide();
    $(".write-answer-none").hide();
	$(".write-answer-succeed").hide();
	$(".good-post-comment-font").click(function(){
        $(this).prev().toggle();
        $(this).parent().next().hide();
	});
	var isgood=0;
	$(".good-post-comment-good").click(function(){
		if(isgood==0){
	        $(this).css("color","red");
	        isgood=1;
	    }
	    else{
            $(this).css("color","white");
	        isgood=0;
	    }
	});
	$(".good-post-comment-com").click(function(){
        // $(".good-post-answer-enter").toggle();
        $(this).parent().parent().next().toggle();
	});
	$(".good-post-answer-enter-btn").click(function(){
		var postAnswer,thisindex;
		postAnswer=$(".good-post-answer-enter-text").val();
		$(this).css("background-color","#5daefe");
        setTimeout(function(){
            $(".good-post-answer-enter-btn").css("background-color","#1E90FF");
        },300);
        thisindex=$(".good-post-answer-enter-btn").index(this);
       if(postAnswer==""){
            $(".good-post-answer-none").show();
            setTimeout(function(){
               $(".good-post-answer-none").hide();
            },500);
            //$(".good-post-answer-none").show();
        }
        else{
            $(".good-post-ctx").eq(thisindex).append("<div class=\"col-xs-12 good-post-person\"><div class=\"col-xs-12 good-post-person-box\"><img src=\"pic/person-1.jpg\" class=\"good-post-person-photo\"/><span class=\"good-post-person-name\">XXX</span><span class=\"good-post-person-position\">医生</span></div><div class=\"col-xs-12 good-post-person-comment\">"+postAnswer+"</div></div>");
            $(".good-post-answer-succeed").show();
            setTimeout(function(){
               $(".good-post-answer-succeed").hide();
            },500);
            $(".good-post-answer-enter-text").val("");
        }
	});
	// $(".good-post-left").click(function(){
 //        window.location.href="good-post-ctx.html";
	// });
	$(".good-post-ctx-more").click(function(){
        window.location.href="good-post-ctx.html";
	});
	$(".good-post-ctx").click(function(){
        window.location.href="good-post-ctx.html";
	});
	$(".good-post-left").click(function(){
        window.location.href="post.html";
	});
	$(".good-post-edit").click(function(){
        $(".good-post-page").hide();
        $(".write-page").show();
	});
	$(".write-cancel").click(function(){
        $(".good-post-page").show();
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
               $(".good-post-page").append("<div class=\"row\"><div class=\"col-xs-12 good-post-ctx-box\"><div class=\"col-xs-12 good-post-ctx\"><div class=\"col-xs-12 good-post-ctx-title\">"+inputtexthead+"</div><div class=\"col-xs-12 good-post-description\">"+inputctx+"</div></div><div class=\"col-xs-12 good-post-ctx-more\">点击展开全文</div><div class=\"col-xs-12 good-post-comment\"><div class=\"col-xs-4\"></div><div class=\"col-xs-6 good-post-comment-ctx\"><div class=\"col-xs-6 good-post-comment-good\"><i class=\"fa fa-heart-o\"></i>赞</div><div class=\"col-xs-6 good-post-comment-com\"><i class=\"fa fa-comment-o\"></i>评论</div></div><div class=\"good-post-comment-font\"><div class=\"good-post-comment-box\"><i class=\"fa fa-ellipsis-h\"></i></div><div class=\"good-post-comment-triangle\"></div></div></div><div class=\"col-xs-12 good-post-answer-enter\"><div class=\"col-xs-7\"></div><div class=\"col-xs-3 good-post-answer-enter-font\"><div class=\"good-post-answer-enter-fontup\"></div></div><div class=\"col-xs-2\"></div><div class=\"col-xs-12 good-post-answer-ctx\"><div class=\"col-xs-8 good-post-answer-enter-box\"><input type=\"text\" class=\"good-post-answer-enter-text\"/></div><div class=\"col-xs-4\"><div class=\"col-xs-12 good-post-answer-enter-btn\">评论</div></div></div></div></div></div>");
               $(".good-post-page").show();
	           $(".write-page").hide();
	           $(".write-article-title").val("");
	           $(".write-article").val("");
            },500);
		}
	});
}