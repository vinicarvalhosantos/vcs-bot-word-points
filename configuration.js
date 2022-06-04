require('dotenv/config');

const axios = require("axios").default;

axios.interceptors.request.use(config => {
    const token = process.env.SECRET_STREAM_ELEMENTS_TOKEN;
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });