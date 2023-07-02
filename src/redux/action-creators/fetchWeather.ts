import axios from 'axios';
import { Dispatch } from "redux";
import { FetchAction, FetchActionTypes } from '../../types/types';

const API_KEY = '9063b858193f6cef2ce45cedd3c24c13'; 
const BASE_URL = 'https://api.openweathermap.org';

export const fetchWeather = (city: string) => {
    return async (dispatch: Dispatch<FetchAction>) => {
      try { 
        dispatch({ type: FetchActionTypes.FETCH_WEATHER });
        const response = await axios.get(`${BASE_URL}/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`);
        const forecastData = {
          ...response.data.city,
          list: response.data.list.slice(0, 16),

        }
          dispatch({
          type: FetchActionTypes.FETCH_WEATHER_SUCCESS,
          payload: forecastData,
        });
        }
        catch (error) {
            console.log(error)
            dispatch({
          type: FetchActionTypes.FETCH_WEATHER_ERROR,
          payload: "An Error occured fetching weather!",
        });
        }
    }

};