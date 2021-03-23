// Only change code below this line
class Book {
    constructor(title) {
        this._title = title;
    }
    // getter
    get title() {
        return this._title;
    }
    // setter
    set title (newTitle) {
        this._title = newTitle;
    }
}
const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince.title); // The Little Prince
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;