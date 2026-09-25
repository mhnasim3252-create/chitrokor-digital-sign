document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOADING ANIMATION ================= */

  const loader = document.getElementById("loader");

  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
          loader.remove();
        }, 500);

      }, 300);
    });
  }


  /* ================= MOBILE MENU ================= */

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");

      menuBtn.textContent =
        nav.classList.contains("open") ? "✕" : "☰";
    });

    document.querySelectorAll("#nav a").forEach(link => {

      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
      });

    });
  }


  /* ================= DARK MODE ================= */

  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {

    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
      document.body.classList.add("dark");
      themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark");

      const darkMode =
        document.body.classList.contains("dark");

      themeBtn.textContent =
        darkMode ? "☀️" : "🌙";

      localStorage.setItem(
        "darkMode",
        darkMode
      );

    });
  }


  /* ================= SERVICE SEARCH ================= */

  const search = document.getElementById("serviceSearch");

  if (search) {

    search.addEventListener("input", () => {

      const query =
        search.value.toLowerCase().trim();

      document.querySelectorAll(".card").forEach(card => {

        const text =
          (card.dataset.search || "")
          .toLowerCase();

        card.style.display =
          text.includes(query) ? "" : "none";

      });

    });

  }


  /* ================= IMAGE ZOOM ================= */

  const modal =
    document.getElementById("imageModal");

  const modalImg =
    document.getElementById("modalImg");

  const closeModal =
    document.getElementById("closeModal");

  document.querySelectorAll(".zoomable")
    .forEach(image => {

      image.addEventListener("click", () => {

        if (!modal || !modalImg) return;

        modalImg.src = image.src;

        modalImg.alt =
          image.alt || "Gallery Image";

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

      });

    });


  function closeImageModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

  }


  if (closeModal) {
    closeModal.addEventListener(
      "click",
      closeImageModal
    );
  }


  if (modal) {

    modal.addEventListener("click", event => {

      if (event.target === modal) {
        closeImageModal();
      }

    });

  }


  /* ESC BUTTON */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeImageModal();
    }

  });


  /* ================= WHATSAPP ORDER ================= */

  const orderForm =
    document.getElementById("orderForm");

  if (orderForm) {

    orderForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          document.getElementById("customerName")
          ?.value.trim() || "";

        const institution =
          document.getElementById("institution")
          ?.value.trim() || "";

        const phone =
          document.getElementById("phone")
          ?.value.trim() || "";

        const service =
          document.getElementById("service")
          ?.value || "";

        const quantity =
          document.getElementById("quantity")
          ?.value || "";

        const message =
          document.getElementById("message")
          ?.value.trim() || "";


        const whatsappMessage =
`আসসালামু আলাইকুম।

আমি ID Card / Digital Printing অর্ডার করতে চাই।

👤 নাম: ${name}

🏢 প্রতিষ্ঠান: ${institution}

📞 মোবাইল: ${phone}

🪪 সেবা: ${service}

🔢 পরিমাণ: ${quantity}

📝 অতিরিক্ত তথ্য:
${message}`;


        const whatsappURL =
          "https://wa.me/8801984721775?text=" +
          encodeURIComponent(whatsappMessage);


        window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );

  }


  /* ================= CURRENT YEAR ================= */

  const year =
    document.getElementById("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }


});
