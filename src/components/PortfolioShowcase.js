import React from 'react';

const PortfolioShowcase = () => {
  const projects = [
    {
      title: 'Portfolio Showcase Competition 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus vitae turpis fringilla varius.',
      image: 'https://cdn.dribbble.com/users/2489000/screenshots/8842316/dribble_website_4x.jpg',
    },
    {
      title: 'Portfolio Showcase Competition 2',
      description: 'Sed eget nunc vestibulum, faucibus turpis vitae, consequat ipsum. Etiam vitae dolor sit amet neque condimentum efficitur.',
      image: 'https://assets.materialup.com/uploads/00fc8380-2bfa-4787-86a6-15df9c0be466/preview.jpg',
    },
    {
      title: 'Portfolio Showcase Competition 3',
      description: 'In eu massa dignissim, ullamcorper urna et, congue leo. Sed scelerisque lacus sed justo consectetur auctor.',
      image: 'https://kinsta.com/wp-content/uploads/2019/01/portfolio-website-thumbnail-gallery.jpeg',
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Portfolio Showcase Exhibition/Competitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
