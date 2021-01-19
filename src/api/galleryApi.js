import axios from "axios";
const API_KEY = "19499412-b0a970c3da683bab1682cc3ad";

const BASE_URL = "https://pixabay.com/api/";

const fetchImagesWithQuery = (searchQuery, page=1) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

 const imagesApi = {
  fetchImagesWithQuery,
};
export default imagesApi