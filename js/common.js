/*wlo:Cflower*/
var dialog; if(!dialog) dialog={};
dialog={
	//关闭
	closeDiv:function(){
		$("#alertInfo").stop(true,true).animate({
			"top":"-100%",
			"opacity":"0"
		},"fast",function(){
			$("#maskLayer,#alertInfo").remove().hide();
		});
	},
	//
	maskLayer:function(){
		$("#maskLayer,#alertInfo").remove();
		var maskLayer="<div id='maskLayer'></div>";
		var alertInfo="<div id='alertInfo'></div>";
		$("body").append(maskLayer,alertInfo);
		$("#maskLayer").height($(document).height()).show();
	},
	//显示提示信息框
	showInfo:function(alertHtml){
		dialog.maskLayer();
		var _winH=$(window).height();             //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
		var _scrollTop=$(document).scrollTop();   //　　　　　　　　　　　├→
		$("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
		var _thisDomWidth=$("#alertInfo").outerWidth();
		var _thisDomHeight=$("#alertInfo").outerHeight();
		var topD=parseInt(_scrollTop+(_winH-_thisDomHeight)/2);
		var mL=parseInt(_thisDomWidth/2);
		if(_thisDomHeight>=_winH){
			topD=_scrollTop;
			if(_scrollTop+_thisDomHeight>=$(document).height()){
				topD=$(document).height()-_thisDomHeight;
			}
		};
		$("#alertInfo").css({
			"margin-left":"-"+mL+"px",
			"top":topD+"px",
			"margin-left":"-"+mL+"px",
			"opacity":"1"
		});
		//console.log("点击弹层时窗口的高度："+_winH);
	},
	//改变窗口大小时改变弹出层的位置
	alertInfoPo:function(){
		var _winHResize=$(window).height();
		var _scrollTopResize=$(document).scrollTop();
		var _thisDomWidthResize=$("#alertInfo").outerWidth();
		var _thisDomHeightResize=$("#alertInfo").outerHeight();
		var topResize=parseInt(_scrollTopResize+(_winHResize-_thisDomHeightResize)/2);
		if(_thisDomHeightResize>=_winHResize){
			topResize=_scrollTopResize;
			if(_scrollTopResize+_thisDomHeightResize>=$(document).height()){
				topResize=$(document).height()-_thisDomHeightResize;
			}
		};
		if(topResize>=$("body").height()-_thisDomHeightResize){
			_scrollTopResize=$("body").height()-_thisDomHeightResize;
			topResize=_scrollTopResize-(_winHResize-_thisDomHeightResize)/2;
		}
		$("html,body").css({scrollTop:_scrollTopResize});
		$("#alertInfo").css({
			"top":topResize+"px",
			"margin-left":"-"+(_thisDomWidthResize/2)+"px"
		})
		//console.log("改变大小时窗口的高度："+_winHResize);
		$("#maskLayer").height($("body").height());
	},
	//提示选择大区
	alertRegion:function(account,func){//msg：提示内容
		dialog.showInfo("<div class='tsInfo'>"
			+"<a href='javascript:;' class='dialog_close'></a>"
			+" <p class='account_con'>"+account+"</p>"
			+"<div class='choose_region' id='choose_region'><a href='javascript:;' class='test1'>电信南方区</a><a href='javascript:;'>联通北方区</a></div>"
			+" <p class='region_tips' id='region_tips'>请选择大区</p>"
			+"<div class='confirmGet_btn'><a href='javascript:"+func+";'>确认领取</a></div>"
			+"</div>");
	},
	//提示弹层
	alertMsg:function(account,msg,func){//msg：提示内容
		dialog.showInfo("<div class='tsInfo'>"
			+"<a href='javascript:;' class='dialog_close'></a>"
			+" <p class='account_con'>"+account+"</p>"
			+" <p class='tips_con'>"+msg+"</p>"
			+"<div class='confirmGet_btn'><a href='javascript:"+func+";'>确认</a></div>"
			+"</div>");
	}
};



$(window).on("load resize scroll",function(){
	if($("#alertInfo").is(":visible")){
		dialog.alertInfoPo();
	}
});




