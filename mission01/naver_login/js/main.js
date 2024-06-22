
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.login-form');
  const emailInput = document.getElementById('userEmail');
  const passwordInput = document.getElementById('userPassword');
  const emailError = document.getElementById('userEmailError');
  const passwordError = document.getElementById('userPasswordError');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    let emailValidation = emailReg(email);
    let passwordValidation = pwReg(password);

    // 이메일 유효성 검사
    if (!emailValidation) {
      emailInput.classList.add('is--invalid');
      emailError.style.display = 'block';
    } else {
      emailInput.classList.remove('is--invalid');
      emailError.style.display = 'none';
    }

    // 비밀번호 유효성 검사
    if (!passwordValidation) {
      passwordInput.classList.add('is--invalid');
      passwordError.style.display = 'block';
    } else {
      passwordInput.classList.remove('is--invalid');
      passwordError.style.display = 'none';
    }

    // 상태 변수 관리
    if (emailValidation && passwordValidation) {
      if (email === user.id && password === user.pw) {
        window.location.href = 'welcome.html';
      } else {
        alert('존재하는 아이디 정보가 없습니다.');
      }
    }
  });
});