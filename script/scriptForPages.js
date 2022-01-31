'use strict'

const topBg = document.querySelector('.top-bg')
const headerFixed = document.querySelector('.header_fixed')
const navMenu = document.querySelector('.nav-menu')
const sections = document.querySelectorAll('section')


topBg.addEventListener('click', (e) => {
    if (e.target.closest('.header-nav__link')) {
        e.preventDefault()
        sections.forEach((item) => {
            if (e.target.closest('.header-nav__link')
                .getAttribute('data-header') === item.classList.value) {
                document.querySelector(`.${item.classList.value}`)
                    .scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    }
    if (e.target.closest('.nav-menu__link')) {
        if (e.target.closest('.nav-menu__link')
            .getAttribute('data-header')) {
            e.preventDefault()
            sections.forEach((item) => {
                if (e.target.closest('.nav-menu__link')
                    .getAttribute('data-header') === item.classList.value) {
                    document.querySelector(`.${item.classList.value}`)
                        .scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            })
        }
    }
    if (e.target.closest('.header-nav-burger')) {
        navMenu.classList.add('nav-menu_active')
        document.querySelector('.body').classList.add('overflow')
    }
    if (e.target.closest('.nav-menu__close') || e.target.closest('.nav-menu__link')) {
        navMenu.classList.remove('nav-menu_active')
        document.querySelector('.body').classList.remove('overflow')
    }
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 45) {
        headerFixed.style.display = 'block'
    } else {
        headerFixed.style.display = 'none'
    }
})