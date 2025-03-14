/* =====================================================
   Resume section tabs and tab contents
===================================================== */
// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");

// let resumeTabNav = function (resumeTabClick) {
//   resumeTabContents.forEach((resumeTabContent) => {
//     resumeTabContent.style.display = "none";
//     resumeTabContent.classList.remove("active");
//   });

//   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//     resumePortfolioTabBtn.classList.remove("active");
//   });

//   resumeTabContents[resumeTabClick].style.display = "flex";

//   setTimeout(() => {
//     resumeTabContents[resumeTabClick].classList.add("active");
//   }, 100);

//   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// };

// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//   resumePortfolioTabBtn.addEventListener("click", () => {
//     resumeTabNav(i);
//   });
// });
/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(
  ".service-container .card-with-modal"
);

serviceCardWithModals.forEach((serviceCardWithModal) => {
  const serviceCard = serviceCardWithModal.querySelector(".service-card");
  const serviceBackdrop = serviceCardWithModal.querySelector(
    ".service-modal-backdrop"
  );
  const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
  const serviceModal = serviceCardWithModal.querySelector(".service-modal");

  serviceCard.addEventListener("click", () => {
    serviceBackdrop.style.display = "flex";

    setTimeout(() => {
      serviceBackdrop.classList.add("active");
    }, 100);

    setTimeout(() => {
      serviceModal.classList.add("active");
    }, 200);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      serviceBackdrop.classList.remove("active");
      serviceModal.classList.remove("active");
    }, 100);

    setTimeout(() => {
      serviceBackdrop.style.display = "none";
    }, 200);
  });
});
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
  const portfolioTabs = document.querySelector(".portfolio-tabs");
  const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
  const cardsWithModals = document.querySelectorAll(
    ".portfolio-container .card-with-modal"
  );

  portfolioTabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const filter = tabBtn.getAttribute("data-filter");

      cardsWithModals.forEach((cardWithModal) => {
        if (filter === "all" || cardWithModal.classList.contains(filter)) {
          cardWithModal.classList.remove("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = 1;
            cardWithModal.style.transition = ".5s ease";
          }, 150);
        } else {
          cardWithModal.classList.add("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = 0;
            cardWithModal.style.transition = ".5s ease";
          }, 150);
        }
      });
      // add active class to the clicked tab button
      portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });
      tabBtn.classList.add("active");
    });
  });
});

// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(
  ".portfolio-container .card-with-modal"
);

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
  const portofolioCard =
    portfolioCardWithModal.querySelector(".portfolio-card");
  const portfolioBackdrop = portfolioCardWithModal.querySelector(
    ".portfolio-modal-backdrop"
  );
  const portfolioModal =
    portfolioCardWithModal.querySelector(".portfolio-modal");
  const modalCloseBtn =
    portfolioCardWithModal.querySelector(".modal-close-btn");

  portofolioCard.addEventListener("click", () => {
    portfolioBackdrop.style.display = "flex";
    setTimeout(() => {
      portfolioBackdrop.classList.add("active");
    }, 300);

    setTimeout(() => {
      portfolioModal.classList.add("active");
    }, 300);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      portfolioBackdrop.style.display = "none";
    }, 500);
    setTimeout(() => {
      portfolioBackdrop.classList.remove("active");
      portfolioModal.classList.remove("active");
    }, 100);
  });
});

/* =====================================================
   Testimonial Swiper
===================================================== */

var swiper = new Swiper(".rega-client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "-C2OG-3dLnTi46x3X",
  });
})();

regaContactForm = document.getElementById("rega-contact-form");
regaContactFromAlert = document.querySelector(".contact-form-alert");

regaContactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs
    .sendForm("service_eygcczc", "template_ikeduz7", "#rega-contact-form")
    .then(
      () => {
        //   console.log("SUCCESS!");
        regaContactFromAlert.innerHTML =
          "<span> Your Message sent succesfully! <span><i class='ri-checkbox-circle-fill'></i>";
        regaContactForm.reset();

        setTimeout(() => {
          regaContactFromAlert.innerHTML = "";
        }, 5000);
      },
      (error) => {
        //   console.log("FAILED...", error);
        regaContactFromAlert.innerHTML =
          "<span>Message not sent! <span><i class='ri-error-warning-fill'></i>";
        regaContactFromAlert.title = error;
      }
    );
});

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
  const regaHeader = document.querySelector(".rega-header");
  regaHeader.classList.toggle("shrink", window.scrollY > 0);
});

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;
  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.remove("current");
    }
  });
});

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.querySelector(".bottom-nav");

  bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
  bottomNav.classList.add("active");
  menuShowBtn.classList.remove("active");

  if (window.scrollY < 10) {
    menuHideBtn.classList.remove("active");
    function scrollStopped() {
      bottomNav.classList.add("active");
    }
  }
  clearTimeout(navTimeout);
  navTimeout = setTimeout(scrollStopped, 2500);

  if (window.scrollY > 10) {
    menuHideBtn.classList.add("active");
    function scrollStopped() {
      bottomNav.classList.remove("active");
      menuShowBtn.classList.add("active");
    }
  }

  clearTimeout(navTimeout);
  navTimeout = setTimeout(scrollStopped, 2500);
});

// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.toggle("active");
  menuShowBtn.classList.toggle("active");
});

// Show bottom navigation menu on click menu-show-btn.
menuShowBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.add("active");
  menuShowBtn.classList.toggle("active");
});

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

window.addEventListener("scroll", () => {
  const toTopBtn = document.querySelector(".to-top-btn");
  toTopBtn.classList.toggle("active", window.scrollY > 0);

  //scroll indicator bar
  const scrollIndicator = document.querySelector(".scroll-indicator-bar");

  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollValue = (pageScroll / height) * 100;

  scrollIndicator.style.height = scrollValue + "%";
});

/* =====================================================
   Customized cursor on mousemove
===================================================== */

const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorDot.style.top = y + "px";
  cursorDot.style.left = x + "px";
  cursorCircle.style.top = y + "px";
  cursorCircle.style.left = x + "px";
});

// Cursor effects on hover website elements.
const cursorHoverLinks = document.querySelectorAll(
  "body a, .theme-btn, .rega-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn"
);

cursorHoverLinks.forEach((cursorHoverLink) => {
  cursorHoverLink.addEventListener("mouseover", () => {
    cursorDot.classList.add("large");
    cursorCircle.style.display = "none";
  });
});

cursorHoverLinks.forEach((cursorHoverLink) => {
  cursorHoverLink.addEventListener("mouseout", () => {
    cursorDot.classList.remove("large");
    cursorCircle.style.display = "block";
  });
});

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.
