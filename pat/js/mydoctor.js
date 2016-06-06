$(document).ready(function(){

	$(".mydoctor-care-doctor").hide();
  $(".mydoctor-information").hide();

  $(".doctor-information:eq(0)").css("border-bottom","1px solid #4876FF");
  $(".doctor-information-sub:eq(0)").css("color","#4876FF");
  $(".doctor-infor:eq(1)").hide();
  $(".doctor-infor:eq(2)").hide();

// 点击互动
  $(".mydoctor-accepted").click(function(){ 

  		  $(this).css("background","white");
        $(this).css("color","#4876FF");
        $(".mydoctor-un-accepted").css({"background":"#4876FF","color":"white"});
	
	      $(".mydoctor-dialog").show();
        $(".mydoctor-care-doctor").hide();
  	});

// 点击关注
  $(".mydoctor-un-accepted").click(function(){
    
    	  $(this).css("background","white");
        $(this).css("color","#4876FF");
        $(".mydoctor-accepted").css({"background":"#4876FF","color":"white"});
        
        $(".mydoctor-care-doctor").show();
        $(".mydoctor-dialog").hide();
	});

 // 点击医生
   $(".mydoctor-care-doctor").click(function(){
        // window.location="医生信息.html";
        $(".mydoctor").hide();
        $(".mydoctor-information").show();
   });

// 点击对话
    $(".mydoctor-dialog").click(function(){
        window.location="对话.html";
   });

//点击消息
  $(".mydoctor-message-sty").click(function(){
        window.location="消息.html";
  });
  
// 点击执业经历
  $(".doctor-information-sub:eq(0)").click(function(){
     $(this).css("color","#4876FF");
     $(".doctor-information:eq(0)").css("border-bottom","1px solid #4876FF");
     $(".doctor-information:eq(1)").css("border-bottom","1px solid lightgray");
     $(".doctor-information:eq(2)").css("border-bottom","1px solid lightgray");
     $(".doctor-information-sub:eq(1)").css("color","gray");
     $(".doctor-information-sub:eq(2)").css("color","gray");
     $(".doctor-infor:eq(0)").show();
     $(".doctor-infor:eq(1)").hide();
     $(".doctor-infor:eq(2)").hide();
  });

// 点击医生寄语
  $(".doctor-information-sub:eq(1)").click(function(){
     $(this).css("color","#4876FF");
     $(".doctor-information:eq(1)").css("border-bottom","1px solid #4876FF");
     $(".doctor-information:eq(0)").css("border-bottom","1px solid lightgray");
     $(".doctor-information:eq(2)").css("border-bottom","1px solid lightgray");
     $(".doctor-information-sub:eq(2)").css("color","gray");
     $(".doctor-information-sub:eq(0)").css("color","gray");
     $(".doctor-infor:eq(1)").show();
     $(".doctor-infor:eq(0)").hide();
     $(".doctor-infor:eq(2)").hide();
  });

// 点击任职医院
  $(".doctor-information-sub:eq(2)").click(function(){
     $(this).css("color","#4876FF");
     $(".doctor-information:eq(2)").css("border-bottom","1px solid #4876FF");
     $(".doctor-information:eq(0)").css("border-bottom","1px solid lightgray");
     $(".doctor-information:eq(1)").css("border-bottom","1px solid lightgray");
     $(".doctor-information-sub:eq(0)").css("color","gray");
     $(".doctor-information-sub:eq(1)").css("color","gray");
     $(".doctor-infor:eq(2)").show();
     $(".doctor-infor:eq(0)").hide();
     $(".doctor-infor:eq(1)").hide();
  });

 // 点击返回
   $(".doctor-back").click(function(){ 
        $(".mydoctor-un-accepted").css("background","white");
        $(".mydoctor-un-accepted").css("color","#4876FF");
        $(".mydoctor-accepted").css({"background":"#4876FF","color":"white"});
        
        $(".mydoctor-care-doctor").show();
        $(".mydoctor-dialog").hide();
        $(".mydoctor").show();
        $(".mydoctor-information").hide();
   });

});