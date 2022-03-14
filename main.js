//-------------------- NAV MENU -------------------------//

const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close')
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = (e)=>{
    //e.preventDefault()
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

//-------------------- SKILLS -------------------------//
const skillsContent = document.getElementsByClassName('.skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
const toggleSkills = (e) =>{
    let itemClass = e.parentNode.className
    if(itemClass === 'skills__content skills__close'){
        e.parentNode.className = 'skills__content skills__open'
    }
    if(itemClass === 'skills__content skills__open'){
        e.parentNode.className = 'skills__content skills__close'
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', ()=>toggleSkills(e))
})
//-------------------- QUALIFICATION TABS -------------------------//
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
})

//-------------------- SERVICES MODAL  -------------------------//
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

const modal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

//-------------------- SERVICES MODAL -------------------------//

let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    }
})


//-------------- SCROLL SECTIONS ACTIVE LINK -----------------//
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(e=>{
        const sectionHeight = e.offsetHeight
        const sectionTop = e.offsetTop - 50
        sectionId = e.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)

//-------------- CHANGE BACKGROUND HEADER -----------------//

const scrollHeader = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


//================ SHOW SCROLL =========================//
const scrollTop = () => {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll') ; else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

//================ DARK LIGHT THEME ======================//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}

const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme)? 'uil-moon' : 'uil-sun'
}

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ?  'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

