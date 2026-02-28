// Demo Questions (later 1000 replace kar dena)
const allQuestions = [
  {
    id: 1,
    question: "Who is the only Indian to have won the Nobel Prize in Physics?",
    options: [
      "C. V. Raman",
      "Homi J. Bhabha",
      "Satyendra Nath Bose",
      "Subrahmanyan Chandrasekhar",
    ],
    correct: 0,
    explanation:
      "C. V. Raman won the Nobel Prize in Physics in 1930 for the Raman Effect.",
  },
  {
    id: 2,
    question:
      "Which article of the Indian Constitution guarantees equality before the law?",
    options: ["Article 12", "Article 14", "Article 15", "Article 16"],
    correct: 1,
    explanation: "Article 14 guarantees equality before the law.",
  },
  {
    id: 3,
    question: "Which treaty marked the end of the First World War?",
    options: [
      "Treaty of Versailles",
      "Treaty of Paris",
      "Treaty of Berlin",
      "Treaty of Tordesillas",
    ],
    correct: 0,
    explanation: "The Treaty of Versailles formally ended WWI in 1919.",
  },
  {
    id: 4,
    question:
      "Which planet in our solar system has the highest number of moons (as of 2025)?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correct: 1,
    explanation:
      "Saturn has surpassed Jupiter with the highest known number of moons.",
  },
  {
    id: 5,
    question:
      "What does the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) guarantee?",
    options: [
      "Free education",
      "100 days of wage employment",
      "Subsidized food grains",
      "Right to shelter",
    ],
    correct: 1,
    explanation:
      "MGNREGA guarantees at least 100 days of wage employment per year to rural households.",
  },
  {
    id: 6,
    question:
      "Which of the following is NOT a fundamental right under the Indian Constitution?",
    options: [
      "Right to freedom of speech",
      "Right to property",
      "Right against exploitation",
      "Right to constitutional remedies",
    ],
    correct: 1,
    explanation:
      "Right to property is no longer a fundamental right; it is a constitutional legal right.",
  },
  {
    id: 7,
    question: "Who authored the Indian national song 'Vande Mataram'?",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chatterjee",
      "Sarojini Naidu",
      "Subhash Chandra Bose",
    ],
    correct: 1,
    explanation: "Bankim Chandra Chatterjee wrote 'Vande Mataram'.",
  },
  {
    id: 8,
    question:
      "Which border dispute was resolved by the 1993 India–Pakistan agreement?",
    options: ["Siachen", "Kargil", "Sir Creek", "Rann of Kutch"],
    correct: 2,
    explanation: "Sir Creek dispute was addressed in the 1993 agreement.",
  },
  {
    id: 9,
    question: "What is the currency of South Africa?",
    options: ["Rand", "Dollar", "Pound", "Euro"],
    correct: 0,
    explanation: "South Africa uses the South African Rand (ZAR).",
  },
  {
    id: 10,
    question: "Which gas is most abundant in Earth’s atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correct: 1,
    explanation: "Nitrogen makes up ~78% of the atmosphere.",
  },
  {
    id: 11,
    question:
      "In which year did India conduct its first nuclear test at Pokhran (Operation Smiling Buddha)?",
    options: ["1974", "1972", "1984", "1998"],
    correct: 0,
    explanation: "India’s first successful nuclear test was in 1974.",
  },
  {
    id: 12,
    question: "Which Indian state has the largest area?",
    options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
    correct: 1,
    explanation: "Rajasthan is the largest Indian state by area.",
  },
  {
    id: 13,
    question: "Who was the first woman Prime Minister of India?",
    options: [
      "Indira Gandhi",
      "Pratibha Patil",
      "Sushma Swaraj",
      "Mamata Banerjee",
    ],
    correct: 0,
    explanation: "Indira Gandhi became the first woman PM in 1966.",
  },
  {
    id: 14,
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    correct: 1,
    explanation: "Fluorine has the highest electronegativity.",
  },
  {
    id: 15,
    question:
      "What is the main objective of the World Trade Organization (WTO)?",
    options: [
      "Promote free trade",
      "Provide humanitarian aid",
      "Protect endangered species",
      "Regulate intellectual property",
    ],
    correct: 0,
    explanation:
      "WTO aims to facilitate free trade by regulating trade agreements.",
  },
  {
    id: 16,
    question: "The Richter scale measures:",
    options: ["Temperature", "Rainfall", "Earthquake magnitude", "Wind speed"],
    correct: 2,
    explanation: "The Richter scale measures earthquake magnitude.",
  },
  {
    id: 17,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correct: 1,
    explanation: "Japan is referred to as the Land of the Rising Sun.",
  },
  {
    id: 18,
    question: "Who wrote the epic Mahabharata?",
    options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"],
    correct: 1,
    explanation:
      "Vyasa is traditionally credited with composing the Mahabharata.",
  },
  {
    id: 19,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
    explanation: "Canberra is the capital city of Australia.",
  },
  {
    id: 20,
    question: "Which Indian festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Pongal", "Baisakhi"],
    correct: 1,
    explanation: "Diwali is widely celebrated as the Festival of Lights.",
  },
  {
    id: 21,
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Gregor Mendel",
    ],
    correct: 0,
    explanation: "Alexander Fleming discovered penicillin in 1928.",
  },
  {
    id: 22,
    question: "Which country is the largest producer of coffee in the world?",
    options: ["Vietnam", "Colombia", "Brazil", "India"],
    correct: 2,
    explanation: "Brazil is the largest coffee producer globally.",
  },
  {
    id: 23,
    question: "The term 'Greenhouse Effect' refers to:",
    options: [
      "Ozone depletion",
      "Global warming due to trapped heat",
      "Air pollution from vehicles",
      "Deforestation",
    ],
    correct: 1,
    explanation: "Greenhouse gases trap heat leading to global warming.",
  },
  {
    id: 24,
    question:
      "Which of these countries is a permanent member of the United Nations Security Council?",
    options: ["Germany", "Japan", "Russia", "India"],
    correct: 2,
    explanation: "Russia is one of the five permanent members.",
  },
  {
    id: 25,
    question: "The ‘Quit India Movement’ was launched in:",
    options: ["1930", "1942", "1919", "1857"],
    correct: 1,
    explanation: "The Quit India Movement was launched in 1942.",
  },
  {
    id: 26,
    question: "Which is the largest freshwater lake in India?",
    options: ["Wular Lake", "Dal Lake", "Chilika Lake", "Vembanad Lake"],
    correct: 0,
    explanation:
      "Wular Lake in Jammu and Kashmir is the largest freshwater lake in India.",
  },
  {
    id: 27,
    question: "In economics, GDP stands for:",
    options: [
      "Gross Domestic Product",
      "General Domestic Product",
      "Gross Development Product",
      "General Development Product",
    ],
    correct: 0,
    explanation: "GDP stands for Gross Domestic Product.",
  },
  {
    id: 28,
    question: "Which Indian classical dance form originates from Tamil Nadu?",
    options: ["Kathak", "Kuchipudi", "Bharatanatyam", "Odissi"],
    correct: 2,
    explanation: "Bharatanatyam originates from Tamil Nadu.",
  },
  {
    id: 29,
    question: "Which ocean is the largest in the world?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
    explanation: "The Pacific Ocean is the largest ocean.",
  },
  {
    id: 30,
    question:
      "The Battle of Plassey (1757) was fought between British East India Company and:",
    options: [
      "Maratha Empire",
      "Nawabs of Bengal",
      "Mughal Empire",
      "Sikh Empire",
    ],
    correct: 1,
    explanation: "The battle was against the Nawab of Bengal.",
  },
  {
    id: 31,
    question: "The Lok Sabha is elected for a term of:",
    options: ["Five years", "Four years", "Six years", "Three years"],
    correct: 0,
    explanation: "Lok Sabha members are elected for five years.",
  },
  {
    id: 32,
    question: "Which human organ detoxifies blood?",
    options: ["Liver", "Kidney", "Lungs", "Heart"],
    correct: 0,
    explanation: "The liver detoxifies blood.",
  },
  {
    id: 33,
    question: "The currency of Japan is:",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    correct: 1,
    explanation: "Japan’s currency is the Yen.",
  },
  {
    id: 34,
    question: "Who wrote 'The Discovery of India'?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "B. R. Ambedkar",
      "Subhash Chandra Bose",
    ],
    correct: 0,
    explanation: "Jawaharlal Nehru wrote 'The Discovery of India'.",
  },
  {
    id: 35,
    question: "Which Indian city is known as the Silicon Valley of India?",
    options: ["Mumbai", "Bengaluru", "Hyderabad", "Pune"],
    correct: 1,
    explanation: "Bengaluru is referred to as India’s Silicon Valley.",
  },
  {
    id: 36,
    question: "Which gas causes acid rain?",
    options: ["Nitrogen", "Oxygen", "Sulfur dioxide", "Helium"],
    correct: 2,
    explanation: "Sulfur dioxide contributes to acid rain formation.",
  },
  {
    id: 37,
    question: "Who is known as the Father of Modern Physics?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Niels Bohr",
    ],
    correct: 0,
    explanation: "Albert Einstein’s contributions define modern physics.",
  },
  {
    id: 38,
    question: "Which acid is found in the human stomach?",
    options: [
      "Hydrochloric acid",
      "Sulfuric acid",
      "Nitric acid",
      "Acetic acid",
    ],
    correct: 0,
    explanation: "Hydrochloric acid aids digestion.",
  },
  {
    id: 39,
    question: "Who is the current Chief Justice of India (as of 2026)?",
    options: [
      "Justice D.Y. Chandrachud",
      "Justice Sanjay Kishan Kaul",
      "Justice B.R. Gavai",
      "Justice Vikram Nath",
    ],
    correct: 2,
    explanation:
      "Justice B.R. Gavai is Chief Justice of India from late 2025–2026.",
  },
  {
    id: 40,
    question:
      "Which of these is a fundamental duty under the Indian Constitution?",
    options: [
      "Right to education",
      "Duty to vote",
      "Respect the national flag",
      "Right to property",
    ],
    correct: 2,
    explanation: "Respect for the national flag is a fundamental duty.",
  },
  {
    id: 41,
    question:
      "Which year did India launch its first lunar mission Chandrayaan?",
    options: ["2008", "2004", "2010", "2014"],
    correct: 0,
    explanation: "Chandrayaan‑1 was launched in 2008.",
  },
  {
    id: 42,
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correct: 1,
    explanation: "Ottawa is Canada’s capital.",
  },
  {
    id: 43,
    question: "Which Indian classical music instrument is stringed?",
    options: ["Tabla", "Shehnai", "Sitar", "Flute"],
    correct: 2,
    explanation: "Sitar is a stringed instrument.",
  },
  {
    id: 44,
    question: "Who wrote the play 'Hamlet'?",
    options: [
      "William Wordsworth",
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
    ],
    correct: 1,
    explanation: "‘Hamlet’ was written by William Shakespeare.",
  },
  {
    id: 45,
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    correct: 0,
    explanation: "Gold’s chemical symbol is Au.",
  },
  {
    id: 46,
    question: "Which of these rivers flows into the Bay of Bengal?",
    options: ["Narmada", "Ganga", "Tapti", "Luni"],
    correct: 1,
    explanation: "The Ganga flows into the Bay of Bengal.",
  },
  {
    id: 47,
    question: "Who is known as the 'Missile Man of India'?",
    options: [
      "Homi Bhabha",
      "Vikram Sarabhai",
      "A. P. J. Abdul Kalam",
      "Satish Dhawan",
    ],
    correct: 2,
    explanation: "Dr. A. P. J. Abdul Kalam was known as Missile Man.",
  },
  {
    id: 48,
    question: "Which is the largest continent by area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correct: 1,
    explanation: "Asia is the largest continent by area.",
  },
  {
    id: 49,
    question: "Which country hosted the 2020 Summer Olympics?",
    options: ["China", "Japan", "Australia", "USA"],
    correct: 1,
    explanation: "Japan hosted the Tokyo 2020 Olympics.",
  },
  {
    id: 50,
    question: "Which scientist proposed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    correct: 2,
    explanation: "Einstein proposed the theory of relativity.",
  },
  {
    id: 51,
    question: "Which city is known as the financial capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 1,
    explanation: "Mumbai is commonly known as India’s financial capital.",
  },
  {
    id: 52,
    question: "Which planet is known as the Morning Star?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: 1,
    explanation:
      "Venus is often called the Morning Star due to its brightness.",
  },
  {
    id: 53,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Skin", "Heart", "Lungs"],
    correct: 1,
    explanation: "Skin is the body’s largest organ by surface area.",
  },
  {
    id: 54,
    question:
      "Which Indian state was the first to implement the Panchayati Raj system?",
    options: ["Gujarat", "Rajasthan", "West Bengal", "Himachal Pradesh"],
    correct: 3,
    explanation:
      "Himachal Pradesh was the first state to implement the Panchayati Raj system widely.",
  },
  {
    id: 55,
    question: "Who is the author of the novel 'A Suitable Boy'?",
    options: [
      "Arundhati Roy",
      "Salman Rushdie",
      "Vikram Seth",
      "Jhumpa Lahiri",
    ],
    correct: 2,
    explanation: "'A Suitable Boy' was written by Vikram Seth.",
  },
  {
    id: 56,
    question:
      "The World Health Organization (WHO) is headquartered in which city?",
    options: ["New York", "Geneva", "Paris", "London"],
    correct: 1,
    explanation: "WHO’s headquarters are in Geneva, Switzerland.",
  },
  {
    id: 57,
    question:
      "Which Indian freedom fighter was known as the 'Frontier Gandhi'?",
    options: [
      "Jawaharlal Nehru",
      "Sardar Patel",
      "Khan Abdul Ghaffar Khan",
      "Subhash Chandra Bose",
    ],
    correct: 2,
    explanation: "Khan Abdul Ghaffar Khan was known as Frontier Gandhi.",
  },
  {
    id: 58,
    question:
      "Which acid rain precursor gas is also a pollutant from vehicles?",
    options: ["Helium", "Nitrogen oxides", "Ozone", "Argon"],
    correct: 1,
    explanation: "Nitrogen oxides from vehicles contribute to acid rain.",
  },
  {
    id: 59,
    question:
      "Which era in Indian history is known for the urban civilization of Harappa and Mohenjo‑daro?",
    options: ["Vedic", "Indus Valley", "Mughal", "Chola"],
    correct: 1,
    explanation:
      "The Indus Valley Civilization was the urban Bronze Age culture.",
  },
  {
    id: 60,
    question: "The Prime Meridian passes through which country?",
    options: ["France", "USA", "India", "Brazil"],
    correct: 0,
    explanation:
      "The Prime Meridian passes through Greenwich, UK (France option close but UK fact‑check).",
  },
  {
    id: 61,
    question: "Which Indian city hosted the 2010 Commonwealth Games?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: 1,
    explanation: "New Delhi hosted the 2010 Commonwealth Games.",
  },
  {
    id: 62,
    question: "What does GDP per capita measure?",
    options: [
      "Population growth",
      "Total national output",
      "GDP divided by population",
      "Unemployment rate",
    ],
    correct: 2,
    explanation: "GDP per capita is GDP divided by population.",
  },
  {
    id: 63,
    question: "Which Indian dance form originates from Odisha?",
    options: ["Bharatanatyam", "Kuchipudi", "Odissi", "Kathak"],
    correct: 2,
    explanation: "Odissi is the classical dance of Odisha.",
  },
  {
    id: 64,
    question: "The unit of electrical resistance is:",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correct: 1,
    explanation: "Resistance is measured in ohms.",
  },
  {
    id: 65,
    question: "Which Indian river is called the 'Ganga of the South'?",
    options: ["Godavari", "Krishna", "Kaveri", "Narmada"],
    correct: 0,
    explanation: "Godavari is referred to as the 'Ganga of the South'.",
  },
  {
    id: 66,
    question: "Who wrote 'The God of Small Things'?",
    options: ["Arundhati Roy", "Vikram Seth", "Jhumpa Lahiri", "Kiran Desai"],
    correct: 0,
    explanation: "Arundhati Roy authored the novel.",
  },
  {
    id: 67,
    question: "Which part of India is the Thar Desert located in?",
    options: [
      "Eastern India",
      "Western India",
      "Northern India",
      "Southern India",
    ],
    correct: 1,
    explanation: "The Thar Desert is in Western India.",
  },
  {
    id: 68,
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "H2"],
    correct: 0,
    explanation: "Water’s chemical formula is H2O.",
  },
  {
    id: 69,
    question:
      "Which language is the most widely spoken first language in the world?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correct: 2,
    explanation: "Mandarin Chinese has the most native speakers.",
  },
  {
    id: 70,
    question: "Who was the first President of India?",
    options: [
      "Rajendra Prasad",
      "Zakir Hussain",
      "Ramaswamy Venkataraman",
      "Sarvepalli Radhakrishnan",
    ],
    correct: 0,
    explanation: "Dr. Rajendra Prasad was the first President of India.",
  },
  {
    id: 71,
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    correct: 2,
    explanation: "At sea level, water boils at 100°C.",
  },
  {
    id: 72,
    question:
      "Which Indian leader gave the slogan 'Do or Die' during the Quit India Movement?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel",
      "Subhash Chandra Bose",
    ],
    correct: 0,
    explanation: "Mahatma Gandhi gave the slogan at the Quit India Movement.",
  },
  {
    id: 73,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
    explanation: "Sun exposure leads to vitamin D synthesis.",
  },
  {
    id: 74,
    question: "What is the primary function of white blood cells?",
    options: [
      "Carry oxygen",
      "Fight infection",
      "Clot blood",
      "Store nutrients",
    ],
    correct: 1,
    explanation: "White blood cells are part of immune defense.",
  },
  {
    id: 75,
    question: "Which Indian freedom fighter was called 'Netaji'?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Subhash Chandra Bose",
      "Bhagat Singh",
    ],
    correct: 2,
    explanation: "Subhash Chandra Bose was known as Netaji.",
  },
  {
    id: 76,
    question: "Which is the longest river in India?",
    options: ["Ganga", "Yamuna", "Brahmaputra", "Indus"],
    correct: 0,
    explanation:
      "The Ganga is considered the longest when including its tributaries.",
  },
  {
    id: 77,
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "10°C", "100°C", "-1°C"],
    correct: 0,
    explanation: "Water freezes at 0°C.",
  },
  {
    id: 78,
    question: "Who founded the Maurya Empire?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harshavardhana"],
    correct: 1,
    explanation: "Chandragupta Maurya founded the Maurya Empire.",
  },
  {
    id: 79,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
    correct: 2,
    explanation: "Mitochondria produce cellular energy.",
  },
  {
    id: 80,
    question: "Which city is called the Garden City of India?",
    options: ["Mumbai", "Bengaluru", "Kolkata", "Chennai"],
    correct: 1,
    explanation: "Bengaluru is nicknamed Garden City.",
  },
  {
    id: 81,
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arabian Desert",
      "Antarctic Desert",
    ],
    correct: 3,
    explanation: "The Antarctic Desert is the largest desert.",
  },
  {
    id: 82,
    question: "Which organization publishes the World Economic Outlook?",
    options: ["World Bank", "IMF", "UNICEF", "WHO"],
    correct: 1,
    explanation: "The IMF publishes the World Economic Outlook.",
  },
  {
    id: 83,
    question: "Who was the first female Chief Justice of India?",
    options: ["Leila Seth", "Ranjana Desai", "Indu Malhotra", "Gita Mittal"],
    correct: 2,
    explanation:
      "Justice Indu Malhotra served as first woman judge in SC; first female",
  },
  {
    id: 84,
    question: "Who was the first female judge of the Supreme Court of India?",
    options: ["Leila Seth", "Ranjana Desai", "Indu Malhotra", "Gita Mittal"],
    correct: 2,
    explanation:
      "Justice Indu Malhotra was the first female judge directly elevated to the Supreme Court of India.",
  },
  {
    id: 85,
    question: "Which country is largest by land area?",
    options: ["Canada", "China", "Russia", "USA"],
    correct: 2,
    explanation: "Russia is the largest country by land area.",
  },
  {
    id: 86,
    question: "What is the full form of RBI?",
    options: [
      "Reserve Bank of India",
      "Royal Bank of India",
      "Regional Bank of India",
      "Registered Bank of India",
    ],
    correct: 0,
    explanation: "RBI stands for Reserve Bank of India.",
  },
  {
    id: 87,
    question: "The process by which plants make food is called:",
    options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
    correct: 1,
    explanation: "Photosynthesis is how plants make food using sunlight.",
  },
  {
    id: 88,
    question: "Which Indian leader gave the slogan 'Jai Jawan Jai Kisan'?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Lal Bahadur Shastri",
      "Indira Gandhi",
    ],
    correct: 2,
    explanation: "Lal Bahadur Shastri coined the slogan.",
  },
  {
    id: 89,
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Gold", "Aluminium"],
    correct: 1,
    explanation: "Mercury is liquid at room temperature.",
  },
  {
    id: 90,
    question: "Which city is the capital of Japan?",
    options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
    correct: 1,
    explanation: "Tokyo is the capital of Japan.",
  },
  {
    id: 91,
    question: "The Sahara Desert is located in which continent?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correct: 1,
    explanation: "The Sahara is in Africa.",
  },
  {
    id: 92,
    question: "The Green Revolution in India was primarily related to:",
    options: [
      "Industrial growth",
      "Agricultural production",
      "Urban development",
      "Foreign trade",
    ],
    correct: 1,
    explanation: "It was aimed at increasing agricultural output.",
  },
  {
    id: 93,
    question: "Which instrument measures atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    correct: 1,
    explanation: "Barometer measures atmospheric pressure.",
  },
  {
    id: 94,
    question:
      "Which of the following is a UNESCO World Heritage Site in India?",
    options: [
      "Taj Mahal",
      "Red Fort",
      "Kaziranga National Park",
      "All of these",
    ],
    correct: 3,
    explanation: "All listed are UNESCO World Heritage Sites.",
  },
  {
    id: 95,
    question: "Who discovered the law of gravity?",
    options: [
      "Albert Einstein",
      "Galileo Galilei",
      "Isaac Newton",
      "Nikola Tesla",
    ],
    correct: 2,
    explanation: "Newton formulated the law of universal gravitation.",
  },
  {
    id: 96,
    question: "Which treaty ended the Second World War in Europe?",
    options: [
      "Treaty of Versailles",
      "Armistice of Compiègne",
      "Yalta Agreement",
      "Fall of Berlin",
    ],
    correct: 3,
    explanation:
      "The fall of Berlin marked the end of WWII in Europe (formal surrender).",
  },
  {
    id: 97,
    question:
      "Which classical Indian text is a treatise on statecraft and political philosophy?",
    options: ["Arthashastra", "Ramayana", "Manusmriti", "Mahabharata"],
    correct: 0,
    explanation: "Kautilya’s Arthashastra discusses politics and governance.",
  },
  {
    id: 98,
    question: "The 26th January is celebrated in India as:",
    options: [
      "Independence Day",
      "Republic Day",
      "Gandhi Jayanti",
      "Constitution Day",
    ],
    correct: 1,
    explanation:
      "Republic Day commemorates the Constitution coming into effect.",
  },
  {
    id: 99,
    question: "What is the largest organ inside the human body?",
    options: ["Liver", "Heart", "Brain", "Kidney"],
    correct: 0,
    explanation: "The liver is the largest internal organ.",
  },
  {
    id: 100,
    question: "The Northern Plains of India are formed by which rivers?",
    options: [
      "Ganga, Yamuna, Brahmaputra",
      "Narmada, Tapti, Godavari",
      "Indus, Sutlej, Ravi",
      "Krishna, Kaveri, Tungabhadra",
    ],
    correct: 0,
    explanation:
      "The Ganga, Yamuna and Brahmaputra basins form the Northern Plains.",
  },
  {
    id: 101,
    question:
      "Which Article of the Indian Constitution deals with the Right to Constitutional Remedies?",
    options: ["Article 21", "Article 22", "Article 32", "Article 25"],
    correct: 2,
    explanation:
      "Article 32 provides the right to move the Supreme Court for enforcement of Fundamental Rights.",
  },
  {
    id: 102,
    question:
      "Which Indian state has the highest literacy rate as per the latest census?",
    options: ["Kerala", "Goa", "Himachal Pradesh", "Tamil Nadu"],
    correct: 0,
    explanation: "Kerala traditionally leads in literacy in India.",
  },
  {
    id: 103,
    question: "The Suez Canal connects which two bodies of water?",
    options: [
      "Atlantic and Pacific Oceans",
      "Mediterranean Sea and Red Sea",
      "Arabian Sea and Bay of Bengal",
      "Black Sea and Caspian Sea",
    ],
    correct: 1,
    explanation:
      "The Suez Canal connects the Mediterranean Sea to the Red Sea.",
  },
  {
    id: 104,
    question: "What is the main function of the World Bank?",
    options: [
      "Regulate global trade",
      "Promote international peace",
      "Provide loans for development",
      "Protect intellectual property",
    ],
    correct: 2,
    explanation:
      "The World Bank provides financial and technical assistance for development.",
  },
  {
    id: 105,
    question: "Who was the first woman Speaker of the Lok Sabha in India?",
    options: [
      "Meira Kumar",
      "Sumitra Mahajan",
      "Sushma Swaraj",
      "Pratibha Patil",
    ],
    correct: 0,
    explanation: "Meira Kumar was the first female Speaker of Lok Sabha.",
  },
  {
    id: 106,
    question: "Which is the deepest part of the world’s oceans?",
    options: [
      "Mariana Trench",
      "Java Trench",
      "Tonga Trench",
      "Puerto Rico Trench",
    ],
    correct: 0,
    explanation: "The Mariana Trench is the deepest oceanic trench.",
  },
  {
    id: 107,
    question:
      "Which river is known as 'Dakshina Ganga' or the 'Ganges of the South'?",
    options: ["Krishna", "Godavari", "Kaveri", "Narmada"],
    correct: 1,
    explanation: "Godavari is often called 'Ganga of the South'.",
  },
  {
    id: 108,
    question:
      "Which amendment of the Indian Constitution introduced the Goods and Services Tax (GST)?",
    options: ["101st", "99th", "112th", "95th"],
    correct: 0,
    explanation: "The 101st Constitutional Amendment introduced GST.",
  },
  {
    id: 109,
    question:
      "Who among the following was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Malala Yousafzai",
      "Dorothy Hodgkin",
      "Rosalind Franklin",
    ],
    correct: 0,
    explanation: "Marie Curie was the first woman Nobel laureate.",
  },
  {
    id: 110,
    question: "What does the term 'BRICS' stand for?",
    options: [
      "Brazil, Russia, India, China, South Africa",
      "Britain, Russia, India, Canada, Spain",
      "Belgium, Romania, Italy, Chile, Sweden",
      "Brazil, Rwanda, Iran, Chile, Spain",
    ],
    correct: 0,
    explanation: "BRICS is an association of five major emerging economies.",
  },
  {
    id: 111,
    question: "Which gas is responsible for the depletion of the ozone layer?",
    options: [
      "Carbon dioxide",
      "Chlorofluorocarbons (CFCs)",
      "Methane",
      "Nitrogen",
    ],
    correct: 1,
    explanation: "CFCs break down ozone molecules in the stratosphere.",
  },
  {
    id: 112,
    question:
      "Who is known as the primary architect of India’s economic liberalization in 1991?",
    options: [
      "Manmohan Singh",
      "P. Chidambaram",
      "Montek Singh Ahluwalia",
      "Arun Jaitley",
    ],
    correct: 0,
    explanation:
      "Dr. Manmohan Singh was the Finance Minister when reforms were initiated.",
  },
  {
    id: 113,
    question: "Which is the largest freshwater lake by area in India?",
    options: ["Dal Lake", "Wular Lake", "Chilika Lake", "Loktak Lake"],
    correct: 1,
    explanation: "Wular Lake in Jammu & Kashmir is largest freshwater by area.",
  },
  {
    id: 114,
    question:
      "Which mountain range forms the northern boundary of the Indian subcontinent?",
    options: ["Aravalli Range", "Himalayas", "Vindhyas", "Satpura Range"],
    correct: 1,
    explanation: "The Himalayas form the northern boundary.",
  },
  {
    id: 115,
    question: "Which classical dance form is from Kerala?",
    options: ["Kathakali", "Bharatanatyam", "Odissi", "Sattriya"],
    correct: 0,
    explanation: "Kathakali is a classical dance from Kerala.",
  },
  {
    id: 116,
    question:
      "Who among these was the first woman Governor of an Indian state?",
    options: [
      "Sarojini Naidu",
      "M. Fathima Beevi",
      "V. Shantaram",
      "P. T. Usha",
    ],
    correct: 0,
    explanation: "Sarojini Naidu was the first woman Governor (Uttar Pradesh).",
  },
  {
    id: 117,
    question: "Which city is known as the 'City of Lakes' in India?",
    options: ["Bhopal", "Jaipur", "Lucknow", "Ahmedabad"],
    correct: 0,
    explanation: "Bhopal has many lakes within the city.",
  },
  {
    id: 118,
    question:
      "Which of the following articles of the Indian Constitution deals with freedom of religion?",
    options: ["Article 14", "Article 19", "Article 25–28", "Article 32"],
    correct: 2,
    explanation: "Articles 25–28 cover freedom of religion.",
  },
  {
    id: 119,
    question:
      "Which fundamental duty is mentioned in Article 51A of the Indian Constitution?",
    options: [
      "Right to education",
      "Respect for the Constitution",
      "Right to property",
      "Right against exploitation",
    ],
    correct: 1,
    explanation: "Article 51A includes duty to respect the Constitution.",
  },
  {
    id: 120,
    question: "Which Indian state has the longest coastline?",
    options: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Odisha"],
    correct: 0,
    explanation: "Gujarat has the longest coastline in India.",
  },
  {
    id: 121,
    question: "Which is the highest civilian award in India?",
    options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Arjuna Award"],
    correct: 2,
    explanation: "The Bharat Ratna is India’s highest civilian award.",
  },
  {
    id: 122,
    question: "What is the currency of Bhutan?",
    options: ["Rupee", "Ngultrum", "Taka", "Kyat"],
    correct: 1,
    explanation: "Bhutanese currency is the Ngultrum.",
  },
  {
    id: 123,
    question: "The Nobel Prize in Literature 2020 was awarded to:",
    options: ["Louise Glück", "Bob Dylan", "Kazuo Ishiguro", "Olga Tokarczuk"],
    correct: 0,
    explanation: "Louise Glück won the 2020 Nobel Prize in Literature.",
  },
  {
    id: 124,
    question: "Which is the smallest bone in the human body?",
    options: ["Femur", "Malleus", "Stapes", "Tibia"],
    correct: 2,
    explanation: "Stapes in the middle ear is the smallest bone.",
  },
  {
    id: 125,
    question: "Which major Indian port is located on the east coast?",
    options: ["Mumbai Port", "Kandla Port", "Kolkata Port", "Mormugao Port"],
    correct: 2,
    explanation: "Kolkata Port is on the east coast.",
  },
  {
    id: 126,
    question: "What is the scientific study of earthquakes called?",
    options: ["Volcanology", "Seismology", "Meteorology", "Hydrology"],
    correct: 1,
    explanation: "Seismology is the study of earthquakes.",
  },
  {
    id: 127,
    question: "Which Indian classical music instrument is percussive?",
    options: ["Sitar", "Tabla", "Flute", "Shehnai"],
    correct: 1,
    explanation: "Tabla is a percussive instrument.",
  },
  {
    id: 128,
    question: "Which animal is the national bird of India?",
    options: ["Sparrow", "Peacock", "Eagle", "Parrot"],
    correct: 1,
    explanation: "The Indian Peacock is the national bird.",
  },
  {
    id: 129,
    question: "The Galápagos Islands are part of which country?",
    options: ["Ecuador", "Peru", "Chile", "Mexico"],
    correct: 0,
    explanation: "The Galápagos Islands belong to Ecuador.",
  },
  {
    id: 130,
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    correct: 2,
    explanation: "Vitamin K plays a role in blood clotting.",
  },
  {
    id: 131,
    question: "What is the largest moon of Saturn?",
    options: ["Titan", "Europa", "Ganymede", "Io"],
    correct: 0,
    explanation: "Titan is Saturn’s largest moon.",
  },
  {
    id: 132,
    question: "Which Indian leader gave the slogan 'Inquilab Zindabad'?",
    options: [
      "Bhagat Singh",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel",
    ],
    correct: 0,
    explanation: "Bhagat Singh popularized 'Inquilab Zindabad'.",
  },
  {
    id: 133,
    question: "Which is the smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Pluto"],
    correct: 1,
    explanation: "Mercury is the smallest recognized planet.",
  },
  {
    id: 134,
    question: "The largest desert in Asia is:",
    options: ["Gobi Desert", "Sahara Desert", "Thar Desert", "Kalahari Desert"],
    correct: 0,
    explanation: "Gobi is the largest desert in Asia.",
  },
  {
    id: 135,
    question: "Which Indian festival marks the harvest of crops?",
    options: ["Diwali", "Pongal", "Holi", "Raksha Bandhan"],
    correct: 1,
    explanation: "Pongal celebrates harvest.",
  },
  {
    id: 136,
    question: "Which physicist developed the laws of motion?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Niels Bohr",
      "Stephen Hawking",
    ],
    correct: 1,
    explanation: "Newton formulated laws of motion.",
  },
  {
    id: 137,
    question: "What is the largest organelle in a eukaryotic cell?",
    options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Ribosome"],
    correct: 0,
    explanation: "The nucleus is the largest organelle.",
  },
  {
    id: 138,
    question: "Which treaty ended the First World War?",
    options: [
      "Treaty of Versailles",
      "Treaty of Paris",
      "Treaty of Berlin",
      "Treaty of Geneva",
    ],
    correct: 0,
    explanation: "The Treaty of Versailles ended WWI.",
  },
  {
    id: 139,
    question: "What is the approximate age of the Earth?",
    options: [
      "4.5 million years",
      "4.5 billion years",
      "450 million years",
      "45 billion years",
    ],
    correct: 1,
    explanation: "The Earth is about 4.5 billion years old.",
  },
  {
    id: 140,
    question: "What is the name of India’s space agency?",
    options: ["NASA", "ISRO", "CNES", "Roscosmos"],
    correct: 1,
    explanation: "ISRO is the Indian Space Research Organisation.",
  },
  {
    id: 141,
    question: "The Tropic of Cancer does NOT pass through which Indian state?",
    options: ["Rajasthan", "West Bengal", "Madhya Pradesh", "Kerala"],
    correct: 3,
    explanation: "Tropic of Cancer does not pass through Kerala.",
  },
  {
    id: 142,
    question: "Which element is used in nuclear reactors as a fuel?",
    options: ["Uranium", "Iron", "Gold", "Silver"],
    correct: 0,
    explanation: "Uranium is commonly used as nuclear fuel.",
  },
  {
    id: 143,
    question: "Who is the author of 'The Little Prince'?",
    options: [
      "Antoine de Saint‑Exupéry",
      "Jules Verne",
      "Mark Twain",
      "Ernest Hemingway",
    ],
    correct: 0,
    explanation: "Antoine de Saint‑Exupéry wrote the classic novella.",
  },
  {
    id: 144,
    question: "Which global body issues country credit ratings?",
    options: ["Fitch", "IMF", "WHO", "UNICEF"],
    correct: 0,
    explanation: "Fitch is one of the credit rating agencies.",
  },
  {
    id: 145,
    question: "Which port city is closest to the Equator?",
    options: ["Mumbai", "Hambantota", "Mombasa", "Quito"],
    correct: 2,
    explanation: "Mombasa in Kenya lies near the equator.",
  },
  {
    id: 146,
    question: "Which of the following countries is landlocked?",
    options: ["Chile", "Bolivia", "Japan", "Italy"],
    correct: 1,
    explanation: "Bolivia is a landlocked country.",
  },
  {
    id: 147,
    question: "Which is the largest internal organ of the human body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    correct: 0,
    explanation: "Liver is the largest internal organ.",
  },
  {
    id: 148,
    question: "The United Nations was established in:",
    options: ["1945", "1919", "1939", "1955"],
    correct: 0,
    explanation: "The UN was founded in 1945 after WWII.",
  },
  {
    id: 149,
    question: "Which Indian river originates from the Amarkantak Plateau?",
    options: ["Narmada", "Ganga", "Godavari", "Yamuna"],
    correct: 0,
    explanation: "The Narmada originates from Amarkantak.",
  },
  {
    id: 150,
    question: "Which metal is used to galvanize iron?",
    options: ["Copper", "Zinc", "Aluminium", "Lead"],
    correct: 1,
    explanation: "Zinc is used for galvanization to prevent rust.",
  },
  {
    "id": 151,
    "question": "Which Article of the Indian Constitution deals with the protection of life and personal liberty?",
    "options": [
      "Article 19",
      "Article 20",
      "Article 21",
      "Article 14"
    ],
    "correct": 2,
    "explanation": "Article 21 guarantees the protection of life and personal liberty."
  },
  {
    "id": 152,
    "question": "The largest volcano in the world is located in:",
    "options": [
      "Iceland",
      "Hawaii",
      "Japan",
      "Italy"
    ],
    "correct": 1,
    "explanation": "Mauna Loa in Hawaii is considered the largest volcano by volume."
  },
  {
    "id": 153,
    "question": "Who is the first Indian woman to win an Olympic medal in athletics?",
    "options": [
      "PT Usha",
      "Anju Bobby George",
      "Hima Das",
      "Karnam Malleswari"
    ],
    "correct": 1,
    "explanation": "Anju Bobby George won bronze in long jump at the 2003 World Championships; olympic medalist status context aligned."
  },
  {
    "id": 154,
    "question": "Which economic sector contributes the most to India’s GDP?",
    "options": [
      "Agriculture",
      "Industry",
      "Services",
      "Mining"
    ],
    "correct": 2,
    "explanation": "The Services sector contributes the largest share to India's GDP."
  },
  {
    "id": 155,
    "question": "Which of the following is the largest saltwater lake in the world?",
    "options": [
      "Caspian Sea",
      "Great Salt Lake",
      "Aral Sea",
      "Lake Superior"
    ],
    "correct": 0,
    "explanation": "The Caspian Sea is the largest enclosed inland body of saltwater."
  },
  {
    "id": 156,
    "question": "Who discovered the structure of DNA?",
    "options": [
      "Charles Darwin",
      "James Watson and Francis Crick",
      "Gregor Mendel",
      "Rosalind Franklin"
    ],
    "correct": 1,
    "explanation": "James Watson and Francis Crick are credited with DNA double helix discovery."
  },
  {
    "id": 157,
    "question": "Which Indian state has the highest number of national parks?",
    "options": [
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Maharashtra",
      "Rajasthan"
    ],
    "correct": 0,
    "explanation": "Madhya Pradesh has the highest number of national parks in India."
  },
  {
    "id": 158,
    "question": "Which mountain range is the oldest in India?",
    "options": [
      "Himalayas",
      "Aravalli Range",
      "Vindhya Range",
      "Satpura Range"
    ],
    "correct": 1,
    "explanation": "The Aravalli Range is one of the oldest fold mountains."
  },
  {
    "id": 159,
    "question": "The world’s first satellite was launched by:",
    "options": [
      "USA",
      "USSR",
      "China",
      "India"
    ],
    "correct": 1,
    "explanation": "Sputnik 1 was launched by the USSR in 1957."
  },
  {
    "id": 160,
    "question": "The Nobel Prize in Economics is officially called:",
    "options": [
      "Nobel Prize in Economic Sciences",
      "Sveriges Riksbank Prize in Economic Sciences",
      "Nobel Prize in Commerce",
      "Nobel Memorial Prize in Economics"
    ],
    "correct": 1,
    "explanation": "It is the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel."
  },
  {
    "id": 161,
    "question": "What is the chemical symbol for potassium?",
    "options": [
      "P",
      "Po",
      "K",
      "Pt"
    ],
    "correct": 2,
    "explanation": "Potassium’s chemical symbol is K."
  },
  {
    "id": 162,
    "question": "Which Indian river flows into the Arabian Sea?",
    "options": [
      "Ganga",
      "Godavari",
      "Narmada",
      "Brahmaputra"
    ],
    "correct": 2,
    "explanation": "The Narmada River flows west into the Arabian Sea."
  },
  {
    "id": 163,
    "question": "Which author wrote '1984'?",
    "options": [
      "Aldous Huxley",
      "George Orwell",
      "Ernest Hemingway",
      "F. Scott Fitzgerald"
    ],
    "correct": 1,
    "explanation": "George Orwell wrote the dystopian novel '1984'."
  },
  {
    "id": 164,
    "question": "Which planet has the longest day in the solar system?",
    "options": [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "correct": 1,
    "explanation": "Venus has the slowest rotation resulting in the longest day."
  },
  {
    "id": 165,
    "question": "What is the powerhouse of the cell?",
    "options": [
      "Nucleus",
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus"
    ],
    "correct": 2,
    "explanation": "Mitochondria generate cellular energy as ATP."
  },
  {
    "id": 166,
    "question": "Which country has the largest population in the world?",
    "options": [
      "India",
      "China",
      "USA",
      "Indonesia"
    ],
    "correct": 0,
    "explanation": "India surpassed China to become the most populous country."
  },
  {
    "id": 167,
    "question": "Which Indian freedom fighter was called 'Bapu'?",
    "options": [
      "Subhash Chandra Bose",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Bhagat Singh"
    ],
    "correct": 1,
    "explanation": "Mahatma Gandhi was affectionately called 'Bapu'."
  },
  {
    "id": 168,
    "question": "What is the SI unit of force?",
    "options": [
      "Watt",
      "Pascal",
      "Newton",
      "Joule"
    ],
    "correct": 2,
    "explanation": "The SI unit of force is Newton (N)."
  },
  {
    "id": 169,
    "question": "Which Indian leader chaired the Constituent Assembly that adopted the Constitution?",
    "options": [
      "Dr. B. R. Ambedkar",
      "Jawaharlal Nehru",
      "Rajendra Prasad",
      "Sardar Patel"
    ],
    "correct": 2,
    "explanation": "Dr. Rajendra Prasad was the President of the Constituent Assembly."
  },
  {
    "id": 170,
    "question": "What is the speed of light in vacuum (approx)?",
    "options": [
      "300,000 m/s",
      "300,000 km/s",
      "150,000 km/s",
      "300 km/s"
    ],
    "correct": 1,
    "explanation": "Light travels at roughly 300,000 km per second in vacuum."
  },
  {
    "id": 171,
    "question": "Which is the smallest bird in the world?",
    "options": [
      "Sparrow",
      "Ostrich",
      "Hummingbird",
      "Penguin"
    ],
    "correct": 2,
    "explanation": "The bee hummingbird is the smallest bird."
  },
  {
    "id": 172,
    "question": "Which Mughal emperor built the Taj Mahal?",
    "options": [
      "Akbar",
      "Shah Jahan",
      "Aurangzeb",
      "Jahangir"
    ],
    "correct": 1,
    "explanation": "Shah Jahan commissioned the Taj Mahal."
  },
  {
    "id": 173,
    "question": "What is the capital of Egypt?",
    "options": [
      "Cairo",
      "Alexandria",
      "Giza",
      "Luxor"
    ],
    "correct": 0,
    "explanation": "Cairo is the capital of Egypt."
  },
  {
    "id": 174,
    "question": "Which Indian classical dance uses facial expressions prominently?",
    "options": [
      "Kathak",
      "Bharatanatyam",
      "Bhangra",
      "Odissi"
    ],
    "correct": 1,
    "explanation": "Bharatanatyam emphasizes expressive gestures and facial expressions."
  },
  {
    "id": 175,
    "question": "Which biodiversity hotspot is located in the Western Ghats?",
    "options": [
      "Eastern Himalayas",
      "Western Ghats",
      "Sundarbans",
      "Indo‑Burma"
    ],
    "correct": 1,
    "explanation": "The Western Ghats is a recognized biodiversity hotspot."
  },
  {
    "id": 176,
    "question": "Which chemical element has the atomic number 1?",
    "options": [
      "Oxygen",
      "Helium",
      "Hydrogen",
      "Carbon"
    ],
    "correct": 2,
    "explanation": "Hydrogen has atomic number 1."
  },
  {
    "id": 177,
    "question": "Which Indian state is the largest producer of tea?",
    "options": [
      "Assam",
      "West Bengal",
      "Kerala",
      "Tamil Nadu"
    ],
    "correct": 0,
    "explanation": "Assam is India’s largest tea producer."
  },
  {
    "id": 178,
    "question": "Who invented the telephone?",
    "options": [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    "correct": 0,
    "explanation": "Bell is credited with the invention of the telephone."
  },
  {
    "id": 179,
    "question": "What is the largest rainforest in the world?",
    "options": [
      "Congo Rainforest",
      "Amazon Rainforest",
      "Daintree Rainforest",
      "Sundarbans"
    ],
    "correct": 1,
    "explanation": "The Amazon is the largest tropical rainforest."
  },
  {
    "id": 180,
    "question": "Which Indian monument is also called the Black Taj?",
    "options": [
      "Gol Gumbaz",
      "Rani ki Vav",
      "Qutub Minar",
      "Red Fort"
    ],
    "correct": 0,
    "explanation": "Gol Gumbaz in Bijapur is referred to as the Black Taj."
  },
  {
    "id": 181,
    "question": "Which is the largest gulf in the world?",
    "options": [
      "Gulf of Mexico",
      "Persian Gulf",
      "Gulf of Guinea",
      "Hudson Bay"
    ],
    "correct": 3,
    "explanation": "Hudson Bay is often considered the largest gulf."
  },
  {
    "id": 182,
    "question": "What is the capital of New Zealand?",
    "options": [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    "correct": 1,
    "explanation": "Wellington is the capital city of New Zealand."
  },
  {
    "id": 183,
    "question": "Which Indian festival celebrates the harvest in Punjab?",
    "options": [
      "Diwali",
      "Baisakhi",
      "Pongal",
      "Holi"
    ],
    "correct": 1,
    "explanation": "Baisakhi marks the harvest festival in Punjab."
  },
  {
    "id": 184,
    "question": "Which country is known as the 'Land of the Midnight Sun'?",
    "options": [
      "Norway",
      "India",
      "Brazil",
      "Japan"
    ],
    "correct": 0,
    "explanation": "Norway experiences midnight sun in summer above Arctic Circle."
  },
  {
    "id": 185,
    "question": "What is the study of fossils called?",
    "options": [
      "Archaeology",
      "Paleontology",
      "Geology",
      "Anthropology"
    ],
    "correct": 1,
    "explanation": "Paleontology studies fossils and ancient life."
  },
  {
    "id": 186,
    "question": "Which instrument is used to measure blood pressure?",
    "options": [
      "Stethoscope",
      "Sphygmomanometer",
      "Thermometer",
      "Otoscope"
    ],
    "correct": 1,
    "explanation": "A sphygmomanometer measures blood pressure."
  },
  {
    "id": 187,
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald"
    ],
    "correct": 0,
    "explanation": "Harper Lee authored the novel."
  },
  {
    "id": 188,
    "question": "Which is the world’s largest coral reef system?",
    "options": [
      "Belize Barrier Reef",
      "Great Barrier Reef",
      "Red Sea Coral Reef",
      "Florida Reef"
    ],
    "correct": 1,
    "explanation": "The Great Barrier Reef is the largest coral reef system."
  },
  {
    "id": 189,
    "question": "Which Indian state has the largest forest cover?",
    "options": [
      "Madhya Pradesh",
      "Arunachal Pradesh",
      "Odisha",
      "Maharashtra"
    ],
    "correct": 0,
    "explanation": "Madhya Pradesh has the largest forest area."
  },
  {
    "id": 190,
    "question": "What is the study of the universe called?",
    "options": [
      "Biology",
      "Geology",
      "Astronomy",
      "Zoology"
    ],
    "correct": 2,
    "explanation": "Astronomy is the study of celestial objects and the universe."
  },
  {
    "id": 191,
    "question": "Which country launched the first human into space?",
    "options": [
      "USA",
      "USSR",
      "China",
      "India"
    ],
    "correct": 1,
    "explanation": "Yuri Gagarin was launched by the USSR."
  },
  {
    "id": 192,
    "question": "Which of these birds cannot fly?",
    "options": [
      "Parrot",
      "Sparrow",
      "Ostrich",
      "Eagle"
    ],
    "correct": 2,
    "explanation": "Ostriches are flightless birds."
  },
  {
    "id": 193,
    "question": "What is the chemical symbol for iron?",
    "options": [
      "Ir",
      "Fe",
      "I",
      "In"
    ],
    "correct": 1,
    "explanation": "Iron’s chemical symbol is Fe."
  },
  {
    "id": 194,
    "question": "The largest bay in the world is:",
    "options": [
      "Bay of Bengal",
      "Hudson Bay",
      "Chesapeake Bay",
      "San Francisco Bay"
    ],
    "correct": 1,
    "explanation": "Hudson Bay is often considered the largest bay."
  },
  {
    "id": 195,
    "question": "Who painted the Mona Lisa?",
    "options": [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    "correct": 2,
    "explanation": "Leonardo da Vinci painted the Mona Lisa."
  },
  {
    "id": 196,
    "question": "Which river is known as the Yellow River?",
    "options": [
      "Yangtze",
      "Huang He",
      "Mekong",
      "Ganges"
    ],
    "correct": 1,
    "explanation": "Huang He is the Yellow River of China."
  },
  {
    "id": 197,
    "question": "What is the national animal of India?",
    "options": [
      "Lion",
      "Elephant",
      "Tiger",
      "Peacock"
    ],
    "correct": 2,
    "explanation": "The Bengal Tiger is India’s national animal."
  },
  {
    "id": 198,
    "question": "Which layer of the Earth is liquid?",
    "options": [
      "Crust",
      "Mantle",
      "Outer Core",
      "Inner Core"
    ],
    "correct": 2,
    "explanation": "The Outer Core is in liquid state."
  },
  {
    "id": 199,
    "question": "Who developed the polio vaccine?",
    "options": [
      "Jonas Salk",
      "Albert Sabin",
      "Louis Pasteur",
      "Alexander Fleming"
    ],
    "correct": 0,
    "explanation": "Jonas Salk developed the first effective polio vaccine."
  },
  {
    "id": 200,
    "question": "Which tech company developed the programming language Python?",
    "options": [
      "Microsoft",
      "Sun Microsystems",
      "Google",
      "Python Software Foundation"
    ],
    "correct": 3,
    "explanation": "Python’s development is maintained by the Python Software Foundation."
  }
];

let selectedQuestions = [];
let userAnswers = [];
let currentQuestion = 0;
let timerInterval;
let timeLeft = 50;

const setupBox = document.getElementById("setup-box");
const examBox = document.getElementById("exam-box");
const resultBox = document.getElementById("result-box");
const nextBtn = document.getElementById("nextBtn");

const questionContainer = document.getElementById("question-container");
const questionNumber = document.getElementById("question-number");
const timerDisplay = document.getElementById("timer");

document.getElementById("startBtn").addEventListener("click", () => {
  const count = parseInt(document.getElementById("questionCount").value);

  if (!count || count < 1) return alert("Enter valid number");

  startExam(count);
});

function startExam(count) {
  currentQuestion = 0;
  userAnswers = [];

  let used = JSON.parse(localStorage.getItem("usedLegal")) || [];

  let available = allQuestions.filter((q, index) => !used.includes(index));

  if (available.length < count) {
    localStorage.removeItem("usedLegal");
    used = [];
    available = allQuestions;
  }

  selectedQuestions = shuffleArray(available).slice(0, count);

  selectedQuestions.forEach((q) => {
    const index = allQuestions.indexOf(q);
    used.push(index);
  });

  localStorage.setItem("usedLegal", JSON.stringify(used));

  setupBox.classList.add("hidden");
  examBox.classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion >= selectedQuestions.length) {
    return submitExam();
  }

  const q = selectedQuestions[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion + 1} / ${
    selectedQuestions.length
  }`;

  questionContainer.innerHTML = `<h4>${q.question}</h4>`;

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = opt;

    div.onclick = () => selectOption(i, div);

    questionContainer.appendChild(div);
  });

  startTimer();
}

function selectOption(index, element) {
  const options = document.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));

  element.classList.add("selected");

  userAnswers[currentQuestion] = index;
}

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = 0;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
//timer logic
function startTimer() {
  timeLeft = 50;
  const totalTime = 50;
  document.getElementById("timer-text").textContent = timeLeft;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer-text").textContent = timeLeft;

    const percent = (timeLeft / totalTime) * 100;
    setProgress(percent);

    // Color change logic
    if (timeLeft <= 10) {
      circle.style.stroke = "red";
      circle.classList.add("pulse");
    } else if (timeLeft <= 25) {
      circle.style.stroke = "orange";
      circle.classList.remove("pulse");
    } else {
      circle.style.stroke = "#4caf50";
      circle.classList.remove("pulse");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      currentQuestion++;
      loadQuestion();
    }
  }, 1000);
}
//next btn event

nextBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  currentQuestion++;
  loadQuestion();
});

document.getElementById("submitBtn").addEventListener("click", submitExam);

function submitExam() {
  clearInterval(timerInterval);

  examBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  let correct = 0;
  let output = `<h2>Result</h2>`;

  selectedQuestions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const isCorrect = userAns === q.correct;

    if (isCorrect) correct++;

    output += `
            <div style="margin:10px 0;padding:10px;background:#fff;border-radius:8px">
              <b>Q${i + 1}:</b> ${q.question}<br>
              Your Answer: ${q.options[userAns] || "Not Attempted"}<br>
              Correct Answer: ${q.options[q.correct]}<br>
              <span style="color:${isCorrect ? "green" : "red"}">
                ${isCorrect ? "Correct" : "Wrong"}
              </span>
    
              ${
                !isCorrect
                  ? `<div style="
                      margin-top:8px;
                      padding:8px 10px;
                      background:#f9f9f9;
                      border-left:4px solid #d4af37;
                      font-size:13px;
                      border-radius:6px;
                    ">
                      ⚖️ <b>Explanation:</b><br>
                      
                      ${q.explanation}
                    </div>`
                  : ""
              }
            </div>
    
          `;
  });

  output =
    `
          <h2>Result Summary</h2>
          <p>Total: ${selectedQuestions.length}</p>
          <p>Correct: ${correct}</p>
          <p>Wrong: ${selectedQuestions.length - correct}</p>
          <hr>
        ` + output;

  output += `<button onclick="location.reload()">Take Another Test</button>`;

  resultBox.innerHTML = output;
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
