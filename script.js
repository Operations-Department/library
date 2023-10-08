const addBookText = document.getElementById('add-book-text'); // connect html elements to the dom
const addBookButton = document.getElementById('add-book-button');
const bookFormContainer = document.getElementById('book-form-container');
const bookFormOverlay = document.getElementById('book-form-overlay');
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
    bookFormOverlay.style.display = 'block';
    addBookButton.style.display = 'none';
})
bookFormCancelButton.addEventListener('click', function() {
    bookFormContainer.style.display = '';
    bookFormOverlay.style.display = '';
    addBookButton.style.display = '';
    bookForm.reset();
})

let formIsValid;

bookFormSubmitButton.addEventListener('click', function(event) {
    formIsValid = false;
    validateForm(); //forces html input requirements
    if (formIsValid === false) return;
    event.preventDefault(); //prevent form from submitting and refreshing page
    const title = document.getElementById('title').value; // attach variables to form elements
    const author = document.getElementById('author').value;  
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read-status').checked;

    //create a new Book object and add to library
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();

    //clear the form and overlay
    bookForm.reset();
    bookFormContainer.style.display = '';
    bookFormOverlay.style.display = '';
    addBookButton.style.display = '';
})

//forces html input requirements
function validateForm() {
    let titleField = document.forms['book-form']['title'].value;
    let authorField = document.forms['book-form']['author'].value;
    let pagesField = document.forms['book-form']['pages'].value;
    if (titleField == '') return false;
    if (authorField == '') return false;
    if (pagesField == '') return false;
    return formIsValid = true;
}

//book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}


Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; //toggle the "read" status
}

const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() { //displays each object in array to page
    userCardContainer.innerHTML = '';

    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary.length <= 0) return
        if (myLibrary.length > 0) {
            const book = myLibrary[i];
            
            //create each element of book card
            const bookDiv = document.createElement('div');

            const bookTitle = document.createElement('h2');
            bookTitle.textContent = `"${book.title}"`;

            const bookAuthor = document.createElement('h2');
            bookAuthor.textContent = `by ${book.author}`;

            const bookPages = document.createElement('h2');
            bookPages.textContent = `${book.pages} pages`;

            const domReadButton = document.createElement('button');
            domReadButton.textContent = 'Read';
            if (book.read) { //correct read-status orientation from the outset
                domReadButton.classList.remove('not-read-yet');
                domReadButton.classList.add('already-read');
                domReadButton.textContent = 'Completed!';
            } else {
                domReadButton.classList.remove('already-read');
                domReadButton.classList.add('not-read-yet');
                domReadButton.textContent = 'Not read yet';
            }

            const domRemoveButton = document.createElement('button');
            domRemoveButton.textContent = 'Remove';

            bookDiv.classList.add('domBookCard'); // add css to book elements
            domReadButton.classList.add('domReadButton');
            domReadButton.classList.add('button');
            domRemoveButton.classList.add('domRemoveButton');
            domRemoveButton.classList.add('button');

            userCardContainer.appendChild(bookDiv); //add book and book elements to page
            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookAuthor);
            bookDiv.appendChild(bookPages);
            bookDiv.appendChild(domReadButton);
            bookDiv.appendChild(domRemoveButton);

            domReadButton.addEventListener('click', function() {
                const bookIndex = myLibrary.indexOf(book); //find the index of the book associated with this button
                
                if (bookIndex !== -1) {
                    const book = myLibrary[bookIndex]; //access the specific book object
                    book.toggleReadStatus();

                if (book.read) { //change read button, 
                    domReadButton.classList.remove('not-read-yet');
                    domReadButton.classList.add('already-read');
                    domReadButton.textContent = 'Completed!';
                } else {
                    domReadButton.classList.remove('already-read');
                    domReadButton.classList.add('not-read-yet');
                    domReadButton.textContent = 'Not read yet';
                }
                }
            })

            domRemoveButton.addEventListener('click', function() {
                const bookIndex = myLibrary.indexOf(book); //find book index
                if (bookIndex !== -1) myLibrary.splice(bookIndex, 1); //remove index
                displayBooks(); //update display
            })
        }
    }
}