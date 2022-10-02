let magicians = ['Shaheen', 'Naseem', 'Haris'];

function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }

}

show_magicians(magicians);

function make_great() {
    magicians.splice(0, 3, "The Great Shaheen", "The Great Naseem", "The Great Haris");
}

make_great();
show_magicians(magicians);