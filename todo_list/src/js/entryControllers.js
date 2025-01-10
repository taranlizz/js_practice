import { renderList } from "./renderList";
import {
  deleteEntryFromLS,
  loadEntryFromLS,
  loadEntriesFromLS,
  updateEntryFromLS,
} from "./storage";

const entryList = document.querySelector("[data-list]");
const openFormBtn = document.querySelector("[data-open]");
const addEntryForm = document.querySelector("[data-form]");

const onEditBtnClick = (e) => {
  if (!e.target.hasAttribute("data-edit")) {
    return;
  }

  openFormBtn.classList.add("is-hidden");
  addEntryForm.classList.remove("is-hidden");

  const entryItemId = e.target.closest("[data-id]").dataset.id;

  addEntryForm.dataset.taskId = entryItemId;

  const entry = loadEntryFromLS(entryItemId);

  Object.keys(entry).forEach((key) => {
    if (key !== "id" && key !== "completed") {
      addEntryForm.elements[key].value = entry[key];
    }
  });
};

const onDeleteBtnClick = (e) => {
  if (!e.target.hasAttribute("data-delete")) {
    return;
  }

  const entryItemId = e.target.closest("[data-id]").dataset.id;

  deleteEntryFromLS(entryItemId);

  renderList(loadEntriesFromLS());
};

const onStatusBtnClick = (e) => {
  if (!e.target.hasAttribute("data-change")) {
    return;
  }

  const entryItem = e.target.closest("[data-id]");
  const entryItemId = entryItem.dataset.id;
  const entryItemStatus = entryItem.dataset.completed === "true";

  const entry = loadEntryFromLS(entryItemId);

  entry.completed = !entryItemStatus;
  entryItem.dataset.completed = !entryItemStatus;

  updateEntryFromLS(entry);
  renderList(loadEntriesFromLS());
};

entryList.addEventListener("click", onEditBtnClick);
entryList.addEventListener("click", onDeleteBtnClick);
entryList.addEventListener("click", onStatusBtnClick);
