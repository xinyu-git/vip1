/*wlo:Cflower*/

$(function(){
	//关闭 弹窗
	$(document).on("click","#alertInfo .dialog_close",dialog.closeDiv);
	//大区选择
	$(document).on('click','#choose_region a',function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($('#choose_region a').hasClass('active')){
			$('#region_tips').hide();
		}
	})

})

var Tips; if (!Tips) Tips = {};

/**
 * 显示隐藏 提示框
 */
Tips.showMsg = function(){
	 dialog.alertMsg('账号：ZXX1100','您已领取成功',"dialog.closeDiv()");
}

/**
 * 显示隐藏 大区选择
 */
Tips.showRegion = function(){
	 dialog.alertRegion('账号：ZXX1100',"confirmRegion()");
}
/**
 *模拟确认大区是否选择
 */
function confirmRegion(){
	if(!$('#choose_region a').hasClass('active')){
		$('#region_tips').show();
	}else{
		Tips.showMsg();
	}
}

/*------------------*/
//点击显示隐藏
function showHide(Ele,iTaget){
	$(Ele).show();
	$(iTaget).show();
}

//点击显示隐藏
function hide(Ele,iTaget){
	$(Ele).hide();
	$(iTaget).hide();
}