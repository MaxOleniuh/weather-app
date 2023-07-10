import { FetchAction, FetchActionTypes, WeatherState } from '../../types/types'

const initialState: WeatherState = {
  error: null,
  loading: false,
  forecast: {
    name: '',
    country: '',
    sunrise: 0,
    sunset: 0,
    list: [
      {
        clouds: {
          all: 0,
        },
        dt: 0,
        main: {
          name: {},
          feels_like: 0,
          humidity: 0,
          pressure: 0,
          temp: 0,
          temp_max: 0,
          temp_min: 0,
        },
        wind: { speed: 0, gust: 0, deg: 0 },
        weather: [{ main: '', icon: '', description: '' }],
      },
    ],
    rain: { three_hour: 0 },
    visibility: 0,
    pop: 0,
  },
}

export const weatherReducer = (
  state = initialState,
  action: FetchAction
): WeatherState => {
  switch (action.type) {
    case FetchActionTypes.FETCH_WEATHER:
      return {
        ...state,
        loading: true,
      }
    case FetchActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        forecast: action.payload,
      }
    case FetchActionTypes.FETCH_WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
