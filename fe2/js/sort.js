// 菜单区域滚动
var myScroll = new IScroll('#list-left');

// 一级菜单渲染
// 技术: 模板引擎 ajax 
// 思路: 1.当页面打开 是否能看到已经请求来的数据

// 步骤: 
// 1. 声明一个函数--不限次数的发起ajax请求
var getFirstCategory = function () {
  // 2. 发起ajax请求 获取数据--查看接口文档
  $.ajax({
    type: 'get',
    url: '/category/queryTopCategory',
    data: {},
    success: function (data) {
      // console.log(data);
      // 3.  把数据渲染到页面上-- 模板引擎
      // 3.1 写模板(在html中)
      // 3.2 引入模板库(在html中)
      // 3.3 绑定数据
      var firstData = template('first-template',data);
      // 3.4 把绑定好的内容添加到ul中
      $('.list-left ul').html(firstData);
    }
  })

}

getFirstCategory();
