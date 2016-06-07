//获取验证码60秒倒计时
var countdown=60;
function verTime(obj){
        if(countdown==0){
        	obj.removeAttribute("disabled");
        	obj.value="获取验证码";
        	$(obj).css({
			'background-color': '#1E90FF'
		});
        	countdown=60;
        	return;
        }
        else{
        	 obj.setAttribute("disabled", true); 
        	 $(obj).css({
			'background-color': '#a1a1a1'
		});
             obj.value= countdown + "秒"; 
             countdown--; 
        }
        setTimeout(function() { 
        verTime(obj) }
        ,1000) 
}
//注册登录
$(sRegister);
function sRegister(){
	    $('.registerPage').hide();
	    $('.doctorMessage').hide();
	    $('.qLogin').hide();
	    // $('.loginPage').hide();
	    // $('body').css('background-color','#fff');
	$('#register').click(function() {
		$('.loginPage').hide();
		$('.registerPage').show();
		$('body').css('background-color','#fff');
	});
	$('.rowReturn').click(function() {
		countdown=0;
		$('.loginPage').show();
		$('.registerPage').hide();
		$('.doctorMessage').hide();
		$('.qLogin').hide();
		$('body').css('background-color','#1E90FF');
	});
	$('#regBtn').click(function() {
		// countdown=0;
		$('.doctorMessage').show();
		$('.registerPage').hide();
	});
	$('#phoneLogin').click(function() {
		// countdown=0;
		$('.qLogin').show();
		$('.loginPage').hide();
		$('body').css('background-color','#fff');
	});
	$('#logBtn').click(function() {
		window.location.href="firstpage.html";
	});
	$('#mesSubmit').click(function() {
		window.location.href="login.html";
	});
}
// 页面间的数据交换？
var doctorStatus=1;
window.onload=function(){
	if(doctorStatus==1){
		$('.dt_status').text('继续接单');
	    $('.dt_status').css('background-color','#00CD00');
		$('.setDiv').hide();
		$('.clDiv').hide();
	}
	else{
		$('.dt_status').text('不再接单');
		$('.dt_status').css('background-color','red');
        $('.setDiv').hide();
        $('.clDiv').hide();
	}

}

// 首页的page-change--页面切换
$(change);

//默认状态
function pageappear(){
	// 同时默认状态
	$('.page1').css('color','#1E90FF');
	$('.secondPage').hide();
	$('.type').hide();
	$('.thirdPage').hide();
	$('.forthPage').hide();
	$('.dt_dealing').show();
	// $('.dt_achieve').hide();
}
// 首页出现，其他页面隐藏
function page1appear(){
    $('.firstPage').show();
	$('.page1').css('color','#1E90FF');
	$('.secondPage').hide();
	$('.page2').css('color','#000');
	$('.thirdPage').hide();
	$('.type').hide(); 
	$('.page3').css('color','#000');
	$('.forthPage').hide();
	$('.page4').css('color','#000');
}
function page2appear(){
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').show();
	    $('.page2').css('color','#1E90FF');
	    $('.thirdPage').hide();
	    $('.type').hide(); 
	    $('.page3').css('color','#000');
	    $('.forthPage').hide();
	    $('.page4').css('color','#000');
}
function page3appear(){
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').hide();
	    $('.page2').css('color','#000');
	    $('.thirdPage').show();
            //$('.patientList2_unaccepted').hide();
	    $('.type').show();
	    $('.page3').css('color','#1E90FF');
	    $('.forthPage').hide();
	    $('.page4').css('color','#000');
}
function page4appear(){
		$('.firstPage').hide();
	    $('.page1').css('color','#000');
	    $('.secondPage').hide();
	    $('.page2').css('color','#000');
	    $('.thirdPage').hide();
	    $('.type').hide();
	    $('.page3').css('color','#000');
	    $('.forthPage').show();
	    $('.page4').css('color','#1E90FF');
}
function change(){
	$(pageappear);

	$('.page1').click(function() {//首页出现，其他页面隐藏
		$(page1appear);
	});
	$('.page2').click(function() {//指定出现，其他页面隐藏
		$(page2appear);
	});
	$('.page3').click(function() {//指定出现，其他页面隐藏
		$(page3appear);
	});
	$('.page4').click(function() {//指定出现，其他页面隐藏
		$(page4appear);
	});
	$('.dt_introduction').click(function() {
		$(page4appear);
	});
}

//医生任务状态设置
$(set);

function set(){
	$('.setDiv').hide();
	$('.clDiv').hide();
	$('.set').click(function() {
		$('.setDiv').show();
		$('.clDiv').show();
		$('#start').click(function() {
			$('.dt_status').text('继续接单');
			$('.dt_status').css('background-color','#11cd6e');
			$('.setDiv').hide();
			$('.clDiv').hide();
			doctorStatus=1;
		});
		$('#stop').click(function() {
			$('.dt_status').text('不再接单');
			$('.dt_status').css('background-color','red');
            $('.setDiv').hide();
            $('.clDiv').hide();
            doctorStatus=0;
		});
	});
	$('.clDiv').click(function() {
		$('.setDiv').hide();
		$('.clDiv').hide();
	});
}

//消息提醒
$(sm_tip);

function sm_tip(){
	$('.dt_sysMes').click(function() {
		window.location.href="sysMes.html";
	});
}

// 成就块的出现和关闭
$(achieve_star);

function achieve_star(){
	$('.dt_achieve').hide();
	$('.funcType').click(function() {
		if($(this).children().text()=="执医成就")
		$('.dt_achieve').show();
	});
	$('#closeAch').click(function() {
		$('.dt_achieve').hide();
	});
}

//网络咨询
$(netConsult);

function netConsult(){
	$('.funcType').click(function() {
		if($(this).children().text()=="网络咨询")
		window.location.href="netConsult.html";
	});
}
//网络咨询类型转换+版面切换
$(consultChange);

function consultChange(){
	//默认显示未受理部分信息
	$('.newPatient').css({
			'border-bottom':'1px #1E90FF solid',
			'color':'#1E90FF'
		});
	$(new_Content);
	$('.newPatient').click(function() {
		$('.newPatient').css({
			'border-bottom':'1px #1E90FF solid',
			'color':'#1E90FF'
		});
		$('.nowPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$('.allPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$(new_Content);
	});
	$('.nowPatient').click(function() {
		$('.newPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$('.nowPatient').css({
			'border-bottom':'1px #1E90FF solid',
			'color':'#1E90FF'
		});
		$('.allPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$(now_Content);
	});
	$('.allPatient').click(function() {
		$('.newPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$('.nowPatient').css({
			'border-bottom':'1px #ccc solid',
			'color':'#000'
		});
		$('.allPatient').css({
			'border-bottom':'1px #1E90FF solid',
			'color':'#1E90FF'
		});
		$(all_Content);
	});
}
// 版块切换
function new_Content(){
	$('.newContent').show();
	$('.nowContent').hide();
	$('.allContent').hide();
}
function now_Content(){
	$('.newContent').hide();
	$('.nowContent').show();
	$('.allContent').hide();
}
function all_Content(){
	$('.newContent').hide();
	$('.nowContent').hide();
	$('.allContent').show();
}

// 医生回复
$(netReplyCon);

function netReplyCon(){
	$('#netreply_Consult').hide();
	$('.replyConBtn').click(function() {
		$('#netreply_Consult').show();
		$('#netreply_btn').click(function() {
		var reply=$('#dt_netReply').val();
		if(reply!=""){
			$('#netreply_Consult').hide();
		    $('#dt_netReply').val("");
		}
	});
	});
	$('#closeAch').click(function() {
		$('#netreply_Consult').hide();
		$('#dt_netReply').val("");
	});
}

// 患者报到+正在处理
$(signAndDeal);

function signAndDeal(){
	$('.dt_patSign').hide();
	$('.dt_dealing').show();
	$('.funcType').click(function() {
		if($(this).children().text()=="患者报到")
		$('.dt_patSign').show();
	    $('.dt_dealing').hide();
	    // 点赞和取消赞
	    $('.dt_goodjob').click(function() {
	    	if($(this).attr("src")=="pic/gj1.png")
	    	$(this).attr("src","pic/gj2.png");
	        else 
	        $(this).attr("src","pic/gj1.png");
	    });
	    $('.dt_knowMore').click(function() {
	    	window.location.href="chatPage.html";
	    });
	});
	$('.funcType').click(function() {
		if($(this).children().text()=="正在处理"){
		$('.dt_patSign').hide();
	    $('.dt_dealing').show();
	}
	});
}

// 聊天界面的进入
$(chatIn);

function chatIn(){
    $('#patient1').click(function() {
    	// $(this).find(".tip").hide();
    });
}

//thirdPage-typechange--状态切换
$(typeChange);

function typeChange(){
	$('.patientList1').show();
	$('.patientList2').hide();
	$('.accepted').click(function() {
		$('.accepted').css({'color':'#1E90FF','background-color':'#fff'});
		$('.un-accepted').css({'color':'#fff','background-color':'#1E90FF'});
	    $('.patientList1_accepted').show();
	    $('.patientList2_unaccepted').hide();
	});
	$('.un-accepted').click(function() {
		$('.un-accepted').css({'color':'#1E90FF','background-color':'#fff'});
		$('.accepted').css({'color':'#fff','background-color':'#1E90FF'});
	    $('.patientList2_unaccepted').show();
	    $('.patientList1_accepted').hide();
	});
}


// chatPage
window.onload=function(){
	// 警告初始化不出现
	$('#warning').hide();
	$('.treatWay').hide();
	$('.testBlock').hide();
	// $('#testCont').hide();
	var replyStatus=1;
	$(inputFocus);
	$(btnchange);
	$(Enter(replyStatus));
	$(sendTest);
    $(testChoose);
}

function inputFocus(){
	$('#inputText').click(function() {
       $('.treatWay').show();
	});
}
function btnchange(){
	$('#inputText').keyup(function() {
		$('#btn').css('background-color','#1E90FF');
	});
}
// 发送消息
function Enter(replyStatus){
	var pic='pic/doctorHead.jpg';
    var v1='无';
	var v2='无';
	$('.replyTip').click(function() {
		replyStatus=2;
		v1=$('#inputText').val();
		//清空输入框内容
		$('#inputText').val("");
		$('.replyTip').css({
			'border-top': '1px #ccc solid',
			'background-color': '#fff'
		});
        $('.firstTreat').css({
			'background-color': '#ccc'
		});
	});
	$('.firstTreat').click(function() {
		replyStatus=1;
		v2=$('#inputText').val();
		//清空输入框内容
		$('#inputText').val("");
		$('.firstTreat').css({
			'border-top': '1px #ccc solid',
			'background-color': '#fff'
		});
        $('.replyTip').css({
			'background-color': '#ccc'
		});
	});
	$('#btn').click(function() {
		//消息为空发出警告，两秒后消失
		// if($('#inputText').val()==''){
		if((v1=='无'||v1=='')&&(v2=='无'||v2=='')){
		   $('#warning').slideDown(50);
		   //警告2秒后消失
           setTimeout(function(){
           $('#warning').slideUp(50);	
       },1000);
		}
		else{
            if(replyStatus==2) {
            	v2=$('#inputText').val();
            }
            else v1=$('#inputText').val();
			$('.chatContent').append('<li><img src="'+pic+'"><span>'+'<p>'+'初诊：'+v1+'</p>'+'提醒：'+v2+'</span></li>');
		}
		$('#inputText').val("");
		$('#btn').css('background-color','#c1c1c1'); 
		v1='无';
		v2='无';
		$('.treatWay').hide();
	});
}
// 测试选择出现
function sendTest(){
	$('.dttest').click(function() {
		$('.testBlock').show();
	});
}
var choosetestName;
//选择测试题
function testChoose(){
	$('.choices').click(function() {
	    var testName=$(this).html();
		var testContent="<li class=\"testCont\"><img src=\"pic/doctorHead.jpg\"><span>"+testName+"</span></li>";
		$('.chatContent').append(testContent);

		// 切换测试页面-->点击医生发送的测试消息
		$('.testCont').bind('click', function() {
		choosetestName=$(this).children('span').html();
		window.location.href="testPage.html";
	});
		$('.testBlock').hide();
		testName='';
	});
}
//了解更多
$(chatKnowMore);

function chatKnowMore(){
	$('.moreContent').hide();
	$('#moreTip').hide();
	var isShow=false;
	$('#ct_knowMore').click(function() {
		$('.moreContent').show();
		// 更多面版2秒后消失
           setTimeout(function(){
           $('.moreContent').hide();	
       },3000);
	});
	//点击面板消失
    $('.ct_binding').click(function() {
		   if($(this).children().text()=="绑定用户"){
		   $('#moreTip').text("发送请求成功，等待对方用户处理！");
		   $('#moreTip').show();
		   }
		   if($(this).children().text()=="数据统计"){
		   // $('#moreTip').text("发送请求成功，等待对方用户处理！");
		   $('#netreply_Consult').show();
		   }
		   if($(this).children().text()=="聊天背景"){
		   $('#moreTip').text("此功能尚未实现！");
		   $('#moreTip').show();
		   }
		   if($(this).children().text()=="聊天记录"){
		   $('#moreTip').text("此功能尚未实现！");
		   $('#moreTip').show();
		   }
		   // 提醒2秒后消失
           setTimeout(function(){
           $('#moreTip').hide();	
           },1000);
		   $('.moreContent').hide();
    });
}

// 测试页面
$(testSub);
function testSub(){
	$('.testSubmit').click(function() {
	$('.testP').hide();
	$('.test_submit').hide();
	$('.test_content').append('<span>'+'提交成功！'+'</span>');
	});
}

//消息页面
$(sys_message);
function sys_message(){
	$('.coop_content').hide();
	$('.sys_content').hide();

	$('.sm_down1').click(function() {
		$('.coop_content').show();
		setTimeout(function(){
           $('.coop_content').hide();	
       },3000);
	});
	$('.sm_down2').click(function() {
		$('.sys_content').show();
		setTimeout(function(){
           $('.sys_content').hide();	
       },3000);
	});
}
