// 百度搜索框的跳转功能
function redirectToBaidu(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value;
    var baiduSearchUrl = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
    window.open(baiduSearchUrl, '_blank');
}