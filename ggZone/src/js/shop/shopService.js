export const fetchAccounts = async (url) => {
  const response = await fetch(
    `http://localhost:3000/api/accounts?${params.toString()}`,
  );
  if (!response.ok) {
    throw new Error("Failed fetching accounts!!!");
  }

  return await response.json();
};

export const fetchFilteredAccounts = async (filters) => {
  const params = new URLSearchParams();

  if (filters.minPrice) params.set("minPrice", filters.minPrice);
  if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
  if (filters.search) params.set("search", filters.search);

  const response = await fetch(
    `http://localhost:3000/api/accounts?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`Server Error: ${response.status}`);
  }

  return response.json(); // filtered accounts[]
};
