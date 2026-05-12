(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  document.documentElement.classList.add("js-animate");

  const revealQueue = [];

  const addReveal = (elements, anim) => {
    elements.forEach((element) => {
      if (!element || element.classList.contains("reveal")) {
        return;
      }
      element.classList.add("reveal");
      element.dataset.anim = anim;
      revealQueue.push(element);
    });
  };

  addReveal(document.querySelectorAll("main section"), "fade");
  addReveal(document.querySelectorAll("h1, h2"), "zoom");

  const sideItems = [
    ...document.querySelectorAll(".parents__card, .timeline__item, .venues__card, .gifts__option, .gallery__item")
  ];

  sideItems.forEach((element, index) => {
    if (element.classList.contains("reveal")) {
      element.dataset.anim = index % 2 === 0 ? "left" : "right";
      return;
    }
    element.classList.add("reveal");
    element.dataset.anim = index % 2 === 0 ? "left" : "right";
    revealQueue.push(element);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealQueue.forEach((element) => revealObserver.observe(element));

  const scrollHint = document.getElementById("scroll-hint");
  const floatingMenu = document.querySelector(".floating-ui");
  const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];

  let ticking = false;

  const updateOnScroll = () => {
    const y = window.scrollY || window.pageYOffset;

    if (scrollHint) {
      scrollHint.classList.toggle("is-hidden", y > 60);
    }

    if (floatingMenu) {
      floatingMenu.classList.toggle("is-scrolled", y > 40);
    }

    if (parallaxNodes.length > 0) {
      const viewportHeight = window.innerHeight || 1;
      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          return;
        }

        const distanceToCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const intensity = Math.max(-10, Math.min(10, -distanceToCenter * 0.02));
        node.style.transform = `translate3d(0, ${intensity}px, 0)`;
      });
    }

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(updateOnScroll);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  updateOnScroll();
})();
