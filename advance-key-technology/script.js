const menuBtn=document.querySelector(".menu-toggle");
const nav=document.querySelector("#mainNav");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const drop=document.querySelector(".dropdown");
document.querySelector(".drop-btn")?.addEventListener("click",()=>drop.classList.toggle("open"));
function submitForm(e){e.preventDefault();alert("Thank you! Your message has been received. Connect this form to your backend/email API to receive submissions.");e.target.reset();}
