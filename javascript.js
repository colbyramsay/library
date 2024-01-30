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

const book0 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Y');

myLibrary[0] = book0;

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = `${myLibrary[0].title} by ${myLibrary[0].author}, ${myLibrary[0].pages} pages`;

container.appendChild(content);

let i = 1;

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let book = new Book(bookTitle, bookAuthor, bookPages);
    myLibrary[i] = book;
    console.table(myLibrary);
    myForm.reset();
    const content1 = document.createElement('div');
    content1.classList.add('content');
    content1.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages`;
    container.appendChild(content1);
    i+=1;
});

document.getElementById("myButton").addEventListener("click", function (event) {
    //event.preventDefault();
    const container2 = document.querySelector('#container2');
    container2.innerHTML = "";
    
    for (i = 0; i < myLibrary.length; i++) {
    
    const content2 = document.createElement('div');
    content2.classList.add('content');
    content2.textContent = `${myLibrary[i].title}`;

    container2.appendChild(content2);
    }
});

     

    
