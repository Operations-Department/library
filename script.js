const addBookText = document.getElementById('add-book-text');
const addBookButton = document.getElementById('add-book-button');
const bookForm = document.getElementById('book-form');
const bookFormCancelButton = document.getElementById('cancel');

addBookButton.addEventListener('mouseover', function () {
    addBookText.style.display = 'block';
})
addBookButton.addEventListener('mouseout', function () {
    addBookText.style.display = '';
})
addBookButton.addEventListener('click', function () {
    bookForm.style.display = 'block';
    addBookButton.style.display = 'none';
})
bookFormCancelButton.addEventListener('click', function () {
    bookForm.style.display = '';
    addBookButton.style.display = '';
})



const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
    this.info = function () {
        return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
    }
}

function addBookToLibrary() {
    //do stuff
}