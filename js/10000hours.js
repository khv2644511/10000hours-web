const modal = document.querySelector('.cont-modal');
const btnOpenPopup = document.querySelector('.btn-go');
const btnClosePopup = document.querySelector('.close-area');

btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'flex';
  // modal.classList.toggle('active');
});

btnClosePopup.addEventListener('click', () => {
  modal.style.display = 'none';
})