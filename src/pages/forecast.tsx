import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelectors'
import { forecastType } from '../types/types'
import { BsCloudsFill } from 'react-icons/bs'
import { BsCloudSnowFill } from 'react-icons/bs'
import { FaCloudShowersHeavy } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { PiWindLight } from 'react-icons/pi'
import { LiaCompassSolid } from 'react-icons/lia'
import { WiHumidity } from 'react-icons/wi'
import { BsFillSunsetFill } from 'react-icons/bs'
import { BsFillSunriseFill } from 'react-icons/bs'




const Forecast: FC<{ forecast: forecastType | forecastType[] }> = () => {
  const { forecast } = useTypedSelector((state) => state.weather)
  const singleForecast = Array.isArray(forecast) ? forecast[0] : forecast
  console.log(singleForecast)
  const secondForecast = Array.isArray(forecast) ? forecast[0] : forecast
  const tempSecond = secondForecast.list[0].main.temp
  const temp = singleForecast.list[0].main.temp
  const pressure = singleForecast.list[0].main.pressure
  const humidity = singleForecast.list[0].main.humidity
  const wind = singleForecast.list[0].wind.speed
  const dt = singleForecast.list[0].dt
  const date = new Date(dt * 1000)
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const weekday = weekdays[date.getDay()]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const conditions = singleForecast.list[0].weather[0].main
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

  let daySuffix = 'th'
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st'
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd'
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd'
  }
  const formattedDate = `${weekday}, ${day}${daySuffix} ${month}`

  return (
    <div>
      {forecast && !Array.isArray(forecast) && (
        <div className="bg-slate-50 rounded p-7 shadow-lg h-[90vh] font-sans w-[90vw] flex flex-col">
          <div className="flex items-center gap-7">
            <p className="text-5xl text-slate-800 font-black">
              {forecast.name}
            </p>
            {conditions === 'Clear' && (
              <BsFillSunFill color={'#ffee04'} size={'4em'} />
            )}
            {conditions === 'Clouds' && (
              <BsCloudsFill color={'lightskyblue'} size={'4em'} />
            )}
            {conditions === 'Rain' && (
              <FaCloudShowersHeavy color={'lightskyblue'} size={'4em'} />
            )}
            {conditions === 'Snow' && (
              <BsCloudSnowFill color={'lightskyblue'} size={'4em'} />
            )}
          </div>
          <p className="text-2xl text-slate-600 mb-4 font-mono">
            {formattedDate}
          </p>
          <p className="text-6xl text-slate-700 font-semibold mb-8">
            {Math.floor(temp)} °C
          </p>
          <div className="flex items-center gap-2 mb-4">
            <PiWindLight color={'lightskyblue'} size={'2em'} />
            <p className="text-slate-600 font-medium text-2xl">
              Wind:
              <span className="text-blue-500 font-medium text-2xl ml-3">
                {Math.floor(wind)} km/h{' '}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <WiHumidity color={'lightskyblue'} size={'2em'} />
            <p className="text-slate-600 font-medium text-2xl">
              Humidity:
              <span className="text-blue-500 font-medium text-2xl ml-3">
                {Math.floor(humidity)} %
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <LiaCompassSolid color={'lightskyblue'} size={'2em'} />
            <p className="text-slate-600 font-medium text-2xl">
              Pressure:
              <span className="text-blue-500 font-medium text-2xl ml-3">
                {Math.floor(pressure)} hPa
              </span>
            </p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                      <BsFillSunriseFill color={'#ffee04'} size={'2em'} />
                      <p className="text-slate-600 font-medium text-2xl">Sunrise:
                          <span className="text-blue-500 font-medium text-2xl ml-3">{sunriseTime}</span>
                      </p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                      <BsFillSunsetFill color={'#fbb131'} size={'2em'} />
                      <p className="text-slate-600 font-medium text-2xl">Sunset:
                          <span className="text-blue-500 font-medium text-2xl ml-3">{sunsetTime}</span>
                      </p>
                  </div>
                  <div className="mt-20">
                      <a href="/" className="text-red-800 text-2xl font-semibold p-1">Back to Search...</a>
                  </div>
        </div>
      )}
    </div>
  )
}

export default Forecast
