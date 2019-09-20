export const divideImagesToColumns = images => {
  const len = images.length;
  const chunk = Math.floor(len / 3);
  const col1 = images.slice(0, chunk);
  const col2 = images.slice(chunk, len - chunk);
  const col3 = images.slice(len - chunk, len);
  return [col1, col2, col3];
};


export const createUrl = (params = {}, url = "") => {
  const baseURL = process.env.REACT_APP_SPLASH_BASE_URL;
  const splashToken = process.env.REACT_APP_SPLASH_TOKEN;

  const paramsWithToken = Object.assign(params, { client_id: splashToken });
  const urlParams = Object.entries(paramsWithToken)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

  return baseURL + url + "?" + urlParams;
};