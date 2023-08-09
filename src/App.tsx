import HomePage from './pages';
import type { } from "redux-thunk/extend-redux";
import { Route, Routes } from 'react-router-dom';
import Forecast from './pages/forecast';
import { useTypedSelector } from './hooks/useTypedSelectors';
import NavBar from './components/NavBar';
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about';
const App = () => {
  const { forecast } = useTypedSelector((state) => state.weather);

  return (
    <>
      <main className='flex justify-center items-center p-6 bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 h-[100vh] w-full'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/forecast' element={<Forecast forecast={forecast} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
