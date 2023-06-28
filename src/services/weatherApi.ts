import axios from 'axios';

const API_KEY = '9063b858193f6cef2ce45cedd3c24c13'; 


const BASE_URL = 'https://api.openweathermap.org'

export const getWeather = async () => {
    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9063b858193f6cef2ce45cedd3c24c13
  const response = await axios.get(`${BASE_URL}/data/2.5/weather?q=London&APPID=9063b858193f6cef2ce45cedd3c24c13&units=metric`);
  console.log(response.data);
};
