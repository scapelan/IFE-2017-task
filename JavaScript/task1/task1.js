// 获取button元素
var btn = document.getElementById("btn");
//给button绑定click事件
btn.onclick = addInfo;

function addInfo() {
    // 获取input元素
    var input = document.getElementById("aqi-input");
    //获取span元素
    var display = document.getElementById("aqi-display");
    // 将input里的值赋给span
    display.innerHTML = input.value;
}