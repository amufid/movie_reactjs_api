import axios from "axios";

export const api = axios.create({
   baseURL: process.env.REACT_APP_BASEURL,
   params: {
     api_key: process.env.REACT_APP_APIKEY,
   },
 });

export const searchMovie = async (q) => {
   const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
   return search.data
}
