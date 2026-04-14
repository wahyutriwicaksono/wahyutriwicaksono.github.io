/* ===============================
   script.js - FINAL BOSS PREMIUM
================================= */

/* YEAR */
document.getElementById("year").textContent =
new Date().getFullYear();

/* THEME */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

  document.body.classList.toggle("light");

  toggle.textContent =
  document.body.classList.contains("light")
  ? "☀"
  : "☾";

});

/* REVEAL ANIMATION */
const els = document.querySelectorAll(".reveal");

function reveal(){

  els.forEach(el=>{

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 70){
      el.classList.add("show");
    }

  });

}

window.addEventListener("scroll",reveal);

reveal();

/* BUTTON HOVER SOUNDLESS FEEL */
document.querySelectorAll(".btn").forEach(btn=>{

  btn.addEventListener("mouseenter",()=>{
    btn.style.transform="translateY(-2px) scale(1.02)";
  });

  btn.addEventListener("mouseleave",()=>{
    btn.style.transform="";
  });

});