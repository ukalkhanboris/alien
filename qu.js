// Declare and initialize the variable
let invertible = false;

// Function to potentially change the state of 'invertible'
function checkIfInvertible(matrix) {
    // Logic to determine if the matrix is invertible
    // For simplicity, let's assume we have a function isMatrixInvertible that does this
    if (isMatrixInvertible(matrix)) {
        invertible = true;
    } else {
        invertible = false;
    }
}

// Example function to determine if a matrix is invertible
function isMatrixInvertible(matrix) {
    // Placeholder logic for determining invertibility
    // In a real scenario, you would include actual mathematical checks here
    return matrix.length > 0 && matrix[0].length > 0;  // Simplified example
}

// Example usage
let myMatrix = [[1, 2], [3, 4]];
checkIfInvertible(myMatrix);
console.log(invertible);  // Output will depend on the logic in isMatrixInvertible
