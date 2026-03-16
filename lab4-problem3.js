function calculateTotal(...numbers) {

    numbers.forEach(n => {
        if (typeof n !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
    });

    return numbers.reduce((total, n) => total + n, 0);
}