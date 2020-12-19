class Library {
  constructor () {
    this.books = [];
    this.patrons = [];
    this.dailyFine = 0.1;
  }

  addBook (obj) {
    this.books.push(obj);
  }

  addPatron (obj) {
    this.patrons.push(obj);
  }

  chargeFines () {
    const now = new Date();
    const latePatrons = this.patrons.filter(
      (patron) => patron.currentBook !== null && patron.currentBook.dueDate < now
    );
    for (let patron of latePatrons) {
      const dateDiff = new Date(now - patron.currentBook.dueDate);
      const daysLate = dateDiff.getDate();
      patron.balance += this.dailyFine * daysLate;
    }
  }
}
