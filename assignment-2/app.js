let a = 10;
document.getElementById('initial-value').innerText = "The value of a is: " + a;
let preIncrement = ++a;
document.getElementById('pre-increment').innerText = "The value of ++a is: " + preIncrement;
document.getElementById('pre-increment-after').innerText = "Now the value of a is: " + a;
let postIncrement = a++;
document.getElementById('post-increment').innerText = "The value of a++ is: " + postIncrement;
document.getElementById('post-increment-after').innerText = "Now the value of a is: " + a;
let preDecrement = --a;
document.getElementById('pre-decrement').innerText = "The value of --a is: " + preDecrement;
document.getElementById('pre-decrement-after').innerText = "Now the value of a is: " + a;
let postDecrement = a--;
document.getElementById('post-decrement').innerText = "The value of a-- is: " + postDecrement;
document.getElementById('post-decrement-after').innerText = "Now the value of a is: " + a;

// question no 2 

let a_ = 2, b = 1;
document.getElementById('a-value-initial').innerText = `Initial value of a is: ${a_}`;
document.getElementById('b-value-initial').innerText = `Initial value of b is: ${b}`;
let result = --a_ - --b + ++b + b--;
document.getElementById('a-value-final').innerText = `Final value of a is: ${a_}`;
document.getElementById('b-value-final').innerText = `Final value of b is: ${b}`;
document.getElementById('result-value').innerText = `Final result is: ${result}`;
a_ = 2, b = 1;
document.getElementById('s-1').innerText = `--a = ${--a_}; Value of a: ${a_}`;
document.getElementById('s-2').innerText = `--a - --b = ${a_ + (b = --b)}; Value of a: ${a_}, b: ${b}`;
document.getElementById('s-3').innerText = `--a - --b + ++b = ${a_ + b + (++b)}; Value of a: ${a_}, b: ${b}`;
document.getElementById('s-4').innerText = `--a - --b + ++b + b-- = ${a_ + b + b--}; Value of a: ${a_}, b: ${b}`;

// question no 3 :

function greet() {
    const name = prompt("Please enter your name:");
    document.getElementById('greetings').innerText = `Hello, ${name}!`;
}
// question no 5 :

function print_table() {
    let number = +(prompt("Enter a number to display its table (default is 5):"));
    if (isNaN(number) || number === 0) {
        number = 5;
    }
    const table = document.getElementById('table');
    let res = `<h2 class="text-primary mt-2">Table of ${number}:</h2><table class="table table-bordered table-striped">`;
    for (let i = 1; i <= 10; i++) {
        res += `<tr><td>${number}</td><td> x</td><td> ${i} </td><td> =  </td><td> ${number * i}</td></tr>`;
    }
    res += `</tbody></table>`;
    table.innerHTML = res;
}

// question 6:

function marks_sheet() {
    const subject1 = prompt("Enter subject 1:");
    const subject2 = prompt("Enter subject 2:");
    const subject3 = prompt("Enter subject 3:");
    const total_each = 100;
    const marks1 = parseFloat(prompt(`Enter marks for ${subject1}:`));
    const marks2 = parseFloat(prompt(`Enter marks for ${subject2}:`));
    const marks3 = parseFloat(prompt(`Enter marks for ${subject3}:`));
    const total_obtained = marks1 + marks2 + marks3;
    const total_marks = total_each * 3;
    const percentage = (total_obtained / total_marks) * 100;
    document.getElementById('subject1-name').innerText = subject1;
    document.getElementById('subject1-marks').innerText = marks1;
    document.getElementById('subject2-name').innerText = subject2;
    document.getElementById('subject2-marks').innerText = marks2;
    document.getElementById('subject3-name').innerText = subject3;
    document.getElementById('subject3-marks').innerText = marks3;

    document.getElementById('total-marks').innerText = `${total_marks}`;
    document.getElementById('percentage').innerText = `${percentage.toFixed(2)}%`;

}
///////////////////////////////////////////////////////////////////////////////

// chapter 9-11

// question 1

function welcome() {
    let city = prompt("Enter city:");

    if (city && city.trim().toLowerCase() === "karachi") {
        document.getElementById('welcome-city').innerHTML = "Welcome to the city of lights!";
    } else {
        document.getElementById('welcome-city').innerHTML = `Welcome to ${city}!`;
    }
}

// question no 2 

function greetUser() {
    let gender = prompt("Enter your gender (male/female):");


    if (gender && gender.trim().toLowerCase() == "male") {
        document.getElementById("greeting").innerText = "Good Morning Sir.";
    } else if (gender && gender.trim().toLowerCase() == "female") {
        document.getElementById("greeting").innerText = "Good Morning Ma’am.";
    } else {
        document.getElementById("greeting").innerText = "Good Morning";
    }
}

// Question no 3 ;

function trafficSignal() {
    let color = prompt("Enter the color of the traffic signal:");

    if (color && color.trim().toLowerCase() === "red") {
        document.getElementById("signal").innerHTML = '<span class="text-danger border border-danger rounded-3 p-1">Must Stop</span>';
    } else if (color && color.trim().toLowerCase() === "yellow") {
        document.getElementById("signal").innerHTML = '<span class="text-warning  border border-warning rounded-3 p-1">Ready to move</span>';
    } else if (color && color.trim().toLowerCase() === "green") {
        document.getElementById("signal").innerHTML = '<span class="text-success border border-success rounded-3 p-1">Move now</span>';
    } else {
        document.getElementById("signal").innerHTML = "Invalid color entered, try again.";
    }
}

// question  no 4

function checkFuel() {
    let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

    if (fuel < 0.25) {
        document.getElementById("signal").innerHTML = "Please refill the fuel in your car";
    }
}

// question no  5

function checkConditionA() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}

function checkConditionB() {
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
}

function checkConditionC() {
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
}

function checkConditionD() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
}

function checkConditionE() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
}

function checkConditionF() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

// question  no 6
function calculateGrade() {
    let marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    let marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    let marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    let totalMarks = parseFloat(prompt("Enter total marks for all subjects:"));

    let marksObtained = marks1 + marks2 + marks3;
    let percentage = (marksObtained / totalMarks) * 100;

    let grade, remarks;
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage >= 50) {
        grade = "C";
        remarks = "Satisfactory";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    document.getElementById("result-marks").innerHTML = `
        <strong>Total Marks:</strong> ${totalMarks} <br>
        <strong>Marks Obtained:</strong> ${marksObtained} <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
        <strong>Grade:</strong> ${grade} <br>
        <strong>Remarks:</strong> ${remarks}
    `;
}


// question 7
function guessGame() {
    const secretNumber = 7;
    let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    if (userGuess === secretNumber) {
        document.getElementById("result-guess").innerHTML = "Bingo! Correct answer.";
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        document.getElementById("result-guess").innerHTML = "Close enough to the correct answer.";
    } else {
        document.getElementById("result-guess").innerHTML = "Wrong guess! Try again.";
    }
}


// question no 8

function checkDivisibleBy3() {
    let number = parseInt(prompt("Enter a number:"));

    if (number % 3 === 0) {
        document.getElementById("result-divisible").innerHTML = `The number ${number} is divisible by 3.`;
    } else {
        document.getElementById("result-divisible").innerHTML = `The number ${number} is not divisible by 3.`;
    }
}


// question no 9

function checkEvenOdd() {
    let number = parseInt(prompt("Enter a number:"));

    if (number % 2 === 0) {
        document.getElementById("result-evenodd").innerHTML = `The number ${number} is even.`;
    } else {
        document.getElementById("result-evenodd").innerHTML = `The number ${number} is odd.`;
    }
}

// question no 10
function checkTemperature() {
    let temperature = parseFloat(prompt("Enter the temperature:"));

    if (temperature > 40) {
        document.getElementById("result-temp").innerHTML = "It is too hot outside.";
    } else if (temperature > 30) {
        document.getElementById("result-temp").innerHTML = "The weather today is normal.";
    } else if (temperature > 20) {
        document.getElementById("result-temp").innerHTML = "Today's weather is cool.";
    } else if (temperature > 10) {
        document.getElementById("result-temp").innerHTML = "OMG! Today's weather is so cool.";
    } else {
        document.getElementById("result-temp").innerHTML = "It's freezing outside!";
    }
}


// question 11

function calculate() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operator = prompt("Enter the operation (+, -, *, /, %):");
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        document.getElementById("result-calc").innerHTML = "Invalid operator entered!";
        return;
    }

    document.getElementById("result-calc").innerHTML = `Result: ${num1} ${operator} ${num2} = ${result}`;
}
