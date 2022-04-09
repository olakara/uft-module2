import React, { useState } from "react";
import BooksPresenter from "../books/BooksPresenter";

export default function BooksLister() {
  const [vm, setViewModel] = useState([]);
  const booksPresenter = new BooksPresenter();

  async function load() {
    await booksPresenter.load((booksVm) => {
      setViewModel(booksVm);
    });
  }

  async function handleAddBook() {
    const bookDto = {
      name: "Learn new skills",
      author: "Robert Wilson"
    };
    await booksPresenter.addBook(bookDto);
  }

  async function handleResetBooks() {
    await booksPresenter.resetBooks();
  }

  React.useEffect(() => {
    load();
  });

  return (
    <div>
      <ul>
        {vm.map((bookVm) => {
          return <li key={bookVm.id}>{bookVm.name}</li>;
        })}
      </ul>
      <button onClick={handleAddBook}>Add New Book</button>
      <button onClick={handleResetBooks}>Reset Books</button>
    </div>
  );
}
