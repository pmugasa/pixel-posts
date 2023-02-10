import axios from "axios";
const baseUrl = "http://localhost:4000/create-account";

const signUp = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);

  return response.data;
};

export default signUp;
