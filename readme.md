## 1. Discuss the purpose of the typeof operator in JavaScript and how it can be used. Please explain it in your own words.
## 2. How can the style/class of an element be changed using DOM Manipulation? Write a function for this. Please present and explain your code.


### Purpose and Usage of the typeof Operator in JavaScript

1. **Definition and Purpose**:

   - The `typeof` operator in JavaScript is a unary operator that returns a string indicating the data type of its operand.
   - It helps identify the type of a variable or expression.

2. **Data Type Identification**:

   - Example usage: `typeof variableName`.
   - Returns a string representing the data type of the variable, such as "number", "string", "boolean", "object", "function", etc.

3. **Handling Different Types**:

   - Useful for conditional logic based on data types.
   - Enables dynamic type checking and validation in code.
   - Example: `if (typeof variable === 'number') { ... }`.

4. **Dynamic Code Execution**:

   - Allows for dynamic behaviour based on variable types.
   - Commonly used in frameworks, libraries, and dynamic applications.

5. **Debugging and Validation**:

   - Helpful for debugging code by inspecting variable types.
   - Ensures data integrity and type safety in applications.

6. **Example**:

   let num = 10;
   let str = "Hello";
   console.log(typeof num); // Outputs: "number"
   console.log(typeof str); // Outputs: "string"

7. **Conclusion**:
   - The `typeof` operator is a fundamental tool for type identification and dynamic behavior in JavaScript.
   - It enhances code readability, reliability, and flexibility.
