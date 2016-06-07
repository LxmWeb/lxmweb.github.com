$(evaskip);
function evaskip(){
        $(".eva-head2").click(function(){
                window.location.href="me.html";
        });
	$(".all-disease").click(function(){
                $(".all-disease").css("border-bottom","1px solid #1E90FF");
                $(".eva-disease-1").css("border-bottom","0");
                $(".eva-disease-2").css("border-bottom","0");
                $(".eva-disease-3").css("border-bottom","0");
                $(".eva-disease-1-order").show();
                $(".eva-disease-2-order").show();
                $(".eva-disease-3-order").show();
	});
	$(".eva-disease-1").click(function(){
                $(".eva-disease-1").css("border-bottom","1px solid #1E90FF");
                $(".all-disease").css("border-bottom","0");
                $(".eva-disease-2").css("border-bottom","0");
                $(".eva-disease-3").css("border-bottom","0");
                $(".eva-disease-1-order").show();
                $(".eva-disease-2-order").hide();
                $(".eva-disease-3-order").hide();
	});
	$(".eva-disease-2").click(function(){
                $(".eva-disease-2").css("border-bottom","1px solid #1E90FF");
                $(".all-disease").css("border-bottom","0");
                $(".eva-disease-1").css("border-bottom","0");
                $(".eva-disease-3").css("border-bottom","0");
                $(".eva-disease-1-order").hide();
                $(".eva-disease-2-order").show();
                $(".eva-disease-3-order").hide();
	});
	$(".eva-disease-3").click(function(){
                $(".eva-disease-3").css("border-bottom","1px solid #1E90FF");
                $(".all-disease").css("border-bottom","0");
                $(".eva-disease-1").css("border-bottom","0");
                $(".eva-disease-2").css("border-bottom","0");
                $(".eva-disease-1-order").hide();
                $(".eva-disease-2-order").hide();
                $(".eva-disease-3-order").show();
	});
}