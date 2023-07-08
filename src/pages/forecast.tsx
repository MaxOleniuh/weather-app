import {FC} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelectors';

const Forecast: FC = () => {
    const { forecast } = useTypedSelector((state) => state.weather)
  return (
      <div>
          {forecast && !Array.isArray(forecast) &&
              <div className='bg-slate-50 rounded p-6 shadow-lg text-center'>
                  <h1 className='text-4xl'>Current Weather</h1>
                  <p className='text-1xl'>{forecast.name}</p>
                  <p>{forecast.list[0].temp}</p>
                  <a href="/">Back</a>
              </div>
          }
    </div>
  )
}

export default Forecast;