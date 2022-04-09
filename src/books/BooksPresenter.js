import booksRepository from "./BooksRepository";

export default class BooksPresenter {
  load = async (callback) => {
    booksRepository.getAllBooks((booksPm) => {
      const booksVm = booksPm.map((bookPm) => {
        return {
          name: bookPm.name,
          id: bookPm.bookId
        };
      });
      callback(booksVm);
    });
  };

  addBook = async (bookDto) => {
    booksRepository.addBook(bookDto);
  };

  resetBooks = async () => {
    booksRepository.resetBooks();
  };
}
