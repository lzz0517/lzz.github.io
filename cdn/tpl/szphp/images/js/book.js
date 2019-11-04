$(document).ready(function(){
	$("#submit_message").submit(function(){
		//提交表单
		if(!$('#title').val()){
			$.dialog.alert("姓名不能为空");
			return false;
		}
		if(!$('#book_tel').val()){
			$.dialog.alert('电话不能为空');
			return false;
		}
		if(!$('#book_email').val()){
			$.dialog.alert('邮箱不能为空');
			return false;
		}
		if(!$('#book_content').val()){
			$.dialog.alert('内容不能为空');
			return false;
		}
		$(this).ajaxSubmit({
			'url':api_url('post','save','id=book'),
			'type':'post',
			'dataType':'json',
			'success':function(rs){
				if(rs.status == 'ok'){
					$.dialog.alert('您的留言信息已提交，我们会尽快回复您，感谢您的支持',function(){
						$.phpok.reload();
					},'succeed');
				}else{
					$.dialog.alert(rs.content,function(){
						$("#update_vcode").phpok_vcode();
						$("#_chkcode").val('');
					});
					return false;
				}
			}
		});
		return false;
	});
});