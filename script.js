const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

hiddenElements.forEach((el) => observer.observe(el));
const text = [
    "Aspiring Shopify Developer",
    "Java Developer",
    "Android Developer"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < text[textIndex].length) {
        typingElement.textContent += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40);
    } else {
        textIndex = (textIndex + 1) % text.length;
        setTimeout(type, 300);
    }
}

type();
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("blue-theme");

    if (document.body.classList.contains("blue-theme")) {
        themeToggle.textContent = "💙";
    } else {
        themeToggle.textContent = "💜";
    }

});

// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 2000);

});

/* ==========================
   Custom Cursor
========================== */

const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

function animateGlow() {

    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);
}

animateGlow();

const hoverItems = document.querySelectorAll(
    "a, button, .skill-card, .project-card"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        glow.style.width = "60px";
        glow.style.height = "60px";

    });

    item.addEventListener("mouseleave", () => {

        glow.style.width = "35px";
        glow.style.height = "35px";

    });

});

/* ==========================
   Floating Particles
========================== */

const particles = document.getElementById("particles");

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (10 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        (0.1 + Math.random() * 0.3);

    particle.style.width =
        (3 + Math.random() * 5) + "px";

    particle.style.height =
        particle.style.width;

    particles.appendChild(particle);

}

/* =====================================
   Back To Top Button
===================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});