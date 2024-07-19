
// Recursion in data structures and algorithms (DSA) is a technique where a function calls itself to solve smaller instances of the same problem until it reaches a base case, which is a simple scenario that can be solved without further recursion.

//In simpler terms, recursion is like when you solve a problem by breaking it down into smaller, more manageable parts, and then solving each part by doing the same thing again and again until you get to a point where the problem is easy enough to solve directly.

//Example >>
function apple(x) {
    console.log(x)

    if (x < 10) {
        apple(x + 1)
    }
}

let data = 0;

// apple(data)


function findFactorial(input) {

    // console.log(input)

    if (input === 0) {
        return 1
    }

    return input * findFactorial(input - 1)
}

let input = 0

console.log(findFactorial(input))

