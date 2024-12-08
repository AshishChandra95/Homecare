import React from 'react';

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Reshma Home Care?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Point 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Background Verification</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Comprehensive verification including health, Aadhar, police, and court records to
              ensure safety and reliability.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Easy Replacement</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Hassle-free caregiver replacement whenever you need, ensuring consistent care.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">Quick Booking</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Simple and fast booking process to get the care you need without delays.
            </p>
          </div>

          {/* Additional Point */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">24/7 Support</h3>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Our dedicated support team is available round-the-clock to address your queries and
              concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
