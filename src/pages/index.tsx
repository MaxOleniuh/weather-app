import React, { useState, ChangeEvent } from 'react';
import { FcSearch } from 'react-icons/fc';
import { UseActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState<string>('')
  const { fetchWeather } = UseActions()
  const submitFormHangler = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (city.length <= 2) return;  
    e.preventDefault()
    try {
      await fetchWeather(city);
      navigate("/forecast");
    } catch (error) {
      console.error(error);
    }
    setCity('')
    form.reset()
  }

  const onInutChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }
  const { loading } = useTypedSelector((state) => state.weather)
  return (
    <>
      {loading && <Loader/>}
        <div className="bg-slate-50 rounded p-8 shadow-lg text-center">
          <h1 className="text-zinc-700  text-5xl mb-2 font-semibold">
            Weather{' '}
            <span className="font-black text-yellow-500">Forecast</span>
          </h1>
          <p className="text-zinc-700 mb-2">
            Enter below a place to see what the weather is like there
          </p>
          <form
            className="bg-white shadow-md rounded px-3 pt-2 pb-3"
            onClick={submitFormHangler}
          >
            <div className="flex">
            <button
              title='button'
                type="submit"
                className="bg-white border shadow  rounded-l-md border-r-0 p-2"
              >
                <FcSearch
                  size="2em"
                  className="bg-white opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </button>
              <input
                onChange={onInutChange}
                type="text"
                name="city"
                value={city}
                placeholder="Search for a city"
                className=" bg-white shadow border border-l-0 rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
          </form>
      </div>
    </>
  )
}

export default HomePage
