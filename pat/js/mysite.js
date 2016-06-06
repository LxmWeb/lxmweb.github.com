
$(document).ready(function(){
	//初始化页面
	$("#my").hide();
	$("#map").show();
	$("#bbs").hide();
	$("#main-servise").show();
	$("#heart-doctor").hide();
	$("#send").hide();
	$(".bbs-success").hide();
	$(".m-knowledge").hide();
	$("#user-info").hide();
	$(".jifen-fail").hide();
	// 大主题切换
	// 服务
	$("#service").click(function(){
		$("#service p").css("color","#1195db");
  		$("#service img").attr("src","image/service-blue.svg");
  		$("#talk p").css("color","#3d3d3d");
  		$("#talk img").attr("src","image/talk-black.svg");
  		$("#doctor p").css("color","#3d3d3d");
  		$("#doctor img").attr("src","image/doctor-black.svg");
  		$("#mine p").css("color","#3d3d3d");
  		$("#mine img").attr("src","image/mine-black.svg");
  		$("#my").hide();
		$("#map").show();
		$("#bbs").hide();
		$("#main-servise").show();
		$("#heart-doctor").hide();
	});
	//或得更多小知识
	$(".more-knowledge").click(function(){
		$("#service p").css("color","#3d3d3d");
  		$("#service img").attr("src","image/service-black.svg");
  		$("#talk p").css("color","#1195db");
  		$("#talk img").attr("src","image/talk-blue.svg");
  		$("#doctor p").css("color","#3d3d3d");
  		$("#doctor img").attr("src","image/doctor-black.svg");
  		$("#mine p").css("color","#3d3d3d");
  		$("#mine img").attr("src","image/mine-black.svg");
  		$("#my").hide();
		$("#map").show();
		$("#bbs").show();
		$("#main-servise").hide();
		$("#heart-doctor").hide();
		$(".title-1").css("background-color","#fff");
		$(".title-2").css("background-color","#666666");
		$("#txt-lt").css("color","#000");
		$("#txt-zs").css("color","#fff");
		$(".row-date:eq(0)").hide();
		$(".best").hide();
		$(".common").hide();
		$(".m-knowledge").show();
		$(".row-date:eq(1)").show();
	});
	// 论坛
	$("#talk").click(function(){
		$("#service p").css("color","#3d3d3d");
  		$("#service img").attr("src","image/service-black.svg");
  		$("#talk p").css("color","#1195db");
  		$("#talk img").attr("src","image/talk-blue.svg");
  		$("#doctor p").css("color","#3d3d3d");
  		$("#doctor img").attr("src","image/doctor-black.svg");
  		$("#mine p").css("color","#3d3d3d");
  		$("#mine img").attr("src","image/mine-black.svg");
  		$("#my").hide();
		$("#map").show();
		$("#bbs").show();
		$("#main-servise").hide();
		$("#heart-doctor").hide();
		$(".row-date:eq(1)").hide();
	});
	//医生
	$("#doctor").click(function(){
		$("#service p").css("color","#3d3d3d");
  		$("#service img").attr("src","image/service-black.svg");
  		$("#talk p").css("color","#3d3d3d");
  		$("#talk img").attr("src","image/talk-black.svg");
  		$("#doctor p").css("color","#1195db");
  		$("#doctor img").attr("src","image/doctor-blue.svg");
  		$("#mine p").css("color","#3d3d3d");
  		$("#mine img").attr("src","image/mine-black.svg");
  		$("#my").hide();
		$("#map").show();
		$("#bbs").hide();
		$("#main-servise").hide();
		$("#heart-doctor").show();
	});
	//我的
	$("#mine").click(function(){
		$("#service p").css("color","#3d3d3d");
  		$("#service img").attr("src","image/service-black.svg");
  		$("#talk p").css("color","#3d3d3d");
  		$("#talk img").attr("src","image/talk-black.svg");
  		$("#doctor p").css("color","#3d3d3d");
  		$("#doctor img").attr("src","image/doctor-black.svg");
  		$("#mine p").css("color","#1195db");
  		$("#mine img").attr("src","image/mine-blue.svg");
  		$("#my").show();
		$("#map").show();
		$("#bbs").hide();
		$("#main-servise").hide();
		$("#heart-doctor").hide();
	});
	//查看我的信息
	$("#fa-user-img").click(function(){
		$("#user-info").show();
	});
	$("#user-info").click(function(){
		$("#user-info").hide();
	});
	//我的---我的处方点击链接
	$("#mine-cf").click(function(){
		window.location='chufang.html';
	});
	//返回我的
	$(".back").click(function(){
		window.location='mysite.html';
	});
	//链接进入具体处方
	$(".mine-chufang-det").click(function(){
		window.location='chufang1.html';
	});
	//返回我的处方
	$("#back-chufang").click(function(){
		window.location='chufang.html';
	});
	//链接进入我的记录
	$("#mine-jl").click(function(){
		window.location='record.html';
	});
	//链接进入我的任务
	$("#mine-rw").click(function(){
		window.location='assignment.html';
	});
	//小知识
	$(".title-2").click(function(){
		$(".title-1").css("background-color","#fff");
		$(".title-2").css("background-color","#666666");
		$("#txt-lt").css("color","#000");
		$("#txt-zs").css("color","#fff");
		$(".best").hide();
		$(".common").hide();
		$(".m-knowledge").show();
		$(".row-date:eq(0)").hide();
		$(".row-date:eq(1)").show();
	});
	//论坛
	$(".title-1").click(function(){
		$(".title-2").css("background-color","#fff");
		$(".title-1").css("background-color","#666666");
		$("#txt-zs").css("color","#000");
		$("#txt-lt").css("color","#fff");
		$(".txt-chosen:eq(0)").css("font-weight","500");
		$(".txt-chosed").css("font-weight","700");
		$(".txt-chosen:eq(1)").css("font-weight","500");
		$(".txt-chosen:eq(2)").css("font-weight","500");
		$(".row-date:eq(1)").hide();
		$(".row-date:eq(0)").show();
		$(".best").show();
		$(".common").show();
		$(".m-knowledge").hide();
	});
	//选择精华帖
	$(".bbs-title:eq(0)").click(function(){
		$(".txt-chosen:eq(0)").css("font-weight","700");
		$(".txt-chosed").css("font-weight","500");
		$(".txt-chosen:eq(1)").css("font-weight","500");
		$(".txt-chosen:eq(2)").css("font-weight","500");
		$(".common").hide();
		
	});
	//显示全部帖子
	$(".bbs-title:eq(1)").click(function(){
		$(".txt-chosen:eq(0)").css("font-weight","500");
		$(".txt-chosed").css("font-weight","700");
		$(".txt-chosen:eq(1)").css("font-weight","500");
		$(".txt-chosen:eq(2)").css("font-weight","500");
		$(".common").show();
	});
	//发帖
	$(".bbs-title:eq(2)").click(function(){
		$(".txt-chosen:eq(0)").css("font-weight","500");
		$(".txt-chosed").css("font-weight","500");
		$(".txt-chosen:eq(1)").css("font-weight","700");
		$(".txt-chosen:eq(2)").css("font-weight","500");
		$("#send").show();
		//返回
		$(".close").click(function(){
			$("#send").hide();
			$(".txt-chosen:eq(0)").css("font-weight","500");
			$(".txt-chosed").css("font-weight","700");
			$(".txt-chosen:eq(1)").css("font-weight","500");
			$(".txt-chosen:eq(2)").css("font-weight","500");
			$(".common").show();
		});
		//发送贴子
		$("#send-button").click(function(){
			$("#send").hide();
			$(".txt-chosen:eq(0)").css("font-weight","500");
			$(".txt-chosed").css("font-weight","700");
			$(".txt-chosen:eq(1)").css("font-weight","500");
			$(".txt-chosen:eq(2)").css("font-weight","500");
			$(".common").show();
			var a,b,c;
			a=document.getElementById("send-intro1").value;
			b=document.getElementById("send-intro1").value;
			c=document.getElementById("send-intro1").value;
			if(a==""&&b==""&&c==""){
				$("#fail").show();
    			setTimeout(function(){
        			$("#fail").hide();
        		},800);
			}
			else{
				$("#fail").hide();
        		$(".best:last").after(
					"<div class=\"row row-content-2 common\"><div class=\"col-xs-3\"><img class=\"chufang\" src=\"image/2.jpg\"></div><div class=\"col-xs-9\"><span id=\"read-num\">阅读量:XXXX</span><p class=\"txt-3\">标题</p><p class=\"txt-cfp\">内容简介:</p><div class=\"txt-cfp\">XXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>"
				);
				var title=document.getElementById("send-intro1").value;
				$(".common:first .txt-3").text(title);
				var content=document.getElementById("send-intro2").value;
				$(".common:first .txt-cfp:eq(1)").text(content);
				document.getElementById("send-intro1").value="";
				document.getElementById("send-intro2").value="";
				document.getElementById("send-intro3").value="";
				$(".common:first").click(function(){
					window.location="bbs-det.html";
				});
			}
		});
	});
	//查看帖子
	$("#bbs .row-content-2").click(function(){
		window.location="bbs-det.html";
	});
	//链接到心理测试
	$("#mine-ceshi").click(function(){
		window.location="testPage.html";
	});
	//积分兑换
	$("#mine-jifen").click(function(){
		$("#unfinish").show();
    	setTimeout(function(){
        	$("#unfinish").hide();
        },800);
	});
	$("#chance").click(function(){
		$("#unfinish").show();
    	setTimeout(function(){
        	$("#unfinish").hide();
        },800);
	});
	$("#point").click(function(){
		$("#unfinish").show();
    	setTimeout(function(){
        	$("#unfinish").hide();
        },800);
	});
	$("#sale").click(function(){
		$("#unfinish").show();
    	setTimeout(function(){
        	$("#unfinish").hide();
        },800);
	});
	//操作任务界面
	var t=0,t2=0,t3=0;
	$("#ass1").click(function(){
		if(t==0){
			$("#ass1").css("background-color","green");
			document.getElementById("ass1").innerHTML="已完成";
			t=1;
		}
		else{
			$("#ass1").css("background-color","orange");
			document.getElementById("ass1").innerHTML="未完成";
			t=0;
		}
	});
	$("#ass2").click(function(){
		if(t2==0){
			$("#ass2").css("background-color","green");
			document.getElementById("ass2").innerHTML="已完成";
			t2=1;
		}
		else{
			$("#ass2").css("background-color","orange");
			document.getElementById("ass2").innerHTML="未完成";
			t2=0;
		}
	});
	$("#ass3").click(function(){
		if(t3==0){
			$("#ass3").css("background-color","green");
			document.getElementById("ass3").innerHTML="已完成";
			t3=1;
		}
		else{
			$("#ass3").css("background-color","orange");
			document.getElementById("ass3").innerHTML="未完成";
			t3=0;
		}
	});
	
});