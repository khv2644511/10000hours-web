// modal 노출
const modal = document.querySelector('.cont-modal');
const btnOpenPopup = document.querySelector('.btn-go');
const btnClosePopup = document.querySelector('.close-area');

btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'flex';
  modal.classList.toggle('active');
});

btnClosePopup.addEventListener('click', () => {
  modal.style.display = 'none';
})




// input 값 가져오기
// var wannabe_field = $('#field').val();
// var try_time = $('time').val();
// $(document).ready(function(){
//   $('#btn-exc').click() {
//     if (key.keyCode == 13) {
//       alert('엔터키');
//     }
//   };





// 나는 며칠 동안 훈련해야 1만 시간이 될까 버튼 클릭 후
// 3초간 로딩 이미지 나타났다 사라지고,
// 결과 화면 노출됨
const btn_exc = document.querySelector('.btn-exc');
const loading_img = document.querySelector('.loading_img');
const result = document.querySelector('.cont-result');

btn_exc.addEventListener('click', () => {
  loading_img.style.display = 'flex';
  setTimeout(() => {
  loading_img.style.display = 'none';
  result.style.display = 'flex';
  }, 3000);
})

// const input_time = document.querySelector('.input_time')


// const result2 = document.getElementById("form").onsubmit = function(){
//   const input_field = document.querySelector('.input_field')
//   console.log(result2.value)
//   return false;

// }


// function calc() {

// }