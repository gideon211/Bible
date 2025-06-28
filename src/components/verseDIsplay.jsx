// src/components/VerseDisplay.jsx

import React from "react";
import { motion } from "framer-motion";

const VerseDisplay = ({ verse, onRefresh }) => {
  if (!verse) return null;

  return (
    <motion.div
      key={verse.text}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 bg-white p-6 rounded-xl shadow-md text-center max-w-xl w-full"
    >
      <p className="text-lg text-gray-800 italic mb-3">"{verse.text}"</p>
      <p className="text-sm text-gray-500 mb-4">— {verse.reference}</p>
      <button
        onClick={onRefresh}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        Get Another Verse
      </button>
    </motion.div>
  );
};

export default VerseDisplay;
