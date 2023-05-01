
function printDigits(num){
    if (num === 0){
        console.log(0)
    }

    if (num < 0){
        num *= -1
    }

    while(num > 0){
        console.log(num % 10)
        num = Math.floor(num / 10)
    }
}

// printDigits(314)
// printDigits(2038525820385)
// printDigits(-156)
// printDigits(0)