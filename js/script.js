// ===========================================
// MOBILE NAVIGATION
// ===========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("show");

});

});
// ===========================================
// ACTIVE NAVIGATION
// ===========================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

const page = link.getAttribute("href");

if(page===currentPage || (currentPage==="" && page==="index.html")){

link.classList.add("active");

}

});

// ===========================================
// DARK MODE
// ===========================================

const themeToggle = document.querySelector(".theme-toggle");

if(themeToggle){

const icon = themeToggle.querySelector("i");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

icon.classList.replace("fa-moon","fa-sun");

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

icon.classList.replace("fa-moon","fa-sun");

}else{

localStorage.setItem("theme","light");

icon.classList.replace("fa-sun","fa-moon");

}

});

}

// ===========================================
// SCROLL PROGRESS BAR
// ===========================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const scrollHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress = (scrollTop/scrollHeight)*100;

progressBar.style.width = progress+"%";

});
// ===========================================
// BACK TO TOP BUTTON
// ===========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ===========================================
// TYPING ANIMATION
// ===========================================

const typingElement = document.querySelector(".typing");

const professions = [

"Cyber Security Student",

"Aspiring Software Engineer",

"Frontend Web Developer",

"Tech Enthusiast"

];

let professionIndex = 0;

let letterIndex = 0;

let deleting = false;

function typingEffect(){

if(!typingElement) return;

const current = professions[professionIndex];

if(!deleting){

typingElement.textContent = current.substring(0, letterIndex++);

if(letterIndex > current.length){

deleting = true;

setTimeout(typingEffect,1500);

return;

}

}else{

typingElement.textContent = current.substring(0, letterIndex--);

if(letterIndex < 0){

deleting = false;

professionIndex = (professionIndex + 1) % professions.length;

letterIndex = 0;

}

}

setTimeout(typingEffect, deleting ? 60 : 100);

}

typingEffect();

// ===========================================
// SCROLL REVEAL
// ===========================================

const revealItems = document.querySelectorAll("section,.card");

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

revealItems.forEach(item=>{

revealObserver.observe(item);

});
// ===========================================
// COUNTER ANIMATION
// ===========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target = +counter.dataset.target;

const current = +counter.innerText;

const increment = Math.ceil(target/100);

if(current < target){

counter.innerText = current + increment;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// ===========================================
// HERO IMAGE EFFECT
// ===========================================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

heroImage.addEventListener("mousemove",()=>{

heroImage.style.transform = "scale(1.05) rotate(3deg)";

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform = "";

});

}

// ===========================================
// BUTTON RIPPLE EFFECT
// ===========================================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const size = Math.max(this.clientWidth,this.clientHeight);

const rect = this.getBoundingClientRect();

ripple.style.width = ripple.style.height = size + "px";

ripple.style.left = e.clientX - rect.left - size/2 + "px";

ripple.style.top = e.clientY - rect.top - size/2 + "px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
// ===========================================
// CONTACT FORM
// ===========================================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}