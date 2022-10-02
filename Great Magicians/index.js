let magicians = ['Shaheen', 'Naseem', 'Haris'];

function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }

}

show_magicians(magicians);

function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians.push('The Great' + i)
    }

    return magicians
}

let magician = make_great(magicians);
console.log(typeof magician);