# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

## 6.20 과제 코드 설명
### 1.
```
document.addEventListener("DOMContentLoaded", function())
```
dom이 완전히 실행된 후 함수를 가져오게 합니다.

### 2.
``` 
let emailValidation = emailReg(email);
let passwordValidation = pwReg(password);
```
이메일과 비밀번호가 입력되면 정규 표현식을 바탕으로 유효성을 검사합니다.

### 3.
```
if (emailValidation && passwordValidation) {
  if (email === user.id && password === user.pw) {
    window.location.href = 'welcome.html';
  } else {
    alert('존재하는 아이디 정보가 없습니다.');
  }
}
```
이메일, 비밀번호가 전부 일치하는 경우 welcome.html로 이동하고 그렇지 않으면 경고메시지를 띄웁니다.

> 과제 후기
- 처음엔 단순히 if, else문만 사용하여 코드를 짰으나, 뭘 해도 welcome.html로 이동하지 않았습니다... ㅜㅜ
폼 이벤트 리스너를 설정하지 않아 나타나는 문제인 걸 파악하고 추가하자 정상적으로 작동되었습니다.

- 아직 변수를 정의하고 관리하는 부분이 많이 미숙한 것 같습니다.



---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.








