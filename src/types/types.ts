export interface WeatherState {
  loading: boolean
  error: null | string
  forecast: forecastType | forecastType[];
}

export type forecastType = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      clouds: {
        all: number
      }
      main: {
      dt: number
      name: {}
      feels_like: number
      humidity: number
      pressure: number
      temp: number
      temp_max: number
      temp_min: number
      }
    wind: {
    speed: number
    gust: number
    deg: number
      }
    weather: [
    {
      main: string
      icon: string
      description: string
    }
  ]
    }
    
  ]
  rain: {
    three_hour: number
  }
  visibility: number
  pop: number
}

export enum FetchActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_TODOS_ERROR',
}

interface FetchWeatherAction {
  type: FetchActionTypes.FETCH_WEATHER

}
interface FetchWeatherSuccessAction {
  type: FetchActionTypes.FETCH_WEATHER_SUCCESS
  payload: any[]
}
interface FetchWeatherErrorAction {
  type: FetchActionTypes.FETCH_WEATHER_ERROR
  payload: string
}

export type FetchAction =
  | FetchWeatherAction
  | FetchWeatherSuccessAction
  | FetchWeatherErrorAction
