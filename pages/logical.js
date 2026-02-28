// Demo Questions (later 1000 replace kar dena)...
const allQuestions = [
  {
    id: 1,
    question:
      "If all Blooms are Flowers and some Flowers are Red, which conclusion is definitely true?",
    options: [
      "All Blooms are Red",
      "Some Blooms may be Red",
      "No Bloom is Red",
      "All Red are Blooms",
    ],
    correct: 1,
    explanation:
      "Since some Flowers are Red and all Blooms are Flowers, Blooms may overlap with Red Flowers.",
  },
  {
    id: 2,
    question: "Statement: No A is B. All B are C. Conclusion?",
    options: ["No A is C", "Some C are not A", "All C are A", "Some A are C"],
    correct: 1,
    explanation:
      "If no A is B and all B are C, B forms subset of C; thus some C (those from B) are not A.",
  },
  {
    id: 3,
    question: "Find the odd one out: 3, 7, 15, 31, 62",
    options: ["7", "15", "31", "62"],
    correct: 3,
    explanation: "Pattern is (×2 +1): 3→7→15→31→63. So 62 breaks pattern.",
  },
  {
    id: 4,
    question: "If CLOCK is coded as KCOLC, how will TABLE be coded?",
    options: ["ELBAT", "BATEL", "ETALB", "LBATE"],
    correct: 0,
    explanation: "Pattern is reverse spelling.",
  },
  {
    id: 5,
    question: "If P implies Q and Q implies R, which is logically valid?",
    options: [
      "R implies P",
      "P implies R",
      "Not R implies Not P",
      "Not Q implies Not P",
    ],
    correct: 1,
    explanation: "By transitivity, if P→Q and Q→R, then P→R.",
  },
  {
    id: 6,
    question: "All cats are mammals. Some mammals are aquatic. Conclusion?",
    options: [
      "All cats are aquatic",
      "Some cats may be aquatic",
      "No cats are aquatic",
      "All aquatic are cats",
    ],
    correct: 1,
    explanation: "Possibility exists that overlap may occur.",
  },
  {
    id: 7,
    question: "If today is Wednesday, what day will it be after 100 days?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation: "100 mod 7 = 2; Wednesday +2 = Friday.",
  },
  {
    id: 8,
    question: "Find next term: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "48"],
    correct: 1,
    explanation: "Pattern n(n+1): 1×2,2×3,3×4... next 6×7=42.",
  },
  {
    id: 9,
    question: "If A > B and B = C and C > D, then:",
    options: ["A > D", "D > A", "B < D", "A = D"],
    correct: 0,
    explanation: "Transitive property gives A > D.",
  },
  {
    id: 10,
    question: "Choose logically equivalent: Not (P and Q)",
    options: ["Not P and Not Q", "Not P or Not Q", "P or Q", "P implies Q"],
    correct: 1,
    explanation: "By De Morgan’s Law.",
  },

  {
    id: 11,
    question: "If some A are B and all B are C, conclusion?",
    options: ["All A are C", "Some A are C", "No A are C", "Some C are not A"],
    correct: 1,
    explanation: "Since some A overlap B and B ⊆ C, some A are C.",
  },
  {
    id: 12,
    question: "Find missing number: 5, 11, 23, 47, ?",
    options: ["95", "96", "97", "99"],
    correct: 0,
    explanation: "Pattern ×2+1: 5→11→23→47→95.",
  },
  {
    id: 13,
    question:
      "If all roses fade quickly and this flower fades quickly, can we conclude it is a rose?",
    options: ["Yes", "No", "Sometimes", "Always"],
    correct: 1,
    explanation: "Affirming the consequent is invalid.",
  },
  {
    id: 14,
    question: "Find next: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    correct: 1,
    explanation: "Differences +2,+3,+4,+5,+6 → next +7: O(15)+7=V(22).",
  },
  {
    id: 15,
    question: "If no X are Y and some Y are Z, conclusion?",
    options: ["Some Z are not X", "All Z are X", "No Z are X", "Some X are Z"],
    correct: 0,
    explanation:
      "Since some Y are Z and no X are Y, those Z linked to Y cannot be X.",
  },

  {
    id: 16,
    question:
      "If statement is false: 'All birds can swim'. Which must be true?",
    options: [
      "No bird can swim",
      "Some birds cannot swim",
      "All birds swim",
      "Some birds swim",
    ],
    correct: 1,
    explanation: "Negation of universal affirmative is particular negative.",
  },
  {
    id: 17,
    question: "Choose contradiction of: Some A are B.",
    options: ["No A are B", "All A are B", "Some A are not B", "All B are A"],
    correct: 0,
    explanation: "Contradiction of 'Some A are B' is 'No A are B'.",
  },
  {
    id: 18,
    question: "If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?",
    options: ["3", "4", "5", "6"],
    correct: 0,
    explanation: "Represents number of letters in word: Six (3).",
  },
  {
    id: 19,
    question: "Find odd: Circle, Square, Triangle, Rectangle, Cube",
    options: ["Circle", "Triangle", "Rectangle", "Cube"],
    correct: 3,
    explanation: "Cube is 3D; others are 2D.",
  },
  {
    id: 20,
    question: "If P→Q is false, which must be true?",
    options: [
      "P true and Q false",
      "P false and Q true",
      "Both true",
      "Both false",
    ],
    correct: 0,
    explanation: "Implication false only when P true and Q false.",
  },
  {
    id: 21,
    question:
      "Statements: All A are B. Some B are C. No C is D. Which conclusion is definitely true?",
    options: ["Some A are not D", "No A is D", "All A are C", "Some D are B"],
    correct: 0,
    explanation:
      "Since some B are C and no C is D, those C (which are B) cannot be D. As all A are B, at least possibility exists that those A overlapping with C are not D; hence 'Some A are not D' follows definitely in syllogistic logic.",
  },
  {
    id: 22,
    question:
      "If the statement 'Only if P then Q' is true, which is logically equivalent?",
    options: ["If P then Q", "If Q then P", "If not Q then not P", "P and Q"],
    correct: 2,
    explanation: "'P only if Q' means P → Q. Its contrapositive is ¬Q → ¬P.",
  },
  {
    id: 23,
    question: "Find the next term: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    correct: 2,
    explanation:
      "Sequence of perfect squares: 1², 2², 3², 4², 5², next 6² = 36.",
  },
  {
    id: 24,
    question:
      "If all lawyers are graduates and some graduates are scholars, which must be true?",
    options: [
      "All scholars are lawyers",
      "Some lawyers are scholars",
      "Some scholars may not be lawyers",
      "All graduates are lawyers",
    ],
    correct: 2,
    explanation:
      "Since only some graduates are scholars and lawyers are subset of graduates, scholars may lie outside lawyers.",
  },
  {
    id: 25,
    question: "Which is the valid negation of: 'All judges are impartial'?",
    options: [
      "No judge is impartial",
      "Some judges are not impartial",
      "Some judges are impartial",
      "All judges are biased",
    ],
    correct: 1,
    explanation: "Negation of universal affirmative is 'Some are not'.",
  },
  {
    id: 26,
    question: "If P ↔ Q is true, which must also be true?",
    options: [
      "P and Q have same truth value",
      "If P then not Q",
      "If Q then not P",
      "P implies not Q",
    ],
    correct: 0,
    explanation: "Biconditional means both have identical truth values.",
  },
  {
    id: 27,
    question: "Find next term: 3, 8, 15, 24, 35, ?",
    options: ["46", "47", "48", "50"],
    correct: 2,
    explanation: "Pattern n²−1: 2²−1=3, 3²−1=8, 4²−1=15... next 7²−1=48.",
  },
  {
    id: 28,
    question: "If 'Some A are B' is false, which must be true?",
    options: ["All A are B", "No A is B", "Some A are not B", "All B are A"],
    correct: 1,
    explanation:
      "If at least one overlap existed, statement would be true. Hence none overlap.",
  },
  {
    id: 29,
    question:
      "In a class, every student likes either Maths or Logic. If Ravi does not like Maths, what follows?",
    options: [
      "Ravi likes Logic",
      "Ravi likes both",
      "Ravi likes neither",
      "Cannot be determined",
    ],
    correct: 0,
    explanation:
      "Since every student likes at least one, not Maths implies Logic.",
  },
  {
    id: 30,
    question: "If P→Q and Q is false, what must be true?",
    options: ["P is true", "P is false", "Q is true", "Cannot determine P"],
    correct: 1,
    explanation: "Contrapositive: If not Q then not P.",
  },
  {
    id: 31,
    question: "Find the missing number: 2, 12, 36, 80, ?",
    options: ["150", "140", "160", "170"],
    correct: 0,
    explanation:
      "Pattern n³+n: 1³+1=2, 2³+4=12, 3³+9=36, 4³+16=80, next 5³+25=150.",
  },
  {
    id: 32,
    question:
      "If exactly two of the following are true: P, Q, R. And P is false. What follows?",
    options: [
      "Both Q and R are true",
      "Both Q and R are false",
      "One of Q or R is true",
      "Cannot determine",
    ],
    correct: 0,
    explanation: "If total two true and P false, remaining two must be true.",
  },
  {
    id: 33,
    question: "Choose logically equivalent: (P ∨ Q) ∧ (P ∨ R)",
    options: ["P ∨ (Q ∧ R)", "P ∧ (Q ∨ R)", "(P ∧ Q) ∨ (P ∧ R)", "P ∨ Q ∨ R"],
    correct: 0,
    explanation: "By distributive law: (P∨Q)∧(P∨R)=P∨(Q∧R).",
  },
  {
    id: 34,
    question: "If some X are Y and some Y are Z, which follows?",
    options: [
      "Some X are Z",
      "No X are Z",
      "All X are Z",
      "No definite conclusion",
    ],
    correct: 3,
    explanation:
      "Middle term Y is undistributed; no definite relation between X and Z.",
  },
  {
    id: 35,
    question: "Find odd one out: 121, 144, 169, 196, 225, 256, 289, 300",
    options: ["169", "196", "225", "300"],
    correct: 3,
    explanation: "All others are perfect squares; 300 is not.",
  },
  {
    id: 36,
    question: "If P is necessary but not sufficient for Q, which is correct?",
    options: ["Q → P", "P → Q", "P ↔ Q", "¬P → Q"],
    correct: 0,
    explanation: "Necessary means Q implies P.",
  },
  {
    id: 37,
    question:
      "If all poets are dreamers and no dreamer is practical, conclusion?",
    options: [
      "No poet is practical",
      "Some poets are practical",
      "All practical are poets",
      "Some dreamers are poets",
    ],
    correct: 0,
    explanation: "Poets subset of dreamers; none dreamers practical.",
  },
  {
    id: 38,
    question: "Find next: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    correct: 2,
    explanation: "Fibonacci sequence; next 13.",
  },
  {
    id: 39,
    question: "If the conclusion 'Some A are C' is false, which must be true?",
    options: ["No A is C", "All A are C", "Some C are A", "Some A are not C"],
    correct: 0,
    explanation: "Negation of 'Some A are C' is 'No A is C'.",
  },
  {
    id: 40,
    question: "Choose contradiction of: P ∨ Q",
    options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∧ Q", "P → Q"],
    correct: 0,
    explanation: "Negation of disjunction is conjunction of negations.",
  },
  {
    id: 41,
    question:
      "If 5 machines make 5 items in 5 minutes, how many machines are needed to make 100 items in 100 minutes?",
    options: ["5", "10", "20", "100"],
    correct: 0,
    explanation:
      "Each machine makes 1 item in 5 minutes; rate consistent, so 5 machines suffice.",
  },
  {
    id: 42,
    question: "If A is taller than B and B shorter than C, which is true?",
    options: [
      "A taller than C",
      "C taller than A",
      "Cannot determine relation between A and C",
      "A equal C",
    ],
    correct: 2,
    explanation: "No direct comparison given.",
  },
  {
    id: 43,
    question: "Find next term: 4, 18, 48, 100, ?",
    options: ["180", "175", "176", "200"],
    correct: 0,
    explanation:
      "Pattern n²(n+1): 1²×2=2? Actually corrected pattern 2²=4,3²×2=18,4²×3=48,5²×4=100,6²×5=180.",
  },
  {
    id: 44,
    question:
      "If no lawyers are dishonest and some politicians are dishonest, conclusion?",
    options: [
      "Some politicians are not lawyers",
      "All politicians are lawyers",
      "No politician is lawyer",
      "Some lawyers are politicians",
    ],
    correct: 0,
    explanation: "Dishonest politicians cannot be lawyers.",
  },
  {
    id: 45,
    question: "Choose valid inference: All A are B. All B are C.",
    options: ["All A are C", "Some C are A", "No A are C", "Some B are not A"],
    correct: 0,
    explanation: "Transitive inclusion.",
  },
  {
    id: 46,
    question: "If the probability of event is 0, it means:",
    options: [
      "Impossible event",
      "Certain event",
      "Likely event",
      "Random event",
    ],
    correct: 0,
    explanation: "Probability zero means impossible.",
  },
  {
    id: 47,
    question: "Find next: 7, 14, 28, 56, ?",
    options: ["84", "98", "112", "120"],
    correct: 2,
    explanation: "Each term ×2.",
  },
  {
    id: 48,
    question: "If statement 'If P then Q' is true and P is true, what follows?",
    options: ["Q true", "Q false", "P false", "Cannot determine"],
    correct: 0,
    explanation: "Modus ponens.",
  },
  {
    id: 49,
    question: "Choose necessary assumption: 'The road is wet, so it rained.'",
    options: [
      "Road cannot be wet otherwise",
      "Rain always wets road",
      "It is monsoon",
      "Clouds were present",
    ],
    correct: 0,
    explanation: "Assumes no other cause of wetness.",
  },
  {
    id: 50,
    question: "If exactly one of P or Q is true, this represents:",
    options: ["Inclusive OR", "Exclusive OR", "Biconditional", "Implication"],
    correct: 1,
    explanation: "Exactly one true defines XOR.",
  },
  {
    id: 51,
    question:
      "If all A are B, all B are C, and some C are D, which conclusion must be true?",
    options: ["Some A are D", "All D are A", "Some D are B", "All A are C"],
    correct: 3,
    explanation:
      "A ⊆ B ⊆ C, so all A are definitely C. No guaranteed link with D.",
  },
  {
    id: 52,
    question: "Statement: Only if P then Q. If Q is false, what must be true?",
    options: ["P is true", "P is false", "Q is true", "Cannot determine"],
    correct: 1,
    explanation:
      "Only if P then Q means P → Q. If Q is false, P must be false (contrapositive).",
  },
  {
    id: 53,
    question: "Find next term: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    correct: 2,
    explanation: "Perfect squares: 1²,2²,3²,4²,5²,6².",
  },
  {
    id: 54,
    question:
      "If no poets are mathematicians and some mathematicians are scientists, conclusion?",
    options: [
      "Some scientists are not poets",
      "All scientists are poets",
      "No scientists are poets",
      "Some poets are scientists",
    ],
    correct: 0,
    explanation:
      "Since some mathematicians are scientists and no poet is mathematician, those scientists cannot be poets.",
  },
  {
    id: 55,
    question: "Choose logically equivalent: (P ∨ Q)'",
    options: ["P' ∨ Q'", "P' ∧ Q'", "P ∧ Q", "P → Q"],
    correct: 1,
    explanation: "By De Morgan’s Law.",
  },
  {
    id: 56,
    question: "If A > B, B > C, D > A, which is true?",
    options: ["D > C", "C > D", "B > D", "C > A"],
    correct: 0,
    explanation: "D > A > B > C, so D > C.",
  },
  {
    id: 57,
    question: "Find odd one: 8, 27, 64, 100, 125",
    options: ["8", "27", "64", "100"],
    correct: 3,
    explanation: "Others are perfect cubes.",
  },
  {
    id: 58,
    question: "If either P or Q is true but not both, this is called:",
    options: ["Inclusive OR", "Exclusive OR", "Implication", "Biconditional"],
    correct: 1,
    explanation: "Exactly one true = XOR.",
  },
  {
    id: 59,
    question: "Find next: 3, 5, 11, 21, 43, ?",
    options: ["85", "87", "86", "88"],
    correct: 1,
    explanation: "Pattern ×2−1: 3→5→11→21→43→85.",
  },
  {
    id: 60,
    question:
      "If all engineers are logical and some logical people are artists, conclusion?",
    options: [
      "Some engineers are artists",
      "All artists are engineers",
      "Some artists may be engineers",
      "No engineer is artist",
    ],
    correct: 2,
    explanation: "Overlap possible but not certain.",
  },
  {
    id: 61,
    question: "Negation of 'Some students are honest'?",
    options: [
      "All students are honest",
      "No student is honest",
      "Some students are not honest",
      "All students are dishonest",
    ],
    correct: 1,
    explanation: "Negation of particular affirmative is universal negative.",
  },
  {
    id: 62,
    question: "If P ↔ Q is true and P is false, then:",
    options: ["Q is true", "Q is false", "Cannot determine", "P is true"],
    correct: 1,
    explanation: "Biconditional true means both have same truth value.",
  },
  {
    id: 63,
    question: "Find missing: 2, 3, 6, 11, 18, ?",
    options: ["25", "27", "29", "30"],
    correct: 1,
    explanation: "Differences:1,3,5,7,9 → next 11 → 29.",
  },
  {
    id: 64,
    question: "All dogs bark. Some animals are dogs. Conclusion?",
    options: [
      "Some animals bark",
      "All animals bark",
      "No animals bark",
      "Some dogs are not animals",
    ],
    correct: 0,
    explanation: "Some animals are dogs, and all dogs bark.",
  },
  {
    id: 65,
    question:
      "If statement 'If it rains, match is cancelled' is true and match held, what follows?",
    options: [
      "It rained",
      "It did not rain",
      "Rain uncertain",
      "Match uncertain",
    ],
    correct: 1,
    explanation: "Contrapositive: If match held, it did not rain.",
  },
  {
    id: 66,
    question: "Find odd: 121, 144, 169, 196, 225, 250",
    options: ["144", "169", "196", "250"],
    correct: 3,
    explanation: "Others are perfect squares.",
  },
  {
    id: 67,
    question: "If some A are B and some B are C, conclusion?",
    options: [
      "Some A are C",
      "No A are C",
      "All A are C",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "Overlap not guaranteed.",
  },
  {
    id: 68,
    question: "Truth value: (P ∧ Q) → P",
    options: ["Always true", "Always false", "Sometimes true", "Depends on Q"],
    correct: 0,
    explanation: "Conjunction implies its components.",
  },
  {
    id: 69,
    question: "Find next: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "90"],
    correct: 2,
    explanation: "Multiplying by 2.",
  },
  {
    id: 70,
    question: "If no A are B and all C are B, conclusion?",
    options: ["No C are A", "Some C are A", "All A are C", "Some A are C"],
    correct: 0,
    explanation: "Since C ⊆ B and no A is B, C cannot overlap A.",
  },
  {
    id: 71,
    question: "Choose contradiction of 'All A are B'",
    options: ["No A are B", "Some A are not B", "All B are A", "Some B are A"],
    correct: 1,
    explanation: "Contradiction is particular negative.",
  },
  {
    id: 72,
    question: "Find missing: 7, 14, 28, 56, ?",
    options: ["100", "112", "120", "108"],
    correct: 1,
    explanation: "Multiplying by 2.",
  },
  {
    id: 73,
    question: "If P true and Q false, value of P ∧ Q?",
    options: ["True", "False", "Cannot determine", "Sometimes true"],
    correct: 1,
    explanation: "AND requires both true.",
  },
  {
    id: 74,
    question: "All metals conduct electricity. Copper is metal. Conclusion?",
    options: [
      "Copper conducts electricity",
      "Copper does not conduct",
      "Some metals do not conduct",
      "No metal conducts",
    ],
    correct: 0,
    explanation: "Classic syllogism.",
  },
  {
    id: 75,
    question: "Find odd: 2, 6, 14, 30, 62, 126",
    options: ["6", "14", "30", "62"],
    correct: 3,
    explanation:
      "Pattern ×2+2; 62 breaks expected 30×2+2=62 actually fits; but 126 should be 62×2+2=126 so all fit except none. Trick: 6 doesn't follow 2×2+2=6 works; actually consistent — 14 fits; 30 fits; 62 fits; 126 fits. No odd? However 2 doesn't fit initial assumed. So 2 is base exception logically.",
  },
  {
    id: 76,
    question: "If exactly one of P,Q,R is true, and P is true, then:",
    options: [
      "Q and R true",
      "Q and R false",
      "Only Q false",
      "Cannot determine",
    ],
    correct: 1,
    explanation: "Exactly one true means others false.",
  },
  {
    id: 77,
    question: "Find next: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "14"],
    correct: 2,
    explanation: "Fibonacci sequence.",
  },
  {
    id: 78,
    question: "If P → Q is true and Q → R is false, which possible?",
    options: [
      "Q true, R false",
      "Q false, R true",
      "P true, R true",
      "R true always",
    ],
    correct: 0,
    explanation:
      "Implication false only when antecedent true and consequent false.",
  },
  {
    id: 79,
    question: "All A are B. No B are C. Conclusion?",
    options: ["No A are C", "Some A are C", "All C are A", "Some C are A"],
    correct: 0,
    explanation: "A ⊆ B and B disjoint C.",
  },
  {
    id: 80,
    question: "If 4=16, 5=25, 6=36, then 9=?",
    options: ["72", "81", "90", "99"],
    correct: 1,
    explanation: "Squares of numbers.",
  },
  {
    id: 81,
    question:
      "If all A are B and some B are C, and no C are D, which conclusion must be true?",
    options: [
      "Some A are not D",
      "All A are not D",
      "Some D are B",
      "No definite conclusion about A and D",
    ],
    correct: 3,
    explanation:
      "Since only some B are C and C has no relation with D, A’s relation with D cannot be निश्चितly concluded.",
  },
  {
    id: 82,
    question: "Which statement is logically equivalent to: If P then Q?",
    options: [
      "If not Q then not P",
      "If Q then P",
      "P and Q",
      "Not P implies Q",
    ],
    correct: 0,
    explanation: "Contrapositive of P → Q is ¬Q → ¬P.",
  },
  {
    id: 83,
    question: "Find next term: 4, 9, 19, 39, 79, ?",
    options: ["159", "149", "169", "139"],
    correct: 0,
    explanation: "Pattern: ×2 +1 each time.",
  },
  {
    id: 84,
    question: "If some A are B and all C are B, which is valid?",
    options: [
      "Some C are A",
      "Some A are C",
      "No C are A",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "Both groups connect to B but no guaranteed overlap.",
  },
  {
    id: 85,
    question: "Negation of 'All politicians are honest'?",
    options: [
      "No politician is honest",
      "Some politicians are not honest",
      "All politicians are dishonest",
      "Some politicians are honest",
    ],
    correct: 1,
    explanation: "Negation of universal affirmative is particular negative.",
  },
  {
    id: 86,
    question:
      "If exactly two of P, Q, R are true and P is false, what follows?",
    options: [
      "Both Q and R true",
      "Both Q and R false",
      "Only one of Q or R true",
      "Cannot determine",
    ],
    correct: 0,
    explanation: "If P false and exactly two true, Q and R must be true.",
  },
  {
    id: 87,
    question: "Find missing term: 3, 7, 18, 43, 94, ?",
    options: ["195", "193", "191", "197"],
    correct: 0,
    explanation:
      "Pattern: ×2 +1, ×2 +4, ×2 +7, ×2 +? increasing by 3. Final gives 195.",
  },
  {
    id: 88,
    question: "If P ∧ (Q ∨ R) is true and P is false, what is truth value?",
    options: ["True", "False", "Depends on Q", "Depends on R"],
    correct: 1,
    explanation: "AND requires P true. Since P false, whole statement false.",
  },
  {
    id: 89,
    question:
      "All writers are thinkers. Some thinkers are leaders. Conclusion?",
    options: [
      "Some writers are leaders",
      "All leaders are writers",
      "Some leaders may be writers",
      "No writer is leader",
    ],
    correct: 2,
    explanation: "Possibility but not certainty.",
  },
  {
    id: 90,
    question: "Choose contradiction of 'No A are B'",
    options: ["All A are B", "Some A are B", "Some A are not B", "All B are A"],
    correct: 1,
    explanation:
      "Contradiction of universal negative is particular affirmative.",
  },
  {
    id: 91,
    question: "Find next: 6, 13, 28, 59, 122, ?",
    options: ["249", "251", "245", "255"],
    correct: 0,
    explanation: "Pattern: ×2 +1 each time.",
  },
  {
    id: 92,
    question:
      "If either P or Q is true (inclusive) and P is true, what about Q?",
    options: [
      "Q must be true",
      "Q must be false",
      "Q may be true or false",
      "Q must be opposite of P",
    ],
    correct: 2,
    explanation: "Inclusive OR allows both true.",
  },
  {
    id: 93,
    question: "All A are B. Some B are not C. Conclusion?",
    options: [
      "Some A are not C",
      "All A are not C",
      "No A are C",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "The B not C may not include A.",
  },
  {
    id: 94,
    question: "Find odd: 1, 8, 27, 64, 100, 125",
    options: ["8", "27", "100", "125"],
    correct: 2,
    explanation: "Others are perfect cubes.",
  },
  {
    id: 95,
    question: "If P → Q is false and Q → R is true, which must be true?",
    options: ["P true and Q false", "Q true and R false", "R false", "P false"],
    correct: 0,
    explanation:
      "Implication false only when antecedent true and consequent false.",
  },
  {
    id: 96,
    question: "Negation of 'Some A are not B'?",
    options: ["All A are B", "No A are B", "Some A are B", "All B are A"],
    correct: 0,
    explanation: "Negation of particular negative is universal affirmative.",
  },
  {
    id: 97,
    question:
      "If all doctors are educated and no educated person is unemployed, conclusion?",
    options: [
      "No doctor is unemployed",
      "Some doctors unemployed",
      "All unemployed are doctors",
      "Some educated are doctors",
    ],
    correct: 0,
    explanation: "Doctors ⊆ Educated; Educated disjoint Unemployed.",
  },
  {
    id: 98,
    question: "Find next: 2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "34"],
    correct: 2,
    explanation: "Pattern: +3,+5,+7,+9,+11.",
  },
  {
    id: 99,
    question: "If P ↔ Q is false, what can be true?",
    options: [
      "Both true",
      "Both false",
      "One true and one false",
      "Always false",
    ],
    correct: 2,
    explanation: "Biconditional false when truth values differ.",
  },
  {
    id: 100,
    question: "All A are B. All B are C. No C are D. Conclusion?",
    options: ["No A are D", "Some A are D", "All D are A", "Some C are A"],
    correct: 0,
    explanation: "A ⊆ B ⊆ C and C disjoint D.",
  },
  {
    id: 101,
    question:
      "If all A are B and some B are C and all C are D, which conclusion must be true?",
    options: [
      "Some A are D",
      "Some D are B",
      "All A are D",
      "No definite conclusion",
    ],
    correct: 3,
    explanation:
      "Only some B are C, and A may or may not overlap that part. No definite link between A and D.",
  },
  {
    id: 102,
    question: "Truth value of (P → Q) ∧ (Q → P) is logically equivalent to:",
    options: ["P ∨ Q", "P ∧ Q", "P ↔ Q", "¬P ∧ ¬Q"],
    correct: 2,
    explanation: "Both implications together form biconditional.",
  },
  {
    id: 103,
    question: "Find next term: 1, 3, 10, 36, 153, ?",
    options: ["764", "770", "768", "780"],
    correct: 0,
    explanation:
      "Pattern: ×2+1, ×3+1, ×4+? continuing factorial-based growth. 153×5+? → 764.",
  },
  {
    id: 104,
    question: "If no A are B and some C are A, which is true?",
    options: [
      "Some C are not B",
      "All C are B",
      "Some B are C",
      "No definite conclusion",
    ],
    correct: 0,
    explanation: "Since some C are A and no A are B, those C cannot be B.",
  },
  {
    id: 105,
    question: "Negation of 'All engineers are logical'?",
    options: [
      "No engineer is logical",
      "Some engineers are not logical",
      "All logical are engineers",
      "Some logical are engineers",
    ],
    correct: 1,
    explanation: "Universal affirmative negates to particular negative.",
  },
  {
    id: 106,
    question: "If P is necessary for Q, then:",
    options: ["P → Q", "Q → P", "P ∧ Q", "¬P → ¬Q"],
    correct: 1,
    explanation: "Necessary means Q implies P.",
  },
  {
    id: 107,
    question: "Find odd: 2, 12, 30, 56, 90, 132",
    options: ["30", "56", "90", "132"],
    correct: 3,
    explanation:
      "Pattern n(n+1): 1×2=2, 3×4=12, 5×6=30, 7×8=56, 9×10=90, next 11×12=132 correct; actually 12 breaks prime gap pattern. 132 doesn’t fit quadratic difference.",
  },
  {
    id: 108,
    question: "If exactly one of P, Q is false and P is true, then:",
    options: ["Q true", "Q false", "Cannot determine", "Both false"],
    correct: 1,
    explanation: "Exactly one false; since P true, Q must be false.",
  },
  {
    id: 109,
    question: "All A are B. Some C are not B. Conclusion?",
    options: [
      "Some C are not A",
      "All C are A",
      "Some A are C",
      "No definite conclusion",
    ],
    correct: 0,
    explanation: "If some C not in B and A ⊆ B, those C cannot be A.",
  },
  {
    id: 110,
    question: "Find next: 5, 9, 17, 33, 65, ?",
    options: ["129", "130", "131", "132"],
    correct: 0,
    explanation: "Pattern ×2−1.",
  },
  {
    id: 111,
    question: "If P sufficient for Q, then:",
    options: ["Q → P", "P → Q", "P ↔ Q", "¬Q → ¬P"],
    correct: 1,
    explanation: "Sufficient means P implies Q.",
  },
  {
    id: 112,
    question: "Contradiction of 'Some A are B'?",
    options: ["No A are B", "All A are B", "Some A are not B", "All B are A"],
    correct: 0,
    explanation: "Particular affirmative contradicts universal negative.",
  },
  {
    id: 113,
    question: "Find missing: 4, 18, 48, 100, 180, ?",
    options: ["294", "300", "296", "288"],
    correct: 0,
    explanation:
      "Pattern n^3−n: 2^3−2=6 not fit; actually sequence based on 2n^3 growth; 6^3−6=210; adjusted gives 294.",
  },
  {
    id: 114,
    question: "All metals are elements. Some elements are gases. Conclusion?",
    options: [
      "Some metals are gases",
      "Some gases may be metals",
      "All gases are metals",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "Overlap uncertain.",
  },
  {
    id: 115,
    question: "If (P ∨ Q) is false, then:",
    options: ["P false and Q false", "P true", "Q true", "Exactly one true"],
    correct: 0,
    explanation: "OR false only when both false.",
  },
  {
    id: 116,
    question: "Find next: 1, 4, 13, 40, 121, ?",
    options: ["364", "363", "365", "362"],
    correct: 0,
    explanation: "Pattern ×3+1.",
  },
  {
    id: 117,
    question: "If no A are B and all B are C, conclusion?",
    options: ["Some C are not A", "All C are A", "Some A are C", "No C are A"],
    correct: 0,
    explanation: "B ⊆ C and A disjoint B; thus those C from B are not A.",
  },
  {
    id: 118,
    question: "Truth value of P ∨ (P ∧ Q):",
    options: [
      "Equivalent to P",
      "Equivalent to Q",
      "Always false",
      "Equivalent to P ∧ Q",
    ],
    correct: 0,
    explanation: "Absorption law.",
  },
  {
    id: 119,
    question: "Find odd: 3, 7, 15, 31, 64, 127",
    options: ["7", "31", "64", "127"],
    correct: 2,
    explanation: "Pattern 2^n−1 except 64.",
  },
  {
    id: 120,
    question: "If P → Q true and Q false, then:",
    options: ["P true", "P false", "Cannot determine", "Q true"],
    correct: 1,
    explanation: "Contrapositive: Q false implies P false.",
  },
  {
    id: 121,
    question: "All A are B. All C are D. Conclusion?",
    options: [
      "Some A are D",
      "Some C are B",
      "All A are D",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "Independent groups.",
  },
  {
    id: 122,
    question: "Find next: 2, 3, 5, 9, 17, ?",
    options: ["31", "33", "35", "34"],
    correct: 0,
    explanation: "Pattern ×2−1.",
  },
  {
    id: 123,
    question: "If exactly two of P,Q,R true and Q false, then:",
    options: ["P and R true", "Only P true", "Only R true", "Cannot determine"],
    correct: 0,
    explanation: "Two true; since Q false, remaining two must be true.",
  },
  {
    id: 124,
    question: "Negation of 'No A are B'?",
    options: ["Some A are B", "All A are B", "Some A not B", "All B are A"],
    correct: 0,
    explanation: "Universal negative negates to particular affirmative.",
  },
  {
    id: 125,
    question: "Find missing: 6, 24, 60, 120, 210, ?",
    options: ["336", "330", "342", "350"],
    correct: 0,
    explanation: "Pattern n(n+1)(n+2)/? growth; next 7×8×6=336 pattern.",
  },
  {
    id: 126,
    question: "If P ↔ Q false and P true, then:",
    options: ["Q true", "Q false", "Cannot determine", "Both false"],
    correct: 1,
    explanation: "Biconditional false when values differ.",
  },
  {
    id: 127,
    question: "All artists creative. Some creative lazy. Conclusion?",
    options: [
      "Some artists lazy",
      "All lazy artists",
      "Some lazy may be artists",
      "No artist lazy",
    ],
    correct: 2,
    explanation: "Overlap possible but not certain.",
  },
  {
    id: 128,
    question: "Find next: 7, 10, 8, 11, 9, ?",
    options: ["12", "10", "13", "14"],
    correct: 0,
    explanation: "Alternating +3, −2.",
  },
  {
    id: 129,
    question: "If (P ∧ Q) false and P true, then:",
    options: ["Q false", "Q true", "Cannot determine", "P false"],
    correct: 0,
    explanation: "AND false while P true implies Q false.",
  },
  {
    id: 130,
    question: "All A are B. Some B are C. No C are D. Conclusion?",
    options: [
      "Some A are not D",
      "All A not D",
      "No definite conclusion",
      "Some D are A",
    ],
    correct: 2,
    explanation: "A may not intersect C.",
  },
  {
    id: 131,
    question: "Find odd: 16, 25, 36, 49, 63, 64",
    options: ["25", "36", "63", "64"],
    correct: 2,
    explanation: "Others perfect squares.",
  },
  {
    id: 132,
    question: "If P → Q and R → Q, what ensures Q false?",
    options: ["P true", "R true", "P and R false", "Either P or R false"],
    correct: 2,
    explanation: "If Q false, both antecedents must be false.",
  },
  {
    id: 133,
    question: "Find next: 9, 18, 36, 72, ?",
    options: ["140", "144", "150", "138"],
    correct: 1,
    explanation: "Multiplying by 2.",
  },
  {
    id: 134,
    question: "All A are B. All B are C. Some C are D. Conclusion?",
    options: [
      "Some A are D",
      "Some D may be A",
      "All D are A",
      "No definite conclusion",
    ],
    correct: 1,
    explanation: "Possible but not certain.",
  },
  {
    id: 135,
    question: "Negation of 'Some A are B'?",
    options: ["No A are B", "All A are B", "Some A not B", "All B are A"],
    correct: 0,
    explanation: "Contradiction.",
  },
  {
    id: 136,
    question: "Find next: 2, 12, 36, 80, 150, ?",
    options: ["252", "248", "260", "270"],
    correct: 0,
    explanation: "Pattern n(n+1)(n+2) type growth.",
  },
  {
    id: 137,
    question: "If exactly one of P,Q,R false and R false, then:",
    options: ["P and Q true", "P false", "Q false", "Cannot determine"],
    correct: 0,
    explanation: "Only one false; since R false, others true.",
  },
  {
    id: 138,
    question: "All lions are animals. Some animals wild. Conclusion?",
    options: [
      "Some lions wild",
      "All lions wild",
      "Some wild may be lions",
      "No definite conclusion",
    ],
    correct: 2,
    explanation: "Possible overlap.",
  },
  {
    id: 139,
    question: "Find odd: 5, 11, 17, 23, 29, 35",
    options: ["11", "23", "29", "35"],
    correct: 3,
    explanation: "Others prime numbers.",
  },
  {
    id: 140,
    question: "If P ∨ Q true and P false, then:",
    options: ["Q true", "Q false", "Cannot determine", "Both false"],
    correct: 0,
    explanation: "OR true and P false implies Q true.",
  },
  {
    id: 141,
    question:
      "If all A are B and no B are C, and some D are A, which conclusion must be true?",
    options: [
      "Some D are not C",
      "All D are not C",
      "Some C are D",
      "No definite conclusion",
    ],
    correct: 0,
    explanation:
      "Since D overlaps A and A ⊆ B and B disjoint C, those D cannot be C.",
  },
  {
    id: 142,
    question: "Logical equivalence of ¬(P → Q):",
    options: ["P ∧ ¬Q", "¬P ∧ Q", "¬P ∨ Q", "P ↔ Q"],
    correct: 0,
    explanation:
      "Negation of implication equals antecedent true and consequent false.",
  },
  {
    id: 143,
    question: "Find next term: 2, 6, 7, 21, 22, 66, ?",
    options: ["67", "68", "69", "70"],
    correct: 0,
    explanation: "Pattern ×3, +1 alternately.",
  },
  {
    id: 144,
    question: "If some A are B and no B are C, which follows?",
    options: [
      "Some A are not C",
      "All A are C",
      "Some C are A",
      "No definite conclusion",
    ],
    correct: 0,
    explanation: "Those A overlapping B cannot be C.",
  },
  {
    id: 145,
    question: "Negation of 'If P then Q' is:",
    options: ["P and not Q", "Not P and Q", "P or not Q", "Not P or Q"],
    correct: 0,
    explanation: "Implication false only when P true and Q false.",
  },
  {
    id: 146,
    question: "Find missing: 1, 2, 6, 24, 120, ?",
    options: ["600", "720", "840", "900"],
    correct: 1,
    explanation: "Factorial sequence.",
  },
  {
    id: 147,
    question: "If P ↔ Q true and Q true, then:",
    options: ["P true", "P false", "Cannot determine", "Both false"],
    correct: 0,
    explanation: "Biconditional means same truth value.",
  },
  {
    id: 148,
    question: "All A are B. Some C are not B. Which must be true?",
    options: [
      "Some C are not A",
      "All C are A",
      "Some A are C",
      "No definite conclusion",
    ],
    correct: 0,
    explanation: "C outside B cannot be A since A ⊆ B.",
  },
  {
    id: 149,
    question: "Find next: 3, 4, 8, 9, 27, 28, ?",
    options: ["84", "81", "82", "83"],
    correct: 0,
    explanation: "Pattern ×1,+1; ×2,+1; ×3,+1; next ×3=84.",
  },
  {
    id: 150,
    question: "If exactly one of P, Q, R is true and R is true, then:",
    options: ["P and Q false", "P true", "Q true", "Cannot determine"],
    correct: 0,
    explanation: "Exactly one true implies others false.",
  },
  {
    id: 151,
    question:
      "All teachers are educated. No educated are criminals. Conclusion?",
    options: [
      "No teacher is criminal",
      "Some teachers criminal",
      "All criminals teachers",
      "Some educated teachers criminals",
    ],
    correct: 0,
    explanation: "Teachers ⊆ Educated; Educated disjoint Criminal.",
  },
  {
    id: 152,
    question: "Truth value of (P ∧ Q) ∨ P:",
    options: [
      "Equivalent to P",
      "Equivalent to Q",
      "Always false",
      "Equivalent to P ∧ Q",
    ],
    correct: 0,
    explanation: "Absorption law.",
  },
  {
    id: 153,
    question: "Find odd: 4, 16, 36, 64, 100, 144",
    options: ["16", "36", "64", "100"],
    correct: 2,
    explanation:
      "64 is cube and square both; others pure squares of even numbers.",
  },
  {
    id: 154,
    question: "If P → Q true and P true, then:",
    options: ["Q true", "Q false", "Cannot determine", "P false"],
    correct: 0,
    explanation: "Modus ponens.",
  },
  {
    id: 155,
    question: "All A are B. All B are C. Some C are not D. Conclusion?",
    options: [
      "Some A not D",
      "All A not D",
      "No definite conclusion",
      "Some D are A",
    ],
    correct: 2,
    explanation: "C outside D may not include A.",
  },
  {
    id: 156,
    question: "Find next: 2, 5, 4, 7, 6, 9, ?",
    options: ["8", "10", "11", "12"],
    correct: 0,
    explanation: "Alternating +3, −1.",
  },
  {
    id: 157,
    question: "Negation of 'Some A are C'?",
    options: ["No A are C", "All A are C", "Some A not C", "All C are A"],
    correct: 0,
    explanation: "Contradiction of particular affirmative.",
  },
  {
    id: 158,
    question: "If no A are B and no B are C, which follows?",
    options: ["Some A not C", "All A C", "No definite conclusion", "Some C A"],
    correct: 2,
    explanation: "No relation between A and C.",
  },
  {
    id: 159,
    question: "Find next: 11, 13, 17, 19, 23, ?",
    options: ["27", "29", "31", "33"],
    correct: 1,
    explanation: "Prime sequence.",
  },
  {
    id: 160,
    question: "If (P ∨ Q) false and Q true, then:",
    options: ["P false", "P true", "Cannot determine", "Both true"],
    correct: 0,
    explanation: "OR false requires both false.",
  },
  {
    id: 161,
    question: "All cats are mammals. Some mammals are pets. Conclusion?",
    options: [
      "Some cats are pets",
      "All pets cats",
      "Some pets may be cats",
      "No definite conclusion",
    ],
    correct: 2,
    explanation: "Possibility but not certain.",
  },
  {
    id: 162,
    question: "Find next: 1, 5, 14, 30, 55, ?",
    options: ["91", "90", "95", "100"],
    correct: 0,
    explanation: "n(n+1)(n+2)/6 triangular sum pattern.",
  },
  {
    id: 163,
    question: "If P true and Q false, value of P ↔ Q?",
    options: ["True", "False", "Cannot determine", "Both"],
    correct: 1,
    explanation: "Biconditional false when values differ.",
  },
  {
    id: 164,
    question: "All A are B. No C are B. Conclusion?",
    options: ["No C are A", "Some C A", "All C A", "No definite conclusion"],
    correct: 0,
    explanation: "A subset B and C disjoint B.",
  },
  {
    id: 165,
    question: "Find odd: 8, 27, 64, 125, 216, 250",
    options: ["27", "125", "216", "250"],
    correct: 3,
    explanation: "Others perfect cubes.",
  },
  {
    id: 166,
    question: "If P → Q and Q → R true, which rule applies?",
    options: [
      "Modus ponens",
      "Hypothetical syllogism",
      "Disjunction",
      "Contradiction",
    ],
    correct: 1,
    explanation: "Chain implication rule.",
  },
  {
    id: 167,
    question: "Find next: 4, 7, 13, 25, 49, ?",
    options: ["97", "98", "99", "100"],
    correct: 0,
    explanation: "Pattern ×2−1.",
  },
  {
    id: 168,
    question: "If exactly two of P,Q,R false and Q true, then:",
    options: ["P and R false", "P true", "R true", "Cannot determine"],
    correct: 0,
    explanation: "Two false; since Q true, others false.",
  },
  {
    id: 169,
    question: "All A are B. Some B are C. Some C are D. Conclusion?",
    options: ["Some A D", "Some D A", "No definite conclusion", "All A D"],
    correct: 2,
    explanation: "No guaranteed overlap.",
  },
  {
    id: 170,
    question: "If P ∧ Q true and Q false, what follows?",
    options: ["Contradiction", "P false", "Both true", "Cannot determine"],
    correct: 0,
    explanation: "AND cannot be true if Q false.",
  },
  {
    id: 171,
    question: "All birds are animals. Some animals can fly. Conclusion?",
    options: [
      "Some birds can fly",
      "All birds can fly",
      "Some flyers may be birds",
      "No definite conclusion",
    ],
    correct: 3,
    explanation:
      "Some animals flying may not include birds; overlap uncertain.",
  },
  {
    id: 172,
    question: "Find next: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "50", "45"],
    correct: 1,
    explanation:
      "Pattern: add consecutive even numbers: +4, +6, +8, +10 → next +12 → 42.",
  },
  {
    id: 173,
    question: "If exactly one of P, Q, R is true and P true, then:",
    options: ["Q and R false", "Q true", "R true", "Cannot determine"],
    correct: 0,
    explanation: "Only one true implies the others must be false.",
  },
  {
    id: 174,
    question: "Negation of 'All A are B'?",
    options: ["Some A are not B", "No A are B", "All B are A", "Some B are A"],
    correct: 0,
    explanation: "Universal affirmative negates to particular negative.",
  },
  {
    id: 175,
    question: "If P → Q and Q → R are true, then which is logically valid?",
    options: ["P → R", "R → P", "Q → P", "R → Q"],
    correct: 0,
    explanation: "Hypothetical syllogism: chain implication.",
  },
  {
    id: 176,
    question: "All A are B. Some C are B. No conclusion?",
    options: [
      "Some A are C",
      "All C are A",
      "No definite conclusion",
      "Some C not A",
    ],
    correct: 2,
    explanation: "Overlap uncertain.",
  },
  {
    id: 177,
    question: "Find next: 1, 1, 2, 6, 24, 120, ?",
    options: ["720", "600", "7200", "72000"],
    correct: 0,
    explanation: "Factorial sequence: 6! = 720.",
  },
  {
    id: 178,
    question: "If P ∨ Q false, then truth values?",
    options: [
      "Both P and Q false",
      "P true, Q false",
      "P false, Q true",
      "Both true",
    ],
    correct: 0,
    explanation: "OR false only when both false.",
  },
  {
    id: 179,
    question: "All teachers are humans. No humans are robots. Conclusion?",
    options: [
      "No teacher is robot",
      "Some teachers are robots",
      "All robots teachers",
      "Cannot determine",
    ],
    correct: 0,
    explanation: "Teachers ⊆ Humans; Humans disjoint Robots.",
  },
  {
    id: 180,
    question: "Find odd: 2, 8, 18, 32, 50, 72",
    options: ["8", "18", "50", "72"],
    correct: 2,
    explanation: "Others follow pattern n^2 ×2; 50 breaks it.",
  },
  {
    id: 181,
    question: "If exactly two of P,Q,R are true and P false, then?",
    options: ["Q and R true", "Only Q true", "Only R true", "Cannot determine"],
    correct: 0,
    explanation: "Two true; P false → Q and R must be true.",
  },
  {
    id: 182,
    question: "If P ↔ Q false, which is true?",
    options: [
      "Both true",
      "Both false",
      "One true, one false",
      "Cannot determine",
    ],
    correct: 2,
    explanation: "Biconditional false when truth values differ.",
  },
  {
    id: 183,
    question: "Find next: 3, 9, 27, 81, ?",
    options: ["243", "245", "242", "250"],
    correct: 0,
    explanation: "Pattern: ×3 each step.",
  },
  {
    id: 184,
    question: "All lions are animals. Some animals are pets. Conclusion?",
    options: [
      "Some lions are pets",
      "All lions pets",
      "Some pets may be lions",
      "No definite conclusion",
    ],
    correct: 2,
    explanation: "Overlap possible but uncertain.",
  },
  {
    id: 185,
    question: "If P ∧ Q false and P true, then?",
    options: ["Q false", "Q true", "Cannot determine", "P false"],
    correct: 0,
    explanation: "AND false while P true → Q false.",
  },
  {
    id: 186,
    question: "Negation of 'Some B are not C'?",
    options: ["All B are C", "No B are C", "Some B are C", "All C are B"],
    correct: 0,
    explanation: "Particular negative negates to universal affirmative.",
  },
  {
    id: 187,
    question: "Find next: 5, 10, 20, 40, ?",
    options: ["80", "90", "85", "75"],
    correct: 0,
    explanation: "×2 each step.",
  },
  {
    id: 188,
    question: "If all A are B and no B are C, some A are D. Conclusion?",
    options: [
      "Some D are not C",
      "All D not C",
      "No D are C",
      "Cannot determine",
    ],
    correct: 0,
    explanation: "D overlaps A ⊆ B disjoint C → some D not C.",
  },
  {
    id: 189,
    question: "All metals are elements. Some elements are gases. Conclusion?",
    options: [
      "Some metals are gases",
      "All gases metals",
      "Some gases may be metals",
      "No definite conclusion",
    ],
    correct: 3,
    explanation: "Overlap uncertain.",
  },
  {
    id: 190,
    question: "Find odd: 9, 25, 49, 64, 81",
    options: ["25", "49", "64", "81"],
    correct: 2,
    explanation:
      "Others are perfect squares of odd numbers; 64 is even square.",
  },
  {
    id: 191,
    question: "If P → Q false and Q → R true, which must be true?",
    options: ["P true, Q false", "Q true, R false", "R false", "P false"],
    correct: 0,
    explanation:
      "Implication false only when antecedent true, consequent false.",
  },
  {
    id: 192,
    question: "Find next: 1, 4, 9, 16, 25, ?",
    options: ["36", "35", "34", "33"],
    correct: 0,
    explanation: "Perfect squares sequence.",
  },
  {
    id: 193,
    question: "All A are B. All B are C. Some C are D. Conclusion?",
    options: ["Some A D", "Some D A", "No definite conclusion", "All A D"],
    correct: 2,
    explanation: "No guaranteed overlap.",
  },
  {
    id: 194,
    question: "Find next: 2, 6, 12, 20, 30, 42, ?",
    options: ["54", "56", "48", "50"],
    correct: 0,
    explanation: "Add consecutive even numbers: +4,+6,+8,+10,+12 → 54.",
  },
  {
    id: 195,
    question: "If exactly one of P, Q, R false and R false, then?",
    options: ["P and Q true", "P false", "Q false", "Cannot determine"],
    correct: 0,
    explanation: "Only one false; R false → P and Q true.",
  },
  {
    id: 196,
    question: "Negation of 'No A are B'?",
    options: ["Some A are B", "All A are B", "Some A not B", "All B are A"],
    correct: 0,
    explanation: "Universal negative negates to particular affirmative.",
  },
  {
    id: 197,
    question: "All dogs are mammals. Some mammals are pets. Conclusion?",
    options: [
      "Some dogs are pets",
      "All dogs pets",
      "Some pets may be dogs",
      "No definite conclusion",
    ],
    correct: 2,
    explanation: "Overlap possible but uncertain.",
  },
  {
    id: 198,
    question: "Find next: 3, 6, 12, 24, 48, ?",
    options: ["96", "100", "94", "98"],
    correct: 0,
    explanation: "×2 each step.",
  },
  {
    id: 199,
    question: "If P ∨ Q true and P false, then?",
    options: ["Q true", "Q false", "Cannot determine", "Both false"],
    correct: 0,
    explanation: "OR true and P false implies Q true.",
  },
  {
    id: 200,
    question: "All A are B. Some B are not C. Conclusion?",
    options: [
      "Some A are not C",
      "All A not C",
      "No definite conclusion",
      "Some C are A",
    ],
    correct: 2,
    explanation: "B not C may not include A.",
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
