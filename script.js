let library = document.querySelector(".library")

let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title; 
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function() {
        return (`${title} by ${author}, ${pages}, ${read}`);
   }
}

function addBookToLibrary() {
    myLibrary.forEach(book => {
      const bookNode = document.createElement('div');
      const bookItem = document.createTextNode(`${book.title}, ${book.author}, ${book.pages}, ${book.read}`);
      bookNode.appendChild(bookItem);
      library.appendChild(bookNode);
    });
}

book1 = new Book('Game of Thrones', 'George RR Martin', '132', 'True')
book2 = new Book('Hobbit', 'J.R.R Tolkien', '457', 'True')
myLibrary.push(book1)
myLibrary.push(book2)


// function myFunction() {
//     let x = document.querySelector("#input-book");
//     let text = "";
//     let i;
//     for (i = 0; i < x.length ;i++) {
//       text += x.elements[i].value + "<br>";
//     }
//     let demo = document.querySelector("#demo");
//     demo.innerHTML = text;
// };

/*Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.

can access input values 
by using queryslector/ id selector then as an object.
eg x.Title.value
*/
