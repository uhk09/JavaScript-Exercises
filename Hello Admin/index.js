let usernames = ['user-1', 'user-2', 'user-3', 'user-4', 'admin'];

for (let i = 0; i < usernames.length; i++) {
    if (usernames.indexOf('admin') !== -1) {
        console.log("Hello admin, would you like to see a status report?");

    } else {
        console.log("Hello " + usernames[i] + " Welcome for logging");
    }
}

//(favorite_fruits.indexOf('Red Apple') !== -1)