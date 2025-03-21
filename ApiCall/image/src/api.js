import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID -BaYzm731KwPBBevmVyhoCrMi_OWZcC8GWdR_qjfOyA",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
