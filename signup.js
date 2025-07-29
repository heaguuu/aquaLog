document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  let isValid = true;

  // 초기화
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmError").textContent = "";

  // 아이디 유효성
  if (username.length < 4 || username.length > 12) {
    document.getElementById("usernameError").textContent = "아이디는 4~12자 사이여야 합니다.";
    isValid = false;
  }

  // 비밀번호 유효성
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "비밀번호는 최소 6자 이상이어야 합니다.";
    isValid = false;
  }

  if (password !== confirm) {
    document.getElementById("confirmError").textContent = "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  // 성공 시
  if (isValid) {
    alert("회원가입이 완료되었습니다!");
    window.location.href = "login.html";
  }
});
