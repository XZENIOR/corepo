// Глобальная область видимости
var globalVar = "Глобальная переменная";
let globalLet = "Глобальная переменная с областью видимости let";
const globalConst = "Глобальная константа";

{
    // Блочная область видимости
    var blockVar = "Переменная с блочной областью видимости";
    let blockLet = "Переменная let с блочной областью видимости";
    const blockConst = "Переменная const с блочной областью видимости";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
// console.log(blockVar);
// console.log(blockLet);


function show(){
    var functionVar = "Я переменная с блочной областью видимости";
    let functionLet = "Я let с блочной областью видимости";
    const functionConst = "Я const с блочной областью видимости";
    }
    show();
    
    console.log(functionVar); // Выдает ReferenceError
    console.log(functionLet); // Выдает ReferenceError
    console.log(functionConst); // Выдает ReferenceError
    