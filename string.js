function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString = char.toLowerCase();
        } else {
            swappedString = char.toUpperCase();
        }
    }
    return swappedString;
}