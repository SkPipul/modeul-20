function milesToKm(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const schoolMiles = 1200;
const schoolKilometer = milesToKm(schoolMiles);
console.log(schoolKilometer);