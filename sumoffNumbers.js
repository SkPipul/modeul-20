function sumOfNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}
let total = sumOfNumber(7);
console.log(total);