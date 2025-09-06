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

const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("closeBtn");
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("navHeader");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active"); //opens sidebar
  header.style.display = "none";
  overlay.style.display = "block";
});

function closeSidebar() {
  sidebar.classList.remove("active"); //closes sidebar
  header.style.display = "flex";
  overlay.style.display = "none";
}

closebtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    //If the key pressed === escape key
    closeSidebar();
  }
});

// Close sidebar when clicking a sidebar link
sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
