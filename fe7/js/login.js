$(function () {
  // 点击按钮的时候 去登录
  $(".signin").on("click", function () {
    // 需要的是data 代表的是username=tom&password=123456
    // var username = $('[name="name"]').val();
    // var password = $('[name="pass"]').val();
    // var data = 'username='+username+'&'+'password='+password;
    // console.log(data);

    // 另外一种方案--$("").serialize(); 序列化表单
    // 1.前提: 要求必须是form标签
    var formdata = $(".form").serialize();
    //  itcast 111111
    userLogin(formdata);


  })
})

// 发起ajax请求
var userLogin = function (data) {
  $.ajax({
    type: 'POST',
    url: "/user/login",
    // data应该传的是什么   username=tom&password=123456
    // 找到对应的input 然后获取里面的值  
    // 'username='+input.val()+'&'+'password='+input.val()
    // $(".form").searilize();
    data: data,
    success: function (data) {
      if(data.error == 403) {
        mui.toast(data.message);
      } 
      if (data.success == true) {
        var urlSearch =new URLSearchParams(location.search);
        var url = urlSearch.get("returnUrl");
        // console.log(url);
        location.href = url || '../index.html';
      }
    }
  })
}