// task1 'Train'
console.log('--Train-----');
class Train {
    constructor(number, destination, time) {
        this.number = number;
        this.destination = destination;
        this.time = time;
    }
}

let train1 = new Train(2, 'Kyiv', 2);
let train2 = new Train(3, 'Dnepr', 3);
let train3 = new Train(22, 'Lviv', 25);
let train4 = new Train(72, 'Odessa', 42);
let train5 = new Train(28, 'Poltava', 52);

console.log(train1);

class RailwayStation {
    trains = [];
    constructor(trains = []) {
        this.trains.push(...trains);
    }
    addTrain(t) {
        this.trains.push(t);
    }
}

let railWayStation = new RailwayStation();

railWayStation.addTrain(train1);
railWayStation.addTrain(train2);
railWayStation.addTrain(train3);
railWayStation.addTrain(train4);
railWayStation.addTrain(train5);

console.log(railWayStation.trains);




// task 2 'Library'

console.log('--Library-----');

class Library {
    books = [];
    constructor(books = []) {
    }
    addBook(b) {
        this.books.push(b)
    }
    deleteBook(index, num) {
        this.books.splice(index, num)
    }
    findBookByAuthor(author) {
        this.books.some((entry) => {
            if (entry.author == author) {
                console.log(entry.name);
            }
        });
    }
    sortBookByPages(arr) {
        this.books.sort((a, b) => a.yearOfPablising - b.yearOfPablising)
    } 
    //sortBookByName(arr) {
    //    this.books.sort((a, b) => a.author < b.author)
    //} 
}


class Book {
    constructor(name, yearOfPablising, author, genre, language, pages) {
        this.name = name;
        this.yearOfPablising = yearOfPablising;
        this.author = author;
        this.genre = genre;
        this.language = language;
        this.pages = pages;
    }
}

let book1 = new Book('Bad blood', 2018, 'Robert Galbrait', 'classic', 'russian', 960);
let book2 = new Book('Selected speeches', 2021, 'Demosphen', 'classic', 'russian', 670);
let book3 = new Book('A real unicorn!', 2020, 'Root Ralf', 'fairytale', 'russian', 90);
let book4 = new Book('In love', 2015, 'Ava Read', 'novel', 'inglish', 200);
let book5 = new Book('teacher', 2012, 'Davidenko', 'thriller', 'russian', 380);
//console.log(book1)

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
//library.deleteBook(0, 1);

library.findBookByAuthor('Root Ralf');
library.sortBookByPages(this.books);
//library.sortBookByName(this.books);



console.log(library.books)












//class Person {
//    constructor(name, age) {
//        this.name = name;
//        this.age = age;
//    }
//    display() {
//        console.log(this.name, this.age);
//    }
//}


//class Employee extends Person {
//    constructor(name, age, company) {
//        super(name, age);
//        this.company = company;
//    }
//    display() {
//        super.display();
//        console.log('Employee in', this.company);
//    }
//    work() {
//        console.log(this.name, 'is hard working');
//    }
//}

//let tom = new Person('Tom', 34);
//let bob = new Employee('Bob', 36, 'Google');
//tom.display();
//bob.display();
//bob.work();

//Task 1 'Train'