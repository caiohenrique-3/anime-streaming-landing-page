// todo: make the header sticky only in higher resolutions

// LOGIN-WINDOW::START
const loginButton = document.getElementById("login-button");
const loginWindow = document.getElementById("login-window");
const closeButton = document.getElementById("login-close-button");
const loginOverlay = document.getElementById("login-overlay");
const scrollArrow = document.getElementById("scrollToTop");

loginButton.addEventListener("click", () => {
  loginWindow.style.display = "flex";
  loginOverlay.classList.add("active");
  scrollArrow.style.display = "none";
});

closeButton.addEventListener("click", () => {
  closeLoginWindow();
});

// Clicking outside of the login window closes it.
loginOverlay.addEventListener("click", () => {
  closeLoginWindow();
});

function closeLoginWindow() {
  loginWindow.style.display = "none";
  loginOverlay.classList.remove("active");
}

// Closes the login window if 'esc' is pressed.
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLoginWindow();
  }
});

// Closes the login window on page refresh (F5)
document.addEventListener("DOMContentLoaded", () => {
  closeLoginWindow();
});

// Stops email & pass from showing up in the site URL.
const displayForm = document.getElementById("display-form");

displayForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "#";
  closeLoginWindow();
});
// LOGIN-WINDOW::END

// HEADER::START
const menuOverlay = document.getElementById("menu-overlay");
const menuBars = document.getElementById("menu-bars");
const sideMenu = document.getElementById("side-menu");
const menuCloseButton = document.getElementById("menu-close-button");

menuBars.addEventListener("click", function() {
  document.body.style.overflow = (document.body.style.overflow === "hidden")
    ? "auto"
    : "hidden";
  sideMenu.classList.add("show");
  menuOverlay.style.display = "block";
});

// When the side menu is open, prevents scrolling the main page.
sideMenu.addEventListener("scroll", function() {
  e.preventDefault();
  sideMenu.scrollTop += e.deltaY;
});

menuOverlay.addEventListener("click", function() {
  sideMenu.classList.remove("show");
  sideMenu.classList.toggle("menu-active");
  menuOverlay.style.display = "none";
});

menuCloseButton.addEventListener("click", function() {
  sideMenu.classList.remove("show");
  sideMenu.classList.toggle("menu-active");
  menuOverlay.style.display = "none";
});

// Makes the header blur the background if the page is scrolled down.
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.backgroundColor = "";
    header.style.backdropFilter = "";
  }
});
// HEADER::END

// SCROW-TO-TOP-ARROW::START
document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Show the button when the user scrolls down 20px
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
// SCROW-TO-TOP-ARROW::END

// MAIN-CATEGORIES::START
document.addEventListener("DOMContentLoaded", function() {
  const viewMoreButtons = document.querySelectorAll(".view-more");

  viewMoreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const additionalShows = this.parentElement.querySelectorAll(".show-additional");
      additionalShows.forEach(function(show) {
        show.classList.toggle("hidden");
      });

      if (this.innerText === "+ View More") {
        this.innerText = "- View Less";
      } else {
        this.innerText = "+ View More";
      }
    });
  });
});
// MAIN-CATEGORIES::END

// IMAGE-SLIDERS::START
var swiper = new Swiper(".home-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".trending-slider", {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: false,

  navigation: {
    nextEl: "#popular-button-next",
    prevEl: "#popular-button-prev",
  },

  breakpoints: {
    1368: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
// IMAGE-SLIDERS::END
