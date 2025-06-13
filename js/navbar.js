// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 獲取存放導航欄的元素
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    
    // 使用 fetch API 載入導航欄
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('無法載入導航欄');
            }
            return response.text();
        })
        .then(data => {
            // 插入導航欄
            navbarPlaceholder.innerHTML = data;
            
            // 可選：根據當前頁面高亮對應的導航項
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = navbarPlaceholder.querySelectorAll('a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('載入導航欄時出錯:', error);
        });
});