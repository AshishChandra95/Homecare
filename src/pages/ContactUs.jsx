import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact by Email */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800">Contact by Email</h3>
            <p className="mt-4 text-gray-600">
              Reach out to us via email for inquiries, feedback, or support. We are here to assist
              you!
            </p>
            <p className='pt-2'>reshmasingh1507@gmail.com</p>
            <p
              className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700"
            >
              Send Email
            </p>
          </div>

          {/* Contact by Mobile */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800">Contact by Mobile</h3>
            <p className="mt-4 text-gray-600">
              Prefer a direct conversation? Call us on our customer support number for quick
              assistance.
            </p>
            <p className='pt-2'>+91 8958910542</p>
            <p className='pt-2'>+91 9690386559</p>
            <p
              className="inline-block mt-6 px-6 py-2 bg-green-600 text-white font-bold rounded-md shadow-md hover:bg-green-700"
            >
              Call Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
