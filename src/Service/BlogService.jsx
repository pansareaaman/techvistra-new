import axios from "axios";

const base_url = `${process.env.REACT_APP_API_URL}/user`;  // Fixed extra slash

const addBlog = async (blog) => {
  try {
    const response = await axios.post(`${base_url}/blog`, blog);
    return response.data;  // Return only data from response
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};

const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${base_url}/getAllBlog`);
        console.log("Fetched Blogs:", response.data); // Debugging
        return response.data;
    } catch (error) {
        console.error("Logout error:", error.response?.data || error.message);
        throw new Error("Logout failed.");
    }
};

const updateBlog = async (blog) => {
  try {
      const response = await axios.put(`${base_url}/updateBlog`,blog);
      console.log("Blog Updated:", response.data); // Debugging
      return response.data;
  } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      throw new Error("Update failed.");
  }
};

const deleteBlog = async (id) => {
  try {
      const response = await axios.delete(`${base_url}/deleteBlog/${id}`); // Corrected URL
      console.log("Blog Deleted:", response.data); // Debugging
      return response.data;
  } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      throw new Error("Delete failed.");
  }
};




export { addBlog , getAllBlogs, updateBlog,deleteBlog };













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