// 로컬 저장된 값 불러오기 (없으면 0으로 시작)
let count = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

const counter = document.getElementById("counter");
const clickBox = document.getElementById("clickBox");

// 화면에 현재 숫자 표시
counter.innerText = String(count).padStart(6, '0');

clickBox.addEventListener("click", () => {
    count++;
    // 숫자 화면 업데이트
    counter.innerText = String(count).padStart(6, '0');
    // localStorage에 저장
    localStorage.setItem('clickCount', count);
});
