var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["武汉", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
// 将aqiData数组从大到小排序
aqiData = aqiData.sort(function(a, b){
  if(a[1]>b[1]){ 
    return -1;
  }
  if(a[1]<b[1]){
    return 1;
  }
  return 0; 
})
// 生成列表项
var aqiList = "";
for(let item = 0; item < aqiData.length; item++){
  if(aqiData[item][1] > 60){
    aqiList += "<li>" + "第" + (item+1) + "名：" + aqiData[item][0] + ", " + aqiData[item][1] + "</li>"; 
  }
}
// 将列表项填进去
document.getElementById("aqi-list").innerHTML = aqiList;