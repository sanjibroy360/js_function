1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
  let calculateDogAge = (age, conversionRate) => (age * conversionRate);
  alert( calculateDogAge(5, 7) );
```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
  const MAX_AGE = 75;

  let calculateSupply = (age, amountPerDay) => (MAX_AGE - age) * (amountPerDay * 365);
  alert(`" You will need ${Math.round( calculateSupply(21, 3) )} to 
    last you until the ripe old age of ${MAX_AGE} "`);
```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here

// Celsius to Fahrenheit
let c = prompt("Enter celsius temperature", "0");
c = Number(c);
let celsiusToFahrenheit = (c) => ( (c / 5) * 9 ) + 32);
alert(`"${c}°C is ${celsiusToFahrenheit(c)}°F"`);

// Fahrenheit to Celsius
let f = prompt("Enter fahrenheit temperature", "0");
f = Number(f);
let fahrenheitToCelsius = (f) => ( (f - 32) / 9 ) * 5 ;
alert(`" ${f}°F is ${fahrenheitToCelsius(f)}°C "`);

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here

  function checkAge(age)
  {
    return age > 18 ? true : "Did parents allow you?" ;
  }

  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here

  function checkAge(age) {
    return (age > 18) || "Did parents allow you?" ;
  }

  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

No, There will be no difference.
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here

// After writing code uncomment to check the answer.
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

let x = prompt("Enter The Number","0");
x = Number(x);
let n = prompt("Enter The Power","0");
n = Number(n);

let pow = (x, n) => x < 0 ? "The number below 1 is not allowed" : x ** n;
alert( pow(x, n) );

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here

let prod = 1;
let n = prompt("Enter The Number","0");
n = Number(n);
let option = prompt("Enter \n + for computing the sum of 1 to n \n * for computing the product of 1 to n \n");

switch(option)
{
  case "+" : alert( n * (n+1) / 2 );
             break;
  
  case "*" : for(i = 1; i <= n; i++) {
                prod *= i;
             }
             alert( prod );
             break;
  default :   alert( "Please, choose a correct option" );
}

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
let n = prompt("Enter The Number", "0");
n = Number(n);

let sum = (n) => n * (n + 1) / 2 ;

alert(sum(n));
```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here

let n = prompt("Enter The Number", "0");
n = Number(n);

let sum = (n) => {
  let res = 0;
  
  for(i = 1; i <= n; i++)
  { 
    if(i % 5 === 0 || i % 7 === 0 && i % 35 !== 0 )
    {
      res += i;
    }
  }
  return res;
}

alert(sum(n));

```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.

let min = (a, b) => (a < b) ? a : b ;

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```