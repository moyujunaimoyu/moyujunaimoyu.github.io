//SR计时器
    function countDown() {
      var targetDate = new Date("April 26, 2023 10:00:00").getTime();
      var now = new Date().getTime();
      var timeRemaining = targetDate - now;

      // 计算天、小时、分钟和秒数
      var hoursRemaining = Math.floor(timeRemaining  / (1000 * 60 * 60));
      var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // 更新页面上的倒计时数字
      document.getElementById("hours").innerHTML = hoursRemaining;
      document.getElementById("minutes").innerHTML = minutesRemaining;
      document.getElementById("seconds").innerHTML = secondsRemaining;

      // 检查是否到期，如果到期则自动跳转到其他页面
      if (timeRemaining <= 0) {
        document.getElementById("sr").innerHTML = "《崩坏：星穹铁道》正式公测啦！";
	  }
    }

    // 每秒钟更新一次倒计时数字
    var intervalID = setInterval(countDown, 20);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api-launcher-static.mihoyo.com/hkrpg_cn/mdk/launcher/api/resource?channel_id=1&key=6KcVuOkbcqjJomjZ&launcher_id=33&sub_channel_id=2", true);
xhr.onload = function() {
	var gameLink = JSON.parse(xhr.responseText).data.game.latest.path;
	document.getElementById("game-link").innerHTML = gameLink;

	var srversion = JSON.parse(xhr.responseText).data.game.latest.version;
	document.getElementById("srversion").innerHTML = srversion;
}
xhr.send();
	function GameLink() {
		window.location.href = document.getElementById("game-link").innerHTML;
	}