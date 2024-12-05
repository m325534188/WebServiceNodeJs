const { default: axios } = require("axios");

const API_EMAIL = "https://jsonplaceholder.typicode.com/users";
const API_TASKS="https://jsonplaceholder.typicode.com/todos";


const getUserEmail = async(username)=>{
    const url = `${API_EMAIL}?username=${username}`; // Ensure this URL is correct
    const response = await axios.get(url);
    return response.data[0];
//    return axios.get(`${API_EMAIL}/${username}`)
};

const getUserTask =async (username)=>{
    const url=`${API_TASKS}?username=${username}`
    const response=await axios.get(url)
    return response.data[0];
}
module.exports = { getUserEmail,getUserTask };

// try {
//     const response = await axios.get(url);
//     if (response.data.length === 0) {
//         throw new Error(`User with username ${username} not found`);
//     }
//     return response.data[0]; // Assuming the API returns an array of users
// } catch (error) {
//     console.error('Error fetching user email:', error);
//     throw error;
// }