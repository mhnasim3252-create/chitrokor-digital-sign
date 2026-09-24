// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


// =============================
// DARK MODE
// =============================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const button = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        button.innerHTML = "🌙";

        localStorage.setItem("darkMode", "disabled");

    }

}


// =============================
// SAVE DARK MODE
// =============================

window.addEventListener("load", function () {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {

        document.body.classList.add("dark");

        document.querySelector(".dark-btn").innerHTML = "☀️";

    }

});


// =============================
// SEARCH SERVICES
// =============================

function searchServices() {

    const input =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".service-card");

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// =============================
// CURRENT YEAR
// =============================

document.getElementById("year").innerText =
    new Date().getFullYear();


// =============================
// CLOSE MOBILE MENU
// =============================

document.querySelectorAll("#navMenu a")
.forEach(function(link) {

    link.addEventListener("click", function() {

        document
        .getElementById("navMenu")
        .classList.remove("active");

    });

});