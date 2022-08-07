function gramToKg(grams){
    const kg = grams / 1000;
    return kg;

}
const aluGrams = 3500;
const aluKg = gramToKg(aluGrams);
console.log(aluKg);