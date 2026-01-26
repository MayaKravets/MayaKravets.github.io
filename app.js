const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});

const serviceCards = document.querySelectorAll(".service-card");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
      }
    });
  },
  { threshold: 0.2 },
);

serviceCards.forEach((card) => observer2.observe(card));

/* FAQ accordion */
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
