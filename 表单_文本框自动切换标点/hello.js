function tabForward(event) {
	var target = event.target;

	if (target.value.length == target.maxLength) {
		var form = target.form;

		for (var i = 0, len = form.elements.length; i < len; i++) {
			if (form.elements[i] == target) {
				if (form.elements[i+1]) {
					form.elements[i+1].focus();
				}
				return;
			}
		}
	}
};

var textbox1 = document.getElementById("txtTel1");
var textbox2 = document.getElementById("txtTel2");
var textbox3 = document.getElementById("txtTel3");

textbox1.addEventListener("keyup", tabForward);
textbox2.addEventListener("keyup", tabForward);
textbox3.addEventListener("keyup", tabForward);
