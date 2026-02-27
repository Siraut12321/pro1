// objects

let students =[{

    name :"Ali",
    age: 18,
    fatherName: "Riaz",
    course :[
        {
            name :"Maths",
            marks: 80,
        },
        {
            name :"English",
            marks: 70,
        },
        {
            name :"Urdu",
            marks: 90,
        }

    ]
}]
console.log(students);

//Array of objects
// Initial array of students
let students1 = [ //Array
    {
        name: "Ali",
        age: 18,
        fatherName: "Riaz",
        course: [ //array of objects
            { name: "Maths", marks: 80 },
            { name: "English", marks: 70 },
            { name: "Urdu", marks: 90 }
        ]
    },
    {
        name: "Ahmed",
        age: 18,
        fatherName: "Riaz",
        course: [
            { name: "Maths", marks: 80 },
            { name: "English", marks: 70 },
            { name: "Urdu", marks: 90 }
        ]
    },
    {
        name: "Siraut",
        age: 18,
        fatherName: "Riaz",
        course: [
            { name: "Maths", marks: 80 },
            { name: "English", marks: 70 },
            { name: "Urdu", marks: 90 }
        ]
    }
];

// Add a new student at the end
students1.push({
    name: "Sana",
    age: 18,
    fatherName: "Riaz",
    course: [
        { name: "Maths", marks: 80 },
        { name: "English", marks: 70 },
        { name: "Urdu", marks: 90 }
    ]
});
console.log("After push:", students1);

// Remove last student
students1.pop();
console.log("After pop:", students1);

// Remove first student
students1.shift();
console.log("After shift:", students1);

// Add student at the beginning
students1.unshift({
    name: "Ali",
    age: 18,
    fatherName: "Riaz",
    course: [
        { name: "Maths", marks: 80 },
        { name: "English", marks: 70 },
        { name: "Urdu", marks: 90 }
    ]
});
console.log("After unshift:", students1);

// Remove student at specific index (index 1)
students1.splice(1, 1);
console.log("After splice remove index 1:", students1);

// Replace student at index 1
students1.splice(1, 1, {
    name: "Raza",
    age: 18,
    fatherName: "Riaz",
    course: [
        { name: "Maths", marks: 80 },
        { name: "English", marks: 70 },
        { name: "Urdu", marks: 90 }
    ]
});
console.log("After splice replace index 1:", students1);

// Add new student at index 1 without removing anyone
students1.splice(1, 0, {
    name: "Talha",
    age: 22,
    fatherName: "Riaz",
    course: [
        { name: "Maths", marks: 80 },
        { name: "English", marks: 70 },
        { name: "Urdu", marks: 90 }
    ]
});
console.log("After splice add at index 1:", students1);

// Filter → students with age > 18
let filteredStudents = students1.filter(student => student.age > 18);
console.log("Filtered Students (age>18):", filteredStudents);

// Map → get only names
let studentNames = students1.map(student => student.name);
console.log("Student Names:", studentNames);
// forEach → loop through and print names
students1.forEach(student => console.log("Student Name:", student.name));

// Find → first student with age > 18
let foundStudent = students1.find(student => student.age > 18);
console.log("Found Student (age>18):", foundStudent);

// findIndex → index of first student with age > 18
let foundIndex = students1.findIndex(student => student.age > 18);
console.log("Found Index (age>18):", foundIndex);

// Sort → by age ascending
students1.sort((a, b) => a.age - b.age);
console.log("Sorted By Age:", students1);

// Reverse → reverse array
students1.reverse();
console.log("Reversed Array:", students1);

// Includes → check if name "Ali" exists
let nameArray = students1.map(student => student.name);
let checkName = nameArray.includes("Ali");
console.log("Is Ali Present?", checkName);

// Join → convert names array to string
let joinedNames = nameArray.join(", ");
console.log("Joined Names:", joinedNames);





//conditions
let marks= [85];

 if (marks >= 80){
        console.log("A+");
    }
else if (marks >= 70){
        console.log("A");
    }
 else if (marks >= 60){
        console.log("B");
    }
else if (marks >= 50){
        console.log("C");
    }
else if (marks >= 40){
        console.log("D");
    }
 else{
        console.log("Fail");
    }
console.log(marks);

//switch case
let day = "Wednesday";
switch (day) {
        case "Monday":
            console.log("Today is Monday");
            break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
        case "Wednesday":
            console.log("Today is Wednesday");
            break;
        case "Thursday":
            console.log("Today is Thursday");
            break;
        case "Friday":
            console.log("Today is Friday");
            break;
        case "Saturday":
            console.log("Today is Saturday");
            break;
        case "Sunday":
            console.log("Today is Sunday");
            break;
        default:
            console.log("Invalid day");
    }
    
console.log(day);

//for loop  


for (let i = 1; i <= 10; i++) {
    console.log("for loop :", i);
}


//while loop
let k = 1;
while (k <= 10) {
    console.log("while loop :", k);
    k++;
}


//do while loop
let j = 1;
do {
    console.log("do while loop :", j);
    j++;
} while (j <= 10);


//for in loop
let students2 = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "Ahmed", age: 22, grade: "B" },
    { name: "Sara", age: 21, grade: "A" }
];

for (let index in students2) {
    console.log("Student", index, ":", students2[index]);
}


//for of loop
let students3 = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "Ahmed", age: 22, grade: "B" },
    { name: "Sara", age: 21, grade: "A" }
];

for (let student of students3) {
    console.log("Student:", student);
}


//for each loop
let students4 = [
    { name: "Ali", age: 20, grade: "A" },
    { name: "Ahmed", age: 22, grade: "B" },
    { name: "Sara", age: 21, grade: "A" }
];

students4.forEach(student => console.log("Student:",student

));

// ============================
// Part 1: Variables & Data Types
// ============================

// Task 1: Student Introduction
let name1 = "Siraut";       // Student's name
let age1 = 22;              // Student's age
let isStudent = true;      // Boolean: true if student

console.log("My name is " + name1 + ". I am " + age1 + " years old. Student: " + isStudent);

// Task 2: Data Type Checker
let myString = "Hello";    // String
let myNumber = 10;         // Number
let myBoolean = true;      // Boolean
let myUndefined;           // Undefined
let myNull = null;         // Null (type is 'object' in JS)

console.log("Type of myString:", typeof myString);
console.log("Type of myNumber:", typeof myNumber);
console.log("Type of myBoolean:", typeof myBoolean);
console.log("Type of myUndefined:", typeof myUndefined);
console.log("Type of myNull:", typeof myNull);

// Task 3: Simple Calculator
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Task 4: Temperature Converter
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log("Celsius:", celsius + "°C");
console.log("Fahrenheit:", fahrenheit + "°F");

// ============================
// Part 2: Conditions
// ============================

// Task 5: Even or Odd
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

// Task 6: Age Eligibility
let agePerson = 19;

if (agePerson >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// ============================
// Part 3: Loops
// ============================

// Task 9: Multiplication Table
let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


//fuctions
function greet() {
    console.log("Hello, welcome to the course!");
}
greet();

let greet1 = () => {
    console.log("Hello, welcome to the course!");
}
greet1();



//reduce
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Array Destructuring
let cololr = ["red", "green", "blue"];
let [first,second, third]=cololr;
console.log("First Color:", first);
console.log("Second Color:", second);
console.log("Third Color:", third);

// Object Destructuring
let cars = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};

let { make, model, year } = cars;

console.log("Make:", make);
console.log("Model:", model);
console.log("Year:", year);

//spread operator copy array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log("Combined Array:", arr2);

//spread operator merge object
let x = [1, 2];
let y = [3, 4];

let combined = [...x, ...y];

console.log(combined);  // [1, 2, 3, 4]

// spread operator add new array
let arr3 = [1, 2];
let newArr = [...arr3, 3, 4];
console.log("New Array:", newArr);

// Arrow functions 
let add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// functions with array
let numbers3 = [1, 2, 3, 4];

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(numbers3);