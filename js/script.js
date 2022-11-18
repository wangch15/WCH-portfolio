// ============= typing ===============//
var typed = new Typed(".typing",{
    strings:["","WEB DESIGN","WEB DEVELOP","GRAPHIC DESIGN","FIGURE PAINT"],
    typeSpeed:120,
    backSpeed:90,
    backDelay:1500,
    loop:true
})

// ============= dark mode ===============//
const modeBtn = document.querySelector('.modeBtn')
function changeMode(){
    console.log(modeBtn);
    document.body.classList.toggle('darkmode')
    if(document.body.classList.contains('darkmode')){
        modeBtn.innerHTML = 'LIGHT MODE'
    }else{
        modeBtn.innerHTML = 'DARK MODE'
    }
}

// ============= swiper ===============//

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop:true,
  });