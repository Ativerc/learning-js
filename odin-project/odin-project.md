# Foundations

## Javascript

### 1. Fundamentals Part 1
* How do you declare a variable?
 var, let and const. var is old. var and let are mostly similar except in almost all situations. except var is always either function- or global-scoped, var can be used before its declared, var accepts redeclarations. 

* What are three different ways to declare a variable?
* Which one should you use when?
const when declaring constants. let otherwise. Don't use var . 

* What are the rules for naming variables?
no spaces. No numbers at the bginning. No special chars besides `_` and `$`.

* What are operators, operands, and operations?

* What is concatenation and what happens when you add numbers and strings together?
concatenation is joining two strings.when you add strings and numbers together, the number is type converted to a string and added to the string.

* What are the different types of operators in JavaScript?
so many. arithmetic, assignment, comparison, logical,conditional operator, bitwise and typeof.

* What is the difference between == and ===?
equality and strict equality operators. Equality operator does a type conversion before comparing the operands and the strict equality operator does no such thing.
* What are operator precedence values?
??
* What are the increment/decrement operators?
++ or --. Increase or decrease a number by one.

* What is the difference between prefixing and post-fixing them?
Basically, how we use increment and decrement operators determines if we are using the prefix or postfix form.

Both increase the number by 1 in case of ++ (or decrease the number by 1 incase of --).
The only difference happens if we use the returned value of ++ or --.
The prefix form returns the new incremented/decremented value,  the postfix form returns the old value before increment/decrement.

* What are assignment operators?
Assign a value to a variable.

* What is the “Unary +” Operator?
Unary operator is one which has one operand. The + unary operator does nothing to numerical values but it converts a string or a boolean value to a Numerical value. 

It does what Number() does but shorter.

### 2. Fundamentals Part 2

#### Knowledge Check

* What are the eight data types in JavaScript?  
Numbers, Strings, boolean, bigint, null, undefined, symbol, object.

* Which data type is NOT primitive?   
The only data type whose value can be more than one "thing" at once -- Object.

* What is the relationship between null and undefined?  
null means nothing. undefined is the state of a variable when it has been defined but hasn't been assigned a variable yet.

* What is the difference between single, double, and backtick quotes for strings?  
single and double quotes are both used to represent strings in expressions and variables. Both are supplementary to each other.

Backticks go a step further. The strings delimited by backticks are called Template Literals and allow to substitute a variable's value or the end result of an expression in a string.

* What is the term for embedding variables/expressions in a string?
String interpolation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

* Which type of quote lets you embed variables/expressions in a string?

Backticks 

* How do you embed variables/expressions in a string?

Placeholders ${} inside template literals.

* How do you escape characters in a string?

backslash \

* What is the difference between the slice/substring/substr string methods?



* What are the three logical operators and what do they stand for?

AND OR NOT

* What are the comparison operators?

== === != !== >= <= > <

* What are truthy and falsy values?
Values which always become false when type converted to boolean are called falsy. 

Values which becom true are called truthy.


* What are the falsy values in JavaScript?

null, undefined, NaN, "" empty string, 0

* What are conditionals?

Execute a block of code if a particular condition is met.

* What is the syntax for an if/else conditional?

if (condition) {
    // do this
} else {
    // do this
};

* What is the syntax for a switch statement?

switch (x) {
    case value1:  // strict equality check with x 
        // do this
        // optiional break
    case value2: // if (x === value2)
        // do this
        // optional break
    default: // optional default
        // do this
}

* What is the syntax for a ternary operator?

condition ? iftruedothis : elsedothis

* What is nesting?

The act of putting one code block inside another is called nesting.

For if else: we can use to check if two conditions are correct.

For a loop: we can iterate over two iterators at once using nested loops.

### 3. Devtools

TODO Breakpoints

### 4. JS Fundamentals Part 3

What are functions useful for?  
Reusing code.

How do you invoke a function?   
functionname()

What are anonymous functions?
functions with no function name. Usually created in line as arrow functions or separately as function expressions. Mostly used as arguments when calling other functions.

What is function scope?  
Scope is the logical boundary within which a variable is accessible. 

What are return values?  


What are arrow functions?   
`let function = (arg1, arg2,..., argN) => expression;`
