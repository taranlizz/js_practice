import "./js/formControllers";
import "./js/entryControllers";
import "./js/saveEntry";

import { loadEntriesFromLS } from "./js/storage";
import { renderList } from "./js/renderList";

renderList(loadEntriesFromLS());
