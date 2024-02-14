const myLibary = [];

function Book (name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function AddBookToLibary () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read)
    myLibary.push(newBook);
    render();
    console.log(newBook)
}

function render() {
    const display =  document.querySelector(".Library")
    const books =  document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book))

    for(let i = 0; i < myLibary.length; i++) {
        createBook(myLibary[i]);
    }
}

let newBookBtn = document.getElementById("new-book-btn")
newBookBtn.addEventListener('click', function() {
    let bookForm = document.getElementById("book-form")
    bookForm.style.display = "flex";
})

bookForm = document.getElementById("book-form")

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    AddBookToLibary();
    bookForm.reset();
    bookForm.style.display = "none";
})

function createBook(item) {
    const Library = document.querySelector('.Library');
    const bookDiv =  document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button')

    bookDiv.classList.add("book");
    Library.appendChild(bookDiv);

    titleDiv.textContent ="Title:" + " " + item.name;
    titleDiv.classList.add("title");
    bookDiv.appendChild(titleDiv);
   
    authorDiv.textContent = "Author:" + " " + item.author;
    authorDiv.classList.add("author");
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = "Pages:" + " " + item.pages;
    pagesDiv.classList.add("pages");
    bookDiv.appendChild(pagesDiv);

    readBtn.classList.add("readBtn")
    bookDiv.appendChild(readBtn);
    if(item.read === false) {
        readBtn.textContent = "not read";
        readBtn.style.backgroundColor = "red";

    } else if(item.read === true) {
        readBtn.textContent = "read";
        readBtn.style.backgroundColor = "green";
    }

    removeBtn.textContent = "remove";
    removeBtn.classList.add("removeBtn")
    bookDiv.appendChild(removeBtn)

    removeBtn.addEventListener('click', function() {
      myLibary.splice(myLibary.indexOf(item), 1);

      render();
    })
   
    readBtn.addEventListener('click', () => {
        if(item.read === false) {
        item.read = true
    } else if (item.read === true) {
        item.read = false;
    }
    render();
    })
}