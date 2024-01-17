"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Notification() {
  const [showNote, setShowNote] = useState(true);

  const NOTIFICATION_TTL = 5000;

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  const removeNotif = () => {
    setShowNote(false);
  };

  return (
    <AnimatePresence>
      {showNote && (
        <motion.div
          layout
          initial={{ y: -15, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-md p-2 rounded gap-2 text-xs lg:text-sm font-medium shadow-lg text-white bg-blue-900 pointer-events-auto absolute z-[1000] m-4 flex items-center"
        >
          <HiOutlineSparkles className="lg:w-6 lg:h-6" />
          <span>{"Celebrating our 12 years"}</span>
          <button onClick={removeNotif} className="ml-auto mt-0.5">
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
