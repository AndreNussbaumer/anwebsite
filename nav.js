const navSlide = () => {
  const logomobile = document.querySelector('.logomobile');
  const nav = document.querySelector('.ulmobile');

  logomobile.addEventListener('click', () => {
    nav.classList.toggle('.mobilemenu-active');
  });
}

navSlide();
