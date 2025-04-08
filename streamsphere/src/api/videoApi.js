import axios from "axios";

export const getAllVideos = async () => {
  const response = await axios.get("http://localhost:5000/api/videos");
  return response.data;
};
