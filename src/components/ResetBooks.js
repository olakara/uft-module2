import BooksPresenter from "../books/BooksPresenter";

export default function ResetBooks() {
  const booksPresenter = new BooksPresenter();
  return (
    <button
      onClick={() => {
        booksPresenter.resetBooks();
      }}
    >
      Reset Books
    </button>
  );
}
