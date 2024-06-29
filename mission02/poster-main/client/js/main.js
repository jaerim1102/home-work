
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

document.addEventListener("DOMContentLoaded", () => {
   const navItems = document.querySelectorAll(".nav li");
   const nickName = document.querySelector(".nickName");
   const visualImage = document.querySelector(".visual img");
   const body = document.querySelector("body");

   navItems.forEach(item => {
      item.addEventListener("click", () => {
         const index = parseInt(item.getAttribute("data-index")) - 1;
         const selectedData = data[index];

         if (selectedData) {
            navItems.forEach(navItem => navItem.classList.remove("is-active"));
            item.classList.add("is-active");

            nickName.textContent = selectedData.name;
            visualImage.src = `./assets/${selectedData.name.toLowerCase()}.jpeg`;
            visualImage.alt = selectedData.alt;

            // 배경색 변경
            body.style.background = `linear-gradient(to bottom, ${selectedData.color[0]}, ${selectedData.color[1]})`;
         }
      });
   });
});
