let library = document.querySelector(".library") // display container
let addBook = document.querySelector("#addBook") // add bk button
let addBk = document.querySelector('.add-book')
//Book list
let myLibrary = [];
// examples
let book1 = new Book('Game of Thrones', 'George RR Martin', '132', 'True')
let book2 = new Book('Hobbit', 'J.R.R Tolkien', '457', 'True')
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

      //create the book accessing each objects values
      const bookItem = document.createTextNode(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`);

      // create remove button
      const removeButton = document.createElement('button')
      removeButton.textContent = 'X'
      removeButton.classList.add('remove-button');
      removeButton.dataset.number = i;

      // create button to switch read or unread
      const readButton = document.createElement('button')
      readButton.textContent = 'Read'
      readButton.classList.add('read-button')
      readButton.dataset.number = i;

      bookNode.appendChild(bookItem);
      bookNode.appendChild(removeButton);
      bookNode.appendChild(readButton);
      library.appendChild(bookNode);
      i++;
    });
  };
//remove book button USING EVENT BUBBLING SIKKVUNT YO ALSO add for switching read
library.addEventListener("click", (e) => {
  if (e.target.classList.contains('remove-button')) {
    let index = e.target.getAttribute('data-number');
    if (index > -1) {
      myLibrary.splice(index, 1);
    };
    addBookToLibrary()
  };
  if (e.target.classList.contains('read-button')) {
    let index = e.target.getAttribute('data-number');
    if (myLibrary[index].read == 'True') {
      myLibrary[index].read = 'False';
    } else if (myLibrary[index].read == 'False') {
      myLibrary[index].read = 'True';
    };
    addBookToLibrary()
  };
});

//add book button
addBook.addEventListener("click", (e) => {
  if (title.value == '' || author.value == '' || pages.value == '' || !document.querySelector("#input-book").choice.value)  {
    alert("Please fill in all the fields")
    e.preventDefault(); // prevent page refresh
  }
  else {
    let book = new Book(title.value, author.value, pages.value, document.querySelector("#input-book").choice.value);
    e.preventDefault();
    myLibrary.push(book);
    addBookToLibrary();
    form1.style.display = 'none'
  }
});
let form1 = document.querySelector('.form');
addBk.addEventListener('click', () => {
  //document.body.style.opacity ='0.4';
  // pop out new div with form
  form1.style.display = 'block'
  form1.style.opacity = '1'
  // submit all the goodies
  // 

});