/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const modal = document.getElementById("imageModal");
const img = document.getElementById("mapImage");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".img-close");

function openModalWith(src){
  if(!modal || !modalImg) return;
  modal.style.display = "block";
  modalImg.src = src;
  document.body.style.overflow = "hidden";
}

function closeModal(){
  if(!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
}

if (img){
  img.addEventListener("click", () => openModalWith(img.src));
}

if (closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

if (modal){
  modal.addEventListener("click", (e) => {
    if(e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

/* ===== SCROLL ANIMATIONS ===== */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 900,
  delay: 100,
  reset: false
});

/* sections */
sr.reveal('.section-title', {});
/* ABOUT */
sr.reveal('.about__container', { interval: 150 });
sr.reveal('.skills__container > div', { interval: 150 });
sr.reveal('.work__item', { interval: 150 });
sr.reveal('.contact-ctas a', { interval: 120 });



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

 
