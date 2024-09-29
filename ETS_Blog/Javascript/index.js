setInterval(createSnowFlake, 50);
// 下雪效果
function createSnowFlake() {
    const snow_flakes = document.createElement('i');
    snow_flakes.classList.add('fas');
    snow_flakes.classList.add('fa-snowflake');
    snow_flakes.style.left = Math.random() * window.innerWidth + 'px';
    snow_flakes.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow_flakes.style.opacity = Math.random();
    snow_flakes.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snow_flakes);
    setTimeout(function () {
        snow_flakes.remove();
    }, 1000);
}
// 文字显示
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.mcl_contact_link');
    const textDisplay = document.getElementById('textDisplay');
    const defaultText = textDisplay.textContent;
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            textDisplay.textContent = this.getAttribute('data-text');
        });
        link.addEventListener('mouseout', function () {
            textDisplay.textContent = defaultText;
        });
    });
});
// 文案切换
//此网页为纯静态网页，所以没有数据库连接，无法实现动态的文案切换。
// 存储文案和作者的数组
// script.js
function setupTextSwitcher() {
    var textPairs = [
        { text: "请你努力，为了自己", author: "人民日报" },
        { text: "温暖的灵魂终将相遇", author: "Forever!" },
        { text: "人潮拥挤，我们山顶相爱", author: "Haisu" },
        { text: "两个灵魂，不会偶然相遇", author: "《朋友之树》" },
        { text: "春天适合努力和拥抱", author: "网络" },
        { text: "我的梦朝向世界，明亮而永恒", author: "保尔·艾吕雅" },
        { text: "烟火人间，各有遗憾", author: "人生万岁" },
        { text: "不管心情有多糟糕，都要和爱的人好好说话", author: "爱你" },
        { text: "我在篝火旁许愿", author: "人生万岁" },
        { text: "愿许秋风知我意，散我心中意难平", author: "海宿" },
        { text: "躺平是我今天的 full time", author: "网络" },
        { text: "不是必婚主义者，也不是不婚主义者，永远追求幸福主义者！", author: "幸福Love" }
        
    ];

    var currentIndex = 0;
    var lastSwitchTime = 0;
    var textSpan = document.getElementById('textContent');
    var authorSpan = document.getElementById('textAuthor');
    var textBox = document.getElementById('textContainer');
    function updateTextContent() {
        var currentTime = Date.now();
        if (currentTime - lastSwitchTime >= 1000) {
            currentIndex = (currentIndex + 1) % textPairs.length;
            textSpan.textContent = textPairs[currentIndex].text;
            authorSpan.textContent = " - " + textPairs[currentIndex].author;
            lastSwitchTime = currentTime;
        }
    }
    textBox.addEventListener('click', updateTextContent);
}
document.addEventListener('DOMContentLoaded', setupTextSwitcher);
// 审核页面
// function setupNavbar() {
//     var toggleNavbar = document.getElementById('toggleNavbar');
//     toggleNavbar.addEventListener('click', function (event) {
//         event.preventDefault();
//         var navbar = document.getElementById('page1');
//         navbar.style.display = 'block';
//     });
//     var closeNavbar = document.getElementById('closeNavbar');
//     closeNavbar.addEventListener('click', function () {
//         var navbar = document.getElementById('page1');
//         navbar.style.display = 'none';
//     });
// }
//审核页面
function setupNavbar() {
    var navbar = document.getElementById('page1');
    var closeNavbar = document.getElementById('closeNavbar');

    // 处理github链接的点击事件
    // document.querySelector('.mcl_contact_link.mcl_b001').addEventListener('click', function (event) {
    //     event.preventDefault();
    //     navbar.style.display = 'block';
    //     document.getElementById('page1Content').style.display = 'block';
    //     document.getElementById('page1Content1').style.display = 'none';
    //     document.getElementById('page1Content2').style.display = 'none';
    // });

    // 处理 toggleNavbar1 点击事件
    document.getElementById('toggleNavbar1').addEventListener('click', function (event) {
        event.preventDefault();
        navbar.style.display = 'block';
        document.getElementById('page1Content').style.display = 'none';
        document.getElementById('page1Content1').style.display = 'block'; 
        document.getElementById('page1Content2').style.display = 'none'; 
        document.getElementById('page1Content3').style.display = 'none';
    });

    // 处理 toggleNavbar 点击事件
    document.getElementById('toggleNavbar').addEventListener('click', function (event) {
        event.preventDefault();
        navbar.style.display = 'block';
        document.getElementById('page1Content').style.display = 'block';
        document.getElementById('page1Content1').style.display = 'none';
        document.getElementById('page1Content2').style.display = 'none';
        document.getElementById('page1Content3').style.display = 'none';
    });
    // 处理 toggleNavbar2 点击事件
    document.getElementById('toggleNavbar2').addEventListener('click', function (event) {
        event.preventDefault();
        navbar.style.display = 'block';
        document.getElementById('page1Content').style.display = 'none'; 
        document.getElementById('page1Content1').style.display = 'none';
        document.getElementById('page1Content2').style.display = 'block';
        document.getElementById('page1Content3').style.display = 'none';
    });
    // 处理ETS简介页面的 toggleNavbar3 点击事件(插入代码)
    document.getElementById('toggleNavbar3').addEventListener('click', function (event) {
        event.preventDefault();
        navbar.style.display = 'block';
        document.getElementById('page1Content').style.display = 'none'; 
        document.getElementById('page1Content1').style.display = 'none';
        document.getElementById('page1Content2').style.display = 'none';
        document.getElementById('page1Content3').style.display = 'block';
    });
    // 处理关闭按钮点击事件
    closeNavbar.addEventListener('click', function () {
        navbar.style.display = 'none'; 
    });
}
// 初始化
// setupNavbar();
//实时时间(旧版本)
// document.addEventListener('DOMContentLoaded', setupNavbar);
// function updateTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     const formattedTime = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('currentTime').innerText = formattedTime;
// }
// setInterval(updateTime, 1000);
// updateTime();

// 实时时间(新版本)
document.addEventListener('DOMContentLoaded', setupNavbar);

function updateDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');
    const options = { weekday: 'long' };
    const weekday = now.toLocaleDateString('zh-CN', options);

    document.getElementById('year').innerHTML = `${year}&nbsp;年&nbsp;`;
    document.getElementById('month').innerHTML = `${month}&nbsp;月&nbsp;`;
    document.getElementById('day').innerHTML = `${day}&nbsp;日&nbsp;`;
    document.getElementById('weekday').innerHTML = `&nbsp;${weekday}&nbsp;`;
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('currentTime').innerText = formattedTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();


//文案切换(失败版本)
// let quotes = []; // 存储文案
// let currentIndex = 0; // 当前索引

// // 从 JSON 文件加载文案
// function loadQuotes() {
//     fetch('quotes.json')
//         .then(response => response.json())
//         .then(data => {
//             quotes = data;
//             updateText(); // 初始化文本
//         })
//         .catch(error => console.error('加载文案时出错：', error));
// }

// // 更新文本内容
// function updateText() {
//     const quote = quotes[currentIndex];
//     document.getElementById('textContent').innerText = quote.text;
//     document.getElementById('textAuthor').innerText = " - " + quote.author;
// }

// // 切换文案
// document.getElementById('textContainer').addEventListener('click', () => {
//     if (quotes.length > 0) {
//         currentIndex = (currentIndex + 1) % quotes.length; // 循环切换
//         updateText();
//     }
// });

// // 页面加载时读取文案
// loadQuotes();