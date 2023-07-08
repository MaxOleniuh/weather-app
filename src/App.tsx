import HomePage from './pages';
import type { } from "redux-thunk/extend-redux";
import { Route, Routes } from 'react-router-dom';
import Forecast from './pages/forecast';
import { useTypedSelector } from './hooks/useTypedSelectors';
const App = () => {
  const { forecast } = useTypedSelector((state) => state.weather);

  return (
    <>
      <main className='flex justify-center items-center p-6 bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 h-[100vh] w-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/forecast' element={<Forecast forecast={forecast} />} />
        </Routes>
    </main>
    </>
  );
}

export default App;
