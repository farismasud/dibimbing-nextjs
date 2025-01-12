import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchAPI = async (
  options: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: 'https://api-bootcamp.do.dibimbing.id/api/v1/',
      headers: {
        'Content-Type': 'application/json',
        apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
      },
      ...options,
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
