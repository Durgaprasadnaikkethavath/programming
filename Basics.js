console.log("Hello World!");

// console.log(hello); error

// Data types

// number

const num = 23;
console.log(num);

// string

const name = "naik";
console.log(name);

// boolean true or false

const fullName = true;

// undefined

let char; // empty value

// string

const firstName = "Durga Prasad Naik";
const lastName = "Kethavath";
const age = 23;
const job = "full stack web development programming Internship";

// uses template ` `
const details = `I'm ${firstName} ${lastName} and my age is ${age} and present i'm doing job ${job}`;
console.log(details);

// statements

// if statement

const age1 = 10;
const isOldAge = age1 >= 18;
if (isOldAge) {
  console.log(`durga age was major ${age1}`);
} else {
  console.log(`your not able to join classes at this age ${age1}`);
}

// conversion and coercion

// conversion
const inputYear = 1991;

console.log(inputYear);
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(typeof NaN);
console.log(String(23), 23);

// coercion
// console.log('Im '+23' year old');

console.log("23" - "10" - "3");

console.log("22" / "2");

// 2+3+5+'9' ->
// '109'

// Boolean true and false

console.log(Boolean(0));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(""));

// statements

//if else

// const money = 0;
const money = 100;

if (money) {
  console.log("you can spend total money");
} else {
  console.log("you cant spend total amount");
}

// const height = 0;
const height = 5;

if (height) {
  console.log("you height was defined");
} else {
  console.log("you cant undefined");
}

// equal operator == and ===
// 18 == 18
// 18 === 18
const age2 = 17;
if (age2 == 18) {
  console.log(`you just ${age2} old`);
} else {
  console.log(false);
}

// logical operator  && || !

console.log("logical operator");
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// switch statement

const day = "sunday";

switch (day) {
  case "monday":
    console.log("plane course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code example");
    break;
  case "friday":
    console.log("watching Recorded videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("you not given valid day");
}

if (day === "monday") {
  console.log("plane course structure");
  console.log("Go to coding meetup");
}

if (day === "tuesday") {
  console.log("prepare theory videos");
}
if (day === "wednesday" || day === "thursday") {
  console.log("write code example");
}
if (day === "friday") {
  console.log("watching Recorded videos");
}

if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("you not given valid day");
}
