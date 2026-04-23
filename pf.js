console.log("JS fonctionne");

let bouton = document.getElementById("btn");
let message = document.getElementById("message");

bouton.addEventListener("click", function() {
    message.textContent = "Bienvenue sur mon site Paul 🚀";
});

// Animation au scroll avec IntersectionObserver
let elements = document.querySelectorAll(".hidden");

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// Navbar scroll effect
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Fade in body on load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});