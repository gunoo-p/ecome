const quizData = [
  {
    id: "refrigerator_1",
    subtitle: "1.냉장실의 적정 내용물은?",
    imgLeft: "/img/refrigerator_quiz1-1.png",
    imgRight: "/img/refrigerator_quiz1-2.png",
    correctAnswer: "O",
    correctMessage: "<span style='color: #2E7D32;'>정답</span>입니다! <br/> <span style='color: #FF7043;'>냉장실</span>는 <span style='color: #FF7043;'>60~70%</span>만 채우는 게 좋습니다!<br/> Tip. 반면에 <span style='color: #3941AF;'>냉동실</span>은 <span style='color: #3941AF;'>80~90%</span> 채우는 편이 에너지 절약에 도움이 된다고 합니다!",
    incorrectMessage: "오답입니다! 냉장실은 너무 많이 채우면 냉각 효율이 떨어져요.",
  },
  {
    id: "refrigerator_2",
    subtitle: "2.냉장고의 문을 자주 여닫는게 좋다?",
    imgLeft: "/img/refrigerator_quiz2-1.png",
    imgRight: "/img/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage: "정답입니다! 60~70%만 채우는 게 좋습니다!",
    incorrectMessage: "오답입니다! 냉장실은 너무 많이 채우면 냉각 효율이 떨어져요.",
  },
  // ... 계속해서 추가
];

let currentQuizIndex = 0;

function loadQuiz() {
  const quiz = quizData[currentQuizIndex];

  // 제목 변경
  document.querySelector(".subtitle").textContent = quiz.subtitle;

  // 이미지 변경
  const images = document.querySelectorAll(".fridge-image");
  images[0].src = quiz.imgLeft;
  images[0].setAttribute("onclick", `recordAnswer('${quiz.id}', 'X')`);
  images[1].src = quiz.imgRight;
  images[1].setAttribute("onclick", `recordAnswer('${quiz.id}', 'O')`);
}

function recordAnswer(questionId, answer) {
  const quiz = quizData.find((q) => q.id === questionId);
  const isCorrect = quiz.correctAnswer === answer;

  // Google Analytics 기록
  gtag("event", questionId, {
    event_category: "OX_Quiz",
    event_label: questionId,
    value: answer,
  });

  console.log(`Question: ${questionId}, Answer: ${answer}, Correct: ${isCorrect}`);

  // 팝업 메시지 설정
  const popupMessage = document.getElementById("popupMessage");
  const popupOverlay = document.getElementById("popupOverlay");

  if (isCorrect) {
    popupMessage.innerHTML = quiz.correctMessage;
  } else {
    popupMessage.innerHTML = quiz.incorrectMessage;
  }
  // 팝업 표시
  popupOverlay.classList.remove("hidden");

  // 팝업 닫기 및 다음 문제로 이동
  document.getElementById("closePopup").addEventListener("click", () => {
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.classList.add("hidden");

    // 다음 문제로 이동
    nextQuiz();
  });
}

function nextQuiz() {
  currentQuizIndex++;

  if (currentQuizIndex < quizData.length) {
    loadQuiz(); // 다음 문제 로드
  } else {
    alert("모든 퀴즈를 완료했습니다!");
    // 최종 화면 표시 또는 다른 동작 수행
  }
}

document.addEventListener("DOMContentLoaded", loadQuiz);
