import axios from "axios";
import {createUrl} from './utilities'

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


