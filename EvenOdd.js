// function isEven(number){
//     const remainer = number % 2;
//     if(remainer === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const numberisEven = isEven(182);
// console.log(numberisEven);
// const numberisOdd = isEven(237);
// console.log(numberisOdd);


function isEvenOdd(num){
    const remainder = num % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const isEven = isEvenOdd(23566);
console.log(isEven);
const isOdd = isEvenOdd(33333);
console.log(isOdd);