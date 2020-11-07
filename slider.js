// document.getElementById('slider-next').onclick = sliderNext; запуск по нажатию кнопки
autoSlider();
let next = 0;
var timer;
function autoSlider(){
    timer = setTimeout(function(){
        let polosa = document.getElementById('polosa');
        next = next -128;
        if (next < count*-128) {
            next = 0;  
            clearTimeout(timer);
        }
        polosa.style.left = next+'px';
        autoSlider();
    }, 3000);
}


let count = document.querySelectorAll('img').length;
count= count-3;
console.log(count);


// function sliderNext() {
//     let polosa = document.getElementById('polosa');
//     next = next -128;
//     if (next < count*-128) {                                     функция отдельно
//         next = 0;  
//         clearTimeout(timer);
//     }
//     polosa.style.left = next+'px';
//     autoSlider();
// }





// let widthCalc = document.querySelectorAll('img').length-3*-128;
// let polosaWidth = document.getElementsByClassName('polosa-width').style //= `width: ${widthCalc};`;
// console.log(polosaWidth);