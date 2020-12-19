class Patron {
  constructor (name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
    this.balace = 0;
  }

  checkoutBook (book) {
    this.currentBook = book.title;
    book.patron = this.name;
    book.setOut = true;
  }

  returnBook (book) {
    this.currentBook = null;
    book.patron = null;
    book.setOut = false;
  }
}
