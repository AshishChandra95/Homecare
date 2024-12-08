import React from 'react';
import bgimage from '../images/homecarebackground.jpg';
import DutyTime from './DutyTime';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center h-[90vh] sm:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-sm text-gray-100 bg-black bg-opacity-60 p-4 sm:p-6 rounded-md w-11/12 max-w-md">
          <p className="font-bold text-white text-base sm:text-lg">WANT</p>
          <p className="text-xl sm:text-2xl font-bold text-white">A BEST</p>
          <p className="text-lg sm:text-xl font-bold text-orange-600">HOME CARE SERVICE</p>
          <p className="text-sm sm:text-lg font-bold text-orange-600 mt-2">
            RESHMA HOME CARE SERVICE
          </p>
          <p className="mt-4 text-sm sm:text-base font-bold text-white">
            Best Home and Health Care Service Provider in Dehradun
          </p>
          <button className="px-4 py-2 mt-6 text-sm sm:text-base text-white bg-orange-600 hover:bg-orange-700 transition rounded-md">
            <a href="work.html">CONTACT US</a>
          </button>
        </div>
      </div>
      <DutyTime />
      <WhyChoose />
    </>
  );
};

export default Home;
