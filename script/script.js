'use strict'

const servicesSliderList = document.querySelector('.services-slider__list')
const servicesSliderItem = document.querySelectorAll('.services-slider-info')
const servicesSliderNavs = document.querySelectorAll('.services-slider__item')


const swiper = new Swiper('.competence__inner', {

    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.competence-arrow_right',
        prevEl: '.competence-arrow_left',
    },
});

const feedbackForm = () => {
    const inputPhone = [...
        document.querySelectorAll('.feedback-form__phone')]


    inputPhone.forEach((item) => {
        let keyCode

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode)
            const pos = this.selectionStart
            if (pos < 3) event.preventDefault()
            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                })
            i = new_value.indexOf("_")
            if (i !== -1) {
                i < 5 && (i = 3)
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&")
            reg = new RegExp("^" + reg + "$")
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type === "blur" && this.value.length < 5) this.value = ""
        }
        item.addEventListener("input", mask, false)
        item.addEventListener("focus", mask, false)
        item.addEventListener("blur", mask, false)
        item.addEventListener("keydown", mask, false)
    })
}

servicesSliderList.addEventListener('click', (e) => {
    if (e.target.closest('.services-slider__item')) {
        servicesSliderNavs.forEach((item) => {
            item.classList.remove('services-slider__item_active')
            e.target.closest('.services-slider__item')
                .classList.add('services-slider__item_active')
        })
        servicesSliderItem.forEach((item, index) => {
            item.classList.remove('services-slider-info_active')
            if (+e.target.closest('.services-slider__item')
                .getAttribute('data-nav') === index) {
                item.classList.add('services-slider-info_active')
            }
        })
    }
})

feedbackForm()