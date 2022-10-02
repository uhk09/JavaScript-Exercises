let current_users = ['taha', 'kamran', 'faisal', 'khurram', 'ali'];
let new_users = ['shahzad', 'saleem', 'ali', 'faisal', 'haseeb'];

for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[i] === new_users[j]) {
            console.log(new_users[j] + ' please choose another user name.');

        }

    }
}