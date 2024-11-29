// GA4 초기화 코드
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-FH2ZMMFC4X");

const quizData = [
  {
    id: "refrigerator_1",
    subtitle: "1.냉장실의 적정 내용물은?",
    imgLeft: "img/quiz/refrigerator_quiz1-1.png",
    imgRight: "img/quiz/refrigerator_quiz1-2.png",
    correctAnswer: "O",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다! <br/> <span style='color: #FF7043;'>냉장실</span>는 <span style='color: #FF7043;'>60~70%</span>만 채우는 게 좋습니다!<br/> Tip. 반면에 <span style='color: #3941AF;'>냉동실</span>은 <span style='color: #3941AF;'>80~90%</span> 채우는 편이 에너지 절약에 도움이 된다고 합니다!",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/> <span style='color: #FF7043;'>냉장실</span>는 <span style='color: #FF7043;'>60~70%</span>만 채우는 게 좋습니다!<br/> Tip. 반면에 <span style='color: #3941AF;'>냉동실</span>은 <span style='color: #3941AF;'>80~90%</span> 채우는 편이 에너지 절약에 도움이 된다고 합니다!",
  },
  {
    id: "refrigerator_2",
    subtitle: "2.냉장고의 온도를 낮게 설정할수록 전기를 절약할 수 있다.",
    imgLeft: "img/quiz/refrigerator_quiz2-1.png",
    imgRight: "img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/> 너무 낮은 온도로 설정하면 냉장고가 과도하게 작동해 전력을 더 많이 소비합니다. 적정 온도는 냉장실 3-5°C, 냉동실 -18°C입니다. ",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/> 너무 낮은 온도로 설정하면 냉장고가 과도하게 작동해 전력을 더 많이 소비합니다. 적정 온도는 냉장실 3-5°C, 냉동실 -18°C입니다. ",
  },
  {
    id: "refrigerator_3",
    subtitle: "3.냉장고 외부를 청소하는 것은 에너지 효율에 큰 영향을 준다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "O",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>응축기 코일(냉장고 뒷면)에 먼지가 쌓이면 열 교환이 어려워져 냉장고가 더 많은 에너지를 사용합니다. 정기적인 청소가 필수적입니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>응축기 코일(냉장고 뒷면)에 먼지가 쌓이면 열 교환이 어려워져 냉장고가 더 많은 에너지를 사용합니다. 정기적인 청소가 필수적입니다.",
  },
  {
    id: "refrigerator_4",
    subtitle: "4.출근할 때 외출 시 전력 차단 버튼을 누르면 에너지 효율에 도움이 된다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>일부 전기 제품, 특히 난방 기기는 완전히 차단하면 재가동 시 더 많은 에너지가 필요할 수 있습니다. 필요한 장치만 선택적으로 차단해야 합니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>일부 전기 제품, 특히 난방 기기는 완전히 차단하면 재가동 시 더 많은 에너지가 필요할 수 있습니다. 필요한 장치만 선택적으로 차단해야 합니다.",
  },
  {
    id: "refrigerator_5",
    subtitle: "5.LED 조명은 일반 백열등보다 매우 효율적이다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "O",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>LED 조명은 백열등보다 최대 80% 적은 에너지를 사용하며 수명이 더 길어 유지비용도 절감됩니다. ",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>LED 조명은 백열등보다 최대 80% 적은 에너지를 사용하며 수명이 더 길어 유지비용도 절감됩니다.",
  },
  {
    id: "refrigerator_6",
    subtitle: "6.온수세탁은 에너지 효율이 찬물세탁보다 좋다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/> 세탁기 에너지의 약 90%는 물을 데우는 데 사용됩니다. 찬물 모드를 사용하면 에너지 소비를 크게 줄일 수 있습니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/> 세탁기 에너지의 약 90%는 물을 데우는 데 사용됩니다. 찬물 모드를 사용하면 에너지 소비를 크게 줄일 수 있습니다.",
  },
  {
    id: "refrigerator_7",
    subtitle: "7.전기 난로는 가스 난로보다 에너지 효율이 높다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/> 전기 난로는 열을 전환하는 데 더 많은 에너지를 소비합니다. 반면, 가스 난로는 연료를 직접 연소시켜 더 효율적일 수 있습니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/> 전기 난로는 열을 전환하는 데 더 많은 에너지를 소비합니다. 반면, 가스 난로는 연료를 직접 연소시켜 더 효율적일 수 있습니다.",
  },
  {
    id: "refrigerator_8",
    subtitle: "8.전기 난로보다 전기 담요가 전력 소비량이 훨씬 적다. ",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "O",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/> 전기 담요는 필요한 부위만 데우기 때문에 전력 소비량이 훨씬 적습니다. 겨울철 난방비 절감에 효과적입니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/> 전기 담요는 필요한 부위만 데우기 때문에 전력 소비량이 훨씬 적습니다. 겨울철 난방비 절감에 효과적입니다.",
  },
  {
    id: "refrigerator_9",
    subtitle: "9.스마트 플러그는 대기 전력을 완전히 없애준다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "O",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>스마트 플러그는 연결된 기기의 전력을 차단하여 대기 전력을 제거하는 데 효과적입니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>스마트 플러그는 연결된 기기의 전력을 차단하여 대기 전력을 제거하는 데 효과적입니다.",
  },
  {
    id: "refrigerator_10",
    subtitle: "10.세탁물이 완전 마른 상태에서 다림질 하면 전기가 덜 소비된다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>다림질 전에 세탁물이 완전히 마르면 더 많은 열과 전력을 소비합니다. 약간 습한 상태에서 다림질을 시작하면 에너지를 절약할 수 있습니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>다림질 전에 세탁물이 완전히 마르면 더 많은 열과 전력을 소비합니다. 약간 습한 상태에서 다림질을 시작하면 에너지를 절약할 수 있습니다.",
  },
  {
    id: "refrigerator_11",
    subtitle: "11.식기세척기를 가득 채우면 에너지가 매우 비효율적으로 사용된다.",
    imgLeft: "/img/quiz/refrigerator_quiz2-1.png",
    imgRight: "/img/quiz/refrigerator_quiz2-2.png",
    correctAnswer: "X",
    correctMessage:
      "<span style='color: #2E7D32;'>정답</span>입니다!<br/>식기세척기는 가득 채운 상태로 작동할 때 가장 에너지 효율적입니다.",
    incorrectMessage:
      "<span style='color: red;'>오답</span>입니다!<br/>식기세척기는 가득 채운 상태로 작동할 때 가장 에너지 효율적입니다.",
  },
];

// 버튼 클릭 이벤트로 문제 섹션 표시
document.getElementById("startButton").addEventListener("click", function () {
  // 문제풀기 버튼 숨기기
  document.getElementById("startButtonContainer").classList.add("hidden");

  // 문제 섹션 보이기
  document.getElementById("comparisonSection").classList.remove("hidden");
});

let currentQuizIndex = 0;
let correctCount = 0; // 맞춘 문제 수를 추적

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

  // 맞춘 경우 정답 카운트 증가
  if (isCorrect) {
    correctCount++;
  }

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
    // 결과 표시
    showResult();
  }
}

function showResult() {
  // 문제 섹션 숨기기
  document.getElementById("comparisonSection").classList.add("hidden");

  // 결과 섹션 표시
  const resultSection = document.createElement("div");
  resultSection.id = "resultSection";
  resultSection.style.textAlign = "center";
  resultSection.style.marginTop = "50px";
  resultSection.innerHTML = `
    <h2>퀴즈 결과</h2>
    <p>총 ${quizData.length}문제 중 ${correctCount}문제를 맞췄습니다!</p>
    <button id="retryButton">다시 도전하기</button>
  `;
  document.body.appendChild(resultSection);

  // 다시 도전 버튼 이벤트 추가
  document.getElementById("retryButton").addEventListener("click", () => {
    location.reload(); // 페이지 새로고침으로 초기화
  });
}