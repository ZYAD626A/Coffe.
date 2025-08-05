let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',_=> navbar.classList.toggle('scroll-bottom' , window.scrollY > 0))
let title_header = document.querySelector('.title-header');
window.addEventListener('load',_=> title_header.classList.toggle('open'))




window.addEventListener('load' , () =>{ if(  window.navigator.offLine ) {offLine} })
window.addEventListener("offline", () => offLine());
function offLine(){
 window.location.replace('offline_mod.html')
}







