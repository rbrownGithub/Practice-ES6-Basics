// Step 1: Create arrays using spread operator
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

const numbers = [...numbers1, ...numbers2];

// Step 2: Define square function
const square = (number) => number * number;

// Step 3: Map to create squares array
const squares = numbers.map(square);

// Step 4: Define isEven function
const isEven = (number) => number % 2 === 0;

// Step 5: Filter to create evenSquares array
const evenSquares = squares.filter(isEven);

// Step 6: Destructuring assignment
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Step 7: Template literal to log results
console.log(`Original Numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even Squares: ${evenSquares}`);
console.log(`Extracted Even Squares: ${firstEvenSquare}, ${secondEvenSquare}`);
