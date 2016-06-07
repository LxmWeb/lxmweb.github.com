//注册
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
		$('.loginPage').show();
		$('.registerPage').hide();
		$('.doctorMessage').hide();
		$('.qLogin').hide();
		$('body').css('background-color','#1E90FF');
	});
	$('#regBtn').click(function() {
		$('.doctorMessage').show();
		$('.registerPage').hide();
	});
	$('#phoneLogin').click(function() {
		$('.qLogin').show();
		$('.loginPage').hide();
		$('body').css('background-color','#fff');
	});
	$('#logBtn').click(function() {
		window.location="mysite.html";
	});
}
//获取验证码60秒倒计时
var countdown=60;
function verTime(obj){
        if(countdown==0){
        	obj.removeAttribute("disabled");
        	obj.value="重新发送";
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
// 页面间的数据交换？
var doctorStatus=1;
window.onload=function(){
	
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
	    $('.patientList1').show();
	    $('.patientList2').hide();
	});
	$('.un-accepted').click(function() {
		$('.un-accepted').css({'color':'#1E90FF','background-color':'#fff'});
		$('.accepted').css({'color':'#fff','background-color':'#1E90FF'});
	    $('.patientList2').show();
	    $('.patientList1').hide();
	});
}
}

// chatPage
window.onload=function(){
	// 警告初始化不出现
	$('#warning').hide();
	$(btnchange);
	$(Enter);
	$(back);
}

function btnchange(){
	$('#inputText').keyup(function() {
		$('#btn').css('background-color','#1E90FF');
	});
}

function Enter(){
	var pic='img/doctorHead.jpg';
	$('#btn').click(function() {
		if($('#inputText').val()==''){
		   // $('#warning').show();
		   $('#warning').slideDown(50);
		   //警告2秒后消失
           // $('#warning').delay(1000).hide();
           setTimeout(function(){
           $('#warning').slideUp(50);	
       },1000);
		}
		else{
			$('.chatContent').append('<li><img src="'+pic+'"><span>'+$('#inputText').val()+'</span></li>');
		}
		$('#inputText').val("");
		$('#btn').css('background-color','#c1c1c1'); 
	});
}

function back(){
	$(".fa-arrow-left").click(function(){
		 window.history.back(-1);
	})
}