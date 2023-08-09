import React from 'react';
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div className="bg-gray-100 py-5 px-4 sm:p-6 lg:p-8 h-[80vh] mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Weather App</h2>
        <p className="text-gray-600 mb-6">
          Welcome to Weather App, your go-to source for up-to-date weather information from around the world.
        </p>
        <p className="text-gray-600 mb-6">
          Our mission is to provide you with accurate and reliable weather forecasts so that you can plan your activities with confidence.
        </p>
        <h3 className="text-lg font-semibold mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Real-time weather updates</li>
          <li>Hourly and daily forecasts</li>
          <li>Search for weather by city or location</li>
          <li>Authorization</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Our Team</h3>
       <p className="text-gray-600 mb-6 flex items-center">
             Weather App is developed by
         <a href="https://github.com/MaxOleniuh"  target="_blank" rel="noreferrer"  className="flex items-center font-medium ml-2 text-blue-500 hover:underline">
    <FaGithub size={16} className='mr-1' />
    Max Oleniuh
  </a>
</p>

        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-600 mb-6">
          If you have any questions, feedback, or suggestions, feel free to get in touch with us at <a className="text-blue-500 hover:underline" href="mailto:info@weatherapp.com">info@weatherapp.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
