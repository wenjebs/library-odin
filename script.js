let library = document.querySelector(".library") // display container
let addBook = document.querySelector("#addBook") // add bk button
//Book list
let myLibrary = [];
// examples
book1 = new Book('Game of Thrones', 'George RR Martin', '132', 'True')
book2 = new Book('Hobbit', 'J.R.R Tolkien', '457', 'True')
myLibrary.push(book1)
myLibrary.push(book2)
addBookToLibrary()
//Constructor
function Book(title, author, pages, read) {
   this.title = title; 
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function() {
        return (`${title} by ${author}, ${pages}, ${read}`);
   };
};
//Display book onto page
function addBookToLibrary() {
    library.textContent = ''; // clear library
    let i = 0;
    myLibrary.forEach(book => {
      const bookNode = document.createElement('div');
      bookNode.dataset.number = i;
      // create remove button
      const removeButton = document.createElement('button')
      removeButton.textContent = 'X'
      removeButton.classList.add('remove-button');
      removeButton.dataset.number = i;
      const bookItem = document.createTextNode(`${book.title}, ${book.author}, ${book.pages}, ${book.read}`);
      bookNode.appendChild(bookItem);
      bookNode.appendChild(removeButton);
      library.appendChild(bookNode);
      i++;
    });

//remove book button USING EVENT BUBBLING SIKKVUNT YO
library.addEventListener("click", (e) => {
  if (e.target.classList.contains('remove-button')) {
    let index = e.target.getAttribute('data-number');
    if (index > -1) {
      myLibrary.splice(index, 1);
    };
  };
  addBookToLibrary()
});

//add book button
addBook.addEventListener("click", (e) => {
  if (title.value == '' || author.value == '' || pages.value == '' || !document.querySelector("#input-book").choice.value)  {
    console.log("Please fill in all the fields")
    e.preventDefault(); // prevent page refresh
  }
  else {
    let book = new Book(title.value, author.value, pages.value, document.querySelector("#input-book").choice.value);
    e.preventDefault();
    myLibrary.push(book);
    addBookToLibrary();
  }
});

