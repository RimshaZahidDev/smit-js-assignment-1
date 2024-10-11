//  Chapter NO 1 
// Question no 1 :

// alert("Hello 👋 Welcome to my website.");

// Question no 2 :

// alert("Javascript alert \n\n Error❗Please enter a valid password.");

// Question no 3 :

// alert("Welcomme to JS land...\n Happy coding.");

// Question no 4 :

// alert("Welcomme to JS land...");
// alert("Welcomme to JS land...\n Happy coding.\n\n ⬜ Prevent this page from creating additional dialogs.");


// Question no 5 :

// avalible in image form 
// Assign-1:question5.png


////////////////////////////////////////////////////////////////////////////////////////////


// Chapter 2 

// Question no 1:
// let username;

// Question no 2:
// let myName = "Rimsha Zahid";

// Question no 3:
// let message;
// message = "Hello World";
// alert(message);

// Question no 4:

// let std_name = "Rimsha Zahid ";
// let std_age= 20;
// let std_certification = "Certified Web and Mobile app developer";
// alert(`Student Name : ${std_name}`);
// alert(`Student Age : ${std_age}`);
// alert(`Student Certification : ${std_certification}`);

// Question no 5:
// let my_variable = "PIZZA";
// alert(`${my_variable}\n${my_variable.slice(0, -1)}\n${my_variable.slice(0, -2)}\n${my_variable.slice(0, -3)}\n${my_variable.slice(0, -4)}`);

// Question no 6:
// let email = "zrimsha216@gmail.com";
// alert(`My email address is ${email}`);

// Question no 7:
// let book = "A smarter way to learn JavaScript";
// alert(`I am trying to learn form a book: ' ${book} '.  `);

// Question No 8:
// document.write('Yah! I can write HTML content through Javascript.');

// Question No 9:
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")


/////////////////////////////////////////////////////////////////////////////

// Chapter 3 

// Question No 1:

// let my_age = 20;
// alert(my_age);

// Question No 2:

// let visit_count = localStorage.getItem('visit-count'); // get visit value from local  storage 
// if (visit_count == null) { // for the first time this code would run
//     visit_count = 0;
// }
// visit_count++; // visit value increment 
// localStorage.setItem('visit-count', visit_count); // save new value 

// alert(`You have visited this site ${visit_count} times.`); // alert to display count 

// // Question No 3:
// let birth_year = 2004;
// document.write(`My birth year is ${birth_year}. <br>Data type of my borth year is ${typeof birth_year}`)

// Question No 4:
// also uncomment respective code from html file line 37


// let visitor_name = "Rimsha Zahid", quantity = 5, product_title = 'T-shirt';
// document.getElementById('visitor-name').textContent = visitor_name;
// document.getElementById('quantity').textContent = quantity;
// document.getElementById('product-title').textContent = product_title;

//////////////////////////////////////////////////
// Chapter No 4 
// Question No 1:
// let var1, var2 , var3;

// Question No 2:
// let user1, _user , $sum , my_result , camelCase;

// Question No 3:
// let 1user, user-name , var , %result , camel Case;

// Question No 4:
//  also go to html file line 53

// let a1 = "numbers", a2 = "numbers", a3 = "$", a4 = "_";
// let b1 = "letter", b2 = "$", b3 = "_";
// let c1 = "sensitive";
// let d1 = "keyword";
// document.getElementById('a-1').textContent = a1;
// document.getElementById('a-2').textContent = a2;
// document.getElementById('a-3').textContent = a3;
// document.getElementById('a-4').textContent = a4;
// document.getElementById('b-1').textContent = b1;
// document.getElementById('b-2').textContent = b2;
// document.getElementById('b-3').textContent = b3;
// document.getElementById('c-1').textContent = c1;
// document.getElementById('d-1').textContent = d1;


//////////////////////////////////////////////////////////////////
// chapter no 5 

// Question no 1
// html code at line 73

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// document.getElementById('num1').textContent = num1;
// document.getElementById('num2').textContent = num2;
// document.getElementById('sum').textContent = num1+num2;

// Question no 2
// html code at line 79

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// document.getElementById('num1').textContent = num1;
// document.getElementById('num2').textContent = num2;
// document.getElementById('sum').textContent = num1 + num2;
// document.getElementById('dif').textContent = num1 - num2;
// document.getElementById('mul').textContent = num1 * num2;
// document.getElementById('div').textContent = num1 / num2;
// document.getElementById('mod').textContent = num1 % num2;

// Question no 3:
//html code at line 89

// let my_variable;
// document.getElementById('variable').textContent = my_variable;
// my_variable = 5;
// document.getElementById('variable-1').textContent = my_variable;
// my_variable++;
// document.getElementById('variable-2').textContent = my_variable;
// my_variable += 7;
// document.getElementById('variable-3').textContent = my_variable;
// my_variable--;
// document.getElementById('variable-4').textContent = my_variable;
// document.getElementById('remainder').textContent = my_variable % 3;;

// Question no 4:
//html code at line 101

// let ticket_price = 600;
// document.getElementById('ticket-price').textContent = ticket_price*5 ;

// Question no 5:

// let num = +(prompt("Enter a number for table: "))
// document.write(`<h4> Table of ${num} </h4>`)
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }


// Question no 6:

// let celsius = 25;
// let fahrenheit = 70;
// document.write(`${celsius} <sup>o</sup>C is  ${(celsius * 1.8) + 32} <sup>o</sup>F <br>`);
// document.write(`${fahrenheit} <sup>o</sup>F is  ${(fahrenheit - 32) * 5 / 9} <sup>o</sup>C <br>`);




// Question no 7:

// document.write(`<h1> Shopping Cart: </h1>`)
// let item1 = 650, item2 = 100;
// let q1 = 3
// let q2 = 5

// document.write(`Price of item1     : PKR ${item1} <br>`);
// document.write(`Qunatity of item1  : PKR ${q1} <br>`);

// document.write(`Price of item2 : PKR ${item2} <br>`);
// document.write(`Qunatity of item2 : PKR ${q2} <br><br>`);

// document.write(`Shipping Charges : PKR 100`);

// let total = item1 * q1 + item2 * q2 + 100;

// document.write(`Total cost of your order : PKR ${total}`);




// Question no 8:
// document.write(`<h1> Marks Sheet: </h1>`);

// total_marks = 1100, marks_obtained = 990;
// document.write(`Total marks : ${total_marks} <br>`);
// document.write(`Marks Obtained :  ${marks_obtained} <br><br>`);
// document.write(`Percentage : ${(marks_obtained * 100) / total_marks} `);


// Question no 9:

// document.write(`<h1> Currency in PKR: </h1>`);
// let pkr = (10 * 104.80) + (25 * 28)
// document.write(`Total Currency in PKR =  ${pkr} <br>`);

// Question no 10:

// let my_num = 10;
// document.write(`Initial value  : ${my_num} <br>`);
// document.write(`Value + 5 :  ${my_num += 5} <br>`);
// document.write(`Value x 10  : ${my_num *= 10}<br> `);
// document.write(`Value / 12  : ${my_num /= 2} <br>`);

// Question no 11:

// document.write(`<h1> Age Calculator: </h1>`);
// let year_now = new Date().getFullYear();
// let birth_year = +(prompt("Enter your birth year:"));
// document.write(`Current year =  ${year_now} <br>`);
// document.write(`Birth year =  ${birth_year} <br>`);
// document.write(`Your age =  ${year_now - birth_year} <br>`);


// Question 12:

// document.write(`<h1> The Geometrizer: </h1>`);
// let radius = +(prompt("Enter the radius of the circle:"));
// document.write(`The radius is: ${radius} <br>`);
// document.write(`The circumference is: ${2 * 3.142 * radius} <br>`);
// document.write(`The area is: ${3.142 * radius * radius} <br>`);

// Question 13:

// let favorite_snack = prompt("Enter your favorite snack:");
// let current_age = +(prompt("Enter your current age:"));
// let max_age = +(prompt("Enter the maximum age:"));
// let amount_per_day = +(prompt("Enter the estimated amount of snacks you eat per day:"));

// let years_remaining = max_age - current_age;
// let total_snacks = years_remaining * 365 * amount_per_day;

// document.write(`<h1> Lifetime Supply Calculator: </h1>`);
// document.write(`Favourite Snack: ${favorite_snack} <br>`);
// document.write(`Current age: ${current_age} <br>`);
// document.write(`Estimated Maximum Age: ${max_age} <br>`);
// document.write(`Amount of snacks per day: ${amount_per_day}<br> `);
// document.write(`You will need ${totalSnacks} ${favorite_snack}(s) to last you until the ripe old age of ${max_age}.`);
