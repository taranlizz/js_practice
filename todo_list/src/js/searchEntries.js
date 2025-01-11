import { renderList } from "./renderList";
import { loadEntriesFromLS } from "./storage";

const searchInput = document.querySelector("[data-search-input]");

const onSearchInput = (e) => {
  const inputValue = e.target.value.toLowerCase();
  const entries = loadEntriesFromLS().filter(
    (entry) =>
      entry.title.toLowerCase().includes(inputValue) ||
      entry.text.toLowerCase().includes(inputValue)
  );
  renderList(entries);
};

searchInput.addEventListener("input", onSearchInput);
