import BooksPresenter from "../books/BooksPresenter";

export default function AddBook() {
  const booksPresenter = new BooksPresenter();
  return (
    <button
      onClick={() => {
        const bookDto = {
          name: "Learn new skills",
          author: "Robert Wilson"
        };
        booksPresenter.addBook(bookDto);
      }}
    >
      Add New Book
    </button>
  );
}
