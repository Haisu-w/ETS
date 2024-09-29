const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let mousePosition = { x: -100, y: -100 };
let cursorOffset = { x: 0, y: 0 };

function updateCursorPos(event) {
  // 设置延迟
  cursorOffset.x += (event.clientX - cursorOffset.x) / 5;
  cursorOffset.y += (event.clientY - cursorOffset.y) / 5;

  // 更新鼠标位置
  cursor.style.left = `${cursorOffset.x}px`;
  cursor.style.top = `${cursorOffset.y}px`;
}

// 监听鼠标移动事件
document.addEventListener('mousemove', (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
  updateCursorPos(event);
});

// 定时更新鼠标位置以实现延迟效果
setInterval(() => {
  updateCursorPos({ clientX: mousePosition.x, clientY: mousePosition.y });
}, 20);
