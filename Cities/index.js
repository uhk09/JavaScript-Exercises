let city1 = 'Karachi';
let city2 = 'Lahore';
let city3 = "London";
let countryName = 'Pakistan';
let countryName1 = 'United Kingdom';

function describe_city(cityName, countryName = 'PAkistan') {

    console.log(cityName + ' is in the ' + countryName)
}

describe_city(city1);
describe_city(city2);
describe_city(city3, countryName1);