//Menu open&close button

const menuBtn = document.querySelector('#menuBtn')
const menu = document.querySelector('#menu')
const cookieBtn = document.querySelector("#cookie")

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');


})
