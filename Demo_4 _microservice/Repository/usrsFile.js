const jf=require('jsonfile')

const FILE=require('./Data/UserFile.json')

const GetUserPhon=()=>{
    return jf.readFile(FILE)
}
module.exports={GetUserPhon}