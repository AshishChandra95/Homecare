import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: 'Elderly Care',
      description: 'Compassionate care for elderly individuals, ensuring their comfort and well-being.',
      icon: '👵',
    },
    {
      title: 'Post-Surgery Care',
      description: 'Support for recovery after surgery, including medication and mobility assistance.',
      icon: '💊',
    },
    {
      title: 'Newborn and Mother Care',
      description: 'Specialized care for newborns and postnatal support for mothers.',
      icon: '👶',
    },
    {
      title: 'Palliative Care',
      description: 'Comfort-focused care for patients with serious illnesses.',
      icon: '🤲',
    },
    {
      title: 'Medical Assistance',
      description: 'Trained caregivers for administering medication and monitoring health.',
      icon: '🏥',
    },
    {
      title: 'Physiotherapy at Home',
      description: 'Therapeutic sessions to improve mobility and physical strength.',
      icon: '🧑‍⚕️',
    },
    {
      title: '24/7 Nursing Support',
      description: 'Round-the-clock nursing services for patients requiring constant care.',
      icon: '⏰',
    },
    {
      title: 'Personal Hygiene Assistance',
      description: 'Help with bathing, grooming, and other personal hygiene tasks.',
      icon: '🛁',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
