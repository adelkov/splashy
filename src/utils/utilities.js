export const divideImagesToColumns = images => {
  const columns = images.reduce(
    (acc, curr, idx) => {
      if (idx % 3 === 0) {
        acc[0].push(curr);
      } else if (idx % 3 === 1) {
        acc[1].push(curr);
      } else {
        acc[2].push(curr);
      }
      return acc;
    },
    [[], [], []]
  );
  return columns;
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
