import React from "react";

const VerseDisplay = ({ verse }) => {
  if (!verse) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-md text-center max-w-xl w-full">
      <p className="text-lg text-gray-800 italic mb-3">"{verse.text}"</p>
      <p className="text-sm text-gray-500">— {verse.reference}</p>
    </div>
  );
};

export default VerseDisplay;
