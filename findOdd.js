function getAnArrayOfOdd(numbers){
    let sum = 0;
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0){
            console.log(element);
            sum = sum + element;
            oddNumbers.push(element);
        }
    }
    return {oddNumbers};
}
const myNumbers = [25, 27, 34, 45, 33, 32, 532, 56, 23, 44];
const oddNumbers = getAnArrayOfOdd(myNumbers);
console.log(oddNumbers);
const sum = getAnArrayOfOdd(oddNumbers);
// console.log(sum);
