// functions are first-class citizens in JS
// functins are created for DRY(Do Not Repeat Yourself)

// function add(num1,num2){

//     console.log(num1+num2)
// }

// add(8,5)
// function add(num1,num2){

//     return (num1+num2)
// }

// console.log(add(8,5))

// Objects are the instances of a class.
// first method creating an object
// let obj1=new Object()
// obj1.name = "Manoj"
// obj1.age = 29
// obj1.sex = "Male"
// obj1.educated  = "yes"
// obj1.marital_status = "Married"

// console.log(obj1)
// obj1["sex"]="Female"
// Second method of creating object

// let obj2 = {
//     Name:"Manoj",
//     // name = "Manoj"
// "age" : 29,
// sex : "Male",
// educated  : "yes",
// marital_status : "Married"
// }
// console.log(obj2.age)


// javascript is a functional programming Lang
// define, assign, return, passed

// let add = function(n1,n2) //let add = ( n1+n2 ) => 
// {
//  console.log(`This is another way of creating function. Function is getting addigned to a variable`)
//  return n1+n2;
// }
// console.log(add(10,25))  // to call the above function

//  let sum = add //assigning a function

//  let  sum1 = add() //calling a function

//How to differntiate function from cronstructor?? usage of 'this' keyword and we will not return any output in constructor

//Creating a constructor
// function Student(name,age,dob){
//     this.name=name
//     this.age=age
//     this.dob=dob  
// }

// let student1 = new Student('Manoj',25,'21Sep1992')

// console.log(student1)


// let diff = function(n1,n2){
//     return n1 - n2
// }

// let sub = diff(10,5)

// console.log(sub)

// let diff = (n1,n2) => //this is arrow function.
// {
//     return n1 - n2
// }

// let sub = diff(10,15)

// console.log(sub)