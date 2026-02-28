// Demo Questions (later 1000 replace kar dena)
const allQuestions = [
  {
    id: 1,
    question: "Identify the correctly punctuated sentence:",
    options: [
      "He said I am coming.",
      "He said, I am coming.",
      "He said, 'I am coming.'",
      "He said 'I am coming'.",
    ],
    correct: 2,
    explanation: "Direct speech requires quotes and comma before it.",
  },
  {
    id: 2,
    question: "Choose the word that is closest in meaning to 'obfuscate':",
    options: ["Clarify", "Confuse", "Simplify", "Illuminate"],
    correct: 1,
    explanation: "'Obfuscate' means to make something confusing or unclear.",
  },
  {
    id: 3,
    question: "Select the sentence with correct subject-verb agreement:",
    options: [
      "The team of players are winning.",
      "The team of players is winning.",
      "The teams of player is winning.",
      "The team of players were winning.",
    ],
    correct: 1,
    explanation: "'Team' is singular, so singular verb 'is' is correct.",
  },
  {
    id: 4,
    question: "Pick the correctly spelled word:",
    options: ["Accommodate", "Acomodate", "Accomodate", "Acommadate"],
    correct: 0,
    explanation: "Correct spelling is 'Accommodate' with double 'c' and 'm'.",
  },
  {
    id: 5,
    question: "Identify the sentence with correct use of 'who' or 'whom':",
    options: [
      "Whom is calling you?",
      "Who should I call?",
      "Who did you give the book to?",
      "Whom is coming to the party?",
    ],
    correct: 1,
    explanation: "'Who' is subject of verb 'should call', so correct.",
  },
  {
    id: 6,
    question: "Choose the correct antonym of 'laconic':",
    options: ["Talkative", "Quiet", "Reserved", "Reticent"],
    correct: 0,
    explanation: "'Laconic' means using few words, antonym is talkative.",
  },
  {
    id: 7,
    question: "Pick the correct sentence:",
    options: [
      "Neither of the options are correct.",
      "Neither of the options is correct.",
      "Neither of the options were correct.",
      "Neither of the options be correct.",
    ],
    correct: 1,
    explanation: "'Neither' is singular, so 'is' is correct.",
  },
  {
    id: 8,
    question: "Select the correctly formed sentence:",
    options: [
      "Hardly I had reached when it started raining.",
      "Hardly had I reached when it started raining.",
      "I had hardly reached when it started raining.",
      "Hardly had I reached, it started raining.",
    ],
    correct: 1,
    explanation:
      "Inversion required after 'hardly', so 'Hardly had I reached...' is correct.",
  },
  {
    id: 9,
    question: "Identify the sentence with correct idiom usage:",
    options: [
      "She let the cat out of the bag about the surprise.",
      "He let the dog out of the bag.",
      "They let the mouse out of the bag.",
      "I let the elephant out of the bag.",
    ],
    correct: 0,
    explanation: "'Let the cat out of the bag' means to reveal a secret.",
  },
  {
    id: 10,
    question:
      "Select the word that best fits: 'The CEO gave a ___ explanation of the plan.'",
    options: ["lucid", "obscure", "opaque", "ambiguous"],
    correct: 0,
    explanation: "'Lucid' means clear and easy to understand.",
  },
  {
    id: 11,
    question: "Pick the correct sentence with parallel structure:",
    options: [
      "She likes reading, to swim, and jogging.",
      "She likes reading, swimming, and jogging.",
      "She likes reading, swimming, and to jog.",
      "She likes to read, swim, and jogging.",
    ],
    correct: 1,
    explanation: "All verbs in gerund form: reading, swimming, jogging.",
  },
  {
    id: 12,
    question:
      "Choose the correct preposition: 'He is proficient ___ Python programming.'",
    options: ["at", "in", "on", "with"],
    correct: 1,
    explanation: "'Proficient in' is the standard collocation.",
  },
  {
    id: 13,
    question: "Select the correctly punctuated sentence:",
    options: [
      "It's raining; however, I forgot my umbrella.",
      "It's raining however; I forgot my umbrella.",
      "It's raining, however I forgot my umbrella.",
      "It's raining however I forgot my umbrella.",
    ],
    correct: 0,
    explanation:
      "Semicolon before 'however' is correct when linking independent clauses.",
  },
  {
    id: 14,
    question: "Pick the word closest in meaning to 'perfunctory':",
    options: ["Superficial", "Thorough", "Detailed", "Careful"],
    correct: 0,
    explanation: "'Perfunctory' means done without care or superficially.",
  },
  {
    id: 15,
    question: "Identify correct sentence structure:",
    options: [
      "Running fast, the finish line was reached by him.",
      "The finish line was reached by him running fast.",
      "Running fast, he reached the finish line.",
      "He reached the finish line running fastly.",
    ],
    correct: 2,
    explanation: "Proper participial phrase: 'Running fast, he reached...'.",
  },
  {
    id: 16,
    question: "Choose correct conditional sentence:",
    options: [
      "If I would have known, I would tell you.",
      "If I had known, I would have told you.",
      "If I knew, I would have told you.",
      "If I know, I would tell you.",
    ],
    correct: 1,
    explanation: "Third conditional uses past perfect + would have.",
  },
  {
    id: 17,
    question: "Select correct usage of semicolon:",
    options: [
      "I went to Paris; and I saw the Eiffel Tower.",
      "I went to Paris; I saw the Eiffel Tower.",
      "I went to Paris,; I saw the Eiffel Tower.",
      "I went to Paris: I saw the Eiffel Tower;",
    ],
    correct: 1,
    explanation: "Semicolon separates two independent clauses.",
  },
  {
    id: 18,
    question: "Choose correct meaning of 'ubiquitous':",
    options: ["Rare", "Omnipresent", "Hidden", "Temporary"],
    correct: 1,
    explanation: "'Ubiquitous' means present everywhere.",
  },
  {
    id: 19,
    question: "Select correct phrasal verb usage:",
    options: [
      "He looked up the word in dictionary.",
      "He looked the word up in dictionary.",
      "He looked up the word in the dictionary.",
      "He look up the word in dictionary.",
    ],
    correct: 2,
    explanation: "Correct phrasal verb and article usage.",
  },
  {
    id: 20,
    question: "Pick correct sentence:",
    options: [
      "Few of the people knows the truth.",
      "Few of the people know the truth.",
      "Few of the people is knowing the truth.",
      "Few of the people known the truth.",
    ],
    correct: 1,
    explanation: "Plural subject 'few of the people' takes 'know'.",
  },
  {
    id: 21,
    question:
      "Choose correct idiom: 'He decided to ___ the matter before it escalates.'",
    options: [
      "nip it in the bud",
      "break it in the bud",
      "crush it in the bud",
      "stop it in the flower",
    ],
    correct: 0,
    explanation: "'Nip it in the bud' means to stop early.",
  },
  {
    id: 22,
    question: "Identify correct comparative form:",
    options: [
      "She is more smarter than her brother.",
      "She is smarter than her brother.",
      "She is smart than her brother.",
      "She is most smarter than her brother.",
    ],
    correct: 1,
    explanation: "Correct comparative is 'smarter than'.",
  },
  {
    id: 23,
    question: "Select correct word: 'He has a very ___ memory.'",
    options: ["photographic", "photografik", "photograpic", "photograpic"],
    correct: 0,
    explanation: "Correct spelling is 'photographic'.",
  },
  {
    id: 24,
    question: "Choose correct sentence:",
    options: [
      "Despite of the rain, we went out.",
      "Despite the rain, we went out.",
      "Although of the rain, we went out.",
      "Despite that it rained, we went out.",
    ],
    correct: 1,
    explanation: "'Despite' does not take 'of'.",
  },
  {
    id: 25,
    question: "Pick the correct sentence with active voice:",
    options: [
      "The book was read by her.",
      "She reads the book.",
      "The book is being read by her.",
      "The book has been read by her.",
    ],
    correct: 1,
    explanation: "Active voice: subject performs action.",
  },
  {
    id: 26,
    question: "Identify correct use of article:",
    options: [
      "I saw a eagle in the sky.",
      "I saw an eagle in the sky.",
      "I saw eagle in the sky.",
      "I saw the eagle in sky.",
    ],
    correct: 1,
    explanation: "'Eagle' starts with vowel sound, so 'an' is correct.",
  },
  {
    id: 27,
    question: "Choose correct sentence:",
    options: [
      "Neither John nor his friends is coming.",
      "Neither John nor his friends are coming.",
      "Neither John nor his friends be coming.",
      "Neither John nor his friends was coming.",
    ],
    correct: 1,
    explanation: "Verb agrees with nearer subject 'friends' (plural).",
  },
  {
    id: 28,
    question: "Select correct idiom usage:",
    options: [
      "He kicked the bucket yesterday.",
      "He kicked the pail yesterday.",
      "He kicked the can yesterday.",
      "He kicked the hat yesterday.",
    ],
    correct: 0,
    explanation: "'Kick the bucket' means to die.",
  },
  {
    id: 29,
    question: "Pick the correct word: 'The scientist made a ___ discovery.'",
    options: ["groundbreaking", "groundbreakng", "ground-break", "groundbroke"],
    correct: 0,
    explanation: "Correct word is 'groundbreaking'.",
  },
  {
    id: 30,
    question: "Choose correct sentence:",
    options: [
      "It is high time we leave.",
      "It is high time we left.",
      "It is high time we are leaving.",
      "It is high time we will leave.",
    ],
    correct: 1,
    explanation: "'It is high time' is followed by past tense form.",
  },
  {
    id: 31,
    question: "Select correct sentence with infinitive:",
    options: [
      "He wants go home.",
      "He wants to go home.",
      "He wants going home.",
      "He wants go to home.",
    ],
    correct: 1,
    explanation: "'Want' is followed by infinitive 'to go'.",
  },
  {
    id: 32,
    question: "Choose correct synonym of 'parsimonious':",
    options: ["Generous", "Stingy", "Lavish", "Extravagant"],
    correct: 1,
    explanation: "'Parsimonious' means very frugal or stingy.",
  },
  {
    id: 33,
    question: "Identify correct sentence:",
    options: [
      "He is one of the best student in class.",
      "He is one of the best students in class.",
      "He is one of the better student in class.",
      "He is one of the better students in class.",
    ],
    correct: 1,
    explanation:
      "'One of the best' should be followed by plural noun 'students'.",
  },
  {
    id: 34,
    question: "Pick correct phrasal verb usage:",
    options: [
      "She called off the meeting.",
      "She called up the meeting.",
      "She called out the meeting.",
      "She called in the meeting.",
    ],
    correct: 0,
    explanation: "'Call off' means to cancel.",
  },
  {
    id: 35,
    question: "Select correct sentence with proper conditional:",
    options: [
      "If it rains, we will cancel the trip.",
      "If it rained, we will cancel the trip.",
      "If it rains, we would cancel the trip.",
      "If it will rain, we will cancel the trip.",
    ],
    correct: 0,
    explanation: "First conditional: present simple + will.",
  },
  {
    id: 36,
    question: "Choose correct collocation:",
    options: [
      "Make a decision",
      "Do a decision",
      "Take a decision",
      "Both A and C",
    ],
    correct: 3,
    explanation: "Both 'make a decision' and 'take a decision' are correct.",
  },
  {
    id: 37,
    question: "Select correct sentence:",
    options: [
      "I look forward to meet you.",
      "I look forward to meeting you.",
      "I look forward to met you.",
      "I look forward to meets you.",
    ],
    correct: 1,
    explanation: "'Look forward to' is followed by gerund.",
  },
  {
    id: 38,
    question: "Pick correct word meaning 'mellifluous':",
    options: ["Harsh", "Sweet sounding", "Rough", "Loud"],
    correct: 1,
    explanation: "'Mellifluous' means sweet or musical sounding.",
  },
  {
    id: 39,
    question: "Identify correct sentence:",
    options: [
      "Each of the players have a medal.",
      "Each of the players has a medal.",
      "Each of the players are given a medal.",
      "Each of the players is given medals.",
    ],
    correct: 1,
    explanation: "'Each' takes singular verb 'has'.",
  },
  {
    id: 40,
    question: "Choose correct sentence with comparative:",
    options: [
      "He is the most tallest in the class.",
      "He is taller than all in the class.",
      "He is the taller of the class.",
      "He is the tallest than all.",
    ],
    correct: 1,
    explanation: "Correct comparative form: 'taller than all'.",
  },
  {
    id: 41,
    question:
      "Choose correct word to complete: 'He is known for his ___ in mathematics.'",
    options: ["adeptness", "ineptness", "mediocrity", "laziness"],
    correct: 0,
    explanation: "'Adeptness' means skillful, which fits context.",
  },
  {
    id: 42,
    question:
      "Select correct idiom usage: 'He decided to ___ the issue immediately.'",
    options: [
      "take the bull by the horns",
      "let the cat out of the bag",
      "kick the bucket",
      "hit the hay",
    ],
    correct: 0,
    explanation: "'Take the bull by the horns' means face a problem directly.",
  },
  {
    id: 43,
    question: "Pick correct sentence:",
    options: [
      "Neither the manager nor the employees was present.",
      "Neither the manager nor the employees were present.",
      "Neither the manager nor the employees is present.",
      "Neither the manager nor the employees be present.",
    ],
    correct: 1,
    explanation: "Verb agrees with nearer plural subject 'employees'.",
  },
  {
    id: 44,
    question: "Select synonym of 'ephemeral':",
    options: ["Permanent", "Temporary", "Enduring", "Lasting"],
    correct: 1,
    explanation: "'Ephemeral' means short-lived or temporary.",
  },
  {
    id: 45,
    question: "Choose correct preposition: 'She is keen ___ learning French.'",
    options: ["for", "on", "at", "in"],
    correct: 1,
    explanation: "Correct collocation: 'keen on'.",
  },
  {
    id: 46,
    question: "Identify the correctly punctuated sentence:",
    options: [
      "I bought apples, oranges and bananas.",
      "I bought apples oranges, and bananas.",
      "I bought apples, oranges, and bananas.",
      "I bought, apples, oranges and bananas.",
    ],
    correct: 2,
    explanation: "Oxford comma correctly used for clarity.",
  },
  {
    id: 47,
    question: "Pick correct sentence:",
    options: [
      "The data is reliable.",
      "The data are reliable.",
      "The data was unreliable.",
      "All of the above",
    ],
    correct: 3,
    explanation:
      "Depending on context, 'data' can be singular or plural; all sentences correct.",
  },
  {
    id: 48,
    question: "Choose antonym of 'loquacious':",
    options: ["Talkative", "Garrulous", "Reticent", "Verbose"],
    correct: 2,
    explanation: "'Reticent' means reserved, opposite of talkative.",
  },
  {
    id: 49,
    question: "Select correct sentence with inversion:",
    options: [
      "Never I have seen such beauty.",
      "Never have I seen such beauty.",
      "I have never seen such beauty.",
      "Never seen I have such beauty.",
    ],
    correct: 1,
    explanation: "Inversion required after 'never' at beginning.",
  },
  {
    id: 50,
    question: "Pick correct usage of 'affect' and 'effect':",
    options: [
      "The new law will affect everyone.",
      "The new law will effect everyone.",
      "The new law will affect to everyone.",
      "The new law will effected everyone.",
    ],
    correct: 0,
    explanation: "'Affect' is verb, correct here; 'effect' is usually a noun.",
  },
  {
    id: 51,
    question: "Choose correct word: 'He faced a ___ situation at work.'",
    options: ["perilous", "trivial", "insipid", "mundane"],
    correct: 0,
    explanation: "'Perilous' means dangerous, fits context.",
  },
  {
    id: 52,
    question: "Select correct sentence with correct tense:",
    options: [
      "She has been to London last year.",
      "She went to London last year.",
      "She goes to London last year.",
      "She had went to London last year.",
    ],
    correct: 1,
    explanation: "Past simple 'went' correctly refers to last year.",
  },
  {
    id: 53,
    question: "Pick correct meaning of 'perspicacious':",
    options: ["Short-sighted", "Insightful", "Clumsy", "Lazy"],
    correct: 1,
    explanation: "'Perspicacious' means having keen insight.",
  },
  {
    id: 54,
    question: "Identify correct sentence with correct article:",
    options: [
      "He is an honest man.",
      "He is a honest man.",
      "He is honest man.",
      "He is the honest man.",
    ],
    correct: 0,
    explanation: "'Honest' begins with vowel sound, so 'an' is correct.",
  },
  {
    id: 55,
    question: "Choose correct sentence with parallelism:",
    options: [
      "He likes to swim, to run, and biking.",
      "He likes swimming, running, and biking.",
      "He likes swimming, to run, and biking.",
      "He likes to swim, running, and biking.",
    ],
    correct: 1,
    explanation: "All elements in gerund form maintain parallel structure.",
  },
  {
    id: 56,
    question: "Select synonym of 'acrimonious':",
    options: ["Bitter", "Friendly", "Sweet", "Gentle"],
    correct: 0,
    explanation: "'Acrimonious' means bitter or harsh.",
  },
  {
    id: 57,
    question: "Pick correct sentence:",
    options: [
      "He is used to wake up early.",
      "He is used to waking up early.",
      "He used to wake up early.",
      "He used to waking up early.",
    ],
    correct: 1,
    explanation: "'Used to' + noun/gerund: 'waking'.",
  },
  {
    id: 58,
    question: "Choose correct preposition: 'She is adept ___ problem solving.'",
    options: ["in", "at", "on", "for"],
    correct: 1,
    explanation: "Correct collocation: 'adept at'.",
  },
  {
    id: 59,
    question: "Select correct sentence with subjunctive mood:",
    options: [
      "I suggest that he goes.",
      "I suggest that he go.",
      "I suggest that he is going.",
      "I suggest that he will go.",
    ],
    correct: 1,
    explanation: "Subjunctive requires base form 'go'.",
  },
  {
    id: 60,
    question:
      "Pick correct idiom: 'After the scandal, the company had to ___ its reputation.'",
    options: ["restore", "sweep", "kick", "throw"],
    correct: 0,
    explanation: "'Restore its reputation' is idiomatically correct.",
  },
  {
    id: 61,
    question: "Select correct word: 'He was known for his ___ wit.'",
    options: ["scathing", "blunt", "dull", "insipid"],
    correct: 0,
    explanation: "'Scathing' means sharply critical or witty in biting manner.",
  },
  {
    id: 62,
    question: "Choose correct sentence with correct tense:",
    options: [
      "By the time we arrived, he left.",
      "By the time we arrived, he had left.",
      "By the time we arrived, he leaves.",
      "By the time we arrived, he leaving.",
    ],
    correct: 1,
    explanation:
      "Past perfect 'had left' used for action before another past action.",
  },
  {
    id: 63,
    question: "Pick synonym of 'obdurate':",
    options: ["Flexible", "Stubborn", "Gentle", "Yielding"],
    correct: 1,
    explanation: "'Obdurate' means stubborn or unyielding.",
  },
  {
    id: 64,
    question: "Identify correct sentence:",
    options: [
      "Each of the students have a notebook.",
      "Each of the students has a notebook.",
      "Each of the students are having a notebook.",
      "Each of the students had having a notebook.",
    ],
    correct: 1,
    explanation: "'Each' takes singular verb 'has'.",
  },
  {
    id: 65,
    question: "Choose correct idiom: 'He decided to ___ the matter quickly.'",
    options: [
      "nip it in the bud",
      "beat around the bush",
      "drag it out",
      "put it on the back burner",
    ],
    correct: 0,
    explanation: "'Nip it in the bud' means deal with problem early.",
  },
  {
    id: 66,
    question: "Select correct sentence with correct article:",
    options: [
      "She is an unique person.",
      "She is a unique person.",
      "She is unique person.",
      "She is the unique person.",
    ],
    correct: 1,
    explanation: "'Unique' begins with consonant sound 'y', so 'a' is correct.",
  },
  {
    id: 67,
    question: "Pick correct word: 'The scientist gave a ___ explanation.'",
    options: ["lucid", "opaque", "ambiguous", "confusing"],
    correct: 0,
    explanation: "'Lucid' means clear and easy to understand.",
  },
  {
    id: 68,
    question: "Choose correct sentence with parallelism:",
    options: [
      "He likes to swim, running, and biking.",
      "He likes swimming, running, and biking.",
      "He likes to swim, run, and biking.",
      "He likes swimming, to run, and biking.",
    ],
    correct: 1,
    explanation: "All elements in gerund form maintain parallel structure.",
  },
  {
    id: 69,
    question: "Select correct usage of subjunctive:",
    options: [
      "I recommend that she studies harder.",
      "I recommend that she study harder.",
      "I recommend that she studied harder.",
      "I recommend that she will study harder.",
    ],
    correct: 1,
    explanation: "Subjunctive mood uses base verb form 'study'.",
  },
  {
    id: 70,
    question: "Pick antonym of 'magnanimous':",
    options: ["Generous", "Selfish", "Altruistic", "Charitable"],
    correct: 1,
    explanation: "'Magnanimous' means generous; opposite is selfish.",
  },
  {
    id: 71,
    question: "Select correct preposition: 'He is proficient ___ Spanish.'",
    options: ["in", "at", "on", "for"],
    correct: 0,
    explanation: "Correct collocation: 'proficient in'.",
  },
  {
    id: 72,
    question: "Choose correct comparative sentence:",
    options: [
      "She is more taller than her brother.",
      "She is taller than her brother.",
      "She is the taller than her brother.",
      "She is taller from her brother.",
    ],
    correct: 1,
    explanation: "Correct comparative: 'taller than'.",
  },
  {
    id: 73,
    question: "Pick correct sentence:",
    options: [
      "He is one of the smartest student.",
      "He is one of the smartest students.",
      "He is one of the smarter student.",
      "He is one of the smarter students.",
    ],
    correct: 1,
    explanation: "'One of the' requires plural noun 'students'.",
  },
  {
    id: 74,
    question: "Select synonym of 'ameliorate':",
    options: ["Worsen", "Improve", "Destroy", "Damage"],
    correct: 1,
    explanation: "'Ameliorate' means to improve or make better.",
  },
  {
    id: 75,
    question: "Choose correct sentence with correct tense:",
    options: [
      "She has gone to market yesterday.",
      "She went to market yesterday.",
      "She goes to market yesterday.",
      "She had gone to market yesterday.",
    ],
    correct: 1,
    explanation: "Past simple 'went' is correct for 'yesterday'.",
  },
  {
    id: 76,
    question: "Pick correct word meaning 'recalcitrant':",
    options: ["Obedient", "Stubborn", "Agreeable", "Flexible"],
    correct: 1,
    explanation: "'Recalcitrant' means stubbornly resisting authority.",
  },
  {
    id: 77,
    question: "Select correct sentence:",
    options: [
      "Neither of the options are suitable.",
      "Neither of the options is suitable.",
      "Neither of the options were suitable.",
      "Neither of the options be suitable.",
    ],
    correct: 1,
    explanation: "'Neither' is singular; verb must be singular 'is'.",
  },
  {
    id: 78,
    question: "Choose correct idiom: 'The politician tried to ___ the truth.'",
    options: [
      "sweep under the rug",
      "kick the bucket",
      "hit the hay",
      "let the cat out of the bag",
    ],
    correct: 0,
    explanation: "'Sweep under the rug' means hide or conceal something.",
  },
  {
    id: 79,
    question: "Pick correct sentence with correct article:",
    options: [
      "I met a honest man.",
      "I met an honest man.",
      "I met honest man.",
      "I met the honest man.",
    ],
    correct: 1,
    explanation: "'Honest' starts with vowel sound; 'an' is correct.",
  },
  {
    id: 80,
    question: "Select correct sentence with parallelism:",
    options: [
      "He likes to read, writing, and jogging.",
      "He likes reading, writing, and jogging.",
      "He likes reading, to write, and jogging.",
      "He likes to read, write, and jogging.",
    ],
    correct: 1,
    explanation: "All verbs in gerund form for parallel structure.",
  },
  {
    id: 81,
    question: "Choose correct sentence with subjunctive mood:",
    options: [
      "It is essential that he attends the meeting.",
      "It is essential that he attend the meeting.",
      "It is essential that he attended the meeting.",
      "It is essential that he will attend the meeting.",
    ],
    correct: 1,
    explanation: "Subjunctive requires base form 'attend'.",
  },
  {
    id: 82,
    question: "Pick correct usage of 'effect' and 'affect':",
    options: [
      "The new policy will effect change.",
      "The new policy will affect change.",
      "The new policy will effected change.",
      "The new policy will affecting change.",
    ],
    correct: 1,
    explanation: "'Affect' as verb means influence; 'effect' is usually noun.",
  },
  {
    id: 83,
    question: "Select synonym of 'lugubrious':",
    options: ["Cheerful", "Mournful", "Joyful", "Bright"],
    correct: 1,
    explanation: "'Lugubrious' means sad or mournful.",
  },
  {
    id: 84,
    question: "Choose correct sentence:",
    options: [
      "He did not know nothing.",
      "He did not know anything.",
      "He did not knew anything.",
      "He did not knows anything.",
    ],
    correct: 1,
    explanation: "Double negative is incorrect; use 'anything'.",
  },
  {
    id: 85,
    question: "Pick correct word meaning 'ephemeral':",
    options: ["Transient", "Permanent", "Eternal", "Enduring"],
    correct: 0,
    explanation: "'Ephemeral' means short-lived or transient.",
  },
  {
    id: 86,
    question: "Select correct sentence:",
    options: [
      "It is high time we leave.",
      "It is high time we left.",
      "It is high time we are leaving.",
      "It is high time we will leave.",
    ],
    correct: 1,
    explanation: "'It is high time' is followed by past tense form.",
  },
  {
    id: 87,
    question: "Choose correct word: 'The lawyer's argument was ___.'",
    options: ["cogent", "weak", "confusing", "ambiguous"],
    correct: 0,
    explanation: "'Cogent' means logical, convincing and clear.",
  },
  {
    id: 88,
    question: "Pick correct comparative sentence:",
    options: [
      "This painting is more beautiful than that one.",
      "This painting is beautifuller than that one.",
      "This painting is the more beautiful than that one.",
      "This painting is beautiful than that one.",
    ],
    correct: 0,
    explanation: "Correct comparative: 'more beautiful than'.",
  },
  {
    id: 89,
    question: "Select correct idiom usage:",
    options: [
      "He is skating on thin ice at work.",
      "He is skating on thick ice at work.",
      "He is skating on wide ice at work.",
      "He is skating on smooth ice at work.",
    ],
    correct: 0,
    explanation: "'Skating on thin ice' means taking a risk.",
  },
  {
    id: 90,
    question: "Choose correct sentence with conditional:",
    options: [
      "If it rains, we would cancel the trip.",
      "If it rains, we will cancel the trip.",
      "If it rained, we will cancel the trip.",
      "If it will rain, we will cancel the trip.",
    ],
    correct: 1,
    explanation: "First conditional: present simple + will.",
  },
  {
    id: 91,
    question: "Pick correct sentence with infinitive:",
    options: [
      "She wants go home.",
      "She wants to go home.",
      "She wants going home.",
      "She wants go to home.",
    ],
    correct: 1,
    explanation: "'Want' is followed by infinitive 'to go'.",
  },
  {
    id: 92,
    question:
      "Select correct preposition: 'He is adept ___ negotiating deals.'",
    options: ["at", "in", "on", "for"],
    correct: 0,
    explanation: "Correct collocation: 'adept at'.",
  },
  {
    id: 93,
    question: "Choose correct sentence:",
    options: [
      "He is used to wake up early.",
      "He is used to waking up early.",
      "He used to waking up early.",
      "He used to wake up early now.",
    ],
    correct: 1,
    explanation: "'Used to' + gerund for habitual actions.",
  },
  {
    id: 94,
    question: "Pick correct synonym of 'cogent':",
    options: ["Convincing", "Weak", "Ineffective", "Irrelevant"],
    correct: 0,
    explanation: "'Cogent' means convincing or persuasive.",
  },
  {
    id: 95,
    question: "Select correct sentence with parallel structure:",
    options: [
      "He likes reading, to swim, and jogging.",
      "He likes reading, swimming, and jogging.",
      "He likes reading, swimming, and to jog.",
      "He likes to read, swim, and jogging.",
    ],
    correct: 1,
    explanation: "All elements in gerund form for parallelism.",
  },
  {
    id: 96,
    question: "Choose correct word meaning 'ubiquitous':",
    options: ["Rare", "Omnipresent", "Hidden", "Temporary"],
    correct: 1,
    explanation: "'Ubiquitous' means present everywhere.",
  },
  {
    id: 97,
    question: "Pick correct sentence:",
    options: [
      "She suggested that he goes to the doctor.",
      "She suggested that he go to the doctor.",
      "She suggested that he going to the doctor.",
      "She suggested that he went to the doctor.",
    ],
    correct: 1,
    explanation: "Subjunctive: base verb 'go' is correct.",
  },
  {
    id: 98,
    question: "Select correct antonym of 'loquacious':",
    options: ["Talkative", "Garrulous", "Reticent", "Verbose"],
    correct: 2,
    explanation: "'Reticent' is reserved, opposite of loquacious.",
  },
  {
    id: 99,
    question: "Choose correct sentence:",
    options: [
      "Few of the people knows the truth.",
      "Few of the people know the truth.",
      "Few of the people is knowing the truth.",
      "Few of the people known the truth.",
    ],
    correct: 1,
    explanation: "Plural subject 'few of the people' takes 'know'.",
  },
  {
    id: 100,
    question: "Pick correct idiom: 'He let the cat ___ about the surprise.'",
    options: ["out of the bag", "in the bag", "on the bag", "into the bag"],
    correct: 0,
    explanation: "'Let the cat out of the bag' means reveal a secret.",
  },
  {
    id: 101,
    question:
      "Select correct word: 'The detective was known for his ___ mind.'",
    options: ["acute", "dull", "blunt", "insipid"],
    correct: 0,
    explanation:
      "'Acute' means sharp, keen, or perceptive, fitting the context.",
  },
  {
    id: 102,
    question: "Pick correct sentence with tense:",
    options: [
      "By the time we reached, the train left.",
      "By the time we reached, the train had left.",
      "By the time we reached, the train leaves.",
      "By the time we reached, the train leaving.",
    ],
    correct: 1,
    explanation:
      "Past perfect 'had left' used for an action before another past action.",
  },
  {
    id: 103,
    question: "Choose correct synonym of 'obsequious':",
    options: ["Submissive", "Dominant", "Rebellious", "Independent"],
    correct: 0,
    explanation: "'Obsequious' means excessively obedient or submissive.",
  },
  {
    id: 104,
    question: "Select correct sentence:",
    options: [
      "Each of the players have a uniform.",
      "Each of the players has a uniform.",
      "Each of the players are having a uniform.",
      "Each of the players had having a uniform.",
    ],
    correct: 1,
    explanation: "'Each' is singular, so verb 'has' is correct.",
  },
  {
    id: 105,
    question:
      "Choose correct idiom: 'We should ___ the problem before it escalates.'",
    options: [
      "nip it in the bud",
      "beat around the bush",
      "drag it out",
      "put it on the back burner",
    ],
    correct: 0,
    explanation: "'Nip it in the bud' means address a problem early.",
  },
  {
    id: 106,
    question: "Pick correct sentence with article:",
    options: [
      "She is an university professor.",
      "She is a university professor.",
      "She is university professor.",
      "She is the university professor.",
    ],
    correct: 1,
    explanation:
      "'University' starts with consonant 'y' sound, so 'a' is correct.",
  },
  {
    id: 107,
    question: "Select synonym of 'laconic':",
    options: ["Talkative", "Verbose", "Brief", "Wordy"],
    correct: 2,
    explanation: "'Laconic' means using few words, brief.",
  },
  {
    id: 108,
    question: "Choose correct sentence with parallelism:",
    options: [
      "He likes reading, to swim, and jogging.",
      "He likes reading, swimming, and jogging.",
      "He likes reading, swimming, and to jog.",
      "He likes to read, swim, and jogging.",
    ],
    correct: 1,
    explanation: "All verbs in gerund form to maintain parallel structure.",
  },
  {
    id: 109,
    question: "Pick correct subjunctive sentence:",
    options: [
      "I insist that she attends the meeting.",
      "I insist that she attend the meeting.",
      "I insist that she attended the meeting.",
      "I insist that she will attend the meeting.",
    ],
    correct: 1,
    explanation: "Subjunctive uses base verb 'attend'.",
  },
  {
    id: 110,
    question: "Select antonym of 'munificent':",
    options: ["Generous", "Stingy", "Charitable", "Benevolent"],
    correct: 1,
    explanation: "'Munificent' means generous; opposite is stingy.",
  },
  {
    id: 111,
    question: "Choose correct preposition: 'He is adept ___ solving problems.'",
    options: ["in", "at", "on", "for"],
    correct: 1,
    explanation: "'Adept at' is the correct collocation.",
  },
  {
    id: 112,
    question: "Select correct comparative sentence:",
    options: [
      "She is more smarter than him.",
      "She is smarter than him.",
      "She is the smarter than him.",
      "She is smarter from him.",
    ],
    correct: 1,
    explanation: "'Smarter than' is correct comparative form.",
  },
  {
    id: 113,
    question: "Pick correct sentence with plural noun agreement:",
    options: [
      "One of the girls are talented.",
      "One of the girls is talented.",
      "One of the girls were talented.",
      "One of the girls have talented.",
    ],
    correct: 1,
    explanation: "'One of the' takes singular verb 'is'.",
  },
  {
    id: 114,
    question: "Choose correct synonym of 'ameliorate':",
    options: ["Worsen", "Improve", "Destroy", "Damage"],
    correct: 1,
    explanation: "'Ameliorate' means to improve.",
  },
  {
    id: 115,
    question: "Select correct sentence:",
    options: [
      "She has gone to market yesterday.",
      "She went to market yesterday.",
      "She goes to market yesterday.",
      "She had gone to market yesterday.",
    ],
    correct: 1,
    explanation: "Past simple 'went' is correct for yesterday.",
  },
  {
    id: 116,
    question: "Pick meaning of 'recalcitrant':",
    options: ["Obedient", "Stubborn", "Flexible", "Agreeable"],
    correct: 1,
    explanation: "'Recalcitrant' means stubbornly resisting authority.",
  },
  {
    id: 117,
    question: "Choose correct sentence with 'neither...nor':",
    options: [
      "Neither of the options are correct.",
      "Neither of the options is correct.",
      "Neither of the options were correct.",
      "Neither of the options be correct.",
    ],
    correct: 1,
    explanation: "'Neither' is singular, verb must be singular 'is'.",
  },
  {
    id: 118,
    question: "Select correct idiom: 'He tried to ___ the mistake.'",
    options: [
      "sweep under the rug",
      "kick the bucket",
      "hit the hay",
      "let the cat out of the bag",
    ],
    correct: 0,
    explanation: "'Sweep under the rug' means hide or conceal.",
  },
  {
    id: 119,
    question: "Pick correct article usage:",
    options: [
      "I saw a honest man.",
      "I saw an honest man.",
      "I saw honest man.",
      "I saw the honest man.",
    ],
    correct: 1,
    explanation: "'Honest' starts with vowel sound; 'an' is correct.",
  },
  {
    id: 120,
    question: "Choose correct sentence with parallel structure:",
    options: [
      "He likes reading, to write, and jogging.",
      "He likes reading, writing, and jogging.",
      "He likes reading, writing, and to jog.",
      "He likes to read, write, and jogging.",
    ],
    correct: 1,
    explanation: "All elements in gerund form for parallelism.",
  },
  {
    id: 121,
    question: "Pick correct sentence with subjunctive mood:",
    options: [
      "It is imperative that he attends the meeting.",
      "It is imperative that he attend the meeting.",
      "It is imperative that he attended the meeting.",
      "It is imperative that he will attend the meeting.",
    ],
    correct: 1,
    explanation: "Subjunctive uses base verb 'attend'.",
  },
  {
    id: 122,
    question: "Select correct usage of 'affect' and 'effect':",
    options: [
      "The new rule will effect change.",
      "The new rule will affect change.",
      "The new rule effected change.",
      "The new rule is affecting change.",
    ],
    correct: 1,
    explanation: "'Affect' as verb is correct; 'effect' is usually noun.",
  },
  {
    id: 123,
    question: "Choose synonym of 'lugubrious':",
    options: ["Cheerful", "Mournful", "Joyful", "Bright"],
    correct: 1,
    explanation: "'Lugubrious' means mournful or gloomy.",
  },
  {
    id: 124,
    question: "Pick correct sentence with negative:",
    options: [
      "He did not know nothing.",
      "He did not know anything.",
      "He did not knew anything.",
      "He did not knows anything.",
    ],
    correct: 1,
    explanation: "Double negative is incorrect; use 'anything'.",
  },
  {
    id: 125,
    question: "Select synonym of 'ephemeral':",
    options: ["Transient", "Permanent", "Enduring", "Eternal"],
    correct: 0,
    explanation: "'Ephemeral' means short-lived or transient.",
  },
  {
    id: 126,
    question: "Choose correct sentence for 'It is high time':",
    options: [
      "It is high time we leave.",
      "It is high time we left.",
      "It is high time we are leaving.",
      "It is high time we will leave.",
    ],
    correct: 1,
    explanation: "'It is high time' is followed by past tense form.",
  },
  {
    id: 127,
    question: "Pick correct word: 'The lawyer's argument was ___.'",
    options: ["cogent", "weak", "confusing", "ambiguous"],
    correct: 0,
    explanation: "'Cogent' means logical, convincing, and clear.",
  },
  {
    id: 128,
    question: "Select correct comparative sentence:",
    options: [
      "This book is more interesting than that one.",
      "This book is interestinger than that one.",
      "This book is the more interesting than that one.",
      "This book is interesting than that one.",
    ],
    correct: 0,
    explanation: "Correct comparative: 'more interesting than'.",
  },
  {
    id: 129,
    question: "Choose correct idiom:",
    options: [
      "He is skating on thin ice.",
      "He is skating on thick ice.",
      "He is skating on wide ice.",
      "He is skating on smooth ice.",
    ],
    correct: 0,
    explanation: "'Skating on thin ice' means taking a risk.",
  },
  {
    id: 130,
    question: "Pick correct sentence with conditional:",
    options: [
      "If it rains, we would cancel the trip.",
      "If it rains, we will cancel the trip.",
      "If it rained, we will cancel the trip.",
      "If it will rain, we will cancel the trip.",
    ],
    correct: 1,
    explanation: "First conditional: present simple + will.",
  },
  {
    id: 131,
    question: "Select correct infinitive usage:",
    options: [
      "She wants go home.",
      "She wants to go home.",
      "She wants going home.",
      "She wants go to home.",
    ],
    correct: 1,
    explanation: "'Want' is followed by infinitive 'to go'.",
  },
  {
    id: 132,
    question: "Choose correct preposition: 'He is skilled ___ programming.'",
    options: ["at", "in", "on", "for"],
    correct: 0,
    explanation: "Correct collocation: 'skilled at'.",
  },
  {
    id: 133,
    question: "Pick correct sentence with 'used to':",
    options: [
      "He is used to wake up early.",
      "He is used to waking up early.",
      "He used to waking up early.",
      "He used to wake up early now.",
    ],
    correct: 1,
    explanation: "'Used to' + gerund for habitual action.",
  },
  {
    id: 134,
    question: "Select synonym of 'cogent':",
    options: ["Convincing", "Weak", "Ineffective", "Irrelevant"],
    correct: 0,
    explanation: "'Cogent' means convincing or persuasive.",
  },
  {
    id: 135,
    question: "Pick correct sentence with parallelism:",
    options: [
      "He likes reading, to swim, and jogging.",
      "He likes reading, swimming, and jogging.",
      "He likes reading, swimming, and to jog.",
      "He likes to read, swim, and jogging.",
    ],
    correct: 1,
    explanation: "All verbs in gerund form for parallelism.",
  },
  {
    id: 136,
    question: "Choose correct meaning of 'ubiquitous':",
    options: ["Rare", "Omnipresent", "Hidden", "Temporary"],
    correct: 1,
    explanation: "'Ubiquitous' means present everywhere.",
  },
  {
    id: 137,
    question: "Select correct subjunctive sentence:",
    options: [
      "She insisted that he attends the seminar.",
      "She insisted that he attend the seminar.",
      "She insisted that he attended the seminar.",
      "She insisted that he will attend the seminar.",
    ],
    correct: 1,
    explanation: "Subjunctive requires base verb 'attend'.",
  },
  {
    id: 138,
    question: "Pick antonym of 'loquacious':",
    options: ["Talkative", "Garrulous", "Reticent", "Verbose"],
    correct: 2,
    explanation: "'Reticent' is reserved, opposite of loquacious.",
  },
  {
    id: 139,
    question: "Choose correct sentence with plural subject:",
    options: [
      "Few of the students knows the answer.",
      "Few of the students know the answer.",
      "Few of the students is knowing the answer.",
      "Few of the students known the answer.",
    ],
    correct: 1,
    explanation: "Plural subject 'few of the students' takes 'know'.",
  },
  {
    id: 140,
    question:
      "Select correct idiom usage: 'He let the cat ___ about the plan.'",
    options: ["out of the bag", "in the bag", "on the bag", "into the bag"],
    correct: 0,
    explanation: "'Let the cat out of the bag' means reveal a secret.",
  },
  {
    id: 141,
    question:
      "Select correct word: 'Her arguments were so ___ that everyone agreed.'",
    options: ["cogent", "weak", "ambiguous", "confusing"],
    correct: 0,
    explanation: "'Cogent' means logical, convincing, and persuasive.",
  },
  {
    id: 142,
    question: "Choose correct sentence with tense:",
    options: [
      "He had left before we arrived.",
      "He has left before we arrived.",
      "He left before we had arrived.",
      "He leaves before we arrived.",
    ],
    correct: 0,
    explanation:
      "Past perfect 'had left' is correct for action before another past action.",
  },
  {
    id: 143,
    question: "Pick correct synonym of 'perfunctory':",
    options: ["Careful", "Superficial", "Thorough", "Detailed"],
    correct: 1,
    explanation: "'Perfunctory' means done without care or superficial.",
  },
  {
    id: 144,
    question: "Select correct sentence:",
    options: [
      "Each of the players are skilled.",
      "Each of the players is skilled.",
      "Each of the players were skilled.",
      "Each of the players be skilled.",
    ],
    correct: 1,
    explanation: "'Each' is singular; verb must be 'is'.",
  },
  {
    id: 145,
    question: "Choose correct idiom: 'We need to ___ the problem immediately.'",
    options: [
      "nip it in the bud",
      "beat around the bush",
      "put it off",
      "let it slide",
    ],
    correct: 0,
    explanation: "'Nip it in the bud' means address issue early.",
  },
  {
    id: 146,
    question: "Pick correct sentence with article:",
    options: [
      "He is an European scholar.",
      "He is a European scholar.",
      "He is European scholar.",
      "He is the European scholar.",
    ],
    correct: 1,
    explanation: "'European' begins with consonant 'y' sound; use 'a'.",
  },
  {
    id: 147,
    question: "Select synonym of 'trenchant':",
    options: ["Sharp", "Dull", "Weak", "Indistinct"],
    correct: 0,
    explanation: "'Trenchant' means sharp, incisive, or clear-cut.",
  },
  {
    id: 148,
    question: "Choose correct parallel structure:",
    options: [
      "He likes to swim, running, and biking.",
      "He likes swimming, running, and biking.",
      "He likes to swim, to run, and biking.",
      "He likes swimming, to run, and biking.",
    ],
    correct: 1,
    explanation: "All elements in gerund form for parallelism.",
  },
  {
    id: 149,
    question: "Pick correct subjunctive sentence:",
    options: [
      "The teacher requested that he submits the homework.",
      "The teacher requested that he submit the homework.",
      "The teacher requested that he submitted the homework.",
      "The teacher requested that he will submit the homework.",
    ],
    correct: 1,
    explanation: "Subjunctive uses base verb 'submit'.",
  },
  {
    id: 150,
    question: "Select antonym of 'benevolent':",
    options: ["Kind", "Malevolent", "Generous", "Charitable"],
    correct: 1,
    explanation: "'Benevolent' means kind; opposite is 'malevolent'.",
  },
  {
    id: 151,
    question: "Choose correct preposition: 'She is proficient ___ French.'",
    options: ["in", "at", "on", "for"],
    correct: 0,
    explanation: "Correct collocation: 'proficient in'.",
  },
  {
    id: 152,
    question: "Select correct comparative:",
    options: [
      "This exam is more easier than the last one.",
      "This exam is easier than the last one.",
      "This exam is the easier than the last one.",
      "This exam is easier from the last one.",
    ],
    correct: 1,
    explanation: "'Easier than' is correct comparative.",
  },
  {
    id: 153,
    question: "Pick correct sentence with plural subject:",
    options: [
      "One of the boys are clever.",
      "One of the boys is clever.",
      "One of the boys were clever.",
      "One of the boys have clever.",
    ],
    correct: 1,
    explanation: "'One of the' takes singular verb 'is'.",
  },
  {
    id: 154,
    question: "Choose synonym of 'alleviate':",
    options: ["Aggravate", "Relieve", "Exacerbate", "Worsen"],
    correct: 1,
    explanation: "'Alleviate' means to reduce or relieve.",
  },
  {
    id: 155,
    question: "Select correct sentence with tense:",
    options: [
      "They has gone to the store yesterday.",
      "They went to the store yesterday.",
      "They goes to the store yesterday.",
      "They had gone to the store yesterday.",
    ],
    correct: 1,
    explanation: "Past simple 'went' is correct for 'yesterday'.",
  },
  {
    id: 156,
    question: "Pick meaning of 'obstreperous':",
    options: ["Obedient", "Noisy and unruly", "Quiet", "Submissive"],
    correct: 1,
    explanation: "'Obstreperous' means noisy, difficult to control.",
  },
  {
    id: 157,
    question: "Choose correct sentence with 'neither...nor':",
    options: [
      "Neither of the choices are correct.",
      "Neither of the choices is correct.",
      "Neither of the choices were correct.",
      "Neither of the choices be correct.",
    ],
    correct: 1,
    explanation: "'Neither' is singular; verb must be 'is'.",
  },
  {
    id: 158,
    question: "Select correct idiom: 'He tried to ___ the problem.'",
    options: [
      "sweep under the rug",
      "kick the bucket",
      "hit the hay",
      "let the cat out of the bag",
    ],
    correct: 0,
    explanation: "'Sweep under the rug' means hide or conceal.",
  },
  {
    id: 159,
    question: "Pick correct article usage:",
    options: [
      "I met a honest person.",
      "I met an honest person.",
      "I met honest person.",
      "I met the honest person.",
    ],
    correct: 1,
    explanation: "'Honest' starts with vowel sound; 'an' is correct.",
  },
  {
    id: 160,
    question: "Choose correct sentence with parallelism:",
    options: [
      "He likes reading, to run, and jogging.",
      "He likes reading, running, and jogging.",
      "He likes reading, running, and to jog.",
      "He likes to read, run, and jogging.",
    ],
    correct: 1,
    explanation: "All elements in gerund form for parallel structure.",
  },
  {
    id: 161,
    question: "Pick correct subjunctive sentence:",
    options: [
      "It is crucial that he attends the meeting.",
      "It is crucial that he attend the meeting.",
      "It is crucial that he attended the meeting.",
      "It is crucial that he will attend the meeting.",
    ],
    correct: 1,
    explanation: "Subjunctive requires base verb 'attend'.",
  },
  {
    id: 162,
    question: "Select correct usage of 'affect' and 'effect':",
    options: [
      "The medicine will effect the symptoms.",
      "The medicine will affect the symptoms.",
      "The medicine effected the symptoms.",
      "The medicine is affecting the symptoms.",
    ],
    correct: 1,
    explanation: "'Affect' as verb means influence; 'effect' is usually noun.",
  },
  {
    id: 163,
    question: "Choose synonym of 'moribund':",
    options: ["Thriving", "Dying", "Growing", "Flourishing"],
    correct: 1,
    explanation: "'Moribund' means at the point of death or stagnating.",
  },
  {
    id: 164,
    question: "Pick correct sentence with negative:",
    options: [
      "He does not know nothing.",
      "He does not know anything.",
      "He did not knew anything.",
      "He does not knows anything.",
    ],
    correct: 1,
    explanation: "Double negative is incorrect; use 'anything'.",
  },
  {
    id: 165,
    question: "Select synonym of 'transient':",
    options: ["Permanent", "Temporary", "Enduring", "Eternal"],
    correct: 1,
    explanation: "'Transient' means temporary or short-lived.",
  },
  {
    id: 166,
    question: "Choose correct sentence for 'It is high time':",
    options: [
      "It is high time we start.",
      "It is high time we started.",
      "It is high time we are starting.",
      "It is high time we will start.",
    ],
    correct: 1,
    explanation: "'It is high time' is followed by past tense form.",
  },
  {
    id: 167,
    question: "Pick correct word: 'The argument was ___.'",
    options: ["persuasive", "weak", "confusing", "ambiguous"],
    correct: 0,
    explanation: "'Persuasive' means convincing or logical.",
  },
  {
    id: 168,
    question: "Select correct comparative:",
    options: [
      "This film is more entertaining than the last one.",
      "This film is entertaininger than the last one.",
      "This film is the more entertaining than the last one.",
      "This film is entertaining than the last one.",
    ],
    correct: 0,
    explanation: "'More entertaining than' is correct comparative.",
  },
  {
    id: 169,
    question: "Choose correct idiom:",
    options: [
      "He is skating on thin ice.",
      "He is skating on thick ice.",
      "He is skating on wide ice.",
      "He is skating on smooth ice.",
    ],
    correct: 0,
    explanation: "'Skating on thin ice' means taking a risk.",
  },
  {
    id: 170,
    question: "Pick correct sentence with conditional:",
    options: [
      "If he comes, we would leave.",
      "If he comes, we will leave.",
      "If he came, we will leave.",
      "If he will come, we will leave.",
    ],
    correct: 1,
    explanation: "First conditional: present simple + will.",
  },
  {
    id: 171,
    question: "Select correct infinitive usage:",
    options: [
      "She hopes go soon.",
      "She hopes to go soon.",
      "She hopes going soon.",
      "She hopes go to soon.",
    ],
    correct: 1,
    explanation: "'Hope' is followed by infinitive 'to go'.",
  },
  {
    id: 172,
    question: "Choose correct preposition: 'He is talented ___ painting.'",
    options: ["at", "in", "on", "for"],
    correct: 0,
    explanation: "'Talented at' is the correct collocation.",
  },
  {
    id: 173,
    question: "Pick correct sentence with 'used to':",
    options: [
      "He is used to wake up early.",
      "He is used to waking up early.",
      "He used to waking up early.",
      "He used to wake up early now.",
    ],
    correct: 1,
    explanation: "'Used to' + gerund for habitual action.",
  },
  {
    id: 174,
    question: "Select synonym of 'perspicacious':",
    options: ["Observant", "Unaware", "Ignorant", "Naive"],
    correct: 0,
    explanation: "'Perspicacious' means having keen understanding or insight.",
  },
  {
    id: 175,
    question: "Pick correct sentence with parallelism:",
    options: [
      "He likes reading, to swim, and jogging.",
      "He likes reading, swimming, and jogging.",
      "He likes reading, swimming, and to jog.",
      "He likes to read, swim, and jogging.",
    ],
    correct: 1,
    explanation: "All elements in gerund form for parallelism.",
  },
  {
    id: 176,
    question: "Choose correct meaning of 'ubiquitous':",
    options: ["Rare", "Omnipresent", "Hidden", "Temporary"],
    correct: 1,
    explanation: "'Ubiquitous' means present everywhere.",
  },
  {
    id: 177,
    question: "Select correct subjunctive sentence:",
    options: [
      "She demanded that he attends the seminar.",
      "She demanded that he attend the seminar.",
      "She demanded that he attended the seminar.",
      "She demanded that he will attend the seminar.",
    ],
    correct: 1,
    explanation: "Subjunctive uses base verb 'attend'.",
  },
  {
    id: 178,
    question: "Pick antonym of 'garrulous':",
    options: ["Talkative", "Chatty", "Reticent", "Verbose"],
    correct: 2,
    explanation: "'Reticent' is reserved, opposite of garrulous.",
  },
  {
    id: 179,
    question: "Choose correct sentence with plural subject:",
    options: [
      "Few of the students knows the fact.",
      "Few of the students know the fact.",
      "Few of the students is knowing the fact.",
      "Few of the students known the fact.",
    ],
    correct: 1,
    explanation: "Plural subject 'few of the students' takes 'know'.",
  },
  {
    id: 180,
    question:
      "Select correct idiom usage: 'He let the cat ___ about the plan.'",
    options: ["out of the bag", "in the bag", "on the bag", "into the bag"],
    correct: 0,
    explanation: "'Let the cat out of the bag' means reveal a secret.",
  },
  {
    id: 181,
    question: "Pick correct synonym of 'punctilious':",
    options: ["Careless", "Meticulous", "Negligent", "Sloppy"],
    correct: 1,
    explanation: "'Punctilious' means showing great attention to detail.",
  },
  {
    id: 182,
    question: "Select correct sentence:",
    options: [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answers were correct.",
      "Neither of the answers be correct.",
    ],
    correct: 1,
    explanation: "'Neither' is singular; verb must be 'is'.",
  },
  {
    id: 183,
    question: "Choose correct sentence with tense:",
    options: [
      "He has wrote the report.",
      "He has written the report.",
      "He has write the report.",
      "He has writing the report.",
    ],
    correct: 1,
    explanation: "Present perfect uses past participle 'written'.",
  },
  {
    id: 184,
    question: "Pick correct synonym of 'inscrutable':",
    options: ["Clear", "Mysterious", "Obvious", "Transparent"],
    correct: 1,
    explanation: "'Inscrutable' means impossible to understand or mysterious.",
  },
  {
    id: 185,
    question: "Select correct sentence:",
    options: [
      "Few of the books is interesting.",
      "Few of the books are interesting.",
      "Few of the books was interesting.",
      "Few of the books known interesting.",
    ],
    correct: 1,
    explanation: "Plural subject 'few of the books' takes 'are'.",
  },
  {
    id: 186,
    question: "Choose correct idiom: 'We should not let this secret ___.'",
    options: ["out of the bag", "in the bag", "on the bag", "into the bag"],
    correct: 0,
    explanation: "'Out of the bag' means reveal a secret.",
  },
  {
    id: 187,
    question: "Pick correct preposition: 'She is proficient ___ mathematics.'",
    options: ["in", "at", "on", "for"],
    correct: 0,
    explanation: "'Proficient in' is correct.",
  },
  {
    id: 188,
    question: "Select correct synonym of 'esoteric':",
    options: ["Common", "Obscure", "Obvious", "Familiar"],
    correct: 1,
    explanation:
      "'Esoteric' means intended for or understood by only a small group; obscure fits.",
  },
  {
    id: 189,
    question: "Pick correct sentence with subjunctive mood:",
    options: [
      "It is essential that she attends the conference.",
      "It is essential that she attend the conference.",
      "It is essential that she attended the conference.",
      "It is essential that she will attend the conference.",
    ],
    correct: 1,
    explanation: "Subjunctive requires base verb 'attend'.",
  },
  {
    id: 190,
    question: "Choose correct antonym of 'capricious':",
    options: ["Fickle", "Unpredictable", "Stable", "Erratic"],
    correct: 2,
    explanation:
      "'Capricious' means unpredictable or whimsical; opposite is 'stable'.",
  },
  {
    id: 191,
    question:
      "Select correct idiom: 'He decided to ___ the problem immediately.'",
    options: [
      "nip it in the bud",
      "beat around the bush",
      "drag it out",
      "put it on the back burner",
    ],
    correct: 0,
    explanation: "'Nip it in the bud' means address a problem early.",
  },
  {
    id: 192,
    question: "Pick correct comparative sentence:",
    options: [
      "This theory is more interesting than the previous one.",
      "This theory is interestinger than the previous one.",
      "This theory is the more interesting than the previous one.",
      "This theory is interesting than the previous one.",
    ],
    correct: 0,
    explanation: "'More interesting than' is the correct comparative form.",
  },
  {
    id: 193,
    question: "Choose correct sentence with article:",
    options: [
      "He is an historic figure.",
      "He is a historic figure.",
      "He is historic figure.",
      "He is the historic figure.",
    ],
    correct: 1,
    explanation:
      "Though 'historic' starts with 'h', the consonant sound requires 'a'.",
  },
  {
    id: 194,
    question: "Select correct synonym of 'recalcitrant':",
    options: ["Compliant", "Obstinate", "Agreeable", "Flexible"],
    correct: 1,
    explanation: "'Recalcitrant' means stubbornly disobedient or resistant.",
  },
  {
    id: 195,
    question: "Pick correct sentence with parallelism:",
    options: [
      "He enjoys reading, to write, and jogging.",
      "He enjoys reading, writing, and jogging.",
      "He enjoys reading, writing, and to jog.",
      "He enjoys to read, write, and jogging.",
    ],
    correct: 1,
    explanation: "All verbs in gerund form for proper parallel structure.",
  },
  {
    id: 196,
    question: "Choose correct meaning of 'inveterate':",
    options: ["Occasional", "Deep-rooted", "Temporary", "Fleeting"],
    correct: 1,
    explanation:
      "'Inveterate' means long-established and habitual, i.e., deep-rooted.",
  },
  {
    id: 197,
    question: "Select correct sentence with tense:",
    options: [
      "They has gone to the office already.",
      "They have gone to the office already.",
      "They have went to the office already.",
      "They has went to the office already.",
    ],
    correct: 1,
    explanation: "Present perfect requires 'have' + past participle 'gone'.",
  },
  {
    id: 198,
    question: "Pick synonym of 'magnanimous':",
    options: ["Generous", "Selfish", "Petty", "Greedy"],
    correct: 0,
    explanation: "'Magnanimous' means generous or noble in spirit.",
  },
  {
    id: 199,
    question: "Choose correct idiom: 'He finally decided to ___ the issue.'",
    options: [
      "face the music",
      "kick the bucket",
      "hit the hay",
      "let the cat out of the bag",
    ],
    correct: 0,
    explanation: "'Face the music' means confront the consequences.",
  },
  {
    id: 200,
    question: "Select correct sentence with negative:",
    options: [
      "She didn't say nothing.",
      "She didn't say anything.",
      "She didn't said anything.",
      "She didn't says anything.",
    ],
    correct: 1,
    explanation:
      "Double negative is incorrect; correct form is 'didn't say anything'.",
  },
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
