/*
* @Author: asus
* @Date:   2017-11-28 10:22:41
* @Last Modified by:   asus
* @Last Modified time: 2017-11-28 21:31:02
*/
var myScroll = new IScroll('#list-left');

var getFirstCategory=function(){
	//发起ajax请i求，声明函数
	$.ajax({
		type:'get',
		url:'/category/queryTopCategory',
		data:{},
		success:function(data){
			console.log(data);
			// 利用模板添加到页面上
			var firstData=template('first-template',data);
			//添加到ul中
			$('.list-left ul').html(firstData);
			var firstId=data.rows[0].id;
			getSecondCategroy(firstId);

		}
	})
}
getFirstCategory();




var getSecondCategroy=function(id){
	$.ajax({
		type:'get',
		url:'/category/querySecondCategory',
		data:{id:id},
		success:function(data){
			//console.log(data);
			//用模板把数据渲染到页面上
			var secondData=template('second-template',data);
			//添加到ul中
			$('.list-right').html(secondData);
		}
	})
}
getSecondCategroy();

$('.list-left ul').on('click','a',function(){


$('.list-left ul').find('a').removeClass('active');
$(this).addClass('active');
var firstId=$(this).attr('data-id');
getSecondCategroy(firstId);

});
