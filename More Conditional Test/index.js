let cities = ['Karachi', 'Lahore', 'Islamabad'];
let name1 = 'Taha';
let luckyNumber = 14;

//Tests for equality and inequality with strings
console.log(name1 == 'Taha' ? 'Yes He is Taha' : 'Wrong Guess about Name');
console.log(name1 != 'Taha' ? 'Yes He is Taha' : 'Wrong Guess about Name');

//Tests using the lower case function
console.log(name1 === 'taha' ? 'True name is in lower case' : 'False name is in lower case');

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(luckyNumber === 15 ? "Yes! it's a lucky number" : "Bad luck! not a lucky number");
console.log(luckyNumber !== 15 ? "Yes it's not equal to lucky number" : "Better luck next time");
console.log(luckyNumber < 15 ? "Yes! lucky number is less than 15" : "Lucky number is greater than 15");
console.log(luckyNumber > 15 ? "Yes! lucky number is greater than 15" : "Lucky number is less than 15");
console.log(luckyNumber >= 15 ? "Yes! lucky number is not equal 15 but greater than 15" : "Lucky number is equal or less than 15");

//Tests using "and" and "or" operators
console.log(luckyNumber === 14 && name1 === 'Taha' ? 'True : Name and Lucky number matched' : 'False: Name and Lucky number not matched');
console.log(luckyNumber === 13 || name1 === 'taha' ? 'True : Name or Lucky number matched' : 'False: Name or Lucky number not matched');

//Test whether an item is in a array
console.log(cities === "Karachi" ? "City found in the list" : "City is not in the list");

//Test whether an item is not in a array
console.log(cities !== "Hyderabad" ? "True! City is not found in the list" : "False! City is in the list");