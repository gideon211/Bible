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
      className="mt-8 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-6 rounded-2xl shadow-xl text-center max-w-xl w-full border border-purple-300"
    >
      <p className="text-xl sm:text-2xl font-semibold text-gray-800 italic leading-relaxed mb-4">
        “{verse.text}”
      </p>
      <p className="text-sm sm:text-base text-gray-600 font-medium mb-6">
        — {verse.reference}
      </p>
      <button
        onClick={onRefresh}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold transition"
      >
        Get Another Verse
      </button>
    </motion.div>
  );
};

export default VerseDisplay;
