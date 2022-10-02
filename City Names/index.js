function city_country(cityName, countryName) {
    return '"' + cityName + ', ' + countryName + '"'
}

let city1 = 'Karachi';
let city2 = 'Lahore';
let city3 = 'Islamabad';
let country = 'Pakistan';

let pair1 = city_country(city1, country);
let pair2 = city_country(city2, country);
let pair3 = city_country(city3, country);

console.log(pair1);
console.log(pair2);
console.log(pair3);