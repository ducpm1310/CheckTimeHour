var eStart;
var eEnd;
var eCheck;
var eResult;
var form;

window.onload = function(){
	eStart= document.getElementById("iStart");
	eEnd = document.getElementById("iEnd");
	eCheck = document.getElementById("iCheck");
	eResult = document.getElementById("result");
	form = document.getElementById("main");
}
//機能  Submitボタン押下処理
function Check() {
	if (form.checkValidity())
		if (eStart.value == "" || eEnd.value == "" || eCheck.value == "") {
			eResult.innerHTML = "Input time, please";
		} else {
			CompareTime();
		};
};
//時間を比べる関数
function CompareTime() {
	var start = parseInt(eStart.value);
	var end = parseInt(eEnd.value);
	var check = parseInt(eCheck.value);
	//starttimeよりendtimeの値が多い場絵は、
	if (start <= end) {
		if (check >= start && check < end) {
			eResult.innerHTML = ('<b>' + check + '</b> be long to <b>' + start + '</b> &#8594; <b>' + end + '</b>');
		} else {
			eResult.innerHTML = ('<b>' + check + '</b> not be long to <b>' + start + '</b> &#8594; <b>' + end + '</b>');
		}
	}
	//endtimeよりstartimeの値が多い場絵は、
	else {
		if (check >= start || check < end) {
			eResult.innerHTML = ('<b>' + check + '</b> be long to <b>' + start + '</b> &#8594; <b>' + end + '</b>');
		} else
			eResult.innerHTML = ('<b>' + check + '</b> not be long to <b>' + start + '</b> &#8594; <b>' + end + '</b>');
	}
}
//
function Submit() {
	return false;
}
