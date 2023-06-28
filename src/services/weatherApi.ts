import axios from 'axios';

const API_KEY = '9063b858193f6cef2ce45cedd3c24c13'; 


const BASE_URL = 'https://api.openweathermap.org'

export const getWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`);
  return response.data;
};
