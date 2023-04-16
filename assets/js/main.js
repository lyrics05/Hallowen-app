const navMenu= document.querySelector(".nav__menu")
const navToggle = document.querySelector("#nav-toggle")
const navClose = document.querySelector("#nav-close")

if(navToggle){
     navToggle.addEventListener("click", function(){
       navMenu.classList.add("show-menu")
     })
}

if(navClose){
  navClose.addEventListener("click",function(){
     navMenu.classList.remove("show-menu")
  })
}

const navlinks = document.querySelectorAll(".nav__link")

function removeMenu(){
   navMenu.classList.remove("show-menu")
}
navlinks.forEach((n)=>{
  n.addEventListener("click", removeMenu)
})

let swiper = new Swiper(".home-swiper",{
  centeredSlides:true,
  slidersPerView:"auto",
   spaceBetween: 30,
   loop:"true",
   pagination:{
    el:".swiper-pagination",
    clickable:true
   }
})
let swiper2 = new Swiper(".new-swiper",{
  centeredSlides:true,
  slidesPerView:"auto",
   loop:"true",
   spaceBetween:16,
})

function scrollUp(){
  const scroll = document.getElementById("scroll-up")
  if(this.scrollY >= 460){
    scroll.classList.add("show-scroll")
  }else{
    scroll.classList.remove("show-scroll")
  }
}
window.addEventListener("scroll",scrollUp)

const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)

const sr = ScrollReveal({
  origin:"top",
  distance:"60px",
  duration:"2500",
  delay:"400",
  reset:"true"
})

sr.reveal(".home-swiper,.new-swiper,.newsletter__container")
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });