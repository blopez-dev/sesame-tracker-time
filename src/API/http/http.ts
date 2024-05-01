import axios from 'axios'
import API_TOKEN from '../../../.env'
export const baseURL = 'https://api-test.sesametime.com/schedule/v1/work-entries'

const API_CALL = axios.create({
  baseURL,
  headers: {Authorization: `Bearer ${API_TOKEN}`},
  timeout: 10000,
})

const get = async (path:string = '') => {
  try {
    const response = await API_CALL.get(path);
    return response.data;
  } catch (error) {
    console.error('GET Error:', error.response);
    throw error;
  }
};

const post = async (path, params) => {
  try {
    const response = await API_CALL.post(path, params);
    return response.params;
  } catch (error) {
    console.error('POST Error:', error.response);
    throw error;
  }
};

const http = {
  get,
  post
}
export default http
