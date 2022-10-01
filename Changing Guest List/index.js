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