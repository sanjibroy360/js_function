// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function add1(n) // Function Decleration
 {
   return n+1;
 }

 let addOne = function(n) //Function Expression
            {
              return n+1;
            };

 let addOne2 = (n) => n+1; //Arrow function without Curly braces

 let addOne3 = (n) => {               //Arrow function with Curly braces
                        return n+1;
                      };
 add1(28); //function invocation

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function sub1(n)  // Function Decleration
 {
   return n-1;
 }

let subOne =  function (n) // Function Expression
               {
                  return n-1;
               };
let subOne2 = (n) => n-1; //Arrow Function without curly braces

let subOne3 = (n) => {              // Arrow Function with curly braces
                        return n-1;
                     };
sub1(30); // Function Invocation

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function addTwoNumbers(x,y) // Function Decleration
{
  return a+b;
}

let addTwoNums = function(x,y)  // Function Expression
                 {
                    return x+y;
                 };

let addTwoNums2 = (x,y) => x+y; // Arrow Function without curly braces

let addTwoNums3 = (x,y) => {              // Arrow Function with curly braces
                              return x+y;
                           };

addTwoNumbers(12,8); // Function Invocation


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subTwoNumbers(x,y) // Function Decleration
{
  return x-y;
}

let subTwoNums = function (x,y) //Function Expression
                  {
                    return x-y;
                  };

let subTwoNums2 = (x,y) => x-y; // Arrow function without curly braces

let subTwoNums3 = (x,y) => {             // Arrow function with curly braces
                              return x-y;
                           };

subTwoNums2(38-9); // Function Invocation


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x,y) //Function Decleration
{
  return x*y;
}

let multiplyTwoNumbers = function(x,y) //Function Expression
                          {
                            return x*y;
                          };

let multiplyTwoNumbers2 = (x,y) => x*y; // Arrow function without curly braces

let multiplyTwoNumbers3 = (x,y) => {            //Arrow function with curly braces
                                    return x*y;
                                   };

multiplyTwoNumbers2(10,10); // Function Invocation

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x,y) //Function Decleration
{
  return x/y;
}

let divide2 = function (x,y) // Function Expression
              {
                return x/y;
              };

let divide3 = (x,y) => x/y; // Arrow function without curly braces

let divide4 = (x,y) => {               //Arrow function with curly braces
                          return x/y;
                       };
divide2(50,2); // Function Invocation

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x)
{
  return x*x;
}

let squareNum = function (x)
                {
                  return x*x;
                };
let squareNum2 = (x) => x*x; //Arrow function without curly braces

let squareNum3 = (x) => {               //Arrow function with curly braces
                            return x*x;
                        };

square(2); // Function Invocation

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calc(operation,x,y)  // Function Decleration
{
  switch(operation)
  {
    case "add" : alert(`${x} + ${y} = ${x+y}`);
                 return x+y;
    
    case "subtract" : alert(`${x} - ${y} = ${x-y}`);
                      return x-y;

    case "multiply" : alert(`${x} * ${y} = ${x*y}`);
                      return x*y;

    case "divide" : alert(`${x} / ${y} = ${x/y}`);
                    return x/y;

  }
}

let calc2 = function (operation,x,y)    // Function Expression
            {
              switch(operation)
              {
                case "add" : alert(`${x} + ${y} = ${x+y}`);
                            return x+y;
                
                case "subtract" : alert(`${x} - ${y} = ${x-y}`);
                                  return x-y;

                case "multiply" : alert(`${x} * ${y} = ${x*y}`);
                                  return x*y;
                                  
                case "divide" : alert(`${x} / ${y} = ${x/y}`);
                                return x/y;

              }
            };

let calc3 = (operation,x,y) => {                      //Arrow function with curly braces
                                  switch(operation)
                                  {
                                    case "add" : alert(`${x} + ${y} = ${x+y}`);
                                                 return x+y;
                                    
                                    case "subtract" : alert(`${x} - ${y} = ${x-y}`);
                                                      return x-y;

                                    case "multiply" : alert(`${x} * ${y} = ${x*y}`);
                                                      return x*y;
                                                      
                                    case "divide" : alert(`${x} / ${y} = ${x/y}`);
                                                    return x/y;

                                  }
                                };

calc3("add",20,9); // Function Invocation



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function compare(a,b) // Function Decleration
{
  return a > b;
}

let compare2 = function (a,b)   // Function Expression
                {
                  return a > b;
                };

let compare3 = (a,b) => a > b; //Arrow function without curly braces

let compare4 = (a,b) => {              //Arrow function with curly braces
                          return a > b;
                        };

compare(10,8); // Function Invocation

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function compareSmall(a,b) // Function Decleration
{
  return a < b;
}

let compareSmall2 = function (a,b)   // Function Expression
                {
                  return a < b;
                };

let compareSmall3 = (a,b) => a < b; //Arrow function without curly braces

let compareSmall4 = (a,b) => {              //Arrow function with curly braces
                                return a < b;
                             };

compareSmall4(18,10); // Function Invocation


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function equal(a,b) // Function a < b ? a: b;Decleration
{
  return a === b;
}

let equal2 = function (a,b)   // Function Expression
              {
                return a === b;
              };

let equal3 = (a,b) => a === b; //Arrow function without curly braces

let equal4 = (a,b) => {               //Arrow function with curly braces
                        return a === b;
                      };

equal4(10,10); // Function Invocation


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function smallest(x,y) // Function Decleration
{
  return x < y ? x : y;
}

let smallest2 = function (x,y)   // Function Expression
              {
                return x < y ? x : y;
              };

let smallest3 = (x,y) => x < y ? x : y; //Arrow function without curly braces

let smallest4 = (x,y) => {               //Arrow function with curly braces
                          return x < y ? x : y;
                         };

smallest3(10,8); // Function Invocation


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function largest(x,y) // Function Decleration
{
  return x > y ? x : y;
}

let largest = function (a,b)   // Function Expression
              {
                return x > y ? x : y;
              };

let largest3 = (x,y) => x > y ? x : y; //Arrow function without curly braces

let largest4 = (x,y) => {               //Arrow function with curly braces
                          return x > y ? x : y;
                        };

largest3(10,8); // Function Invocation

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function checkEven(n) // Function Decleration
{
  return (n%2===0);
}

let checkEven2 = function (n)   // Function Expression
                  {
                    return (n%2===0);
                  };

let checkEven3 = (n) => (n%2===0); //Arrow function without curly braces

let checkEven4 = (n) => {               //Arrow function with curly braces
                            return (n%2===0);
                          };

checkEven4(10); // Function Invocation
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function checkOdd(n) // Function Decleration
{
  return (n%2===1);
}

let checkOdd2 = function (n)   // Function Expression
              {
                return (n%2===1);
              };

let checkOdd3 = (n) => (n%2===1); //Arrow function without curly braces

let checkOdd4 = (n) => {               //Arrow function with curly braces
                          return (n%2===1);
                       };

checkOdd4(13); // Function Invocation


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function gradeSystem(score) // Function Decleration
 {
   switch(score<=100)
   {
     case (score>=90) : return "A";
     case (score>=80 && score<90) : return "B";
     case (score>=70 && score<80) : return "C";
     case (score>=60 && score<70) : return "D";
     default : return "F";
   }
 }

let gradeSystemExp = function (marks)     //Function Expression
                      {
                        switch(score<=100)
                        {
                          case (score>=90) : return "A";
                          case (score>=80 && score<90) : return "B";
                          case (score>=70 && score<80) : return "C";
                          case (score>=60 && score<70) : return "D";
                          default : return "F";
                        }
                      };

let gradeSystemArrow = (marks) => {                  //Arrow Function with curly braces
                                    switch(score<=100)
                                    {
                                      case (score>=90) : return "A";
                                      case (score>=80 && score<90) : return "B";
                                      case (score>=70 && score<80) : return "C";
                                      case (score>=60 && score<70) : return "D";
                                      default : return "F";
                                    }
                                  };
gradeSystemArrow(77);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function concatTwoString(word1,word2)  // Function Decleration
{
  return word1+word2;
}

let concatTwoString2 = function (word1,word2) // Function Expression
                        {
                          return word1+word2;
                        }

let concatTwoString3 = (word1,word2) => word1+word2; //Arrow function without curly braces

let concatTwoString4 = (word1,word2) => {            //Arrow function with curly braces
                                          return word1+word2;
                                        }

concatTwoString4("Hello","World");