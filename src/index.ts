import { BookFactory } from "./BookFactory";

// const Book = BookFactory.getBook('H');
// console.log(`H type book is a ${Book.getBookType()} book with price ${Book.getPrice()}/-`);

// const Book = BookFactory.getBook('A');
// console.log(`A type book is a ${Book.getBookType()} book with price ${Book.getPrice()}/-`);

const Book = BookFactory.getBook('M');
console.log(`M type book is a ${Book.getBookType()} with price ${Book.getPrice()}/-`);