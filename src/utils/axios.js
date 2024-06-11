import axios from 'axios';
// config


import { HOST_API_KEY } from '../../config';

// ----------------------------------------------------------------------

const axiosInstanceForFormData = axios.create({ baseURL: HOST_API_KEY ,validateStatus:(status)=>{ return status < 500},
 headers: { "Content-Type": "multipart/form-data" },});
const axiosInstance = axios.create({ baseURL: HOST_API_KEY ,validateStatus:(status)=>{ return status < 500}});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    Promise.reject((error.response && error.response.data) || 'Something went wrong')
  }
);
axiosInstanceForFormData.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject((error.response && error.response.data) || 'Something went wrong')
  }
  );

export  {axiosInstance,axiosInstanceForFormData};
