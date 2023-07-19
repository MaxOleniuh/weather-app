import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelectors'
import { forecastType } from '../types/types'
import { PiWindLight } from 'react-icons/pi'
import { LiaCompassSolid } from 'react-icons/lia'
import { WiHumidity } from 'react-icons/wi'
import { BsFillSunsetFill } from 'react-icons/bs'
import { BsFillSunriseFill } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
const WeekForecast: FC<{ forecast: forecastType | forecastType[] }> = () => {
  const { forecast } = useTypedSelector((state) => state.weather)
  const singleForecast = Array.isArray(forecast) ? forecast[0] : forecast
  const pressure = singleForecast.list[0].main.pressure
  const humidity = singleForecast.list[0].main.humidity
  const sunrise = singleForecast.sunrise
  const sunset = singleForecast.sunset

  const sunriseDate = new Date(sunrise * 1000)
  const sunriseTime = sunriseDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const sunsetDate = new Date(sunset * 1000)
  const sunsetTime = sunsetDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const formattedTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    const options: object = {
      hour: 'numeric',
    }
    return date.toLocaleTimeString(undefined, options)
  }

  return (
    <div>
      {forecast && !Array.isArray(forecast) && (
        <div className="rounded p-7 shadow-md flex flex-col max-md:hidden h-full md:w-full">
          <div>
            <div className="flex mb-8 gap-5 items-center justify-center">
              {forecast.list.slice(0, 6).map((el, i) => (
                <div key={i} className="flex-col text-center">
                  <p className="text-2xl text-slate-700 flex items-center justify-center">
                    {i === 0 ? 'Now' : formattedTime(el.dt)}
                  </p>
                  <img
                    className="block"
                    src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                    alt={`weather-icon-${el.weather[0].description}`}
                  />
                  <p className="">
                    {Math.floor(el.main.temp)} <span>°C</span>
                  </p>
                </div>
              ))}
                      </div>
                      <div className='flex-col items-center'>
                          <h1 className="text-slate-800 font-bold text-2xl text-center">
              What`s the weather is like{' '}
              <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                tomorrow
              </span>
              ?
            </h1>
            <div className=" card-box grid grid-cols-3 grid-rows-2 gap-7 mt-6">
              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box ">
                <CiTempHigh color={'lightskyblue'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                  Feels Like:
                  {forecast.list.slice(1, 2).map((el, i) => (
                    <span className="text-blue-500 font-medium text-2xl ml-3 card-title">
                      {Math.floor(el.main.temp)} °C
                    </span>
                  ))}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box">
                <PiWindLight color={'lightskyblue'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                  Wind:
                  {forecast.list.slice(1, 2).map((el, i) => (
                    <span className="text-blue-500 font-medium text-2xl ml-3 card-title">
                      {Math.floor(el.wind.speed)} km/h
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box">
                <WiHumidity color={'lightskyblue'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                  Humidity:
                  {forecast.list.slice(1, 2).map((el, i) => (
                    <span className="text-blue-500 font-medium text-2xl ml-3 card-title">
                      {Math.floor(el.main.humidity)} %
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box">
                <LiaCompassSolid color={'lightskyblue'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                  Pressure:
                  {forecast.list.slice(1, 2).map((el, i) => (
                    <span className="text-blue-500 font-medium text-2xl ml-3 card-title">
                      {Math.floor(el.main.pressure)} hPa
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box">
                <BsFillSunriseFill color={'#ffee04'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                    Sunrise:                    
                    <span className="text-blue-500 font-medium text-2xl ml-3 card-title">{sunriseTime}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4 bg-slate-200 backdrop-blur-lg rounded drop-shadow-lg w-[240px] p-2 box">
                <BsFillSunsetFill color={'#fbb131'} size={'2em'} />
                <p className="text-slate-600 font-medium text-2xl card-title">
                  Sunset:
                  <span className="text-blue-500 font-medium text-2xl ml-3 card-title">
                    {sunsetTime}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
                      </div>
            
      )}
    </div>
  )
}

export default WeekForecast
