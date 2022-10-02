let dinnerInvitationList = ['Saleem', 'Yasir', 'Khurram'];


for (let i = 0; i < dinnerInvitationList.length; i++) {
    console.log(dinnerInvitationList[i] + ' you are invited for dinner.');
}

console.log(dinnerInvitationList[2] + " will not reach today's dinner.");

dinnerInvitationList.pop();
dinnerInvitationList.push("Faisal");

for (let i = 0; i < dinnerInvitationList.length; i++) {
    console.log(dinnerInvitationList[i] + ' you are invited for dinner.');
}

console.log("We got a bigger dinner table so we are inviting some more guest");

dinnerInvitationList.splice(0, 0, "Shahzad");
dinnerInvitationList.splice(2, 0, "Haseeb");
dinnerInvitationList.push("Kamran");

for (let i = 0; i < dinnerInvitationList.length; i++) {
    console.log(dinnerInvitationList[i] + ' you are invited for dinner.');
}

console.log("Due to some reasons now only 2 peples are invited");

for (let i = 0; i < (dinnerInvitationList.length - 2); i++) {
    console.log(dinnerInvitationList[i] + " due to some reason you are drop from dinner.");

}
dinnerInvitationList.splice(0, 4);

for (let i = 0; i < dinnerInvitationList.length; i++) {
    console.log(dinnerInvitationList[i] + ' you are invited for dinner.');
}

dinnerInvitationList.splice(0, 3);

console.log(dinnerInvitationList);