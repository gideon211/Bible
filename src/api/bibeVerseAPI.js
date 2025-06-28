// src/api/bibleVerseAPI.js

const bibleVerses = {
  sad: [
    {
      text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      reference: "Psalm 34:18",
    },
    {
      text: "He heals the brokenhearted and binds up their wounds.",
      reference: "Psalm 147:3",
    },
    {
      text: "Even though I walk through the darkest valley, I will fear no evil.",
      reference: "Psalm 23:4",
    },
    {
      text: "Weeping may last through the night, but joy comes with the morning.",
      reference: "Psalm 30:5",
    },
    {
      text: "Blessed are those who mourn, for they will be comforted.",
      reference: "Matthew 5:4",
    },
  ],
  anxious: [
    {
      text: "Do not be anxious about anything, but in every situation, present your requests to God.",
      reference: "Philippians 4:6",
    },
    {
      text: "Cast all your anxiety on him because he cares for you.",
      reference: "1 Peter 5:7",
    },
    {
      text: "When anxiety was great within me, your consolation brought me joy.",
      reference: "Psalm 94:19",
    },
    {
      text: "Peace I leave with you; my peace I give you. Do not let your hearts be troubled.",
      reference: "John 14:27",
    },
    {
      text: "Trust in the Lord with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
    },
  ],
  angry: [
    {
      text: "Be quick to listen, slow to speak and slow to become angry.",
      reference: "James 1:19",
    },
    {
      text: "Do not let the sun go down while you are still angry.",
      reference: "Ephesians 4:26",
    },
    {
      text: "Refrain from anger and turn from wrath; do not fret—it leads only to evil.",
      reference: "Psalm 37:8",
    },
    {
      text: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
      reference: "Proverbs 15:1",
    },
    {
      text: "Better a patient person than a warrior, one with self-control than one who takes a city.",
      reference: "Proverbs 16:32",
    },
  ],
  lonely: [
    {
      text: "Never will I leave you; never will I forsake you.",
      reference: "Hebrews 13:5",
    },
    {
      text: "I am with you always, to the very end of the age.",
      reference: "Matthew 28:20",
    },
    {
      text: "God sets the lonely in families.",
      reference: "Psalm 68:6",
    },
    {
      text: "When my father and my mother forsake me, then the Lord will take me up.",
      reference: "Psalm 27:10",
    },
    {
      text: "The Lord is my shepherd, I lack nothing.",
      reference: "Psalm 23:1",
    },
  ],
  fearful: [
    {
      text: "So do not fear, for I am with you.",
      reference: "Isaiah 41:10",
    },
    {
      text: "The Lord is my light and my salvation—whom shall I fear?",
      reference: "Psalm 27:1",
    },
    {
      text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
      reference: "Psalm 34:4",
    },
    {
      text: "Even though I walk through the valley of the shadow of death, I will fear no evil.",
      reference: "Psalm 23:4",
    },
    {
      text: "When I am afraid, I put my trust in you.",
      reference: "Psalm 56:3",
    },
  ],
  overwhelmed: [
    {
      text: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
    },
    {
      text: "Be still, and know that I am God.",
      reference: "Psalm 46:10",
    },
    {
      text: "My grace is sufficient for you, for my power is made perfect in weakness.",
      reference: "2 Corinthians 12:9",
    },
    {
      text: "Cast your cares on the Lord and he will sustain you.",
      reference: "Psalm 55:22",
    },
    {
      text: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.",
      reference: "Psalm 9:9",
    },
  ],
};

export const fetchVerseByEmotion = async (emotion) => {
  const verses = bibleVerses[emotion];
  if (!verses) throw new Error("No verses found.");
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
};
