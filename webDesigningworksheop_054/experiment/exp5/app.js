let person ={
    name:"John",
    age:30,
    class:"btech",
};
console.log(person.name);
console.log(person.class);
console.log(person.age);
typeof
 console.log(typeof(person));

// array data type
let numbers=[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

console.log(typeof(numbers));

let mixedarray=[1, "Hello" ,true,[1,2,3],{name: "alice",age:25}];
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);

//normal function
function multiply(a, b) {
    return a * b;
}

// To see the result, you must call it:
console.log(multiply(5, 10)); 

//arrow function
const sayHi = () => console.log("hi!");

//arrow fun for multipliation
const mul =(a,b)=>(a*b);
console.log(mul);

// arrow fun whith single parameter --- does not required parathensis


//map on array 
let newarray =[1,2,3,4,5];
let squaredarray = newarray.map((num) => num*5);
console.log(squaredarray);


let evenNumbers = [1, 2, 3, 4, 5];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers); 
// Output: [2, 4]

// 1. Subtraction Reduce
let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((accumulator, currentvalue) => accumulator - currentvalue);
console.log(total); // Output: -13


let sums = [1, 2, 3, 4, 5];
let totals = sums.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(totals); // Output: 15


let students = [
    { name: "Alice", marks: 85 },
    { name: "BOB", marks: 92 },
    { name: "charlie", marks: 78 }
];
// Just use one .map() call
let marks = students.map(student => student.marks); 
console.log(marks); // Output: [85, 92, 78]

// 4. Filtering Students
let topstudents = students.filter(student => student.marks > 80);
console.log(topstudents); 
// Output: [{ name: "Alice", marks: 85 }, { name: "BOB", marks: 92 }]

//mixed object
let mixedobject={
    name:"alice",
    age:25,
    hobbies:("reading","travelling","coding"),
    address:{
        street:"123 main std",
        city:"New York",
        country:"uSA",
    },
    greet: function(){
        console.log("HELLO!");
        let arrowGreet = () => {console.log("HI!");
        }
    }
};
console.log(mixedobject.name);
console.log(mixedobject.age);
console.log(mixedobject.hobbies);
console.log(mixedobject.hobbies[0]);
console.log(mixedobject.hobbies[1]);
console.log(mixedobject.hobbies[2]);
console.log(mixedobject.address);

console.log(mixedobject.address.street);
console.log(mixedobject.address.city);
console.log(mixedobject.address.country);
// mixedobject.address.greet();

//object inside array

let people = [
  { name: "alice", age: 53 },
  { name: "BOB", age: 34 },
  { name: "abc", age: 45 },
];
console.log(people[0]);      // Output: { name: "alice", age: 53 }
console.log(people[1].name); // Output: "BOB"
console.log(people[2].age);  // Output: 45



let company={
    name:"TECH CORP",
    employees:["alice","bob","charlie"]
};
console.log(company.name);
console.log(company.employees);
console.log(company.employees[0]);
console.log(company.employees[1]);



