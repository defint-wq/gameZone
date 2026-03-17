document.addEventListener("DOMContentLoaded", () => {
  console.log("🎮 MLBB GameZone Initialized!");
  console.log("All systems ready!");

  addRevealAnimationStyles();
  initScrollReveal();
  initStatsAnimation();
});

const searchInput = document.querySelector(".input-search");

searchInput?.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  console.log("Searching for:", query);
});
