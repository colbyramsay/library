const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'already read');

function addBookToLibrary() {
  // do stuff here
}

myLibrary[0] = book1;

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = `${myLibrary[0].title} by ${myLibrary[0].author}`;

container.appendChild(content);

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let bookTitle = document.getElementById("title").value;
    /*alert("The book title is " + bookTitle + "!");*/
    const book2 = new Book(bookTitle);
    myLibrary[1] = book2;
    alert(myLibrary[1].title);
    console.table(myLibrary);

});