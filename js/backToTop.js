const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // 判斷螢幕寬度
    const isMobile = window.innerWidth <= 768;

    // 閾值：手機 100px，桌機 300px
    const threshold = isMobile ? 100 : 300;

    if (window.scrollY > threshold) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
