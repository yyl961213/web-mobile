/*
* @Author: asus
* @Date:   2017-12-01 15:13:27
* @Last Modified by:   asus
* @Last Modified time: 2017-12-01 16:58:26
*/
$(function(){
	getCartData();
	$('.mui-table-view').on('click','.mui-btn-red',function(){
		var cartid=$(this).attr('data-id');
		delCartData(cartid);
		//console.log(catrid);
	})
})
//查询购物车
var getCartData=function(){
	$.ajax({
		type:'get',
		url:'/cart/queryCart',
		data:{},
		success:function(data){
			//console.log(data);
			var catrList=template('cart-template',{list:data});
			$('.mui-table-view').html(catrList);
			//console.log(catrList);
		}
	})
}
//删除购物车
var delCartData=function(cartid){
	$.ajax({
		type:'get',
		url:'/cart/deleteCart',
		data:{
			id:cartid
		},
		success:function(data){
			if(data.success==true){
				getCartData();
			}
		}
	})
}

