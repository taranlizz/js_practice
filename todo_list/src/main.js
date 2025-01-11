import "./js/formControllers";
import "./js/entryControllers";
import "./js/saveEntry";
import "./js/searchEntries";
import "./js/filterEntries";

import { loadEntriesFromLS } from "./js/storage";
import { renderList } from "./js/renderList";

renderList(loadEntriesFromLS());
