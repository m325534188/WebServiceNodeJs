const axios=require('axios')
const jf=require('jsonfile')
const USERS_URL='https://jsonplaceholder.typicode.com/users'
const TODO_URL='https://jsonplaceholder.typicode.com/todos'

const getallusers=async(name)=>{      
const resp=await axios.get(USERS_URL)
const fullname=resp.data.find(user=>user.username===name)
   if(fullname)
      console.log(fullname.name);
    
else{
    console.log('user not found');
}
    
}


const getalltask=async (name,id)=>{
    const resp=await axios.get(USERS_URL)
   const  user=resp.data.find(user=>user.username===name)

   if(user){

      if(user.name.startsWith('E')){
         const TodoResp=await axios.get(TODO_URL)
         const task = TodoResp.data.find(task => task.userId === user.id && task.id === id);
         if(task)
             console.log(task.title)

        //  const setTittle=async(todo2.tittle)
        console.log(task.title); // כעת הדפסת כותרת המשימה
                } else {
                    console.log('Task not found');
                }
            
        } else {
            console.log('User not found');
        }
   
};
const getallusers2=async()=>{      
    const {status,statusText,data}=await axios.get(USERS_URL)
  console.log(status)
  console.log(statusText)
      
}


getalltask("Ervin Howell",2)
getallusers("Antonette")
getallusers2()