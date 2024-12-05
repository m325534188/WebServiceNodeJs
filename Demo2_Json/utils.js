const jf=require('jsonfile')

const getPerson=()=>{
   return jf.readFile('./Person.json')
   
}



const getPersonbyid2 = (id) => {
   return jf.readFile('./Person.json')
      
}

 
module.exports={getPerson,getPersonbyid2}