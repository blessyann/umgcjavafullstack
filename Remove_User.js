Remove a user


let users = [
    {username: 'Susan'},
    {username: 'Pinky'},
    {username: 'Sara'}
  ];
  
function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}