import axios from "axios";
import  endPoints from "../consts/config";

const instanceAxios = axios.create({
  baseURL : endPoints.BASE_URL,
});

export default instanceAxios;
