import React from "react";

const Heading1: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-950">
        {text}
      </h1>
      <hr className="h-px my-8 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Heading1;
