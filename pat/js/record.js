$(document).ready(function(){
	$("#record-det").hide();
	$("#record").show();
	$(".take-camera").hide();
	//操作记录界面
	$(".sport:eq(0)").click(function(){
		$(".sport:eq(0)").attr("src","image/sport-basket-y.svg");
		$(".sport:eq(1)").attr("src","image/sport-run-b.svg");
		$(".sport:eq(2)").attr("src","image/sport-ping-b.svg");
		$(".sport:eq(3)").attr("src","image/sport-bike-b.svg");
	});
	$(".sport:eq(1)").click(function(){
		$(".sport:eq(0)").attr("src","image/sport-basket-b.svg");
		$(".sport:eq(1)").attr("src","image/sport-run-y.svg");
		$(".sport:eq(2)").attr("src","image/sport-ping-b.svg");
		$(".sport:eq(3)").attr("src","image/sport-bike-b.svg");
	});
	$(".sport:eq(2)").click(function(){
		$(".sport:eq(0)").attr("src","image/sport-basket-b.svg");
		$(".sport:eq(1)").attr("src","image/sport-run-b.svg");
		$(".sport:eq(2)").attr("src","image/sport-ping-y.svg");
		$(".sport:eq(3)").attr("src","image/sport-bike-b.svg");
	});
	$(".sport:eq(3)").click(function(){
		$(".sport:eq(0)").attr("src","image/sport-basket-b.svg");
		$(".sport:eq(1)").attr("src","image/sport-run-b.svg");
		$(".sport:eq(2)").attr("src","image/sport-ping-b.svg");
		$(".sport:eq(3)").attr("src","image/sport-bike-y.svg");
	});
	$(".yes-no:eq(0)").click(function(){
		$(".yes-no:eq(0)").attr("src","image/yes-g.svg");
		$(".yes-no:eq(1)").attr("src","image/no-b.svg");
	});
	$(".yes-no:eq(1)").click(function(){
		$(".yes-no:eq(0)").attr("src","image/yes-b.svg");
		$(".yes-no:eq(1)").attr("src","image/no-g.svg");
	});
	$(".emotion:eq(0)").click(function(){
		$(".emotion:eq(0)").attr("src","image/emotion-happy-r.svg");
		$(".emotion:eq(1)").attr("src","image/emotion-peace-b.svg");
		$(".emotion:eq(2)").attr("src","image/emotion-sad-b.svg");
		$(".emotion:eq(3)").attr("src","image/emotion-sad2-b.svg");
	});
	$(".emotion:eq(1)").click(function(){
		$(".emotion:eq(0)").attr("src","image/emotion-happy-b.svg");
		$(".emotion:eq(1)").attr("src","image/emotion-peace-r.svg");
		$(".emotion:eq(2)").attr("src","image/emotion-sad-b.svg");
		$(".emotion:eq(3)").attr("src","image/emotion-sad2-b.svg");
	});
	$(".emotion:eq(2)").click(function(){
		$(".emotion:eq(0)").attr("src","image/emotion-happy-b.svg");
		$(".emotion:eq(1)").attr("src","image/emotion-peace-b.svg");
		$(".emotion:eq(2)").attr("src","image/emotion-sad-r.svg");
		$(".emotion:eq(3)").attr("src","image/emotion-sad2-b.svg");
	});
	$(".emotion:eq(3)").click(function(){
		$(".emotion:eq(0)").attr("src","image/emotion-happy-b.svg");
		$(".emotion:eq(1)").attr("src","image/emotion-peace-b.svg");
		$(".emotion:eq(2)").attr("src","image/emotion-sad-b.svg");
		$(".emotion:eq(3)").attr("src","image/emotion-sad2-r.svg");
	});
	$(".camera").click(function(){
		$(".camera").attr("src","image/camera-blue.svg");
		$("#record").hide();
		$("#record-det").show();
	});
	$(".back-record").click(function(){
		$("#record").show();
		$("#record-det").hide();
	});
	$(".content-camera").click(function(){
		$(".take-camera").show();
	});
	$(".btn-camera2").click(function(){
		$(".take-camera").hide();
	});
	$(".btn-camera").click(function(){
		$(".take-camera").hide();
	});
});