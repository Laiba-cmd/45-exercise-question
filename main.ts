//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//

const personname ="aLlama iqBal";


console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
console.log(`Name in Lowercase : ${personName.toLowerCase()}`);
console.log(`Name in Titlecase : ${personName.toTitleCase()}`);

// for title case :

let Step1 = personName.split(' ');

let Step2 = step1.map(word =>word.charAt(0).toUpperCase() + word. substr(1).toLowerCase());

let Step3 = step2.join(' ');

console.log(`Name in title case : ${Step3}`);