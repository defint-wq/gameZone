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
        badgeClass,
        badge,
        title,
        rank,
        heroes,
        skins,
        winRate,
        region,
        price,
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
      <button class="btn-primary full-width">View Details</button>
    </div>
  `,
    )
    .join("");
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
