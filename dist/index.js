"use strict";
const id = 5;
const username = 'Bagus';
const isDev = true;
let x = 'Hello';
const numbers = [1, 2, 3, 4, 5];
x = 1234;
let productId;
productId = '1234';
productId = 1234;
const user = {
    id: 1,
    name: 'Wedagama'
};
const cid = 1;
const customerId = cid;
const book = {
    id: 1,
    title: 'Book 1',
    author: 'Bagus'
};
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} berhail mendaftar`;
    }
}
const bagus = new Person(1, 'Bagus');
const wisnu = new Person(2, 'Wisnu');
class Customer extends Person {
    constructor(id, name, email) {
        super(id, name);
        this.email = email;
    }
}
const wahyu = new Customer(1, 'Wahyu', 'wahyu@gmail.com');
function joinArary(items, otherItems) {
    return [...items, ...otherItems];
}
const numArray = joinArary([1, 2, 3, 4], [5, 6, 7, 8]);
const strArray = joinArary(['Ida', 'bagus'], ['wisnu', 'wahyu']);
