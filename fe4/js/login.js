/*
* @Author: asus
* @Date:   2017-12-01 11:33:57
* @Last Modified by:   asus
* @Last Modified time: 2017-12-01 15:10:58
*/
$(function(){
	$('.signin').on('click',function(){
		 var formData=$('.form').serialize();
		 userLogin(formData);
		console.log(formData)
	})
})
var userLogin=function(data){
	$.ajax({
		type:'POST',
		url:'/user/login',
		data:data,
		// error:function(data){
		// 	console.log(data)
		// }
		success:function(data){
			if(data.error==4){
			}
		}
	})
}