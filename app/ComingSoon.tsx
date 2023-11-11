import React, { useState, useEffect } from "react";

export default function Notification(props: { message: any }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return visible ? (
    <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-10">
      {props.message}
    </div>
  ) : null;
}
