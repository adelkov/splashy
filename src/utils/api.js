import axios from "axios";

export const fetchLatestImages = per_page =>
  axios({
    method: "GET",
    url: createUrl({ per_page })
  });

export const fetchSearchedImage = query =>
  axios({
    method: "GET",
    url: createUrl({ query }, "random/")
  });

const createUrl = (params = {}, url = "") => {
  const baseURL = process.env.REACT_APP_SPLASH_BASE_URL;
  const splashToken = process.env.REACT_APP_SPLASH_TOKEN;

  const paramsWithToken = Object.assign(params, { client_id: splashToken });
  const urlParams = Object.entries(paramsWithToken)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  return baseURL + url + "?" + urlParams;
};
