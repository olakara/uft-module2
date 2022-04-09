import React, { useState } from "react";
import BooksPresenter from "../books/BooksPresenter";

export default function BooksLister() {
  const [vm, setViewModel] = useState([]);
  const booksPresenter = new BooksPresenter();

  React.useEffect(() => {
    async function load() {
      await booksPresenter.load((booksVm) => {
        setViewModel(booksVm);
      });
    }
    load();
  }, []);

  return (
    <div>
      <ul>
        {vm.map((bookVm) => {
          return <li key={bookVm.id}>{bookVm.name}</li>;
        })}
      </ul>
    </div>
  );
}
