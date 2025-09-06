"use strict";

const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  //elements show on scroll
  fadeElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top; //so it shows when you reach the top of an element
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
});

// Opens the sidebar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const header = document.getElementById("navHeader");

  // Sidebar content (matches HTML)

  // Open sidebar
  hamburger.addEventListener("click", function () {
    sidebar.style.display = "flex";
    overlay.classList.add("active");
    if (header) header.style.display = "none";
  });

  // Close sidebar
  function closeSidebar() {
    sidebar.style.display = "none";
    overlay.classList.remove("active");
    if (header) header.style.display = "flex";
  }

  // Re-query closeBtn after sidebar content update
  sidebar.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("close-btn")) {
      closeSidebar();
    }
  });
  overlay.addEventListener("click", closeSidebar);

  // Close sidebar when clicking a sidebar link
  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  });
});

// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.getElementById("navHeader");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    header.style.top = "-100px";
    header.style.transition = "0.5s";
  } else {
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
