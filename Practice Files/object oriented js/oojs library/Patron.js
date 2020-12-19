class Patron {
  constructor (name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
  }

  checkoutBook (book) {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    this.currentBook = book.title;
    book.patron = this.name;
    book.out = true;
    book.dueDate = dueDate;
  }

  returnBook (book) {
    this.currentBook = null;
    book.patron = null;
    book.out = false;
    book.dueDate = null;
  }
}
