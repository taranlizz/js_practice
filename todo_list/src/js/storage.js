export const saveEntriesToLS = (entries) => {
  try {
    const serializedEntries = entries
      ? JSON.stringify(entries)
      : JSON.stringify([]);
    localStorage.setItem("entries", serializedEntries);
  } catch (error) {
    console.log("Error saving entries: ", error.message);
  }
};

export const loadEntriesFromLS = () => {
  try {
    const retrievedEntries = localStorage.getItem("entries");
    return retrievedEntries === null ? [] : JSON.parse(retrievedEntries);
  } catch (error) {
    console.log("Error loading entries: ", error.message);
    return [];
  }
};

export const loadEntryFromLS = (id) => {
  const entries = loadEntriesFromLS();
  const entry = entries.find((entry) => entry.id === id);

  if (!entry) {
    console.log(`No entry found with id: ${id}`);
    return null;
  }

  return entry;
};

export const addEntryToLS = (entry) => {
  try {
    const entries = loadEntriesFromLS();
    entries.unshift(entry);
    saveEntriesToLS(entries);
  } catch (error) {
    console.log("Error adding entry: ", error.message);
  }
};

export const updateEntryFromLS = (updatedEntry) => {
  try {
    const entries = loadEntriesFromLS();
    const exists = entries.some((entry) => entry.id === updatedEntry.id);

    if (!exists) {
      console.log(`No entry found with id: ${updatedEntry.id}`);
      return;
    }
    const updatedEntries = entries.map((entry) => {
      return entry.id === updatedEntry.id ? updatedEntry : entry;
    });
    saveEntriesToLS(updatedEntries);
  } catch (error) {
    console.log("Error updating entry: ", error.message);
  }
};

export const deleteEntryFromLS = (id) => {
  try {
    const entries = loadEntriesFromLS();
    const updatedEntries = entries.filter((entry) => entry.id !== id);

    if (entries.length === updatedEntries.length) {
      console.log(`No entry found with id: ${id}`);
    }

    saveEntriesToLS(updatedEntries);
  } catch (error) {
    console.log("Error deleting entry: ", error.message);
  }
};
