const addBookText = document.getElementById('add-book-text');
const addBookButton = document.getElementById('add-book-button');
const bookFormContainer = document.getElementById('book-form-container');
const bookForm = document.getElementById('book-form');
const bookFormCancelButton = document.getElementById('cancel');
const bookFormSubmitButton = document.getElementById('submit');

addBookButton.addEventListener('mouseover', function() {
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

    //clear the form
    bookForm.reset();
    bookFormContainer.style.display = '';
    addBookButton.style.display = '';
})

//Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}

const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
    //update display of library here
}