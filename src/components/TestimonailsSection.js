import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Web Developer',
      testimonial:
        'Craft My Portfolio has been an incredible platform for improving my portfolio. The courses are well-structured and the support from the community is amazing. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      designation: 'Graphic Designer',
      testimonial:
        'I can\'t thank Craft My Portfolio enough for the valuable resources and courses they offer. My portfolio has greatly improved, and I\'ve gained new clients because of it. It\'s a must-visit for all creatives!',
    },
    {
      name: 'David Johnson',
      designation: 'UI/UX Designer',
      testimonial: 'Craft My Portfolio is an absolute game-changer. The courses are top-notch and the projects helped me build a standout portfolio. The support team is also quick to respond to any queries. I\'m a fan!',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
