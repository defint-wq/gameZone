export const renderAccounts = (accounts) => {
  const shopGrid = document.getElementById("shopGrid");
  if (!shopGrid) return;

  if (!accounts.length) {
    shopGrid.innerHTML = "<p>No accounts found.</p>";
    return;
  }

  shopGrid.innerHTML = accounts
    .map(
      ({
        id,
        badgeClass,
        badge,
        title,
        rank,
        heroes,
        skins,
        winRate,
        region,
        price,
        likes,
        image,
      }) => `
    <div class="card-interactive">
      <div class="account-badge ${badgeClass}">${badge}</div>
      <h3>${title}</h3>
      <div class="account-details">
        <p><strong>Rank:</strong> ${rank}</p>
        <p><strong>Heroes:</strong> ${heroes}/120</p>
        <p><strong>Skins:</strong> ${skins} Premium</p>
        <p><strong>Win Rate:</strong> ${winRate}%</p>
        <p><strong>Region:</strong> ${region}</p>
      </div>
      <div class="account-price">
        <span class="price-label">Price:</span>
        <span class="price-value">$${price}</span>
      </div>
      <button 
        class="btn-primary full-width"
        onclick="openModal('${title}', '${image}')"
      >
        View Details
      </button>
      <div class="col">
        <button class="btn-secondary col" onclick="addLike(${id}, this)">Like</button> 
        <div class="like" id="likes-${id}" data-liked="false">❤️ ${likes}</div>     
      </div>
    </div>
  `,
    )
    .join("");
};

window.addLike = (id, btn) => {
  const likeText = document.getElementById(`likes-${id}`);
  if (!likeText) return;

  let count = Number(likeText.textContent.replace("❤️ ", "")) || 0;
  const liked = likeText.dataset.liked === "true";

  if (liked) {
    count--;
    likeText.dataset.liked = "false";
    btn.textContent = "Like";
  } else {
    count++;
    likeText.dataset.liked = "true";
    btn.textContent = "Liked";
  }

  likeText.textContent = `❤️ ${count}`;
};

window.openModal = (title, image) => {
  const modal = document.getElementById("accountModal");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h2>${title}</h2>
    <img src="${image}" style="width:100%; border-radius:10px;">
  `;

  modal.style.display = "block";
};

const closeBtn = document.getElementById("closeModal");

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    document.getElementById("accountModal").style.display = "none"
  })
}

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
