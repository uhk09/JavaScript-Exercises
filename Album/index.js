let artist1 = 'Sajjad Ali';
let artist2 = 'Ali Haiser';
let artist3 = 'Junaid Jamshed';

let album1 = 'Album Sajjad';
let album2 = 'Album Ali';
let album3 = 'Album Junaid';

function make_album(artistName, albumTitle, numberTracks = 10) {
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        numberTracks: numberTracks
    }

}

let album = [];

album.push(make_album(artist1, album1));
album.push(make_album(artist2, album2));
album.push(make_album(artist3, album3, 15));

for (let i = 0; i < album.length; i++) {
    console.log(album[i]);
}