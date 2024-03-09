"use strict";


// ---------------------------------------------------------------- variable ----------------------------------------------------------------
const togle_menu = $('#togle_menu');
const menu_btn = $('#menu_btn');
const close_btn = $('#close_btn');
const swiper = $('#swiper');
const turn_left = $('#left-turn');
const turn_right = $('#right-turn');
let sum = 0;
let son = 0;
const zayavka_wrapper = $('#zayavka-wrapper');
const body = $('body');
const zayavka = $('.zayavka');
const zayavka_succes = $('.zayavka_succes');
const zayavka_btn = $('#zayavka_btn');
const send = $('#send');
const close_zayavka = $('#close_zayavka');
const close_btn2 = $('#close_btn2');
const close_btn3 = $('#close_btn3');
const respons_zayavka_btn = $('#respons_zayavka');



// ---------------------------------------------------------------- events ----------------------------------------------------------------

respons_zayavka_btn.addEventListener('click', () => {
    zayavka_wrapper.style.cssText = 'display: block!important;';
    body.style.cssText = 'overflow: hidden!important;';
    zayavka.style.cssText = 'display: flex!important;';
})

close_btn2.addEventListener('click', () => {
    zayavka_succes.style.cssText = 'display: none';
    zayavka_wrapper.style.cssText = 'display: none;';
    body.style.cssText = 'overflow: auto;';
});

close_btn3.addEventListener('click', () => {
    zayavka_wrapper.style.cssText = 'display: none';
    body.style.cssText = 'overflow: auto;';
    zayavka_succes.style.cssText = 'display: none';
});

send.addEventListener("click", () => {
    setTimeout(() => {
        zayavka.style.cssText = 'display: none';
        zayavka_succes.style.cssText = 'display: block;'
    }, 500)
});

zayavka_btn.addEventListener('click', () => {
    zayavka_wrapper.style.cssText = 'display: block!important;';
    body.style.cssText = 'overflow: hidden!important;';
    zayavka.style.cssText = 'display: flex!important;';
});

close_zayavka.addEventListener('click', () => {
    zayavka_wrapper.style.cssText = 'display: none!important;';
    body.style.cssText = 'overflow: auto!important;';
    zayavka.style.cssText = 'display: none!important;';
});

menu_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

close_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

turn_right.addEventListener('click', () => {
   turn_rightt();
});

turn_left.addEventListener('click', () => {
    if(sum == 0) {
        sum = 5;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }else if(sum != 0){
        sum -= 1;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }
});


// ---------------------------------------------------------------- functions ----------------------------------------------------------------

function turn_rightt(){
    if(son != 5) {
        son +=1;
        swiper.style.cssText = `transform: translateX(-${son * 377}px);`
    }else if(son == 5){
        son = 0;
        swiper.style.cssText = `transform: translateX(0px);`
    }
}

setInterval(() => {
    turn_rightt();
}, 3000)