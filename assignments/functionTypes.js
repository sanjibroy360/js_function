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
 
 // Function Decleration
 function add1(n) {  
   return n + 1;
 }

 // Function Expression

 let addOne = function(n) {
                return n + 1;
              };
 
 //Arrow function without Curly braces

 let addOne2 = (n) => n + 1; 

 //Arrow function with Curly braces

 let addOne3 = (n) => {              
                        return n + 1;
                      };
 
 //function invocation

 add1(28); 

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 // Function Decleration

 function sub1(n) {
   return n - 1;
 }

 // Function Expression

 let subOne =  function (n) {
                  return n - 1;
               };

 //Arrow Function without curly braces

 let subOne2 = (n) => n - 1; 

 // Arrow Function with curly braces

 let subOne3 = (n) => {              
                        return n - 1;
                      };
 // Function Invocation

 sub1(30);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 // Function Decleration
 
 function addTwoNumbers(x, y) {
   return x + y;
 }

 // Function Expression

 let addTwoNums = function(x, y){
                    return x + y;
                  };

 // Arrow Function without curly braces

 let addTwoNums2 = (x, y) => x + y; 

 // Arrow Function with curly braces

 let addTwoNums3 = (x, y) => {             
                              return x + y;
                             };

 // Function Invocation

 addTwoNumbers(12, 8); 


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 
 // Function Decleration

 function subTwoNumbers(x, y) {
  return x - y;
 }

 //Function Expression

 let subTwoNums = function (x, y) 
                  {
                    return x - y;
                  };

 // Arrow function without curly braces
 
 let subTwoNums2 = (x, y) => x - y; 

 // Arrow function with curly braces

 let subTwoNums3 = (x, y) => {             
                              return x - y;
                             };
 // Function Invocation
 
 subTwoNums2(38, 9); 


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 
 //Function Decleration

 function multiply(x, y) {
   return x * y;
 }

 //Function Expression

 let multiplyTwoNumbers = function(x, y) {
                            return x * y;
                          };

 // Arrow function without curly braces

 let multiplyTwoNumbers2 = (x, y) => x * y;
 
 //Arrow function with curly braces

 let multiplyTwoNumbers3 = (x, y) => {            
                                      return x * y;
                                     };

 // Function Invocation

 multiplyTwoNumbers2(10, 10); 

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 //Function Decleration

 function divide(x, y) {
   return x / y;
 }

 // Function Expression
 let divide2 = function (x, y) {
                 return x / y;
               };

 // Arrow function without curly braces

 let divide3 = (x, y) => x / y; 

 //Arrow function with curly braces

 let divide4 = (x, y) => {               
                           return x / y;
                         };
 // Function Invocation

 divide2(50, 2); 

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //Function Decleration

 function square(x) {
   return x * x;
 }
 
 //Function Expression

 let squareNum = function (x) {
                   return x * x;
                 };

 //Arrow function without curly braces

 let squareNum2 = (x) => x * x; 

 //Arrow function with curly braces

 let squareNum3 = (x) => {              
                            return x*x;
                         };

 // Function Invocation

 square(2); 

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 
 // Function Decleration

 function calc(operation, x, y) {
    switch(operation) {
      case "add" : alert(`${x} + ${y} = ${x + y}`);
                   return x + y;
      
      case "subtract" : alert(`${x} - ${y} = ${x - y}`);
                        return x - y;

      case "multiply" : alert(`${x} * ${y} = ${x * y}`);
                        return x * y;

      case "divide" : alert(`${x} / ${y} = ${x/y}`);
                      return x / y;
    }
 }
 
 // Function Expression

 let calc2 = function (operation, x, y)    
            {
                switch(operation) {
                  case "add" : alert(`${x} + ${y} = ${x + y}`);
                               return x + y;
                  
                  case "subtract" : alert(`${x} - ${y} = ${x - y}`);
                                    return x - y;

                  case "multiply" : alert(`${x} * ${y} = ${x * y}`);
                                    return x * y;
                                    
                  case "divide" : alert(`${x} / ${y} = ${x / y}`);
                                  return x / y;

                }
             };

 //Arrow Function With Curly Braces

 let calc3 = (operation, x, y) => {                      
                                    switch(operation) {
                                      case "add" : alert(`${x} + ${y} = ${x + y}`);
                                                   return x + y;
                                      
                                      case "subtract" : alert(`${x} - ${y} = ${x - y}`);
                                                        return x - y;

                                      case "multiply" : alert(`${x} * ${y} = ${x * y}`);
                                                        return x * y;
                                                        
                                      case "divide" : alert(`${x} / ${y} = ${x / y}`);
                                                      return x / y;

                                    }
                                  };
 // Function Invocation
 
 calc3("add", 20, 9);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
  
 // Function Decleration
 function compare(a, b) {
  return a > b;
 }
 
 // Function Expression

 let compare2 = function (a, b) {
                  return a > b;
                };

 //Arrow function without curly braces

 let compare3 = (a, b) => a > b; 

 //Arrow function with curly braces

 let compare4 = (a, b) => {              
                            return a > b;
                          };

 // Function Invocation

 compare(10, 8); 

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function compareSmall(a, b) {
   return a < b;
 }

 // Function Expression

 let compareSmall2 = function (a, b) {
                       return a < b;
                     };

 //Arrow function without curly braces

 let compareSmall3 = (a, b) => a < b; 

 //Arrow function with curly braces

 let compareSmall4 = (a, b) => {              
                                 return a < b;
                               };
 // Function Invocation

 compareSmall4(18, 10); 


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 // Function Decleration

 function equal(a, b) {
  return a === b;
 }

 // Function Expression

 let equal2 = function (a, b)   
              {
                return a === b;
              };

 //Arrow function without curly braces

 let equal3 = (a, b) => a === b; 

 //Arrow function with curly braces

 let equal4 = (a, b) => {              
                          return a === b;
                        };
 // Function Invocation

 equal4(10, 10); 


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 // Function Decleration

 function smallest(x, y) {
   return x < y ? x : y;
 }

 // Function Expression

 let smallest2 = function (x, y) {
                    return x < y ? x : y;
                 };

 //Arrow function without curly braces

 let smallest3 = (x, y) => x < y ? x : y;

 //Arrow function with curly braces

 let smallest4 = (x, y) => {               
                             return x < y ? x : y;
                           };

 // Function Invocation
 
 smallest3(10, 8); 


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 // Function Decleration

 function largest(x, y) {
   return x > y ? x : y;
 }

 // Function Expression

 let largest = function (x, y) {
                 return x > y ? x : y;
               };

 //Arrow function without curly braces

 let largest3 = (x, y) => x > y ? x : y; 

 //Arrow function with curly braces

 let largest4 = (x,y) => {               
                           return x > y ? x : y;
                         };

 // Function Invocation
 
 largest3(10, 8); 

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 // Function Decleration
 function checkEven(n) {
   return (n % 2 === 0);
 }

 // Function Expression

 let checkEven2 = function (n) {
                    return (n % 2 === 0);
                  };

 //Arrow function without curly braces

 let checkEven3 = (n) => (n % 2 === 0); 
 
 //Arrow function with curly braces

 let checkEven4 = (n) => {              
                           return (n % 2 === 0);
                         };
 // Function Invocation

 checkEven4(10); 


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 // Function Decleration

 function checkOdd(n) {
   return (n % 2 === 1);
 }
 
 // Function Expression

 let checkOdd2 = function (n) {
                   return (n % 2 === 1);
                 };

 //Arrow function without curly braces

 let checkOdd3 = (n) => (n % 2 === 1);

 //Arrow function with curly braces

 let checkOdd4 = (n) => {              
                          return (n % 2 === 1);
                        };

 // Function Invocation

 checkOdd4(13); 


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
 
 // Function Decleration

 function gradeSystem(score) {
   switch(score <= 100) {
     case (score>=90) : return "A";
     case (score>=80 && score<90) : return "B";
     case (score>=70 && score<80) : return "C";
     case (score>=60 && score<70) : return "D";
     default : return "F";
   }
 }

 //Function Expression

 let gradeSystemExp = function (score)     
                      {
                        switch(score<=100) {
                          case (score>=90) : return "A";
                          case (score>=80 && score<90) : return "B";
                          case (score>=70 && score<80) : return "C";
                          case (score>=60 && score<70) : return "D";
                          default : return "F";
                        }
                      };

 //Arrow Function with curly braces

 let gradeSystemArrow = (score) => {                  
                                    switch(score<=100) {
                                      case (score>=90) : return "A";
                                      case (score>=80 && score<90) : return "B";
                                      case (score>=70 && score<80) : return "C";
                                      case (score>=60 && score<70) : return "D";
                                      default : return "F";
                                    }
                                   };
 //Function Invocation

 gradeSystemArrow(77);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 
 // Function Decleration

 function concatTwoString(word1, word2) {
   return word1 + word2;
 }

 // Function Expression
 
 let concatTwoString2 = function (word1, word2) {
                          return word1 + word2;
                        }
 //Arrow function without curly braces

 let concatTwoString3 = (word1, word2) => word1 + word2; 

 //Arrow function with curly braces

 let concatTwoString4 = (word1, word2) => {            
                                            return word1 + word2;
                                          }
 //Function Invocation

 concatTwoString4("Hello", "World");