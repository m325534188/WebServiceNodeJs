const  axios  = require("axios");
const WS_Email=require('../Repository/usersWS')
const userfile=require('../Data/UserFile.json')
//  username='Bret'
    const GetUserData=async(username)=>{
try{
    // Data From WS:
   const data = await WS_Email.getUserEmail(username);
     const tasks=await WS_Email.getUserTask(username);
 

//Data From UserFile:
const users = userfile; // Directly access JSON data
 const user=users.find(user=>user.name===username)
 if(!user){
     throw new Error(`User with ${username} not found`)
 }
 
return {
    email:data.email,
    name:data.name,
      age:user.age,
      tasks:tasks.title
};
} catch(error){
    console.error('Error fetching user data:', error);
    return error
}
    }

module.exports = { GetUserData };
