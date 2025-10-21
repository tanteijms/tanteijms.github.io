// 统一导航栏组件
function createNavigation(currentPage = '') {
    const navHTML = `
        <nav>
            <a href="${currentPage === 'index' ? '' : '../'}index.html" class="nav-link ${currentPage === 'index' ? 'active' : ''}">主页</a>
            <a href="${currentPage === 'index' ? 'trribb/' : ''}about.html" class="nav-link ${currentPage === 'about' ? 'active' : ''}">关于</a>
            <a href="${currentPage === 'index' ? 'trribb/' : ''}projects.html" class="nav-link ${currentPage === 'projects' ? 'active' : ''}">项目</a>
            <a href="${currentPage === 'index' ? 'trribb/' : ''}study.html" class="nav-link ${currentPage === 'study' ? 'active' : ''}">学习</a>
            <a href="${currentPage === 'index' ? 'trribb/' : ''}contact.html" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">联系</a>
        </nav>
    `;
    
    return navHTML;
}

// 在页面加载时插入导航栏
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const currentPage = document.body.getAttribute('data-page') || '';
    if (header) {
        header.innerHTML = createNavigation(currentPage);
    }
});

