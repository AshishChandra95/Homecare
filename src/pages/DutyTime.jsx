import React from 'react';

const DutyTime = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Duty Timings
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 space-y-6 lg:space-y-0">
          {/* 24-Hour Service */}
          <div className="w-full lg:w-1/2 bg-blue-100 p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800">24-Hour Service</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
              We provide round-the-clock service to ensure your loved ones receive uninterrupted
              care, day or night. Perfect for individuals requiring constant support.
            </p>
          </div>

          {/* 12-Hour Service */}
          <div className="w-full lg:w-1/2 bg-green-100 p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-green-800">12-Hour Service</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-700">
              Choose our 12-hour service for dedicated daytime or nighttime care tailored to your
              specific needs. Flexible and reliable for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DutyTime;
