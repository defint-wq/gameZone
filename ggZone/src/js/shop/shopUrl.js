export const getFilterFromUrl = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
    search: params.get("search") || "",
  };
};

export const filterAccounts = (accounts, filters) => {
  return accounts.filter((account) => {
    const price = Number(account.price) || 0;
    const min = filters.minPrice ? Number(filters.minPrice) : null;
    const max = filters.maxPrice ? Number(filters.maxPrice) : null;

    const searchTerm = (filters.search || "").toLowerCase().trim();

    const matchMinPrice = min === null || price >= min;
    const matchMaxPrice = max === null || price <= max;

    const accountTitle = (account.title || "").toLowerCase();
    const accountRank = (account.rank || "").toLowerCase();

    const matchSearch =
      !searchTerm ||
      accountTitle.includes(searchTerm) ||
      accountRank.includes(searchTerm);

    return matchMinPrice && matchMaxPrice && matchSearch;
  });
};

export const updateUrlParams = (filters) => {
  const params = new URLSearchParams();

  if (filters.minPrice) params.set("minPrice", filters.minPrice);
  if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
  if (filters.search) params.set("search", filters.search);

  window.location.href = `shop.html?${params.toString()}`;
};
