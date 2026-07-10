// ===============================
// AMAN CHHETRI PORTFOLIO V2
// ===============================

// Typing Effect

const text = [
    "🏏 Future Professional Cricketer",
    "💻 Future Software Developer",
    "🚀 Dream Big. Work Hard.",
    "🌍 Never Give Up"
];

let word = 0;
let letter = 0;
let erase = false;

const typing = document.getElementById("typing");

function type() {

    const current = text[word];

    if (!erase) {

        typing.textContent = current.substring(0, letter++);
        
        if (letter > current.length) {
            erase = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, letter--);

        if (letter < 0) {
            erase = false;
            word++;

            if (word >= text.length) {
                word = 0;
            }
        }

    }

    setTimeout(type, erase ? 45 : 90);

}

type();


// ===============================
// Dark / Light Mode
// ===============================

const theme = document.getElementById("theme");

theme.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        theme.innerHTML = "☀️";

    } else {

        theme.innerHTML = "🌙";

    }

};


// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// ===============================
// Button Glow
// ===============================

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 25px cyan";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

});


// ===============================
// Navbar Active Link
// ===============================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.onclick=()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

}

});


// ===============================
// Floating Logo Animation
// ===============================

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.style.transform="translateY(-5px)";

setTimeout(()=>{

logo.style.transform="translateY(0px)";

},500);

},1000);


// ===============================
// Mouse Glow Effect
// ===============================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="cyan";
glow.style.boxShadow="0 0 25px cyan";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});


// ===============================
// Loading Effect
// ===============================

window.onload=()=>{

document.body.style.opacity="0";

document.body.style.transition="1s";

setTimeout(()=>{

document.body.style.opacity="1";

},100);

};


// ===============================
// Console Welcome
// ===============================

console.log("Welcome to Aman Chhetri Portfolio V2");