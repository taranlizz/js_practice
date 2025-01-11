import { renderList } from "./renderList";
import { loadEntriesFromLS } from "./storage";

const filterBtnList = document.querySelector("[data-filter-list]");

const onFilterBtnClick = (e) => {
  if (e.target.nodeName !== "BUTTON") return;

  const filterValue = e.target.dataset.filter;

  const allEntries = loadEntriesFromLS();

  const filteredEntries =
    filterValue === "Всі"
      ? allEntries
      : allEntries.filter((entry) => entry.category === filterValue);

  renderList(filteredEntries);
};

filterBtnList.addEventListener("click", onFilterBtnClick);
