// shopView.js
import { AccountCard } from "./components/AccountCard.js";
import { ViewDetailModal } from "./components/ViewDetail.js";

export const renderAccounts = (accounts) => {
  const shopGrid = document.getElementById("shopGrid");
  if (!shopGrid) return;

  shopGrid.innerHTML = accounts.map(AccountCard).join("");

  shopGrid.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = e.currentTarget.dataset.title;
      const image = e.currentTarget.dataset.image;
      ViewDetailModal({ title, image });
    });
  });

  shopGrid.querySelectorAll(".btn-like").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const likeDiv = document.getElementById(`likes-${id}`);
      if (!likeDiv) return;

      let count = Number(likeDiv.textContent.replace("❤️ ", "")) || 0;
      const liked = likeDiv.dataset.liked === "true";

      if (liked) {
        count--;
        likeDiv.dataset.liked = "false";
        e.currentTarget.textContent = "Like";
      } else {
        count++;
        likeDiv.dataset.liked = "true";
        e.currentTarget.textContent = "Liked";
      }

      likeDiv.textContent = `❤️ ${count}`;
    });
  });
};

// Фильтр мэдээлэл
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