//creation of class 

class Person{
    constructor(name) // constructor will assign the values. One class can have only one constructor
   {
        this.name=name
   }  
   greet(){
        console.log(`Hello ${this.name}`)

   }
}

// let person1 = new Person("Manoj") // instead of 'let' we can use 'const' also. 'Const' refers to constant value, we cannot reassign a new value

// person1.greet()

// let a =10, c = 50
// b = 40
// sum = a + b + c
// console.log(sum)

// Inheritence implementation. Extends is the key word used

// class human extends Person{}

// let human1 = new human(`Manoj Inheritence`)
// human1.greet()

class student extends Person{
    constructor(name,age,sex){
       super(name,age,sex)  // Use of 'Super' keyword enables to point the constructor of parent class
        this.name=name
        this.age=age
        this.sex=sex
    }
    greet(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.sex)
    }
}

let student1 = new student ('Likitha',26,'F')
student1.greet()