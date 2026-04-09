export const AccountCard = ({
  id,
  title,
  rank,
  price,
  likes,
  image,
  badgeClass = "",
  badge = "",
  heroes = 0,
  skins = 0,
  winRate = 0,
  region = "",
}) => {
  return `
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
  <!-- View Details button -->
  <button class="btn-primary full-width view-btn" data-title="${title}" data-image="${image}">
    View Details
  </button>
  <div class="col">
    <!-- Like button -->
    <button class="btn-secondary btn-like" data-id="${id}">Like</button>
    <div class="like" id="likes-${id}" data-liked="false">❤️ ${likes}</div>
  </div>
</div>
`;
};
