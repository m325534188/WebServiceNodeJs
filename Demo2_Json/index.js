const utils=require('./utils')

utils.getPerson()
.then((Person)=>console.log(Person))
.catch((error)=>console.log(error))


utils.getPersonbyid2(3)
.then((userData)=>{
    const user=userData.find(user=>user.id===1)
       if(user)
        console.log(user)
    else
    console.log('User not found');
})
.catch((error)=>
    console.log('Error:', error)

)
