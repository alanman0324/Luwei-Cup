const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('#nav-list');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // 阻止事件冒泡，點漢堡本身不會觸發收起
  hamburger.classList.toggle('active'); // 漢堡切換 X / 漢堡
  navList.classList.toggle('show');     // 展開 / 收起選單
});

// 點到其他地方就收起選單
document.addEventListener('click', (e) => {
  if (navList.classList.contains('show')) {
    navList.classList.remove('show');     // 收起選單
    hamburger.classList.remove('active'); // 漢堡變回原本
  }
});
