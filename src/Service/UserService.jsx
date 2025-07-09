import axios from "axios";

const base_url = `${process.env.REACT_APP_API_URL}/user`;  // Fixed extra slash

const loginUser = async (login) => {
  try {
    const response = await axios.post(`${base_url}/login`, login);
    return response.data;  // Return only data from response
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};

const logoutUser = async (id) => { 
  try {
    const response = await axios.post(`${base_url}/logout/${id}`);
    return response.data;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw new Error("Logout failed.");
  }
};

export { loginUser, logoutUser };













// import axios from "axios"

// const base_url = "http://localhost:9090/user/";

// const loginUser =async(data) =>{
//     return axios.post(`${base_url}/login`,data)
//     .then(res=>res.data)
//     .catch(error=>{throw error;});
// }

// const logoutUser =async(id) =>{ 
//     return axios.post(`${base_url}/logout/${id}`)
//     .then(res=>res.data)
//     .catch(error=>{throw error;});
// }

// export {loginUser,logoutUser};