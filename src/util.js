import axios from "axios";

const url = "http://hacksociety.tech/api/public/hackathonsAll";

const fetchData = (handleData) => {

  axios.get(url)
    .then((response) => handleData(response.data.data))
    .catch(function (error) {
      console.log(error);
    });
}

export { fetchData };