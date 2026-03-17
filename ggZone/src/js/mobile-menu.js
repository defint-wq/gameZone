const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.querySelector(".sidebar");

if (mobileMenuBtn && sidebar) {
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
  });
}

function closeMobileMenu() {
  if (sidebar) {
    sidebar.classList.remove("mobile-open");
  }
}

document.addEventListener("click", (e) => {
  if (
    sidebar &&
    mobileMenuBtn &&
    sidebar.classList.contains("mobile-open") &&
    !sidebar.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});
