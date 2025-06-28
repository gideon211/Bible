const bibleVerses = {
  joy: [
    {
      text: "Rejoice in the Lord always. I will say it again: Rejoice!",
      reference: "Philippians 4:4",
    },
    {
      text: "You make known to me the path of life...",
      reference: "Psalm 16:11",
    },
  ],
  fear: [
    {
      text: "So do not fear, for I am with you.",
      reference: "Isaiah 41:10",
    },
    {
      text: "For God has not given us a spirit of fear...",
      reference: "2 Timothy 1:7",
    },
  ],
  sadness: [
    {
      text: "The Lord is close to the brokenhearted...",
      reference: "Psalm 34:18",
    },
    {
      text: "He will wipe every tear from their eyes.",
      reference: "Revelation 21:4",
    },
  ],
  anxiety: [
    {
      text: "Do not be anxious about anything...",
      reference: "Philippians 4:6",
    },
    {
      text: "Cast all your anxiety on him...",
      reference: "1 Peter 5:7",
    },
  ],
};

export const fetchVerseByEmotion = async (emotion) => {
  const verses = bibleVerses[emotion];
  if (!verses) throw new Error("No verses found for this emotion");
  const random = Math.floor(Math.random() * verses.length);
  return verses[random];
};
