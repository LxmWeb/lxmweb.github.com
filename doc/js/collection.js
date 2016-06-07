$(colskip);
function colskip(){
	$(".collection-type2-ctx").hide();
	$(".collection-edit-box").hide();
	$(".collection-type1-ctx-delete-box").hide();
	$(".collection-type2-ctx-delete-box").hide();
	$(".collection-right").click(function(){
        window.location.href="me.html";
	});
	// $(".collection-type1-ctx").click(function(){
	// 	$(".collection-type1-ctx-box").css("background-color","#DCDCDC");
 //        window.location.href="knowledge-article.html";
	// });
	// $(".collection-type2-ctx").click(function(){
	// 	$(".collection-type1-ctx-box").css("background-color","#DCDCDC");
 //        window.location.href="knowledge-article.html";
	// });
	$(".collection-type1-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".collection-type2-title").css("border-bottom-color","#DCDCDC");
        $(".collection-type1-ctx").show();
        $(".collection-type2-ctx").hide();
	});
	$(".collection-type2-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".collection-type1-title").css("border-bottom-color","#DCDCDC");
        $(".collection-type2-ctx").show();
        $(".collection-type1-ctx").hide();
	});
	$(".collection-alter").click(function(){
		$(".collection-edit-box").show();
		$(".collection-box").hide();
		$(".collection-type1-ctx-delete-box").show();
		$(".collection-type2-ctx-delete-box").show();
	});
	$(".collection-finish").click(function(){
		$(".collection-edit-box").hide();
		$(".collection-box").show();
		$(".collection-type1-ctx-delete-box").hide();
		$(".collection-type2-ctx-delete-box").hide();
	});
	$(".collection-type1-ctx-delete-box").click(function(){
		$(this).parent().remove();
	});
	$(".collection-type2-ctx-delete-box").click(function(){
		$(this).parent().remove();
	});
}