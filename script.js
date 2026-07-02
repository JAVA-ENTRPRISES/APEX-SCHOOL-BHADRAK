// ======================================================
// APEX SCHOOL OF EXCELLENCE
// script.js
// ======================================================


// ==========================================
// HEADER INJECTION
// ==========================================

document.addEventListener("DOMContentLoaded", function(){

const header = `
<header id="mainHeader">
<nav>

<div class="logo-area">
<img src="image/LOGO.jpeg" alt="School Logo">

<div class="logo-text">
<h2>Apex School of Excellence</h2>
<p>Knowledge • Character • Excellence</p>
</div>
</div>

<div class="menu-toggle" id="menuToggle">
☰
</div>

<ul class="nav-links" id="navLinks">

<li><a href="Index.html">Home</a></li>

<li><a href="About.html">About Us</a></li>
<li><a href="image.html">Gallery</a></li>


<li><a href="Academics.html">Academics</a></li>

<li><a href="Facility.html">Facilities</a></li>

<li><a href="mandatory disclouser.html">Mandatory Disclosure</a></li>

<li><a href="Contact.html">Contact</a></li>

</ul>

</nav>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", header);

});


// ==========================================
// FOOTER INJECTION
// ==========================================

document.addEventListener("DOMContentLoaded", function(){

const footer = `

<footer>

<div class="footer-top">

<div class="container">

<div class="footer-grid">

<div class="footer-column">

<div class="footer-logo">

<img src="image/LOGO.jpeg" alt="School Logo">

<div>
<h3>Apex School of Excellence</h3>
<p>Empowering Future Leaders</p>
</div>

</div>

<p>
Providing quality CBSE education
through innovation, values and
academic excellence.
</p>

</div>

<div class="footer-column">

<h3>Quick Links</h3>

<ul>

<li><a href="Index.html">Home</a></li>
<li><a href="About.html">About</a></li>
<li><a href="Academics.html">Academics</a></li>
<li><a href="Facility.html">Facilities</a></li>

</ul>

</div>

<div class="footer-column">

<h3>Useful Links</h3>

<ul>

<li><a href="Mandatory Disclosure.html">
Mandatory Disclosure
</a></li>

<li><a href="Contact.html">
Contact Us
</a></li>

<li><a href="#">
Admissions
</a></li>

</ul>

</div>

<div class="footer-column">

<h3>Contact Info</h3>

<p>📍 Bhubaneswar, Odisha</p>
<p>📞 +91 XXXXX XXXXX</p>
<p>✉ info@apexschool.edu.in</p>

<div class="social-links">

<a href="#">F</a>
<a href="#">I</a>
<a href="#">Y</a>

</div>

</div>

</div>

</div>

</div>

<div class="footer-bottom">
© 2026 Apex School of Excellence.
All Rights Reserved.
</div>

</footer>

`;

document.body.insertAdjacentHTML("beforeend", footer);

});



// ==========================================
// MOBILE MENU
// ==========================================

document.addEventListener("click",function(e){

if(e.target.id==="menuToggle"){

document
.getElementById("navLinks")
.classList.toggle("active");

}

});



// ==========================================
// ACTIVE NAVIGATION
// ==========================================

window.addEventListener("load",()=>{

const page =
window.location.pathname
.split("/")
.pop();

document.querySelectorAll(".nav-links a")
.forEach(link=>{

const href = link.getAttribute("href");

if(href===page){

link.classList.add("active");

}

});

});




// ==========================================
// STICKY HEADER
// ==========================================

window.addEventListener("scroll",()=>{

const header =
document.getElementById("mainHeader");

if(!header) return;

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});




// ==========================================
// SCROLL REVEAL
// ==========================================

function revealElements(){

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

const visible = 120;

if(top < window.innerHeight-visible){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",revealElements);
window.addEventListener("load",revealElements);




// ==========================================
// COUNTER ANIMATION
// ==========================================

function animateCounters(){

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let count = 0;

const speed = target/150;

function update(){

count += speed;

if(count<target){

counter.innerText =
Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

});

}

window.addEventListener("load",animateCounters);




// ==========================================
// FAQ ACCORDION
// ==========================================

document.addEventListener("click",function(e){

if(e.target.classList.contains("faq-question")){

const parent =
e.target.parentElement;

parent.classList.toggle("active");

}

});




// ==========================================
// BACK TO TOP BUTTON
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

const btn =
document.createElement("div");

btn.className="back-to-top";
btn.innerHTML="↑";

document.body.appendChild(btn);

btn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}

});

});




// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

const progress =
document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total =
document.documentElement.scrollHeight
-window.innerHeight;

const percent =
(window.scrollY/total)*100;

progress.style.width =
percent+"%";

});

});




// ==========================================
// DARK MODE
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

const dark =
document.createElement("div");

dark.className="dark-toggle";
dark.innerHTML="☾";

document.body.appendChild(dark);

dark.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

});




// ==========================================
// PAGE LOADER
// ==========================================

window.addEventListener("load",()=>{

const loader =
document.querySelector(".loader");

if(loader){

loader.style.display="none";

}

});




// ==========================================
// TESTIMONIAL SLIDER
// ==========================================

let testimonialIndex=0;

function testimonialSlider(){

const slides =
document.querySelectorAll(".testimonial-card");

if(slides.length===0) return;

slides.forEach(item=>{
item.style.display="none";
});

testimonialIndex++;

if(testimonialIndex>slides.length){

testimonialIndex=1;

}

slides[testimonialIndex-1]
.style.display="block";

setTimeout(testimonialSlider,5000);

}

window.addEventListener("load",testimonialSlider);




// ==========================================
// GALLERY FILTER
// ==========================================

function filterGallery(category){

const items =
document.querySelectorAll(".gallery-item");

items.forEach(item=>{

if(category==="all"){

item.style.display="block";

}else if(
item.dataset.category===category
){

item.style.display="block";

}else{

item.style.display="none";

}

});

}




// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

function validateForm(){

const name =
document.getElementById("name");

const email =
document.getElementById("email");

const phone =
document.getElementById("phone");

if(!name || !email || !phone)
return true;

if(name.value.trim()===""){

alert("Enter Name");
return false;

}

if(email.value.indexOf("@")==-1){

alert("Enter Valid Email");
return false;

}

if(phone.value.length<10){

alert("Enter Valid Phone");
return false;

}

alert("Form Submitted Successfully");

return true;

}




// ==========================================
// NEWSLETTER
// ==========================================

function subscribeNewsletter(){

const email =
document.getElementById("newsletterEmail");

if(!email) return;

if(email.value.indexOf("@")==-1){

alert("Enter valid email");

}else{

alert(
"Thank you for subscribing!"
);

email.value="";

}

}




// ==========================================
// ANNOUNCEMENT POPUP
// ==========================================

// window.addEventListener("load",()=>{

// const popup =
// document.getElementById("announcementPopup");

// if(popup){

// setTimeout(()=>{

// popup.style.display="block";

// },1500);

// }

// });

// function closePopup(){

// const popup =
// document.getElementById("announcementPopup");

// if(popup){

// popup.style.display="none";

// }

// }




// ==========================================
// MODAL WINDOW
// ==========================================

function openModal(id){

const modal =
document.getElementById(id);

if(modal){

modal.style.display="block";

}

}

function closeModal(id){

const modal =
document.getElementById(id);

if(modal){

modal.style.display="none";

}

}




// ==========================================
// DISCLOSURE SEARCH
// ==========================================

function searchDisclosure(){

const input =
document.getElementById("disclosureSearch");

if(!input) return;

const filter =
input.value.toUpperCase();

const rows =
document.querySelectorAll(
".disclosure-table tbody tr"
);

rows.forEach(row=>{

const text =
row.innerText.toUpperCase();

row.style.display =
text.indexOf(filter)>-1
? ""
: "none";

});

}




// ==========================================
// DISCLOSURE FILTER
// ==========================================

function filterDisclosure(){

const select =
document.getElementById("disclosureFilter");

if(!select) return;

const value =
select.value.toUpperCase();

const tables =
document.querySelectorAll(
".disclosure-card"
);

tables.forEach(card=>{

const heading =
card.innerText.toUpperCase();

if(value==="ALL"){

card.style.display="block";

}else if(
heading.includes(value)
){

card.style.display="block";

}else{

card.style.display="none";

}

});

}




// ==========================================
// PRINT DISCLOSURE
// ==========================================

function printDisclosure(){

window.print();

}




// ==========================================
// DOWNLOAD PAGE
// ==========================================

function downloadPage(){

const element =
document.documentElement.outerHTML;

const blob =
new Blob([element],
{type:"text/html"});

const link =
document.createElement("a");

link.href =
URL.createObjectURL(blob);

link.download =
"MandatoryDisclosure.html";

link.click();

}




// ==========================================
// SMOOTH SCROLL LINKS
// ==========================================

document.addEventListener("click",function(e){

const link =
e.target.closest('a[href^="#"]');

if(!link) return;

e.preventDefault();

const target =
document.querySelector(
link.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});




// ==========================================
// WHATSAPP BUTTON
// ==========================================

document.addEventListener("DOMContentLoaded",()=>{

const whatsapp =
document.createElement("a");

whatsapp.className="whatsapp-btn";

whatsapp.href=
"https://wa.me/919999999999";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

document.body.appendChild(
whatsapp
);

});


// ======================================================
// END OF SCRIPT
// ======================================================