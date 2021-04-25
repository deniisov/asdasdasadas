$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu-body').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

new Swiper('.works__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 50,
});