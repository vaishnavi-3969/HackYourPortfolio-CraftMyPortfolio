import React from 'react';

const CommunityForum = () => {
  // Forum post data
  const forumPosts = [
    {
      title: 'Tips for Creating a Captivating Portfolio',
      author: 'Captain Jack',
      content: 'Ahoy mates! Share your tips and tricks for building an impressive portfolio that will make recruiters go "arr!"',
      date: 'June 10, 2023',
    },
    {
      title: 'CSS Flexbox Help Needed',
      author: 'SailingSally',
      content: 'I\'m struggling with CSS flexbox. Any experienced sailors out there who can lend me a hand?',
      date: 'June 12, 2023',
    },
    // Add more forum posts as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Community Forum</h2>
        {forumPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Posted by {post.author} on {post.date}</p>
              <a href="#" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Join the Discussion
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
