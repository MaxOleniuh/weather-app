import React from 'react';
import HomePage from './pages';
import Loader from './components/Loader';

const App = () => {
  return (
    <>
     {/* <Loader /> */}
    <main className='flex justify-center items-center p-6 bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 h-[100vh] w-full'>
      <HomePage />
    </main>
    </>
  );
}

export default App;
