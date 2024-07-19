// Indirect recursion occurs when a function calls another function, 
// which in turn calls the first function, creating a loop. In other words, 
// it's when two or more functions call each other in a cycle.

let money = 100;
let apple = 0;

// Indirect Method
function buyApple(money) {
    // console.log(money)

    if (money > 0) {
        console.log("I have ", money, apple)
        buyMore(money)

    } else {
        console.log("Don't have money, Total apple:", apple)
    }
}


function buyMore(money) {
    apple++
    buyApple(money - 20)

    // console.log('Buy More', money)
}

buyApple(money)



//Direct Method

// function buyApple(money) {
//     // console.log(money)

//     if (money > 0) {
//         apple++
//         console.log("I have ", money, apple)
//         buyApple(money - 20)

//     } else {
//         console.log("Don't have money, Total apple:", apple)
//     }
// }



// buyApple(money)