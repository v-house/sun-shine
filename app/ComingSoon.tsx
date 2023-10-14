import React, { useEffect, useState } from "react";

const ComingSoon = (props: { show: any }) => {
  const [isVisible, setIsVisible] = useState(props.show);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded-lg`}
    >
      Coming Soon
    </div>
  );
};

export default ComingSoon;
