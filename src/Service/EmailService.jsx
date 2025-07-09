import axios from "axios";

const base_url = `${process.env.REACT_APP_API_URL}/email`;  // Fixed extra slash

const addEmail = async (email) => {
  try {
    const response = await axios.post(`${base_url}/addEmail`, email);
    return response.data;  // Return only data from response
  } catch (error) {
    console.error("Email error:", error.response?.data || error.message);
    throw new Error("Email failed. Please check your Email.");
  }
};

export {addEmail};