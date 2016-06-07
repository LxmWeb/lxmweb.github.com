$(knowledgeadskip);
function knowledgeadskip(){
	$(".knowledge-article-right").click(function(){
        window.location.href="knowledge.html";
	});
	// $(".knowledge-article-ctx-word").click(function(){
 //        window.location.href="knowledge-article.html";
	// });
	$(".knowledge-article-font-collect").click(function(){
        $(this).css("color","red");
    });
	// $(".post-font-message").click(function(){
 //        window.location.href="sysMes.html";
	// });
}