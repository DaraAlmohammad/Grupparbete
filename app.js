import { add, sub } from "./calculator.js";

function main() {
    console.log("Calculator v0.1"); 
    console.log("1) Addition\n0) Exit program");

    let a = parseFloat(prompt("a: "));
    let b = parseFloat(prompt("b: "));
    let choice = prompt("Your choice: ");
    
    if (choice === "1") {
        console.log(add(a, b));
    }
}

main();

