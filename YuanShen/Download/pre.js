	// 获取部分
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://sdk-static.mihoyo.com/hk4e_cn/mdk/launcher/api/resource?key=eYd89JmJ&launcher_id=18", true);
    xhr.onload = function() {
/*	var newversion = JSON.parse(xhr.responseText).data.pre_download_game.latest.version;
	var gameprelink = JSON.parse(xhr.responseText).data.pre_download_game.diffs[0].path;
	var audiocnprelink = JSON.parse(xhr.responseText).data.pre_download_game.diffs[0].voice_packs[0].path;
	var audioenprelink = JSON.parse(xhr.responseText).data.pre_download_game.diffs[0].voice_packs[1].path;
	var audiojpprelink = JSON.parse(xhr.responseText).data.pre_download_game.diffs[0].voice_packs[2].path;
	var audiokrprelink = JSON.parse(xhr.responseText).data.pre_download_game.diffs[0].voice_packs[3].path;

	if(newversion == ' '){
	document.getElementById("pre").innerHTML = "预下载已关闭或尚未开启。";
	}
	else{
	//显示部分
	document.getElementById("new").innerHTML =newversion + "版本预下载";

	//链接赋值
	var gamepre = document.getElementById("gamepre");
	var audiocnpre = document.getElementById("audiocnpre");
	var audioenpre = document.getElementById("audioenpre");
	var audiojppre = document.getElementById("audiojppre");
	var audiokrpre = document.getElementById("audiokrpre");

	//链接给值
	gamepre.href = gameprelink;
	audiocnpre.href = audiocnprelink;
	audioenpre.href = audioenprelink;
	audiojppre.href = audiojpprelink;
	audiokrpre.href = audiokrprelink;
	}*/



	//下面是常驻
	var nowversion = JSON.parse(xhr.responseText).data.game.latest.version;
	var old1version = JSON.parse(xhr.responseText).data.game.diffs[0].version;
	var game1link = JSON.parse(xhr.responseText).data.game.diffs[0].path;
	var audiocn1link = JSON.parse(xhr.responseText).data.game.diffs[0].voice_packs[0].path;
	var audioen1link = JSON.parse(xhr.responseText).data.game.diffs[0].voice_packs[1].path;
	var audiojp1link = JSON.parse(xhr.responseText).data.game.diffs[0].voice_packs[2].path;
	var audiokr1link = JSON.parse(xhr.responseText).data.game.diffs[0].voice_packs[3].path;

	var old2version = JSON.parse(xhr.responseText).data.game.diffs[1].version;
	var game2link = JSON.parse(xhr.responseText).data.game.diffs[1].path;
	var audiocn2link = JSON.parse(xhr.responseText).data.game.diffs[1].voice_packs[0].path;
	var audioen2link = JSON.parse(xhr.responseText).data.game.diffs[1].voice_packs[1].path;
	var audiojp2link = JSON.parse(xhr.responseText).data.game.diffs[1].voice_packs[2].path;
	var audiokr2link = JSON.parse(xhr.responseText).data.game.diffs[1].voice_packs[3].path;

	//链接赋值
	var game1 = document.getElementById("game1");
	var audiocn1 = document.getElementById("audiocn1");
	var audioen1 = document.getElementById("audioen1");
	var audiojp1 = document.getElementById("audiojp1");
	var audiokr1 = document.getElementById("audiokr1");

	var game2 = document.getElementById("game2");
	var audiocn2 = document.getElementById("audiocn2");
	var audioen2 = document.getElementById("audioen2");
	var audiojp2 = document.getElementById("audiojp2");
	var audiokr2 = document.getElementById("audiokr2");

	//链接给值
	game1.href = game1link;
	audiocn1.href = audiocn1link;
	audioen1.href = audioen1link;
	audiojp1.href = audiojp1link;
	audiokr1.href = audiokr1link;

	game2.href = game2link;
	audiocn2.href = audiocn2link;
	audioen2.href = audioen2link;
	audiojp2.href = audiojp2link;
	audiokr2.href = audiokr2link;

	//显示部分
	document.getElementById("hdiff1").innerHTML = old1version + "->" + nowversion + "版本替换包";
	document.getElementById("hdiff2").innerHTML = old2version + "->" + nowversion + "版本替换包";

    }
    xhr.send();
