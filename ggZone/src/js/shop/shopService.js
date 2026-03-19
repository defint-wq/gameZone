export const fetchAccounts = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed fetching accounts!!!");
  }

  return await response.json();
};
