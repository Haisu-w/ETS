function scrollDown() {
    const box = document.querySelector('.box');
    box.scrollBy({ top: 100, behavior: 'smooth' }); // 平滑向下滚动 100 像素
}

function scrollUp() {
    const box = document.querySelector('.box');
    box.scrollBy({ top: -100, behavior: 'smooth' }); // 平滑向上滚动 100 像素
}