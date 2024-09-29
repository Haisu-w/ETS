function colorCycle(duration, interval) {
  var startTime = Date.now();
  var colors = [];
  var intervalId = null;
  var div = document.getElementById('color-cycle-div'); // 获取div元素
  // 生成颜色数组
  for (var i = 0; i < 360; i += 360 / interval) {
    colors.push(`hsla(${i}, 100%, 50%, 0.3)`);
  }
  function changeColor() {
    var elapsedTime = Date.now() - startTime;
    var colorIndex = Math.floor((elapsedTime / duration) * colors.length) % colors.length;
    div.style.backgroundColor = colors[colorIndex];
  }
  intervalId = setInterval(function () {
    changeColor();
  }, 1000 / interval);
  // 可以根据需要停止颜色变化
  // setTimeout(function() {
  //   clearInterval(intervalId);
  // }, duration * 1000);
}
// 在页面加载完成后开始颜色轮换
document.addEventListener('DOMContentLoaded', function () {
  colorCycle(50000, 20); // 20秒内完成20次颜色切换
});