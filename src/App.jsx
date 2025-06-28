// src/App.jsx

import React, { useState } from "react";
import { fetchVerseByEmotion } from "./api/bibleVerseAPI";
import VerseDisplay from "./components/verseDIsplay";

const emotions = [
  { key: "sad", label: "Sad", description: "Feeling down or sorrowful", emoji: "😔", color: "border-blue-500 bg-blue-50" },
  { key: "anxious", label: "Anxious", description: "Feeling worried or uneasy", emoji: "😟", color: "border-yellow-500 bg-yellow-50" },
  { key: "angry", label: "Angry", description: "Feeling upset or frustrated", emoji: "😠", color: "border-red-500 bg-red-50" },
  { key: "lonely", label: "Lonely", description: "Feeling isolated or alone", emoji: "😞", color: "border-green-500 bg-green-50" },
  { key: "fearful", label: "Fearful", description: "Feeling scared or afraid", emoji: "😨", color: "border-orange-500 bg-orange-50" },
  { key: "overwhelmed", label: "Overwhelmed", description: "Feeling stressed or burdened", emoji: "😩", color: "border-purple-500 bg-purple-50" },
];

export default function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [verse, setVerse] = useState(null);

  const handleEmotionClick = async (key, label) => {
    setSelectedEmotion(label);
    const verse = await fetchVerseByEmotion(key);
    setVerse(verse);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🙏 Bible Verses for Every Emotion</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {emotions.map((emo) => (
          <div
            key={emo.key}
            onClick={() => handleEmotionClick(emo.key, emo.label)}
            className={`cursor-pointer border-2 rounded-xl p-4 shadow-sm hover:shadow-md transition ${emo.color}`}
          >
            <div className="text-3xl">{emo.emoji}</div>
            <h2 className="text-xl font-semibold mt-2">{emo.label}</h2>
            <p className="text-gray-600 text-sm">{emo.description}</p>
          </div>
        ))}
      </div>

      {selectedEmotion && (
        <>
          <div className="mt-8 text-xl text-gray-800 font-medium">
            When you're feeling <span className="italic">{selectedEmotion.toLowerCase()}</span>...
          </div>
          <VerseDisplay verse={verse} />
        </>
      )}
    </div>
  );
}
