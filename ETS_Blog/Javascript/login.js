// 登录页面的js代码
function handleLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isValid = username === "admin" && password === "123456"; // 示例验证
    var loginForm = document.getElementById('loginForm');
    if (isValid) {
        loginForm.classList.remove('box'); // 确保移除错误类
        loginForm.classList.add('box_success');
        setTimeout(function() {
            window.location.href = '../pages/index.html'; 
        }, 1000);
    } else {
        // 登录失败，添加错误类
        loginForm.classList.remove('box'); // 确保移除成功类
        loginForm.classList.add('box_error');
        setTimeout(function() {
            loginForm.classList.remove('box_error');
            loginForm.classList.remove('box_success');
            loginForm.classList.add('box');
        }, 1000);
    }
    return false; // 阻止表单默认提交行为
}