// 전역 데이터 저장
let subjects = ["수학", "영어", "과학", "역사"];
let scores = [0, 0, 0, 0];

function drawChart() {
  Highcharts.chart("container", {
    chart: {
      type: "column",
    },
    title: {
      text: "과목별 점수",
    },
    xAxis: {
      categories: subjects,
    },
    yAxis: {
      min: 0,
      title: {
        text: "점수",
      },
    },
    series: [
      {
        name: "점수",
        data: scores,
      },
    ],
  });
}

// 점수 제출 함수
function submitScore() {
  const subject = document.getElementById("subject").value;
  const score = parseInt(document.getElementById("score").value);

  if (isNaN(score) || score < 0 || score > 100) {
    alert("0에서 100 사이의 유효한 점수를 입력해주세요.");
    return;
  }

  const index = subjects.indexOf(subject);
  if (index !== -1) {
    scores[index] = score;
    drawChart();
    $("#scoreModal").modal("hide");
  } else {
    alert("선택한 과목이 없습니다.");
  }
}

// 과목 추가 함수
function addSubject() {
  const newSubject = document.getElementById("newSubject").value.trim();
  if (newSubject === "") {
    alert("과목 이름을 입력하세요.");
    return;
  }

  if (subjects.includes(newSubject)) {
    alert("이미 추가된 과목입니다.");
    return;
  }

  subjects.push(newSubject);
  scores.push(0); // 새 과목의 초기 점수를 0으로 설정

  // 과목 선택 셀렉트 박스 업데이트
  updateSubjectSelect();

  $("#subjectModal").modal("hide");
  drawChart();
}

// 과목 선택 셀렉트 박스 업데이트 함수
function updateSubjectSelect() {
  const subjectSelect = document.getElementById("subject");
  subjectSelect.innerHTML = "";
  subjects.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

// 페이지 로드 시 차트 초기화 및 과목 선택 셀렉트 박스 업데이트
document.addEventListener("DOMContentLoaded", function () {
  drawChart();
  updateSubjectSelect();
});
