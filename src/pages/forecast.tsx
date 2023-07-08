import {FC} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { forecastType } from '../types/types';
import { AiFillCloud } from 'react-icons/ai';
import { BsFillCloudSunFill } from 'react-icons/bs';
const Forecast: FC<{ forecast: forecastType | forecastType[] }> = () => {
    const { forecast } = useTypedSelector((state) => state.weather);
    const singleForecast = Array.isArray(forecast) ? forecast[0] : forecast;
    console.log(singleForecast)
    const temp = singleForecast.list[0].main.temp;
    const pressure = singleForecast.list[0].main.pressure;
    const humidity = singleForecast.list[0].main.humidity;
    const wind = singleForecast.list[0].wind.speed;
    const clouds = singleForecast.list[0].weather[0].description
  return (
      <div>
          {forecast && !Array.isArray(forecast) &&
              <div className='bg-slate-50 rounded p-6 shadow-lg text-center'>
                  <h1 className='text-4xl'>Current Weather</h1>
                  <p className='text-1xl'>{forecast.name}</p>
                  {<AiFillCloud color={"lightblue"} size={"4em"} />}
                  {<p className='capitalize'>{clouds}</p>}
                  <p>Temperature: {Math.floor(temp)} °C</p>
                  <p>Pressure: {Math.floor(pressure)} hPa</p>
                  <p>Humidity: {Math.floor(humidity)} %</p>
                  <p>Wind: {Math.floor(wind)} km/h </p>
                  <a href="/" className='text-red-800 text-2xl'>Back to Search...</a>
              </div>
          }
    </div>
  )
}

export default Forecast;