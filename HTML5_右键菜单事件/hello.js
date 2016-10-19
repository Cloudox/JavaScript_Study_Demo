var div = document.getElementById("myDiv");
div.addEventListener("contextmenu", function(event) {// 右键显示菜单
	event.preventDefault();// 阻止默认事件
	var menu = document.getElementById("myMenu");
	menu.style.left = event.clientX + "px";
	menu.style.top = event.clientY + "px";
	menu.style.visibility = "visible";
});

document.addEventListener("click", function(event) {// 点击屏幕隐藏菜单
	document.getElementById("myMenu").style.visibility = "hidden";
});

