console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 101; i++) {
  if ( i % 2 != 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i, "FIZZ");
  } else if (i % 5 == 0) {
    console.log(i, "BUZZ");
  } else {
    console.log(i);
  }
}

//Exercise3
// console.log("EXERCISE 3:\n==========\n");

// let i = 0;
// while ( i < 101){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

//While loop
i = 0;
while (i < 101){
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}
while (i < 101){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
      } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
      } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
      }i++
    }

i = 0;    

do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
      } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
      } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
      }i++
    }while (i < 101);


// Exercise 4

// creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 

// creates a random number between 100 and 50
let n = Math.round(Math.random() * (500 - 100) + 100); 

console.log(value, n);
//created boolean var that remembers if we found the value or not
let didFindValue = false;

for (let i=0; i < didFindValue; i++) {
    if(i == value) {
        console.log("Found Value !")
        didFindValue = true;
        break;
    }
}

//if you did not find the value
if (!didFindValue){
    console.log("Did not find value :(");


//BONUS Ex 5.

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

fizzDivisor = 3;
buzzDivisor = 5;

for(let i= start; i < end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0) {
        console.log(i, "FIZZ");
    }
    else if (i % buzzDivisor == 0) {
        console.log(i, "BUZZ");
    }
}

console.log("FIZZ DIVISOR:", fizzDivisor);
console.log("BUZZ DIVISOR:", buzzDivisor);
}