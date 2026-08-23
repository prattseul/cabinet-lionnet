/* ========================================
   MENU MOBILE
   ======================================== */

const toggle =
  document.querySelector(
    ".menu-toggle"
  );

const nav =
  document.querySelector(
    ".navigation"
  );


if (toggle && nav) {

  toggle.addEventListener(
    "click",
    () => {

      const open =
        nav.classList.toggle(
          "is-open"
        );


      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );


      toggle
        .querySelector("span")
        .textContent =
          open
            ? "Fermer"
            : "Menu";

    }
  );


  nav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "is-open"
          );


          toggle.setAttribute(
            "aria-expanded",
            "false"
          );


          toggle
            .querySelector("span")
            .textContent =
              "Menu";

        }
      );

    });

}



/* ========================================
   ANNÉE DU FOOTER
   ======================================== */

const year =
  document.getElementById(
    "year"
  );


if (year) {

  year.textContent =
    new Date()
      .getFullYear();

}



/* ========================================
   HERO
   ======================================== */

/*
 * Le hero est visible immédiatement
 * au chargement.
 *
 * On déclenche cependant son animation
 * après un très court délai pour que
 * le navigateur ait le temps d'afficher
 * l'état initial.
 */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        const heroImage =
          document.querySelector(
            ".hero-image"
          );


        const heroMeta =
          document.querySelector(
            ".hero-meta"
          );


        if (heroImage) {

          heroImage
            .classList
            .add(
              "is-visible"
            );

        }


        if (heroMeta) {

          heroMeta
            .classList
            .add(
              "is-visible"
            );

        }

      },

      180
    );

  }
);



/* ========================================
   SECTIONS AU SCROLL
   ======================================== */

const sections =
  document.querySelectorAll(
    ".section"
  );


const sectionObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(
        (entry) => {

          /*
           * L'animation démarre uniquement
           * lorsque la section est
           * suffisamment entrée dans
           * l'écran.
           */

          if (
            entry.isIntersecting
          ) {

            entry
              .target
              .classList
              .add(
                "is-visible"
              );


            /*
             * Une fois jouée,
             * on ne rejoue pas
             * l'animation.
             */

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {

      /*
       * 25 % de la section doit être
       * visible.
       *
       * Cela évite que l'animation
       * démarre trop tôt.
       */

      threshold: 0.25,


      /*
       * On réduit légèrement la zone
       * de détection en bas.
       */

      rootMargin:
        "0px 0px -10% 0px"

    }

  );


sections.forEach(
  (section) => {

    sectionObserver.observe(
      section
    );

  }
);



/* ========================================
   FOOTER
   ======================================== */

const footer =
  document.querySelector(
    ".site-footer"
  );


if (footer) {

  const footerObserver =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry
                .target
                .classList
                .add(
                  "is-visible"
                );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.2
      }

    );


  footerObserver.observe(
    footer
  );

}
