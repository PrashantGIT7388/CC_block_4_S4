// console.log("prashant")

const { title } = require("process");

// function sayHello() {
//   console.log(message);
//   var message = "Hello!";
//   return message;
// }
// let a=sayHello();
// console.log(a)


// Question 11

// let age=28;
// function displayage(age){
// console.log(age)
// }
// function changeage(age){
// age =26;
// }

// displayage(age)
// changeage(age)

// Declare a global variable age and assign a value to it
// let age = 25;

// // Create a function displayAge that logs the value of age
// function displayAge() {
//     console.log("Current age is:", age);
// }

// // Create a second function changeAge, which changes the value of age
// function changeAge(newAge) {
//     age = newAge;
//     console.log("Age changed to:", age);
// }

// // Call displayAge and changeAge
// displayAge(); // Output: Current age is: 25
// changeAge(30); // Output: Age changed to: 30
// displayAge(); // Output: Current age is: 30
// changeAge(42); // Output: Age changed to: 42
// displayAge(); // Output: Current age is: 42

// Question 12

const library = {

books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

addBook(book) {

if (!book.title || !book.author || !book.year) {

console.log("Book information is incomplete.");

return;

}
this.books.push(book);

},

findBookByTitle(title) {

return this.books.find(book => book.title === title);

},

removeBook(title) {

const index = this.books.findIndex(book => book.title === title);

if (index !== -1) {

this.books.splice(index, 1);

} else {

console.log("Book not found.");

} } };





library.addBook({ author: "George Orwell", year: 1949, title: "1984" });

console.log(library.books.length);
console.log(library.books)