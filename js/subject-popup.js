const subjects = [];
const scores = [];

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
  scores.push(0);

  // 버튼 래퍼 생성
  let buttonWrapper = document.createElement("div");
  buttonWrapper.className = "button-wrapper";

  // 새로운 버튼 생성
  let newButton = document.createElement("button");
  newButton.textContent = newSubject;

  // "x" 버튼 생성
  let closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.className = "close-button";
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // 이벤트 전파 방지
    buttonWrapper.remove(); // 클릭된 버튼을 삭제
    const buttonContainer = document.getElementById("buttonContainer");
    if (buttonContainer.childElementCount === 0) {
      buttonContainer.classList.remove("visible"); // 버튼이 모두 삭제되면 높이 0으로 설정
    }
  });

  // 버튼 래퍼에 버튼과 "x" 버튼 추가
  buttonWrapper.appendChild(newButton);
  buttonWrapper.appendChild(closeButton);

  // 버튼 컨테이너에 버튼 래퍼 추가
  const buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.insertBefore(buttonWrapper, buttonContainer.firstChild);
  buttonContainer.classList.add("visible"); // 버튼이 추가되면 높이 50px로 설정

  // 입력 필드와 모달 초기화
  document.getElementById("newSubject").value = ""; // 입력 필드 초기화
  $("#subjectModal").modal("hide"); // 모달 닫기
}
