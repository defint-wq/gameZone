import { Account } from "./shopModel.js";
import { fetchAccounts } from "./shopService.js";
import {
  filterAccounts,
  getFilterFromUrl,
  updateUrlParams,
} from "./shopUrl.js";
import { renderAccounts, renderFilterInfo } from "./shopView.js";

let allAccounts = [];

const shopPage = async () => {
  try {
    if (allAccounts.length === 0) {
      const data = await fetchAccounts("../data/accounts.json");
      allAccounts = data.map((item) => new Account(item));
    }

    const filters = getFilterFromUrl();

    const filteredAccount = filterAccounts(allAccounts, filters);

    renderFilterInfo(filters);
    renderAccounts(filteredAccount);

    setupSearch(filters);
  } catch (error) {
    console.error("Error:", error);
  }
};

const setupSearch = (currentFilters) => {
  const searchInput = document.getElementById("searchInput");
  const minInput = document.getElementById("minPriceInput");
  const maxInput = document.getElementById("maxPriceInput");
  const searchBtn = document.getElementById("searchBtn");

  if (searchInput && currentFilters.search)
    searchInput.value = currentFilters.search;
  if (minInput && currentFilters.minPrice)
    minInput.value = currentFilters.minPrice;
  if (maxInput && currentFilters.maxPrice)
    maxInput.value = currentFilters.maxPrice;

  const handleSearch = () => {
    const newFilters = {
      search: searchInput ? searchInput.value.trim() : "",
      minPrice: minInput ? minInput.value : "",
      maxPrice: maxInput ? maxInput.value : "",
    };

    updateUrlParams(newFilters);
  };

  searchBtn?.addEventListener("click", handleSearch);

  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  [minInput, maxInput].forEach((input) => {
    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSearch();
    });
  });
};

shopPage();
