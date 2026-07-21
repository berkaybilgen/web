/* Detay ekranı görünür olduğunda içeriği sırayla belirir. */
(function () {
  "use strict";

  var revealables = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  revealables.forEach(function (el) {
    observer.observe(el);
  });

  /* Kapaktaki "Detaylar" ipucu, sayfa kaydırılınca kaybolur. */
  var cue = document.querySelector(".scroll-cue");

  if (cue) {
    window.addEventListener(
      "scroll",
      function () {
        cue.classList.toggle("is-hidden", window.scrollY > 24);
      },
      { passive: true }
    );
  }
})();
