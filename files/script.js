//add header
fetch("files/html/header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
    headerScript();
  })
  .catch((error) => {
    console.error("Error loading header:", error);
  });

//header scripts
function headerScript() {
  const openIcon = document.querySelector("header > .icon");
  const closeIcon = document.querySelector(".box1");
  const closeIcon2 = document.querySelector("header > .nav > i");
  const box = document.querySelector(".box");
  const nav = document.querySelector("header > .nav");
  const navLinks = document.querySelectorAll(".nav > .nav-item > .nav-link");

  //for box aside
  openIcon.addEventListener("click", function (e) {
    if (window.innerWidth > 768) {
      e.stopPropagation();
      box.style.right = "0";
    }
  });

  closeIcon.addEventListener("click", function (e) {
    if (window.innerWidth > 768) {
      e.stopPropagation();
      box.style.right = "-100%";
    }
  });

  document.addEventListener("click", function (e) {
    if (
      window.innerWidth > 768 &&
      !box.contains(e.target) &&
      !openIcon.contains(e.target)
    ) {
      box.style.right = "-100%";
    }
  });

  //for nav aside for smaller screen
  openIcon.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      nav.classList.add("open");
      setTimeout(() => {
        navLinks.forEach((link, index) => {
          setTimeout(() => {
            link.style.top = "0";
          }, index * 100);
        });
      }, 300);
    }
  });

  closeIcon2.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.top = "100px";
      }, index * 100);
    });
    setTimeout(() => {
      nav.classList.remove("open");
      navLinks.forEach((link) => {
        link.style.top = "100%";
      });
      box.style.right = "-100%";
    }, navLinks.length * 100 + 300);
  });

  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      !nav.contains(e.target) &&
      !openIcon.contains(e.target)
    ) {
      navLinks.forEach((link, index) => {
        setTimeout(() => {
          link.style.top = "100px";
        }, index * 100);
      });
      setTimeout(() => {
        nav.classList.remove("open");
        navLinks.forEach((link) => {
          link.style.top = "100%";
        });
        box.style.right = "-100%";
      }, navLinks.length * 100 + 300);
    }
  });
}

//add footer
fetch("files/html/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error loading footer:", error);
  });

//scrollspy
document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".nav-link");
  var tabPanes = document.querySelectorAll(".tab-pane");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      this.classList.add("active");

      tabPanes.forEach(function (pane) {
        pane.classList.remove("active");
      });

      var target = document.querySelector(this.getAttribute("data-target"));
      target.classList.add("active");
    });
  });
});

//swiper in about.html
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  spaceBetween: -30,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    475: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  watchSlidesProgress: true,
  spaceBetween: 2,
  mousewheel: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
    },
    575: {
      slidesPerView: 1.5,
    },
    475: {
      slidesPerView: 1.15,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
