class Patron {
  constructor (name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
  }

  checkout (book) {
    this.currentBook = book;
  }

  returnBook () {
    this.currentBook = null;
  }
}
