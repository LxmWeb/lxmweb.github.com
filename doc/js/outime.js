$(timeskip);
function timeskip(){
	$(".outime-page2").hide();
	$(".outime-right").click(function(){
        window.location.href="me.html";
	});
    $(".outime-edit").click(function(){
        $(".outime-page2").toggle();
        $(".outime-page1").toggle();
	});
	$(".outime-finish").click(function(){
        $(".outime-page2").toggle();
        $(".outime-page1").toggle();
	});
	var count=1;
	var appendtimefinsh="<div class=\"col-xs-12 outime-time-ctx-1\"><div class=\"col-xs-4 outime-time-plan\"><select class=\"outime-time-option\"><option value=\"outime-time-op1-1\" selected=\"true\">周一上午</option><option value=\"outime-time-op1-2\">周一下午</option><option value=\"outime-time-op2-1\">周二上午</option><option value=\"outime-time-op2-2\">周二下午</option><option value=\"outime-time-op3-1\">周三上午</option><option value=\"outime-time-op3-2\">周三下午</option></select></div><div class=\"col-xs-4 outime-time-type\"><select class=\"outime-time-type-option\"><option value=\"outime-time-type-op1\" selected=\"true\">普通门诊</option><option value=\"outime-time-type-op2\">专家门诊</option></select></div><div class=\"col-xs-4 outime-time-money\"><select class=\"outime-time-money-option\"><option value=\"outime-time-money-op1\" selected=\"true\">5元/次</option><option value=\"outime-time-money-op2\">10元/次</option><option value=\"outime-time-money-op3\">15元/次</option></select></div></div>";
	var appendtimeedit="<div class=\"col-xs-12 outime-time-ctx-1\"><div class=\"col-xs-4 outime-time-plan outime-time-plan-sure\">周二下午</div><div class=\"col-xs-4 outime-time-type outime-time-type-sure\">专家门诊</div><div class=\"col-xs-4 outime-time-money outime-time-money-sure\">5元/次</div></div>"
	$(".outime-time-add").click(function(){
    	$(".outime-time-finish-page").append(appendtimefinsh);
    	$(".outime-time-edit-page").append(appendtimeedit);
    	count++;
    });
   //  var plantime,plantype,planmoney;
   //  var changetext;
   //  for(var i=0;i<count;i++){
   //      changetext=$(".outime-time-option").eq(i);
   //      for(var j=0;j<changetext.length;j++){
   //      	if(changetext[i].selected==true){ 
   //      		console.log(changetext[i].text);
			// 	$(".outime-time-plan-sure").eq(i).html(changetext[i].text); 
			// } 
   //      }
	  //   // plantime=changetext.options[changetext.selectedIndex].text;
	  //   // plantype=$(".outime-time-type-option").eq(i).find("option:selected").text();
	  //   // planmoney=$(".outime-time-money-option").eq(i).find("option:selected").text();
	  //   // console.log(plantime);
	  //   // // $(".outime-time-plan-sure").eq(i).text(plantime);
	  //   // $(".outime-time-type-sure").eq(i).text(plantype);
	  //   // $(".outime-time-money-sure").eq(i).text(planmoney);
   //  }
}