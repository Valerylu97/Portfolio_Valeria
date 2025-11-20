/* ================================
   ANIMACIÓN DE APARICIÓN (FADE-IN)
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================================
   SMOOTH SCROLL PARA EL MENÚ
================================ */

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* ================================
   EFECTO DEL HEADER AL HACER SCROLL
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* ================================
   ANIMACIÓN EN BOTONES
================================ */

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});


/* ================================
   VALIDACIÓN BÁSICA FORMULARIO
================================ */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[type='email']");
    const name = form.querySelector("input[name='name']");
    const message = form.querySelector("textarea");

    if (!email.value || !name.value || !message.value) {
      e.preventDefault();
      alert("Por favor completa todos los campos antes de enviar.");
    }
  });
}


/* ================================
   (Opcional) ANIMACIÓN DE CURSOR
================================ */
// Para agregar un cursor luminoso estilo tech más adelante
