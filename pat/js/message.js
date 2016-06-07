$(document).ready(function(){
var n = 1;
  $(".chat-allmessage").hide();
  $(".message-detail:eq(0)").click(function(){
     var a=$(".chat-name:eq(0)").html();
     $(".message-header").css("margin-left","10%");
     $(".tip:eq(0)").hide();
     $(".message-header").html(a);
     $(".chat-message:eq(0)").hide();
     $(".chat-allmessage:eq(0)").show();
     $(".message-detail:eq(1)").hide();
     n = 0;
     
  });

  $(".message-detail:eq(1)").click(function(){
     var b=$(".chat-name:eq(1)").html();
     $(".message-header").css("margin-left","13%");
     $(".tip:eq(1)").hide();
     $(".message-header").html(b);
     $(".chat-message:eq(1)").hide();
     $(".chat-allmessage:eq(1)").show();
     $(".message-detail:eq(0)").hide();
     n = 0;
     
  });
  

  $(".message-back").click(function(){
    if(n){

     window.history.back(-1);
    }
   else {
      $(".message-header").css("margin-left","20%");
      $(".message-header").html("消息");
      $(".message-detail").show();
      $(".chat-message").show();
      $(".chat-allmessage").hide();
      n = 1;
   }
    });
  
});