$(function () {
  // 调用getProductDetail 需要参数id
  var url = new URLSearchParams(location.search);
  var id = url.get("id");
  // console.log(id);
  getProductDetail(id);
// 点击尺码 让选中的尺码有样式
$('.mui-content').on('click','.product-size span',function(){
    // console.log(1);
    $(".product-size span").removeClass('active');
    $(this).addClass('active');
})

// 点击加按钮和减按钮 让input中的数字变化
  // mui(".mui-numbox").numbox().getValue()
  // 点击加入购物车 把商品加入到购物车中
  $(".add-cart").on('click', function () {
    // 获取参数
    // 1.商品id
    var productid = id;
    // 2.尺码
    var size = $(".product-size span.active").html();
    // 3.数量
    var num = mui(".mui-numbox").numbox().getValue()
    
    if(!productid) {
      mui.toast("无效的商品");
      return false;
    }

    if(!size) {
      mui.toast("请选择尺寸");
      return false;
    }

    if(num <= 0) {
      mui.toast("至少选择一件商品！！");
      return false;
    }

    addCart(productid,size,num);
 
  })
})

var getProductDetail = function (id) {
  $.ajax({
    type: 'get',
    url: '/product/queryProductDetail',
    data: {
      id: id
    },
    success: function (data) {
      // console.log(data);
      var productDetail = template('detail-template', data);
      $(".mui-content").html(productDetail);
      var size = data.size;//'40-50'
      // console.log(size);
      var sizeArr = size.split("-");// ["40","50"]
      // console.log(sizeArr);
      var start = sizeArr[0]; //40
      var end = sizeArr[1];//50
      var sizeData = {
        start: start,
        end: end
      }
      var sizeData = template("size-template", sizeData);
      $('.product-size').append(sizeData);
      // 轮播图手动初始化
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 5000//自动轮播周期，若为0则不自动播放，默认为0；
      });
      // 数字输入框手动初始化
      mui(".mui-numbox").numbox();
    }
  })
}

// 加入购物车
var addCart = function (productid, size, num) {
  $.ajax({
    type: 'POST',
    url: '/cart/addCart',
    data: {
      productId: productid,
      size: size,
      num: num
    },
    // dataType 预期服务器返回的数据格式--
    // 如果你写的是json 那么jquery或zepto会自动把json转换为对象或数组
    dataType: 'json',
    beforeSend: function () {
      // 如果我们的参数不够 我可以在这给地方把ajax请求终止掉
    },
    success: function (data) {
      // console.log(data);
      if(data.error == 400){
        // 跳转到登录页 可以在location.href后面添加一个参数 把返回的地址作为参数带到地址后面
        // 
        location.href = "../user/login.html?returnUrl="+location.href;
      }
    }
  })
}