console.log("Hola JS");

let firstName = "Jose";
let lastName = "Parra";

//concatenation

console.log("Hello " + firstName + " " + lastName + ", Welcome" );
console.log(`Hello ${firstName} ${lastName} , "Welcome"`);

//1. function declaration  (Creating a function)

function sayHello() {
    //body of the function
    console.log("Hellow Cohort 59");
}

//2. call the function (code, console, from the user)
sayHello();
sayHello();

//EXample with one parameter (inputs)

function greet(name) {
    console.log(`Hellow ${name}, Welcome`);
}

greet("JP");
greet("PGJ");

// Example with two args (Parameters)

function doubleNumber(number) {
    let total = number * 2;
    document.writeln(`The double number of ${number} is ${total} \n`);
    console.log(`The double number of ${number} is ${total} `);
    
}
doubleNumber(10);
doubleNumber(55);

//Example with prompt
function welcome() {
    let name = prompt ("Enter your name");
    let age = prompt ("Enter your age");

    console.log(`Welcome ${name} - ${age}`);
}
//welcome(); typet in console of the navigator


//Default parameters
function add(number1=0, number2=0) {
    console.log(`The total is ${number1 + number2}`);
    
}
add(5,2);
add();
add(4);

//challenge 2 : combine names

function combineNames(fName,lName) {
    console.log(`${fName} ${lName}`);
}
combineNames("Jose", "Parra");
combineNames("Jose")
combineNames()


//Convert minutes to seconds
function convertToSeconds() {
    let minutes = prompt("Enter the minutes")
    let seconds = minutes * 60;
   document.getElementById("results").innerHTML +=(`<p></p>Minutes ${minutes}, to Seconds equals ${seconds}</p>`);
}
