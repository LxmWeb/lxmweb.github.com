$(myarticleskip);
function myarticleskip(){
	$(".myarticle-type2-ctx").hide();
	$(".myarticle-right").click(function(){
        window.location.href="me.html";
	});
    $(".myarticle-type1-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".myarticle-type2-title").css("border-bottom-color","#DCDCDC");
        $(".myarticle-type1-ctx").show();
        $(".myarticle-type2-ctx").hide();
	});
	$(".myarticle-type2-title").click(function(){
        $(this).css("border-bottom-color","red");
        $(".myarticle-type1-title").css("border-bottom-color","#DCDCDC");
        $(".myarticle-type2-ctx").show();
        $(".myarticle-type1-ctx").hide();
	});
	var knowhidden=1;
	$(".myarticle-type1-ctx-more").click(function(){
        if(knowhidden==1){
           $(".myarticle-type1-ctx-word").css("height","100%");
	       $(".myarticle-type1-ctx-more").text("收起");
	       knowhidden=0;
        }
        else{
        	$(".myarticle-type1-ctx-word").css("height","40px");
	        $(".myarticle-type1-ctx-more").text("点击展开全文");
	        knowhidden=1;
        }
	});
	var parhidden=1;
	$(".myarticle-type2-ctx-more").click(function(){
        if(parhidden==1){
           $(".myarticle-type2-description").css("height","100%");
	       $(".myarticle-type2-ctx-more").text("收起");
	       parhidden=0;
        }
        else{
        	$(".myarticle-type2-description").css("height","80px");
	        $(".myarticle-type2-ctx-more").text("点击展开全文");
	        parhidden=1;
        }
	});
}