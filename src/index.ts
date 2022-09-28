/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */

// Basic Types
const id: number = 5
const username: string = 'Bagus'
const isDev: boolean = true
let x: any = 'Hello'
const numbers: number[] = [1, 2, 3, 4, 5]

x = 1234

// Union
let productId: string | number

productId = '1234'
productId = 1234


// Object
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Wedagama'
}


// Type Assertion
const cid: any = 1
const customerId = cid as number

// Interfaces
interface BookInterface {
  id: number,
  title: string,
  author?: string,
  publishedDate?: string,
}

const book: BookInterface = {
  id: 1,
  title: 'Book 1',
  author: 'Bagus'
}

interface MathFuncInterface {
  (x: number, y: number): number
}

const add: MathFuncInterface = (x: number, y: number) => x + y
const substract: MathFuncInterface = (x: number, y: number) => x - y

// Classes
interface PersonInterface {
  id: number,
  name: string
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} berhail mendaftar`
  }
}

const bagus = new Person(1, 'Bagus')
const wisnu = new Person(2, 'Wisnu')
// console.log(wisnu.register())

// Class Extends
class Customer extends Person {
  email: string

  constructor(id: number, name: string, email: string) {
    super(id, name)
    this.email = email
  }
}

const wahyu = new Customer(1, 'Wahyu', 'wahyu@gmail.com')

// Generics
function joinArary<T> (items: T[], otherItems: T[]): T[] {
  return [...items, ...otherItems]
}

const numArray = joinArary<number>([1, 2, 3, 4], [5, 6, 7, 8])
const strArray = joinArary<string>(['Ida', 'bagus'], ['wisnu', 'wahyu'])
