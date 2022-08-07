// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myBirthYear = isLeapYear(1999);
// console.log(myBirthYear);
// const herBirthYear = isLeapYear(2000);
// console.log(herBirthYear);

function isLeapYear(year){
    const remainder = year % 100;
    if(remainder === 0){
        return false;
    }
    else{
        return true;
    }
}
const myYearisLeap = isLeapYear(2000);
console.log(myYearisLeap);
const herYearisLeap = isLeapYear(2022);
console.log(herYearisLeap);