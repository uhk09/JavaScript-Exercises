function car() {
    for (var i = 0; i < arguments.length; i++) {
        return {
            manufacturer: arguments[0],
            model: arguments[1],
            Year: arguments[2],
            firstOwner: arguments[3]
        }
    }
}

console.log(car('suzuki', 'Alto', 2022, 'Haseeb'));