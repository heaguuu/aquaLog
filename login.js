document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  // 테스트용 아이디/비번
  if (id === "aqua" && pw === "1234") {
    document.getElementById("loginStatus").style.color = "green";
    document.getElementById("loginStatus").textContent = "로그인 성공!";
    window.location.href = "home.html";
  } else {
    document.getElementById("loginStatus").style.color = "#EF7272";
    document.getElementById("loginStatus").textContent = "아이디 또는 비밀번호가 틀렸습니다.";
  }
});
