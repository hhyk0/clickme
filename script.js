let count = 0;

const counter = document.getElementById("counter");
const clickBox = document.getElementById("clickBox");
const resetBtn = document.getElementById("resetBtn");
const clickSound = document.getElementById("clickSound");

// 초기 숫자 표시
counter.innerText = String(count).padStart(6, '0');

// 클릭 이벤트
clickBox.addEventListener("click", () => {
    count++;
    counter.innerText = String(count).padStart(6, '0');

    // 효과음 재생
    clickSound.currentTime = 0; // 효과음이 빠르게 연속 재생 가능
    clickSound.play();
});

// 초기화 버튼
resetBtn.addEventListener("click", () => {
    if (confirm("정말 초기화할까요?")) {
        count = 0;
        counter.innerText = String(count).padStart(6, '0');
    }
});
