import React from 'react';

const LearnMaterials: React.FC = () => {
  const categories = ['All', 'E-Courses', 'System', 'Marketing', 'Analytics', 'Downloads'];
  const courses = [
    {
      title: 'Set up to launch',
      description: 'This course covers all the system setups you need to work with the Onde platform.',
      tags: ['System', 'E-Courses', 'Analytics'],
    },
    {
      title: 'Taxi promotion: referral programs',
      description: 'Course on setting up and using referral programs efficiently to market a taxi business.',
      tags: ['System', 'Marketing', 'E-Courses'],
    },
    {
      title: 'Creating a brand identity: how-to',
      description: 'Course on how to develop a unique, attractive brand identity for your taxi business.',
      tags: ['E-Courses', 'Marketing'],
    },
    {
      title: 'Facebook insights: use analytics as a powerful tool',
      description: 'You will learn how to work with Facebook Analytics and make your app more popular with the relevant audience.',
      tags: ['E-Courses', 'Marketing'],
    },
    {
      title: 'Anti-Crisis Growth Tips',
      description: 'Learn how to adjust your ride-hailing business to meet the 2020 crisis and the COVID-19 pandemic fully armed.',
      tags: ['E-Courses', 'Marketing'],
    },
    {
      title: 'Taxi payment solution: paying with credit cards',
      description: '10 reasons why having a credit card payment gateway is extremely positive for your taxi business.',
      tags: ['E-Courses', 'Marketing'],
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Navigation Bar */}
      <nav className="flex space-x-4 border-b pb-4">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            {category}
          </a>
        ))}
      </nav>

      {/* Course Cards */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="font-semibold text-xl">{course.title}</h2>
            <p className="mt-2 text-gray-700">{course.description}</p>
            <div className="mt-4">
              {course.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-6 bg-white text-black border-1 border-black font-semibold rounded-lg shadow-lg hover:bg-black hover:text-white transition-all duration-300">
          More Courses
        </button>
      </div>
    </div>
  );
};

export default LearnMaterials;
