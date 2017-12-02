$(function(){
  // 获取用户信息
  getUserInfo();

  // 用户退出
  $(".logout-btn").on("click",function(){
    userLogOut();
  })
})

var getUserInfo = function(){
  $.ajax({
    type: 'get',
    url: ' /user/queryUserMessage',
    data: null,
    success:function(data){
      console.log(data);
      if(data.error == 400) {
         location.href = './user/login.html?returnUrl='+location.href;
      }else {
        var userInfo = template("user-template",data);
        $(".mui-media").html(userInfo);
      }
    }
  })
}

var userLogOut = function(){
  $.ajax({
    type: 'get',
    url: "/user/logout",
    data: null,
    success:function(data){
      // console.log(data);
      if(data.success == true) {
        location.href = './user/login.html';
      }
    }
  })
}
