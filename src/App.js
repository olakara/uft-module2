import AddBook from "./components/AddBook.js";
import BooksLister from "./components/BooksLister.js";
import ResetBooks from "./components/ResetBooks.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>List Of Books</h1>
      <BooksLister />
      <AddBook />
      <ResetBooks />
    </div>
  );
}
