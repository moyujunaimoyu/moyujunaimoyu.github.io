function Time(){
	var time=new Date();
	return time;
}
function NowTime(){
	var time=Time();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
            
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
              
    h=check(h);
    m=check(m);
    s=check(s);
    document.getElementById("nowtime").innerHTML="当前时间："+year+"年"+month+"月"+day+"日  "+h+":"+m+":"+s;
   }
function srTime() {
	var time=Time();
	var targetDate = new Date("April 26, 2023 10:00:00").getTime();
	var timeRemaining = targetDate - time;
		// 计算天、小时、分钟和秒数
	var srhour = Math.floor(timeRemaining  / (1000 * 60 * 60));
	var srminutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var srseconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	document.getElementById("srtime").innerHTML="距离《崩坏：星穹铁道》全平台公测还有："+srhour+" 小时 "+srminutes+" 分钟 "+srseconds+" 秒";
		// 检查是否到期
	if (timeRemaining <= 0) {
   		document.getElementById("srtime").innerHTML="《崩坏：星穹铁道》已经正式公测啦！愿此行，终抵群星！";
	}
}
function ysTime() {
	var time=Time();
	var genshinupdateDate = new Date("May 24, 2023 11:00:00").getTime();
	var ystime = genshinupdateDate - time;
		// 计算天、小时、分钟和秒数
	var yshour = Math.floor(ystime  / (1000 * 60 * 60));
	var ysminutes = Math.floor((ystime % (1000 * 60 * 60)) / (1000 * 60));
	var ysseconds = Math.floor((ystime % (1000 * 60)) / 1000);
	document.getElementById("ystime").innerHTML="距离《原神》3.7版本「决斗！召唤之巅！」到来还有："+yshour+" 小时 "+ysminutes+" 分钟 "+ysseconds+" 秒";
		// 检查是否到期
	if (timeRemaining <= 0) {
   		document.getElementById("ystime").innerHTML="《原神》3.7版本「决斗！召唤之巅！」已经上线！";
	}
}
window.onload=function(){
	setInterval("Time()",20);
    setInterval("NowTime()",20);
	setInterval("srTime()", 20);
	setInterval("ysTime()", 20);
}
function check(i){
    var num;
    i<10?num="0"+i:num=i;
    return num;
}