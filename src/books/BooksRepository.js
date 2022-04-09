import HttpGateway from "../shared/HttpGateway.js";
import Observable from "../shared/Observable.js";
class BooksRepository {
  url = "https://api.logicroom.co/api/olakara@gmail.com/books";
  resetUrl = "https://api.logicroom.co/api/olakara@gmail.com/reset";
  http = null;
  programmersModel = null;

  constructor() {
    this.http = new HttpGateway();
    this.programmersModel = new Observable([]);
  }

  getAllBooks = async (callback) => {
    this.programmersModel.subscribe(callback);
    await this.loadData();
    this.programmersModel.notify();
  };

  addBook = async (bookPm) => {
    await this.postData(bookPm);
    await this.loadData();
    this.programmersModel.notify();
  };

  resetBooks = async () => {
    await this.http.get(this.resetUrl);
    await this.loadData();
    this.programmersModel.notify();
  };

  loadData = async () => {
    const booksDto = await this.http.get(this.url);
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };

  postData = async (bookDto) => {
    const result = await this.http.post(this.url, bookDto);
    console.log(result);
  };
}
const booksRepository = new BooksRepository();
export default booksRepository;
