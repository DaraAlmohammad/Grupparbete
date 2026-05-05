import { add, sub } from "./calculator.js";

function main() {
    console.log("Calculator v0.1"); 
    console.log("1) Addition\n0) Exit program");
    console.log("1) Add\n2) Substract\n0) Exit");

    let a = parseFloat(prompt("a: "));
    let b = parseFloat(prompt("b: "));
    let choice = prompt("Your choice: ");
    
    if (choice === "1") {
        console.log(add(a, b));
    }
    if (choice === "2") {
        console.log(sub(a,b));
    }
    if (choice === "3") {
        console.log(mul(a, b));
    }
}

main();

