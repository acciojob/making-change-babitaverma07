function makeChange(amount) {
    // Initialize the result object
    const change = { q: 0, d: 0, n: 0, p: 0 };
    
    // Calculate the number of quarters
    change.q = Math.floor(amount / 25);
    amount %= 25;
    
    // Calculate the number of dimes
    change.d = Math.floor(amount / 10);
    amount %= 10;
    
    // Calculate the number of nickels
    change.n = Math.floor(amount / 5);
    amount %= 5;
    
    // Calculate the number of pennies
    change.p = amount;
    
    return change;
}

// Example usage:
console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }
