let name1 = "ShahEEr";

console.log(name1.toLowerCase());

console.log(name1.toUpperCase());

let nameFirstCharacter = name1.slice(0, 1).toUpperCase();
let nameMinusFirstCharacter = name1.slice(1).toLocaleLowerCase();



console.log(nameFirstCharacter + nameMinusFirstCharacter);