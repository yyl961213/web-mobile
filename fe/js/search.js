/*
* @Author: asus
* @Date:   2017-11-28 16:13:27
* @Last Modified by:   asus
* @Last Modified time: 2017-12-02 22:38:35
*/
//获取历史记录
var getHistory=function(){
	return JSON.parse(localStorage.getItem('ahistory' || '[]'));
}

//添加历史纪录
var setHistory=function(value){
	var aArr=getHistory();
	$.each(aArr,function(i,item){
		//如果有一样的就删除它
		if(item==value){
			aArr.splice(i,1);
		}
	})
	aArr.push(value);
	localStorage.setItem('aHistory',JSON.stringify(aArr));
}

//删除历史记录
var delHistory=function(value){
	$.each(aArr,function(i,item){
		if(item==value){
			aArr.splice(i,1);
		}
	}) 
	window.localStorage.setItem('aHistory',JSON.stringify(aArr));
}

var getHistoryList=function(){
	var HistoryData={
		list:getHistory();
	}
	var historyList=template('history-template',HistoryData);
	$('.history-list').html(historyList);
}