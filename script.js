/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================
   SAVE DARK MODE
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================
   SEARCH SERVICES
========================= */

const searchInput = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    serviceCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   HEADER SHADOW
========================= */

window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});