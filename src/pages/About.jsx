import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://img.freepik.com/free-photo/women-wearing-masks-medium-shot_23-2148934369.jpg?t=st=1733491067~exp=1733494667~hmac=5ce321068bdf70bc063deea274c6482ab4fa4307dc4b435b11aaeb9053291343&w=900" // Replace with the actual image path
              alt="Home Care Service"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              About Reshma Home Care Service
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              Reshma Home Care Service is committed to providing exceptional home and health care
              services tailored to meet your individual needs. With years of experience, we
              specialize in delivering compassionate and professional care that ensures the
              comfort, dignity, and well-being of our clients.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              Our team of dedicated caregivers works round-the-clock to offer services that range
              from routine assistance to specialized health care. Whether you need support for
              daily tasks or expert medical attention, we are here to help.
            </p>
            <p className="text-sm sm:text-base text-gray-700 font-bold">
              We believe in creating a caring environment where every individual is treated with
              respect and love. Let us be your trusted partner in ensuring quality care for your
              loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
