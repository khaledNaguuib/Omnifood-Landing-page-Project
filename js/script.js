console.log("hellow world");

// Set current year // to change the copyright year change every year
const copyRightYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
copyRightYear.textContent = currentYear;

// make mobile navigation work

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
console.log(navBtnEl);
console.log(headerEl);

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth Scrolling

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e);

    // now we are gonna read href attribute out of link we click
    // then we gonna use the href to scroll to the corresponding  section

    const href = link.getAttribute("href");
    // console.log(href);

    // scroll back to top
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky Navigation

const sectionHeroEL = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log(ent);

      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      console.log(ent);

      document.body.classList.remove("sticky");
    }
  },
  {
    // that means we will observe the hero section inside the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEL);
