class Book {
  constructor (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.out = false;
    this.dueDate = null;
  }

  set setOut (bool) {
    this.out = bool;
    if (bool) {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() - 14);
      this.dueDate = dueDate;
    } else {
      this.dueDate = null;
    }
  }

  get getOut () {
    return this.out;
  }
}
