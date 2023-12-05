import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
});


api.interceptors.request.use(
  (config) => {
    config.baseURL = baseURL; 
    // here we can add authorization token so before every request it executes
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('response logged:', response);
    return response;
  },
  (error) => {
    // handle response errors globally and logged
    console.error('error logged:', error);
    return Promise.reject(error);
  }
);

export default api;
