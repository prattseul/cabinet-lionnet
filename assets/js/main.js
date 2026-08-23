/* ========================================
   MENU MOBILE
   ======================================== */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");

if (toggle && nav) {

  toggle.addEventListener("click", () => {

    const open = nav.classList.toggle("is-open");

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    toggle.querySelector("span").textContent =
      open ? "Fermer" : "Menu";

  });


  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("is-open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.querySelector("span").textContent =
        "Menu";

    });

  });

}


/* ========================================
   ANNÉE DU FOOTER
   ======================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ========================================
   APPARITION AU SCROLL
   ======================================== */

const revealElements = document.querySelectorAll(
  ".section, .hero-meta, .hero-image, .profile-image, .site-footer"
);


/*
 * IntersectionObserver détecte lorsqu'un
 * élément entre dans la zone visible.
 */

const revealObserver = new IntersectionObserver(

  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

        /*
         * L'animation ne se joue qu'une fois.
         * On arrête ensuite d'observer l'élément.
         */

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12,

    /*
     * L'animation commence légèrement avant
     * que l'élément soit complètement visible.
     */

    rootMargin: "0px 0px -8% 0px"
  }

);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* ========================================
   ÉLÉMENTS VISIBLES AU CHARGEMENT
   ======================================== */

/*
 * Le hero est déjà dans le viewport au
 * chargement. On lui donne une apparition
 * légèrement différée.
 */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .querySelector(".hero-image")
      ?.classList.add("is-visible");

    document
      .querySelector(".hero-meta")
      ?.classList.add("is-visible");

  }, 150);

});
