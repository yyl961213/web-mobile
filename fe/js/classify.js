/*
* @Author: asus
* @Date:   2017-11-28 11:56:06
* @Last Modified by:   asus
* @Last Modified time: 2017-12-01 11:31:57
*/
var myScroll = new IScroll('#list-left');
//声明一个函数，可以无限次的发起ajax请求
var getFirstCategory=function(){
	//发起ajax请求
	$.ajax({
		type:'get',
		url:'/category/queryTopCategory',
		data:{},
		success:function(data){
			// console.log(data);
			//利用模板把数据渲染到页面上
			var firstData=template('first-template',data);
			//添加到ul中
			$('.list-left ul').html(firstData);

			var firstId=data.rows[0].id;
			getSecondCategroy(firstId);

		}
	})
}
getFirstCategory();





// 二级页面
var getSecondCategroy=function(id){
	$.ajax({
		type:'get',
		url:"/category/querySecondCategory",
		data:{
			id:id
		},
		success:function(data){
			//console.log(data);
		var secondData=template('second-template',data);
		$('.list-right').html(secondData);
 	}
	 })
}
getSecondCategroy();

	$('.list-left ul').on('click','a',function(){
		//首先删除所有样式
				$('.list-left ul').find('a').removeClass('active');
				//找到当前点击的元素，追加类样式
				$(this).addClass('active')
				var firstId=$(this).attr('data-id');
				getSecondCategroy(firstId);
			})

