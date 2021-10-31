import axios from "axios";
import PropTypes from "prop-types";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23222318-53c9b232bd4285490ccfd863a";

const apiService = (query, currentPage) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

apiService.propTypes = {
  query: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default apiService;
