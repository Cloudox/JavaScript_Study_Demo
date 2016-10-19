var text = document.getElementById("myText");
text.addEventListener("focus", function(event) {// 焦点集中时
	if (text.style.backgroundColor != "red") {
		text.style.backgroundColor = "yellow";
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

