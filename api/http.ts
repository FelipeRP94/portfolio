import axios from "axios";

export default axios.create({
  baseURL:
    "https://portfolio-656ca-default-rtdb.europe-west1.firebasedatabase.app",
  headers: {
    "Content-type": "application/json",
  },
});
