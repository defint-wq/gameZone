export const ViewDetailModal = ({ title, image }) => {
  const modal = document.getElementById("accountModal");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h2>${title}</h2>
    <img src="${image}" style="width:100%; border-radius:10px;">
  `;

  modal.style.display = "block";

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
};

export const renderFilterInfo = (filters) => {
  const filterInfo = document.getElementById("filterInfo");
  if (!filterInfo) return;

  const active = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`);

  filterInfo.textContent = active.length
    ? `Active filters: ${active.join(", ")}`
    : "No active filters";
};
