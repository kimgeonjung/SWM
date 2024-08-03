function openPopup() {
  document.getElementById("scorePopup").style.display = "block";
}

function closePopup() {
  document.getElementById("scorePopup").style.display = "none";
}

function submitScore() {
  const subject = document.getElementById("subject").value;
  const score = document.getElementById("score").value;

  if (score === "") {
    alert("점수를 입력해주세요.");
    return;
  }

  alert(`과목: ${subject}, 점수: ${score}`);

  // 이후 점수를 서버로 전송하거나 다른 작업을 수행할 수 있습니다.asd

  closePopup();
}
