function showAuthModal() {
  const modal = document.getElementById("authModal");

  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");

  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

document.getElementById("authModal")?.addEventListener("click", (e) => {
  if (e.target.id === "authModal") {
    closeAuthModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAuthModal();
  }
});

document.querySelector("#signin")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign in functionality would be connected to backend!");
  closeAuthModal();
});

document.querySelector("#signup")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign up functionality would be connected to backend!");
  closeAuthModal();
});
