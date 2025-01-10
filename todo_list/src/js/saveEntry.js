import { nanoid } from "nanoid";
import { addEntryToLS, loadEntriesFromLS, updateEntryFromLS } from "./storage";
import { renderList } from "./renderList";

const addEntryForm = document.querySelector("[data-form]");

const onAddEntrySubmit = (e) => {
  if (e.target.dataset.taskId) {
    return;
  }

  e.preventDefault();

  const { category, title, text } = Object.fromEntries(new FormData(e.target));

  addEntryToLS({ category, title, text, id: nanoid(), completed: false });

  renderList(loadEntriesFromLS());

  e.target.reset();
};

const onEditEntrySubmit = (e) => {
  if (!e.target.dataset.taskId) {
    return;
  }

  e.preventDefault();

  const updatedEntry = Object.fromEntries(new FormData(e.target));

  updatedEntry.id = e.target.dataset.taskId;

  updateEntryFromLS(updatedEntry);

  renderList(loadEntriesFromLS());

  delete e.target.dataset.taskId;
  e.target.reset();
};

addEntryForm.addEventListener("submit", onAddEntrySubmit);
addEntryForm.addEventListener("submit", onEditEntrySubmit);
