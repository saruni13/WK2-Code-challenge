
// Function to check if a number is prime
function isPrime(num) {
    // If the number is less than or equal to 1, it's not prime
    if (num <= 1) return false;
    // If the number is 2 or 3, it's prime
    if (num <= 3) return true;

    // If the number is divisible by 2 or 3, it's not prime
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check divisibility for numbers of the form 6k ± 1 up to the square root of the number
    let i = 5;
    while (i * i <= num) {
        // If the number is divisible by i or (i + 2), it's not prime
        if (num % i === 0 || num % (i + 2) === 0) return false;
        // Increment i by 6 to check the next potential prime candidate
        i += 6;
    }

    // If none of the conditions above are met, the number is prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(arr) {
    // Use the filter method to keep only prime numbers in the array
    return arr.filter(num => isPrime(num));
}

// Test the filterPrimes function with an array of numbers
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNums = filterPrimes(testArray);
// Output the prime numbers
console.log(primeNums); //
