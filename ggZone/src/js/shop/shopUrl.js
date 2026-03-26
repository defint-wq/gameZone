export const getFilterFromUrl = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
    search: params.get("search") || "",
  };
};

export const updateUrlParams = (filters) => {
  const params = new URLSearchParams();

  if (filters.minPrice) params.set("minPrice", filters.minPrice);
  if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
  if (filters.search) params.set("search", filters.search);

  window.location.href = `shop.html?${params.toString()}`;
};
