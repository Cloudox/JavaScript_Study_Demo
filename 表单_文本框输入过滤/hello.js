var text = document.getElementById("myText");
text.addEventListener("focus", function(event) {// 焦点集中时
	if (text.style.backgroundColor != "red") {
		text.style.backgroundColor = "yellow";
	}
});

text.addEventListener("keypress", function(event) {// 键盘输入时
	var charCode = event.keyCode;
	if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey) {// 只允许输入数字、常用按键和ctrl复制等操作
		event.preventDefault();
	}
});

text.addEventListener("blur", function(event) {// 失去焦点时
	if (/[^\d]/.test(text.value)) {
		text.style.backgroundColor = "red";
	} else {
		text.style.backgroundColor = "";
	}
});

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
	if (/[^\d]/.test(text.value)) {
		alert("输入不合法");
	} else {
		alert("提交成功："+text.value);
	}
});

