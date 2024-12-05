
const userService=require('./Service/services')

const username ='Samantha' ;

userService
.GetUserData(username)
.then((data) => console.log(data))
.catch((error) => console.log('2:', error));