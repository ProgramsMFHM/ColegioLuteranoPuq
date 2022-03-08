const slider = document.getElementById("slider");
const right = document.getElementById("row-right");
const left = document.getElementById("row-left");
const time = 500;
let sliderItems = document.querySelectorAll(".slider__item");
let lastItem = sliderItems[sliderItems.length-1];

slider.insertAdjacentElement("afterbegin" , lastItem);

function next(){
    let firstItem = document.querySelectorAll(".slider__item")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = `all ${time}ms`;
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend" , firstItem);
        slider.style.marginLeft = "-100%";
    },time);
}

function previous(){
    sliderItems = document.querySelectorAll(".slider__item");
    lastItem = sliderItems[sliderItems.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = `all ${time}ms`;
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin" , lastItem);
        slider.style.marginLeft = "-100%";
    },time);
}

right.addEventListener("click", () =>{next();});

left.addEventListener("click", () =>{previous();});

setInterval(()=>{next();}, 10000);