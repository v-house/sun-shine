// pages/features.tsx

import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">App Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/your-feature-image-1.jpg"
              alt="Feature 1"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-700">
              Description of Feature 1 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/your-feature-image-2.jpg"
              alt="Feature 2"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-700">
              Description of Feature 2 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="/your-feature-image-3.jpg"
              alt="Feature 3"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-700">
              Description of Feature 3 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Add more features as needed */}
        </div>
      </div>
    </div>
  );
};

export default Features;
