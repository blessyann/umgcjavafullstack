Find by user name function


let users = [
    {username: 'Ashish'},
    {username: 'Adarsh'},
    {username: 'Anoop'}
  ];
function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user){
    return user.username === username;
  })
}