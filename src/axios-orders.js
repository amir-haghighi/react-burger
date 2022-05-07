import axios from "axios";

const instance = axios.create({
  baseURL:
    "mongodb+srv://amir:amir@cluster0.vu8wg.mongodb.net/burder?retryWrites=true&w=majority",
});
export default instance;
