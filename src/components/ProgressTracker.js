import React from 'react';

const ProgressTracker = () => {
  const progressData = [
    { label: 'Beginner', progress: 25 },
    { label: 'Intermediate', progress: 50 },
    { label: 'Advanced', progress: 75 },
    { label: 'Expert', progress: 100 },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Progress Tracker</h2>
        <div className="flex items-center justify-between">
          {progressData.map((item, index) => (
            <div key={index} className="w-1/4">
              <div className="text-center">
                <span className="text-2xl font-bold">{item.progress}%</span>
                <p className="text-gray-500">{item.label}</p>
              </div>
              <div className="relative pt-1 mt-4">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${item.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
