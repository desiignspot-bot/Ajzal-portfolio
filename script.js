console.log("Portfolio Loaded");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
glow.style.left = e.clientX - 150 + "px";
glow.style.top = e.clientY - 150 + "px";
});const text = "Digital Marketing Head | Shopify Expert | WhatsApp Sales Specialist";

let index = 0;

function typeText(){

if(index < text.length){

document.querySelector(".typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeText,50);

}

}

typeText();
function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

reveals[i].classList.add("active");
window.addEventListener("scroll",reveal);
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const c = +counter.innerText;

const increment = target / 100;

if(c < target){

counter.innerText = Math.ceil(c + increment);

setTimeout(updateCounter,20);

}

else{

counter.innerText = target + "+";

}

};

updateCounter(300);

});