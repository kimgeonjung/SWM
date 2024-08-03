function openPopup() {
  document.getElementById("scorePopup").style.display = "block";
}

function closePopup() {
  document.getElementById("scorePopup").style.display = "none";
}

function submitSub() {
  const sub = document.getElementById("sub").value;

  if (sub === "") {
    alert("과목을 입력해주세요.");
    return;
  }

  alert(`과목: ${sub}추가`);

  // 이후 점수를 서버로 전송하거나 다른 작업을 수행할 수 있습니다.asd

  closePopup();
}
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
  const subjectSelect = document.getElementById("subject");
  const option = document.createElement("option");
  option.value = newSubject;
  option.textContent = newSubject;
  subjectSelect.appendChild(option);

  $("#subjectModal").modal("hide");
}
