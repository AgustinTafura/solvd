// Part 1: Class Design
/**
 * Represents a book in the online bookstore.
 */
class Book {
    /**
     * Creates a new Book instance.
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {string} ISBN - The ISBN number of the book.
     * @param {number} price - The price of the book.
     */
    constructor(title, author, ISBN, price) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        this.available = true; // Indicates if the book is available for purchase. True by default.
    }
}

/**
 * Represents a user of the online bookstore.
 */
class User {
    /**
     * Creates a new User instance.
     * @param {string} name - The name of the user.
     * @param {string} email - The email address of the user.
     * @param {string} userID - The unique ID of the user.
     */
    constructor(name, email, userID) {
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
}

/**
 * Represents a shopping cart in the online bookstore.
 */
class Cart {
    /**
     * Creates a new Cart instance.
     */
    constructor() {
        this.items = []; // Array to store the books added to the cart.
    }

    /**
     * Adds a book to the cart.
     * @param {Book} book - The book (instance) to add to the cart.
     */
    addItem(book) {
        this.items.push(book);
    }

    /**
     * Removes a book from the cart.
     * @param {Book} book - The book (instance) to remove from the cart.
     */
    removeItem(book) {
        const index = this.items.findIndex(item => item === book);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    /**
     * Calculates the total price of the books in the cart.
     * @returns {number} The total price of the books in the cart.
     */
    calculateTotal() {
        return this.items.reduce((total, book) => total + book.price, 0);
    }
    /**
     * Apply discount on the total price. (BONUS)
     * @returns {number} The amount of percent discount.
     */
    applyDiscount(discountPercent) {
        const discount = this.calculateTotal() * (discountPercent / 100);
        return this.calculateTotal() - discount;
    }
}

/**
 * Represents an order placed by a user in the online bookstore.
 */
class Order {
    /**
     * Creates a new Order instance.
     * @param {User} user - The user (instance) who placed the order.
     * @param {Array<Book>} books - The books (instances) included in the order.
     * @param {number} totalPrice - The total price of the order.
     */
    constructor(user, books, totalPrice) {
        this.user = user;
        this.books = books;
        this.totalPrice = totalPrice;
    }
}

// Part 2: Implementation
// Instantiate multiple Book objects
const books = [
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9781408855652", 20),
    new Book("The Da Vinci Code", "Dan Brown", "9780307474278", 15),
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 18),
    new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488", 12),
    new Book("The Hobbit", "J.R.R. Tolkien", "9780547928227", 22),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 16),
    new Book("1984", "George Orwell", "9780451524935", 14),
    new Book("The Alchemist", "Paulo Coelho", "9780062315007", 17),
    new Book("The Hunger Games", "Suzanne Collins", "9780439023481", 19),
    new Book("Pride and Prejudice", "Jane Austen", "9780141395203", 13)
];

// create a few User 
const users = [
    new User("Agustin", "agustin@mail.com", "UID001"),
    new User("Diana", "diana@mail.com", "UID002")
];

// Simulate users adding books to their cart
const cartAgustin = new Cart();
cartAgustin.addItem(books[0]);
cartAgustin.addItem(books[4]);

const cartDiana = new Cart();
cartDiana.addItem(books[1]);
cartDiana.addItem(books[2]);
cartDiana.addItem(books[5]);

// Implement the process of placing an order
const orderAgustin = new Order(users[0], cartAgustin.items, cartAgustin.calculateTotal());
const orderDiana = new Order(users[1], cartDiana.items, cartDiana.calculateTotal());

console.log("Agustin's order:", orderAgustin);
console.log("Diana's order:", orderDiana);


// Part 3: Demonstration
// Simulate interactions between users, carts, and orders.
// create a few User 
const userA = users[0];
const userD = users[1];

// Simulate users adding and deleting books to their cart
const cartUserA = new Cart();
const cartUserD = new Cart();

cartUserA.addItem(books[0]);
cartUserA.addItem(books[1]);
cartUserA.addItem(books[5]);
cartUserA.addItem(books[6]);
cartUserA.removeItem(books[1]);

cartUserD.addItem(books[2]);
cartUserD.addItem(books[4]);

console.log("userA's cart:", cartUserA.items);
console.log("userD's cart:", cartUserD.items);

console.log("userA's total:", cartUserA.calculateTotal());
console.log("userD's total:", cartUserD.calculateTotal());
// BONUS - applying discounts
console.log("userD's total with discount:", cartUserD.applyDiscount(10));

// Implement the process of placing an order
const orderUserA = new Order(userA, cartUserA.items, cartUserA.calculateTotal());
const orderUserD = new Order(userD, cartUserD.items, cartUserD.applyDiscount(10));
console.log("userA's order:", orderUserA);
console.log("userD's order:", orderUserD);




// BONUS
class Bookstore {
    /**
     * Creates a new Bookstore instance.
     * @param {Array<Book>} books - The list of books available in the bookstore.
     */
    constructor(books) {
        this.books = books;
    }

    /**
     * Searches for books in the bookstore based on various criteria.
     * @param {object} criteria - The criteria to search for books (title, author, ISBN).
     * @returns {Array<Book>} The list of books that match the search criteria.
     */
    searchBooks(criteria) {
        return this.books.filter(book => {
            return (
                (criteria.title && book.title.toLocaleLowerCase().includes(criteria.title.toLocaleLowerCase())) ||
                (criteria.author && book.authortoLocaleLowerCase().includes(criteria.author.toLocaleLowerCase())) ||
                (criteria.ISBN && book.ISBNtoLocaleLowerCase().includes(criteria.ISBN.toLocaleLowerCase()))
            );
        });
    }
}

// BONUS: searching for books
const bookstore =new Bookstore(books)
console.log("Search for 'Harry Potter':", bookstore.searchBooks({ title: "Harry Potter" }));
console.log("Search for 'the':", bookstore.searchBooks({ title: "the" }));



// BONUS: payment handling
/**
 * Represents the payment processing system.
 */
class Payment {
    /**
     * Processes a credit card payment.
     * @param {string} cardNumber - The credit card number.
     * @param {string} expiryDate - The expiration date of the card.
     * @param {string} cvv - The CVV of the card.
     * @param {number} amount - The amount to be charged.
     * @returns {boolean} - Returns true if the payment is successful, otherwise false.
     */
    processCreditCardPayment(cardNumber, expiryDate, cvv, amount) {
        console.log(`Processing credit card payment of $${amount}...`);
        // Logic to process credit card payment
        // ...
        // Simulate payment success
        return true;
    }
}
const paymentProcessor = new Payment();
const cardPaymentSuccess = paymentProcessor.processCreditCardPayment('1234-5678-8765-4321', '01/25', '123', orderUserA.totalPrice);
if (cardPaymentSuccess) {
    console.log('Credit card payment successful');
} else {
    console.log('Credit card payment failed');
}