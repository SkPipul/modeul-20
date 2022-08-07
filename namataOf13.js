// function getNamataOf13(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(sum);
//     }
//     return sum;
// }
// const myNamatas = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13];
// getNamataOf13(myNamatas);



function getNamataOf25(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
        console.log(sum);
    }
    return sum;
}
let myNamatas = [25,25,25,25,25,25,25,25,25,25];
getNamataOf25(myNamatas);
