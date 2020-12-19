class Library {
  constructor () {
    this.books = [];
    this.patrons = [];
  }

  addBook (obj) {
    this.books.push(obj);
  }

  addPatron (obj) {
    this.patrons.push(obj);
  }
}
