// Define a function called swapStringCase which takes a string parameter 'strin'
function swapStringCase(strin) {
    // Initialize an empty string to store the modified string
    let newString = "";

    // Iterate through each character in the input string
    for (let i = 0; i < strin.length; i++) {

        // Check if the current character is in lowercase
        if (strin[i] === strin[i].toLowerCase()) {

            // If it's in lowercase, convert it to uppercase and add it to the new string
            newString += strin[i].toUpperCase();
        } else {

            // If it's not in lowercase, convert it to lowercase and add it to the new string
            newString += strin[i].toLowerCase();
        }
    }
    
    // Return the modified string
    return newString;
}

// Test the swapStringCase function
// Define an example string
let example = 'The Quick Brown Fox';

// Call the swapStringCase function with the example string and store the result
let outputString = swapStringCase(example);


console.log(outputString); 