const addBookText = document.getElementById('add-book-text'); // connect html elements to the dom
const addBookButton = document.getElementById('add-book-button');
const bookFormContainer = document.getElementById('book-form-container');
const bookForm = document.getElementById('book-form');
const bookFormCancelButton = document.getElementById('cancel');
const bookFormSubmitButton = document.getElementById('submit');
const userCardContainer = document.getElementById('card-container');
const userCard = document.getElementById('user-card');

addBookButton.addEventListener('mouseover', function() { //events to trigger form appearance
    addBookText.style.display = 'block';
})
addBookButton.addEventListener('mouseout', function() {
    addBookText.style.display = '';
})
addBookButton.addEventListener('click', function() {
    bookFormContainer.style.display = 'block';
    addBookButton.style.display = 'none';
})
bookFormCancelButton.addEventListener('click', function() {
    bookFormContainer.style.display = '';
    addBookButton.style.display = '';
    bookForm.reset();
})
bookFormSubmitButton.addEventListener('click', function(event) {
    event.preventDefault(); //prevent from from submitting and refreshing page
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;  // attach variables to form elements
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read-status').checked;

    //create a new Book object and add to library
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();

    //clear the form
    bookForm.reset();
    bookFormContainer.style.display = '';
    addBookButton.style.display = '';
    console.log(myLibrary);
})

//Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

const myLibrary = [];
//////////////////////////////////////////////// test books
const initialBook = new Book("The Philosopher's Stone", "J.K. Rowling", 223, true);
addBookToLibrary(initialBook);
const secondBook = new Book("The Chamber of Secrets", "J.K. Rowling", 384, false);
addBookToLibrary(secondBook);
const third = new Book("The Prisoner of Azkaban", "J.K. Rowling", 317, true);
addBookToLibrary(third);
const fourth = new Book("The Goblet of Fire", "J.K. Rowling", 636, false);
addBookToLibrary(fourth);
displayBooks();
////////////////////////////////////////////////

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    userCardContainer.innerHTML = '';

    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary.length <= 0) return
        if (myLibrary.length > 0) {
            const book = myLibrary[i];
            
            const bookDiv = document.createElement('div');

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = `"${book.title}"`;

            const bookAuthor = document.createElement('h2');
            bookAuthor.textContent = `by ${book.author}`;

            const bookPages = document.createElement('h2');
            bookPages.textContent = `${book.pages} pages`;

            const domReadButton = document.createElement('button');
            domReadButton.textContent = 'Read';

            const domRemoveButton = document.createElement('button');
            domRemoveButton.textContent = 'Remove';

            bookDiv.classList.add('domBookCard');
            domReadButton.classList.add('domReadButton');
            domReadButton.classList.add('button');
            domRemoveButton.classList.add('domRemoveButton');
            domRemoveButton.classList.add('button');

            userCardContainer.appendChild(bookDiv);
            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookAuthor);
            bookDiv.appendChild(bookPages);
            bookDiv.appendChild(domReadButton);
            bookDiv.appendChild(domRemoveButton);
        }
    }
}

// add read button toggle
// add function to remove button to remove object