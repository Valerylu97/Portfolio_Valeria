// === Cargar proyectos dinámicamente ===
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = "";

    projects.forEach(project => {
      const article = document.createElement("article");
      article.classList.add("project");

      // Generar enlaces condicionalmente
      let linksHTML = "";
      if (project.demo) {
        linksHTML += `<a href="${project.demo}" class="link" target="_blank">Ver demo</a>`;
      }
      if (project.repo) {
        if (linksHTML.length > 0) linksHTML += " • "; 
        linksHTML += `<a href="${project.repo}" class="link" target="_blank">Repositorio</a>`;
      }

      // Si no hay enlaces, no mostramos la fila
      const linksSection = linksHTML
        ? `<p>${linksHTML}</p>`
        : "";

      article.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-body">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          ${linksSection}
        </div>
      `;

      projectsContainer.appendChild(article);
    });

  })
  .catch(err => console.error("Error cargando proyectos:", err));


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

