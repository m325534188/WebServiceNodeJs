const { default: axios } = require("axios");

const API_EMAIL = "https://jsonplaceholder.typicode.com/users";
const API_TASKS="https://jsonplaceholder.typicode.com/todos";


const getUserEmail = async(username)=>{
    const url = `${API_EMAIL}?username=${username}`; 
    const response = await axios.get(url);
    return response.data[0];
};

const getUserTask =async (username)=>{
    const url=`${API_TASKS}?username=${username}`
    const response=await axios.get(url)
    return response.data[0];
}
module.exports = { getUserEmail,getUserTask };

