import React from 'react';

const ResourcesLibrary = () => {
  const resources = [
    {
      title: 'Mastering HTML and CSS',
      description: 'A comprehensive guide to HTML and CSS for building stunning web pages.',
      link: 'https://example.com/html-css-guide',
    },
    {
      title: 'JavaScript Fundamentals',
      description: 'Learn the basics of JavaScript and enhance your web development skills.',
      link: 'https://example.com/javascript-fundamentals',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resources Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a href={resource.link} className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesLibrary;
