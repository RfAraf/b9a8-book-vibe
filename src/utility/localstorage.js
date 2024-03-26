const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooks = (id) => {
  const storedBooks = getStoredBooks();
  console.log(storedBooks);
  const exists = storedBooks.find((idOfBook) => idOfBook === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooks };
