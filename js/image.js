let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;
const imageWidth = 600; // 固定圖片寬度

// 自動設定 slides 的寬度（圖片數量 × 單張寬度）
slides.style.width = `${totalSlides * imageWidth}px`;

// 右箭頭
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
});

// 左箭頭
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// 切換圖片
function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}
