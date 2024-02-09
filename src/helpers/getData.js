import axios from "axios";

//istek icin gerekli ayarlar APIden alindi
const options = {
  headers: {
    "X-RapidAPI-Key": "a7a023fb9cmsh146347e57f01ed2p140a35jsnaf98a40a3497",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
  params: {
    lang: "en",
    geo: "US",
  },
};
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (endpoint) => {
  try {
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
