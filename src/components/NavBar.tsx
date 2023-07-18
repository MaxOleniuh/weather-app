import { Link } from 'react-router-dom';
import { BsCloudSunFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  const handleCloseModal = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKeyPress);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
  
<nav className="border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full bg-white text-slate-700 p-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center gap-2">
            <BsCloudSunFill size={"2em"} />
        <span className="self-center text-2xl font-black whitespace-nowrap text-yellow-500">My Weather</span>
    </Link>
    <button onClick={handleMenuToggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen ? 'true' : 'false'}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Forecast</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</Link>
        </li>
        <li>
          <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li>
      </ul>
    </div>
      </div>
   {isMenuOpen && (
        <div className="absolute top-0 left-0 h-screen w-9/12 bg-black bg-opacity-50 flex items-center justify-center md:opacity-0" ref={modalRef}>
          <ul className="font-medium text-2xl flex flex-col gap-6 text-white">
            <li className='text-center'>
              <Link
                to="/"
                className="block py-2 px-4 rounded hover:text-slate-300 active:border"
                onClick={handleCloseModal}
              >
                Home
              </Link>
            </li>
            <li className='text-center'>
              <Link
                to="/about"
                className="block py-2 px-4 rounded hover:text-slate-300 active:border"
                onClick={handleCloseModal}
              >
                About
              </Link>
            </li>
            <li className='text-center'>
              <Link
                to="/forecast"
                className="block py-2 px-4 rounded hover:text-slate-300 active:border"
                onClick={handleCloseModal}
              >
                Forecast
              </Link>
            </li>
            <li className='text-center'>
              <Link
                to="/register"
                className="block py-2 px-4 rounded hover:text-slate-300 active:border"
                onClick={handleCloseModal}
              >
                Register
              </Link>
            </li>
            <li className='text-center'>
              <Link
                to="/login"
                className="block py-2 px-4 rounded hover:text-slate-300 active:border"
                onClick={handleCloseModal}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default NavBar;