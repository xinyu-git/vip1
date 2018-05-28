$(function(){
	
	inputconfig($("input[name='phone']"),errorMsgLi,checkPhone);

})
/**
 *显示提示信息
 * @param $errorMsg 提示元素
 * @param msg 提示内容
 */
/*错误信息提示dom*/
var errorMsgLi=$('#errorMsg');
function showMsg($errorMsg,msg, is){
	if(is == 'yes'){//正确  移除错误样式
		$errorMsg.html(' ')
		$errorMsg.removeClass("erro");
	}else{//显示错误
		if(msg != null){
			$errorMsg.html(msg);
			$errorMsg.addClass("erro");
		}
	}
}
function inputconfig($input,$errorMsg,checkFunName){
	if($input.size()>0){
		$input.blur(function(){
			if(checkFunName != null && checkFunName != ""){
				checkFunName($input);
			}
		}).focus(function(){
			$errorMsg.addClass("erro");
			$errorMsg.html(phoneTips.f)
			this.select()
		})
	}
}
/*
 * 验证手机号
 */
function checkPhone($phone){
	if($phone.size() == 0){
		$phone = $("input[name='phone']");
	}
	var phone = $.trim($phone.val());
	if(phone == ""){
		showMsg(errorMsgLi,phoneTips.err_null,'no');
		return false;
	}
	var phoneReg = /(^1[38][0-9]{9}$)|(^15[012356789][0-9]{8}$)|(^14[57][0-9]{8}$)|(^17[03678][0-9]{8}$)/;
	if(!phoneReg.exec(phone)){
		showMsg(errorMsgLi,phoneTips.err,'no');
		return false;
	}else{
		showMsg(errorMsgLi,' ','yes');
	}
	return true;
}

/*手机号tip*/
var phoneTips={
	f:"请填写真实的手机号码",
	err_null:"手机号码未填写",
	err:"手机号码格式不正确"
}