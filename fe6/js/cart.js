$(function(){
  // 获取购物车列表
  getCartData();

  // 删除购物车
  $(".mui-table-view").on("click",'.mui-btn-red',function(){
     var cartid = $(this).attr('data-id');
     delCartData(cartid);
  })
})

// 查询购物车
var getCartData = function(){
  $.ajax({
    type:'get',
    url:'/cart/queryCart',
    data:{},
    success:function(data){
      // console.log(data);
      var cartList = template("cart-template",{list:data});
      $(".mui-table-view").html(cartList);
    }
  })
}

// 删除购物车
var delCartData = function(cartid){
  $.ajax({
    type:'get',
    url: '/cart/deleteCart',
    data: {
      id : cartid
    },
    success:function(data){
      // console.log(data);
      if(data.success == true) {
        getCartData();
      }
    }
  })
}