"use strict";

// ALL SELECTORS
const switcherContainer = document.querySelector(".switcher");
const switcherThemeBtn = document.querySelector(".switcher__btn--theme");

const linkThemeColors = document.querySelectorAll(".theme-colors");

const switcherDayNightBtn = document.querySelector(".switcher__btn--day-night");

const videoContainer = document.querySelector(".video__box");
const mainVideo = document.querySelector(".video__clip");
// const introVideo = document.querySelector(".f-btn__item--intro");
const introVideoBtn = document.querySelector(".f-btn__item--intro");

const aboutSection = document.querySelector("#about");
const scrollTopBtn = document.querySelector("#scroll-top-btn");

const menuLinks = document.querySelectorAll(".menu__link");

const siteLogoLink = document.querySelector(".site-logo__link");

// SWITCHER EXPAND WHEN CLICK ON THEME BUTTON
switcherThemeBtn.addEventListener("click", () => {
  switcherContainer.classList.toggle("open");
});

// SWITCHER HIDE WHEN SCROLL DOWN
window.addEventListener("scroll", () => {
  if (switcherContainer.classList.contains("open"))
    switcherContainer.classList.remove("open");
});

// THEME COLOR SWITCHER
const setThemeColor = (color) => {
  linkThemeColors.forEach((themeColor) => {
    color === themeColor.getAttribute("title")
      ? themeColor.removeAttribute("disabled", "false")
      : themeColor.setAttribute("disabled", "true");
  });
};

// THEME DAY & NIGHT MODE SWITCHER
switcherDayNightBtn.addEventListener("click", () => {
  switcherDayNightBtn.querySelector("i").classList.toggle("fa-sun");
  switcherDayNightBtn.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("night-mode");
});

// switcherDayNightBtn.addEventListener("click", () => {
//   const cardBox = document.querySelector(".card__box");
//   cardBox.style.backgroundColor = "#364f6a";
// });

window.addEventListener("load", () => {
  if (document.body.classList.contains("night-mode")) {
    switcherDayNightBtn.querySelector("i").classList.add("fa-moon");
    switcherDayNightBtn.querySelector("i").classList.remove("fa-sun");
  } else {
    switcherDayNightBtn.querySelector("i").classList.add("fa-sun");
    switcherDayNightBtn.querySelector("i").classList.remove("fa-moon");
  }
});

// TYPING EFFENT WITH ES6 CLASS
class Typing {
  constructor(txtElement, skills, delay = 3000) {
    this.txtElement = txtElement;
    this.skills = skills;
    this.delay = parseInt(delay, 10);
    this.skillIndex = 0;
    this.txt = "";
    this.delete = false;

    this.type();
  }
  type() {
    // Get the current skill
    const currentIndex = this.skillIndex % this.skills.length;
    const skill = this.skills[currentIndex];

    // Add/remove charecter of the skill
    this.delete
      ? // Remove character
        (this.txt = skill.substring(0, this.txt.length - 1))
      : // Add character
        (this.txt = skill.substring(0, this.txt.length + 1));

    // Insert into the HTML element
    this.txtElement.innerHTML = `<span class="text">${this.txt}<span>`;

    // Initial typing speed
    let typeSpeed = 200;
    if (this.delete) typeSpeed /= 2;

    // Rendering all the skill one after one
    if (!this.delete && this.txt === skill) {
      // Pause at the end each skill
      typeSpeed = this.delay;
      this.delete = true;
    } else if (this.delete && this.txt === "") {
      // Move to the next skill
      this.delete = false;
      this.skillIndex++;

      // Pause before typing again
      typeSpeed = 100;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// DOM Initialize
const init = () => {
  const txtElement = document.querySelector(".about__text--animated");
  const skills = JSON.parse(txtElement.getAttribute("data-skills"));
  const delay = txtElement.getAttribute("data-delay");

  // Typing Effect
  new Typing(txtElement, skills, delay);
};

document.addEventListener("DOMContentLoaded", init);

// HERO SECTION VIDEO
const closeIcon = document.querySelector(".video__close-icon");
closeIcon.addEventListener("click", () => {
  videoContainer.style.display = "none";
});

const playVideo = (path) => {
  mainVideo.src = path;
  videoContainer.style.display = "block";
};

// BACK TO TOP SCROLLING
// Callback function of the intersection observer
const callBackFn = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) scrollTopBtn.classList.add("sticky");
  else scrollTopBtn.classList.remove("sticky");
};

// Options of the intersection observer
const observeOptions = {
  root: null,
  threshold: 0,
};

const serviceSectionObserver = new IntersectionObserver(
  callBackFn,
  observeOptions
);

// Observe for the required section
serviceSectionObserver.observe(aboutSection);

// Smooth scrolling for back to top button
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// MENU NAVIGATING WITH SMOOTH SCROLLING
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the current coordinate for each menu link
    const id = menuLink.getAttribute("href");
    const sectionCoord = document.querySelector(id).getBoundingClientRect();

    // Smooth scrolling
    window.scrollTo({
      left: sectionCoord.left + window.pageXOffset,
      top: sectionCoord.top + window.pageYOffset - 20,
      behavior: "smooth",
    });
  });
});

// SITE LOGO NAVIGATION WITH SMOOTH SCROLLING
siteLogoLink.addEventListener("click", (e) => {
  e.preventDefault();
  const aboutCoords = aboutSection.getBoundingClientRect();
  console.log(aboutCoords);

  // Smooth scrolling
  window.scrollTo({
    left: aboutCoords.left + window.pageXOffset,
    top: aboutCoords.top + window.pageYOffset - 20,
    behavior: "smooth",
  });
});

// // PORTFOLIO TABBED COMPONENT
// const portfolioNav = document.querySelector(".portfolio__nav");
// const portfolioItems = document.querySelectorAll(".portfolio__item");
// const overlayIcon = document.querySelector(".portfolio__overlay-icon");
// const overlay = document.querySelector(".portfolio__overlay");
// const overlayImg = document.querySelector(".portfolio__overlay-imgbox img");

// // Filtering
// window.onload = () => {
//   portfolioNav.onclick = (list) => {
//     if (list.target.classList.contains("portfolio__list")) {
//       portfolioNav
//         .querySelector(".portfolio__list--active")
//         .classList.remove("portfolio__list--active");

//       list.target.classList.add("portfolio__list--active");

//       const itemName = list.target.getAttribute("data-name");

//       portfolioItems.forEach((item) => {
//         const portfolioItem = item.getAttribute("data-name");
//         if (portfolioItem == itemName || itemName == "all-in-one") {
//           item.classList.add("portfolio__item--show");
//           item.classList.remove("portfolio__item--hide");
//         } else {
//           item.classList.remove("portfolio__item--show");
//           item.classList.add("portfolio__item--hide");
//         }
//       });
//     }
//   };
// };

// // Popup open function
// const popUpOpen = (e) => {
//   overlay.classList.add("portfolio__overlay--show");
//   const src = e.currentTarget.querySelector("img.portfolio__img").src;
//   overlayImg.src = src;
// };

// // Popup close function
// const popUpClose = () => {
//   overlay.classList.remove("portfolio__overlay--show");
// };

// // Popup window open
// portfolioItems.forEach((btn) => {
//   btn.addEventListener("click", popUpOpen);
// });

// // Popup window close
// overlayIcon.addEventListener("click", popUpClose);

// SKILLS FOR PIE CHART
const skillChart1 = document.querySelector(".p-skill__piechart--1");
const skillChart2 = document.querySelector(".p-skill__piechart--2");
const skillChart3 = document.querySelector(".p-skill__piechart--3");
const skillChart4 = document.querySelector(".p-skill__piechart--4");
const skillText1 = document.querySelector(".p-skill__text--1");
const skillText2 = document.querySelector(".p-skill__text--2");
const skillText3 = document.querySelector(".p-skill__text--3");
const skillText4 = document.querySelector(".p-skill__text--4");

// Professional skill 1
let start1 = 0;
const pieChart1 = setInterval(() => {
  start1++;
  const percent1 = Number(skillText1.getAttribute("data-percent"));
  if (percent1 <= start1) clearInterval(pieChart1);
  skillText1.textContent = `${start1}%`;

  skillChart1.style.background = `conic-gradient(var(--secondary-theme-color) ${
    start1 * 3.6
  }deg, var(--pure-white) ${start1 * 3.6}deg)`;
}, 10);

// Professional skill 2
let start2 = 0;
const pieChart2 = setInterval(() => {
  start2++;
  const percent2 = Number(skillText2.getAttribute("data-percent"));
  if (percent2 <= start2) clearInterval(pieChart2);
  skillText2.textContent = `${start2}%`;

  skillChart2.style.background = `conic-gradient(var(--secondary-theme-color) ${
    start2 * 3.6
  }deg, var(--pure-white) ${start2 * 3.6}deg)`;
}, 10);

// Professional skill 3
let start3 = 0;
const pieChart3 = setInterval(() => {
  start3++;
  const percent3 = Number(skillText3.getAttribute("data-percent"));
  if (percent3 <= start3) clearInterval(pieChart3);
  skillText3.textContent = `${start3}%`;

  skillChart3.style.background = `conic-gradient(var(--secondary-theme-color) ${
    start3 * 3.6
  }deg, var(--pure-white) ${start3 * 3.6}deg)`;
}, 10);

// Professional skill 2
let start4 = 0;
const pieChart4 = setInterval(() => {
  start4++;
  const percent4 = Number(skillText4.getAttribute("data-percent"));
  if (percent4 <= start4) clearInterval(pieChart4);
  skillText4.textContent = `${start4}%`;

  skillChart4.style.background = `conic-gradient(var(--secondary-theme-color) ${
    start4 * 3.6
  }deg, var(--pure-white) ${start4 * 3.6}deg)`;
}, 10);

/////////
//////////
// TESTIMONIAL SLIDER
const testimonialSlider = () => {
  const reviewSlides = document.querySelectorAll(".review__slide");

  const btnLeft = document.querySelector(".review__btn--left");
  const btnRight = document.querySelector(".review__btn--right");

  const dotContainer = document.querySelector(".review__dots");

  let curSlide = 0;
  const maxSlide = reviewSlides.length - 1;

  const dotSlide = () => {
    reviewSlides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="review__dot" data-slide="${i}"></button>`
      );
    });
  };

  const changeSlide = (slide) => {
    reviewSlides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // Active dot slide
  const activeDot = (sl) => {
    document
      .querySelectorAll(".review__dot")
      .forEach((dot) => dot.classList.remove("review__dot--active"));

    document
      .querySelector(`.review__dot[data-slide="${sl}"]`)
      .classList.add("review__dot--active");
  };

  // Initial
  const initial = () => {
    dotSlide();
    changeSlide(0);
    activeDot(0);
  };
  initial();

  // Previous slide
  const prevSlide = () => {
    curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
    changeSlide(curSlide);
    activeDot(curSlide);
  };
  btnLeft.addEventListener("click", prevSlide);

  // Next slide
  const nextSlide = () => {
    curSlide === maxSlide ? (curSlide = 0) : curSlide++;
    changeSlide(curSlide);
    activeDot(curSlide);
  };
  btnRight.addEventListener("click", nextSlide);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    e.key === "ArrowLeft" ? prevSlide() : nextSlide();
  });

  // Dot slides
  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("review__dot")) {
      const { slide } = e.target.dataset;
      changeSlide(slide);
      activeDot(slide);
    }
  });

  setInterval(() => {
    console.log(nextSlide());
  }, 5000);
};
testimonialSlider();
