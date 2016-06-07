window.onload=function(){
    $(".search-result").hide();
    $(".classify-b:eq(0)").css("color","#4876FF");
    $(".classify:eq(0)").css("border-bottom","1px solid #4876FF");
    $(cancel);
    $(classify);
    $(clear);
    $(search);
    $(gethistory);

}

function cancel(){
    
   $(".back").click(function(){
        if($(".search").val()=="请输入搜索关键词"||$(".back").html() == "取消"){
           window.location="服务.html";
        }
        else {
            $(".search-history").hide();
            $(".search-result").show();
            $(".back").html("取消");
        }

    });
	
}

function classify(){
    
    $(".classify-b:eq(0)").click(function(){
        
      $(this).css("color","#4876FF");
      $(".classify-b:eq(1)").css("color","black");
      $(".classify-b:eq(2)").css("color","black");
      $(".classify-b:eq(3)").css("color","black");

      $(".classify:eq(0)").css("border-bottom","1px solid #4876FF");
      $(".classify:eq(1)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(2)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(3)").css("border-bottom","1px solid lightgray");
      $(".back").html("取消");
    });
    $(".classify-b:eq(1)").click(function(){
      
      $(this).css("color","#4876FF");
      $(".classify-b:eq(0)").css("color","black");
      $(".classify-b:eq(2)").css("color","black");
      $(".classify-b:eq(3)").css("color","black");

      $(".classify:eq(1)").css("border-bottom","1px solid #4876FF");
      $(".classify:eq(0)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(2)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(3)").css("border-bottom","1px solid lightgray");
        $(".back").html("取消");
    });
    $(".classify-b:eq(2)").click(function(){
      
      $(this).css("color","#4876FF");
      $(".classify-b:eq(0)").css("color","black");
      $(".classify-b:eq(1)").css("color","black");
      $(".classify-b:eq(3)").css("color","black");

      $(".classify:eq(2)").css("border-bottom","1px solid #4876FF");
      $(".classify:eq(0)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(1)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(3)").css("border-bottom","1px solid lightgray");
        $(".back").html("取消");
    });
    $(".classify-b:eq(3)").click(function(){
      
      $(this).css("color","#4876FF");
      $(".classify-b:eq(0)").css("color","black");
      $(".classify-b:eq(1)").css("color","black");
      $(".classify-b:eq(2)").css("color","black");

      $(".classify:eq(3)").css("border-bottom","1px solid #4876FF");
      $(".classify:eq(1)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(2)").css("border-bottom","1px solid lightgray");
      $(".classify:eq(0)").css("border-bottom","1px solid lightgray");
      $(".back").html("取消");
    });
}

function clear(){
    $(".clear-history-record").click(function(){
        $(".history-records").remove();
        $(".back").html("取消");
    })
}

function search(){
    $(".search").click(function(){
            $(this).val("");
            $(".back").html("搜索");
    });
}

function gethistory(){
    $(".history-records").click(function(){
        $(".search").val($(this).html());
        $(".back").html("搜索");
    })
       
    
}

