// Demo Questions (later 1000 replace kar dena)
const allQuestions = [
  {
    id: 1,
    question:
      "Under Article 13 of the Constitution of India, what is the effect of a pre-constitutional law inconsistent with a Fundamental Right?",
    options: [
      "It becomes void ab initio",
      "It is repealed automatically",
      "It becomes void to the extent of inconsistency",
      "It remains fully enforceable",
    ],
    correct: 2,
    explanation:
      "Article 13(1) states that pre-constitutional laws inconsistent with Fundamental Rights are void to the extent of inconsistency, not entirely void.",
  },
  {
    id: 2,
    question:
      "Under Section 300 IPC, culpable homicide is murder if the act is done with the intention of causing bodily injury sufficient in the ordinary course of nature to cause death. This principle was clarified in which case?",
    options: [
      "Virsa Singh v State of Punjab",
      "Bachan Singh v State of Punjab",
      "Kehar Singh v State",
      "State of Andhra Pradesh v Rayavarapu Punnayya",
    ],
    correct: 0,
    explanation:
      "In Virsa Singh v State of Punjab, the Supreme Court clarified the interpretation of 'bodily injury sufficient in the ordinary course of nature to cause death' under Section 300.",
  },
  {
    id: 3,
    question:
      "Under the Indian Contract Act, 1872, which of the following agreements is void?",
    options: [
      "Agreement in restraint of marriage",
      "Agreement induced by undue influence",
      "Agreement induced by misrepresentation",
      "Agreement made under coercion",
    ],
    correct: 0,
    explanation:
      "Section 26 of the Indian Contract Act declares agreements in restraint of marriage (other than that of a minor) void.",
  },
  {
    id: 4,
    question:
      "Which writ is issued to quash the order of a lower court passed without jurisdiction?",
    options: ["Mandamus", "Certiorari", "Prohibition", "Habeas Corpus"],
    correct: 1,
    explanation:
      "Certiorari is issued to quash orders of lower courts or tribunals passed without or in excess of jurisdiction.",
  },
  {
    id: 5,
    question:
      "Under Section 73 of the Indian Contract Act, damages are not recoverable for:",
    options: [
      "Loss arising naturally in the usual course of things",
      "Loss which parties knew to be likely at contract formation",
      "Remote and indirect loss",
      "Direct loss due to breach",
    ],
    correct: 2,
    explanation:
      "Section 73 excludes compensation for remote and indirect losses resulting from breach of contract.",
  },
  {
    id: 6,
    question:
      "Under the Indian Evidence Act, a confession made in police custody is admissible if:",
    options: [
      "It is voluntary",
      "It is recorded in writing",
      "It leads to discovery of a fact",
      "It is signed by the accused",
    ],
    correct: 2,
    explanation:
      "Under Section 27 of the Evidence Act, only that portion of a statement leading to discovery of a fact is admissible.",
  },
  {
    id: 7,
    question:
      "Which of the following is an essential condition for valid classification under Article 14?",
    options: [
      "Uniform application to all citizens",
      "Intelligible differentia with rational nexus to the objective",
      "Approval by the President",
      "Majority support in Parliament",
    ],
    correct: 1,
    explanation:
      "Article 14 permits reasonable classification based on intelligible differentia and rational nexus with the object sought to be achieved.",
  },
  {
    id: 8,
    question: "Under Section 107 IPC, abetment includes:",
    options: [
      "Instigation only",
      "Conspiracy only",
      "Intentional aiding only",
      "Instigation, conspiracy, or intentional aiding",
    ],
    correct: 3,
    explanation:
      "Section 107 IPC defines abetment as instigation, conspiracy, or intentional aiding.",
  },
  {
    id: 9,
    question:
      "Under tort law, the maxim 'res ipsa loquitur' primarily relates to:",
    options: ["Defamation", "Strict liability", "Negligence", "Nuisance"],
    correct: 2,
    explanation:
      "Res ipsa loquitur applies in negligence cases where the nature of the accident implies negligence.",
  },
  {
    id: 10,
    question:
      "Under Article 20(1) of the Constitution, which principle is protected?",
    options: [
      "Double jeopardy",
      "Protection against ex post facto laws",
      "Right to counsel",
      "Right to privacy",
    ],
    correct: 1,
    explanation:
      "Article 20(1) prohibits conviction for an act that was not an offence at the time it was committed (ex post facto law).",
  },
  {
    id: 11,
    question: "An agreement without consideration is void unless it is:",
    options: [
      "In writing and registered and made on account of natural love and affection",
      "Made between strangers",
      "Oral in nature",
      "Commercial in purpose",
    ],
    correct: 0,
    explanation:
      "Section 25 allows agreements without consideration if in writing, registered, and made out of natural love and affection between near relatives.",
  },
  {
    id: 12,
    question: "Under IPC, attempt to murder is punishable under:",
    options: ["Section 302", "Section 304", "Section 307", "Section 308"],
    correct: 2,
    explanation: "Section 307 IPC deals with attempt to murder.",
  },
  {
    id: 13,
    question:
      "Under Article 21, the right to life has been interpreted to include which of the following?",
    options: [
      "Right to livelihood",
      "Right to privacy",
      "Right to clean environment",
      "All of the above",
    ],
    correct: 3,
    explanation:
      "The Supreme Court has expansively interpreted Article 21 to include livelihood, privacy, and clean environment.",
  },
  {
    id: 14,
    question:
      "Under the Indian Evidence Act, dying declaration is admissible under which provision?",
    options: ["Section 24", "Section 25", "Section 32", "Section 114"],
    correct: 2,
    explanation:
      "Section 32(1) makes statements relating to cause of death relevant as dying declarations.",
  },
  {
    id: 15,
    question: "Under tort law, strict liability was established in which case?",
    options: [
      "Donoghue v Stevenson",
      "Rylands v Fletcher",
      "Ashby v White",
      "Hadley v Baxendale",
    ],
    correct: 1,
    explanation:
      "Rylands v Fletcher established the principle of strict liability.",
  },
  {
    id: 16,
    question:
      "Under Article 19(1)(a), reasonable restrictions can be imposed in the interest of:",
    options: [
      "Public order",
      "Defamation",
      "Sovereignty and integrity of India",
      "All of the above",
    ],
    correct: 3,
    explanation:
      "Article 19(2) permits reasonable restrictions including public order, defamation, and sovereignty and integrity of India.",
  },
  {
    id: 17,
    question: "Under IPC, criminal conspiracy is defined under:",
    options: ["Section 107", "Section 120A", "Section 34", "Section 149"],
    correct: 1,
    explanation: "Section 120A IPC defines criminal conspiracy.",
  },
  {
    id: 18,
    question: "Under the Indian Contract Act, a contract induced by fraud is:",
    options: [
      "Void",
      "Voidable at the option of the aggrieved party",
      "Illegal",
      "Unenforceable in all cases",
    ],
    correct: 1,
    explanation:
      "Section 19 provides that a contract induced by fraud is voidable at the option of the aggrieved party.",
  },
  {
    id: 19,
    question:
      "The doctrine of basic structure was reaffirmed in which case limiting Parliament’s amending power?",
    options: [
      "Minerva Mills v Union of India",
      "ADM Jabalpur v Shivkant Shukla",
      "Shankari Prasad v Union of India",
      "Indra Sawhney v Union of India",
    ],
    correct: 0,
    explanation:
      "Minerva Mills reaffirmed the basic structure doctrine and limited Parliament’s amending power.",
  },
  {
    id: 20,
    question:
      "Under Section 76 IPC, an act done by a person who is bound by law to do it is:",
    options: [
      "An offence",
      "Not an offence if done under mistake of fact",
      "Always punishable",
      "Civilly liable only",
    ],
    correct: 1,
    explanation:
      "Section 76 IPC provides that an act done by a person bound by law, or under mistake of fact believing himself bound by law, is not an offence.",
  },
  {
    id: 21,
    question:
      "Under Article 368, Parliament’s power to amend the Constitution does NOT extend to which of the following?",
    options: [
      "Amending Fundamental Rights",
      "Altering the Preamble",
      "Destroying the basic structure of the Constitution",
      "Amending provisions relating to the judiciary",
    ],
    correct: 2,
    explanation:
      "As held in Kesavananda Bharati v State of Kerala, Parliament cannot alter or destroy the basic structure of the Constitution.",
  },
  {
    id: 22,
    question:
      "Under Section 34 IPC, joint liability arises when a criminal act is done by several persons:",
    options: [
      "With similar intention",
      "With common intention",
      "With common object",
      "With prior written agreement",
    ],
    correct: 1,
    explanation:
      "Section 34 IPC imposes joint liability when a criminal act is done by several persons in furtherance of common intention.",
  },
  {
    id: 23,
    question:
      "Under the Indian Contract Act, which of the following is NOT an essential element of a valid contract?",
    options: [
      "Lawful consideration",
      "Competency of parties",
      "Registration of agreement",
      "Free consent",
    ],
    correct: 2,
    explanation:
      "Registration is not an essential element of all contracts unless specifically required by law.",
  },
  {
    id: 24,
    question: "Under Article 226, High Courts can issue writs:",
    options: [
      "Only for enforcement of Fundamental Rights",
      "Only against State authorities",
      "For enforcement of Fundamental Rights and for any other purpose",
      "Only against judicial bodies",
    ],
    correct: 2,
    explanation:
      "Article 226 empowers High Courts to issue writs for enforcement of Fundamental Rights and for any other purpose.",
  },
  {
    id: 25,
    question:
      "Under the doctrine of proportionality in constitutional law, a restriction must:",
    options: [
      "Be arbitrary but reasonable",
      "Have no nexus with objective",
      "Be necessary and least restrictive to achieve the objective",
      "Be approved by majority vote",
    ],
    correct: 2,
    explanation:
      "Doctrine of proportionality requires that restrictions be necessary and the least restrictive means to achieve a legitimate aim.",
  },
  {
    id: 26,
    question:
      "Under IPC, knowledge that an act is likely to cause death distinguishes culpable homicide from:",
    options: [
      "Murder",
      "Grievous hurt",
      "Rash and negligent act under Section 304A",
      "Abetment",
    ],
    correct: 2,
    explanation:
      "Section 304A deals with death by negligence without intention or knowledge; knowledge distinguishes culpable homicide.",
  },
  {
    id: 27,
    question:
      "Under the Indian Evidence Act, the burden of proof in civil cases generally lies on:",
    options: ["The defendant", "The plaintiff", "The court", "Both equally"],
    correct: 1,
    explanation:
      "Section 101 states that the person who asserts must prove; generally, the plaintiff bears the burden.",
  },
  {
    id: 28,
    question:
      "Under Section 92 of the Evidence Act, oral evidence is excluded when:",
    options: [
      "The contract is written and its terms are sought to be contradicted",
      "The witness is unreliable",
      "The document is unsigned",
      "The agreement is void",
    ],
    correct: 0,
    explanation:
      "Section 92 bars oral evidence to contradict, vary, add to, or subtract from written contract terms.",
  },
  {
    id: 29,
    question:
      "Under Article 19(1)(g), the right to profession can be restricted by:",
    options: [
      "Absolute executive discretion",
      "Reasonable restrictions in the interest of general public",
      "Any administrative circular",
      "Judicial guidelines only",
    ],
    correct: 1,
    explanation:
      "Article 19(6) permits reasonable restrictions in the interest of the general public.",
  },
  {
    id: 30,
    question: "Under tort law, vicarious liability arises when:",
    options: [
      "A person commits a crime",
      "An employer is liable for acts of employee in course of employment",
      "A contract is breached",
      "A judge commits error",
    ],
    correct: 1,
    explanation:
      "Vicarious liability makes an employer liable for wrongful acts of an employee done in course of employment.",
  },
  {
    id: 31,
    question: "Under IPC, private defence extends to causing death when:",
    options: [
      "There is apprehension of grievous hurt only",
      "There is reasonable apprehension of death or grievous hurt",
      "Property is stolen",
      "Police fail to respond",
    ],
    correct: 1,
    explanation:
      "Sections 100 IPC allows causing death in private defence if there is reasonable apprehension of death or grievous hurt.",
  },
  {
    id: 32,
    question:
      "Under Section 73 of the Contract Act, damages for breach are assessed based on which landmark English case?",
    options: [
      "Donoghue v Stevenson",
      "Hadley v Baxendale",
      "Carlill v Carbolic Smoke Ball",
      "Rylands v Fletcher",
    ],
    correct: 1,
    explanation:
      "Section 73 incorporates principles from Hadley v Baxendale regarding foreseeability of damages.",
  },
  {
    id: 33,
    question: "Under Article 20(2), double jeopardy protects against:",
    options: [
      "Multiple FIRs",
      "Punishment and prosecution for same offence more than once",
      "Civil liability",
      "Departmental inquiry",
    ],
    correct: 1,
    explanation:
      "Article 20(2) provides that no person shall be prosecuted and punished for the same offence more than once.",
  },
  {
    id: 34,
    question: "Under IPC Section 149, liability is imposed when:",
    options: [
      "There is common intention",
      "There is unlawful assembly with common object",
      "There is conspiracy",
      "There is negligence",
    ],
    correct: 1,
    explanation:
      "Section 149 IPC imposes liability for offences committed by any member of an unlawful assembly in prosecution of common object.",
  },
  {
    id: 35,
    question:
      "Under the doctrine of severability, if part of a statute is unconstitutional:",
    options: [
      "Entire statute becomes void",
      "Only unconstitutional portion is void if separable",
      "President must repeal it",
      "Court cannot intervene",
    ],
    correct: 1,
    explanation:
      "Doctrine of severability holds that only the unconstitutional portion is void if it can be separated.",
  },
  {
    id: 36,
    question:
      "Under Section 300 Exception 4 IPC, culpable homicide is not murder when:",
    options: [
      "There is premeditation",
      "There is sudden fight without premeditation in heat of passion",
      "There is conspiracy",
      "There is intention to cause death",
    ],
    correct: 1,
    explanation:
      "Exception 4 applies to sudden fight without premeditation in heat of passion.",
  },
  {
    id: 37,
    question:
      "Under the Indian Contract Act, mistake of fact by both parties renders the agreement:",
    options: ["Void", "Voidable", "Illegal", "Enforceable"],
    correct: 0,
    explanation:
      "Section 20 states that bilateral mistake of fact essential to agreement makes it void.",
  },
  {
    id: 38,
    question:
      "Under Article 32, the right to move the Supreme Court is itself:",
    options: [
      "A statutory right",
      "A legal remedy only",
      "A Fundamental Right",
      "A discretionary power",
    ],
    correct: 2,
    explanation:
      "Dr Ambedkar called Article 32 the heart and soul; it is itself a Fundamental Right.",
  },
  {
    id: 39,
    question: "Under Evidence Act, estoppel is governed by:",
    options: ["Section 101", "Section 24", "Section 115", "Section 73"],
    correct: 2,
    explanation: "Section 115 of the Indian Evidence Act deals with estoppel.",
  },
  {
    id: 40,
    question: "Under IPC, abetment of suicide is punishable under:",
    options: ["Section 306", "Section 309", "Section 107", "Section 120A"],
    correct: 0,
    explanation:
      "Section 306 IPC prescribes punishment for abetment of suicide.",
  },
  {
    id: 41,
    question:
      "Under Article 141 of the Constitution of India, the law declared by the Supreme Court is binding on:",
    options: [
      "All courts within the territory of India",
      "Only High Courts",
      "Only subordinate courts",
      "All tribunals but not courts",
    ],
    correct: 0,
    explanation:
      "Article 141 provides that the law declared by the Supreme Court is binding on all courts within the territory of India.",
  },
  {
    id: 42,
    question: "Under Article 142, the Supreme Court may:",
    options: [
      "Amend the Constitution",
      "Pass any decree necessary for doing complete justice",
      "Invalidate any statute without hearing",
      "Override Fundamental Rights",
    ],
    correct: 1,
    explanation:
      "Article 142 empowers the Supreme Court to pass any decree or order necessary for doing complete justice in any cause or matter before it.",
  },
  {
    id: 43,
    question:
      "The test for obscenity in India was substantially modified in which case by adopting the 'community standards test'?",
    options: [
      "Ranjit Udeshi v State of Maharashtra",
      "Aveek Sarkar v State of West Bengal",
      "K A Abbas v Union of India",
      "Subramanian Swamy v Union of India",
    ],
    correct: 1,
    explanation:
      "In Aveek Sarkar v State of West Bengal, the Supreme Court adopted the contemporary community standards test for obscenity.",
  },
  {
    id: 44,
    question:
      "Under IPC, the distinction between Section 299 and Section 300 primarily rests upon:",
    options: [
      "Location of injury",
      "Nature of weapon used",
      "Degree of intention and knowledge",
      "Number of accused",
    ],
    correct: 2,
    explanation:
      "The distinction between culpable homicide and murder depends on the degree of intention and knowledge accompanying the act.",
  },
  {
    id: 45,
    question:
      "Under Section 24 of the Indian Contract Act, an agreement is void if any part of a single consideration for one or more objects is:",
    options: ["Uncertain", "Unlawful", "Oral", "Unregistered"],
    correct: 1,
    explanation:
      "Section 24 states that if any part of a single consideration for one or more objects is unlawful, the agreement is void.",
  },
  {
    id: 46,
    question: "The doctrine of pith and substance is applied to determine:",
    options: [
      "Validity of delegated legislation",
      "Territorial jurisdiction",
      "Legislative competence in federal distribution of powers",
      "Judicial review scope",
    ],
    correct: 2,
    explanation:
      "Doctrine of pith and substance determines the true nature of legislation to test legislative competence under Seventh Schedule.",
  },
  {
    id: 47,
    question:
      "Under the Indian Evidence Act, facts forming part of the same transaction are relevant under:",
    options: ["Section 6", "Section 8", "Section 10", "Section 24"],
    correct: 0,
    explanation:
      "Section 6 embodies the doctrine of res gestae, making facts forming part of the same transaction relevant.",
  },
  {
    id: 48,
    question:
      "Under Article 254, in case of repugnancy between State and Central law on Concurrent List:",
    options: [
      "State law prevails automatically",
      "Central law prevails unless State law has Presidential assent",
      "Both become void",
      "High Court decides final validity",
    ],
    correct: 1,
    explanation:
      "Article 254 provides that Central law prevails unless State law has received Presidential assent.",
  },
  {
    id: 49,
    question: "In negligence law, duty of care principle was established in:",
    options: [
      "Rylands v Fletcher",
      "Donoghue v Stevenson",
      "Hadley v Baxendale",
      "Carlill v Carbolic Smoke Ball",
    ],
    correct: 1,
    explanation:
      "Donoghue v Stevenson established the neighbour principle forming the basis of duty of care in negligence.",
  },
  {
    id: 50,
    question:
      "Under IPC, preparation is punishable in which of the following offences?",
    options: ["Murder", "Theft", "Dacoity", "Cheating"],
    correct: 2,
    explanation:
      "Preparation is generally not punishable except in specific offences such as dacoity under Section 399 IPC.",
  },
  {
    id: 51,
    question: "Under Article 300A, deprivation of property must be by:",
    options: [
      "Executive order",
      "Authority of law",
      "Judicial discretion",
      "Police notification",
    ],
    correct: 1,
    explanation:
      "Article 300A states that no person shall be deprived of property save by authority of law.",
  },
  {
    id: 52,
    question:
      "Under the Indian Contract Act, quantum meruit is applicable when:",
    options: [
      "Contract is fully performed",
      "Contract becomes void or is discovered void",
      "There is no consideration",
      "Agreement is illegal",
    ],
    correct: 1,
    explanation:
      "Quantum meruit allows reasonable compensation when a contract becomes void or is discovered void.",
  },
  {
    id: 53,
    question: "Under IPC, intention and knowledge are presumed under:",
    options: [
      "Section 76",
      "Section 105 Evidence Act",
      "Section 114 Evidence Act",
      "General principles inferred from circumstances",
    ],
    correct: 3,
    explanation:
      "Intention and knowledge are inferred from surrounding circumstances under general criminal jurisprudence.",
  },
  {
    id: 54,
    question: "Under Article 361, the President of India:",
    options: [
      "Is absolutely immune from all proceedings",
      "Has immunity from criminal proceedings during term of office",
      "Can be arrested with parliamentary approval",
      "Is immune only in civil cases",
    ],
    correct: 1,
    explanation:
      "Article 361 provides immunity from criminal proceedings during term of office.",
  },
  {
    id: 55,
    question:
      "Under Section 10 of the Evidence Act, acts of co-conspirators are relevant:",
    options: [
      "After arrest only",
      "After conspiracy ends",
      "During continuance of conspiracy",
      "Only if written",
    ],
    correct: 2,
    explanation:
      "Section 10 makes acts and statements of co-conspirators relevant during continuance of conspiracy.",
  },
  {
    id: 56,
    question:
      "Under IPC Section 94, compulsion by threat of instant death is not a defence in case of:",
    options: ["Theft", "Robbery", "Murder", "Extortion"],
    correct: 2,
    explanation:
      "Section 94 IPC excludes murder and offences against the State from defence of compulsion.",
  },
  {
    id: 57,
    question: "Doctrine of harmonious construction is used to:",
    options: [
      "Invalidate statutes",
      "Interpret conflicting provisions of same statute",
      "Amend constitutional provisions",
      "Limit judicial review",
    ],
    correct: 1,
    explanation:
      "Doctrine of harmonious construction resolves conflicts between provisions to give effect to both.",
  },
  {
    id: 58,
    question:
      "Under Article 131, the Supreme Court has original jurisdiction in disputes between:",
    options: [
      "Private individuals",
      "State and private company",
      "Union and one or more States",
      "Citizens of different states",
    ],
    correct: 2,
    explanation:
      "Article 131 grants original jurisdiction in disputes between Union and States.",
  },
  {
    id: 59,
    question:
      "Under IPC Section 300 Exception 2, culpable homicide is not murder if:",
    options: [
      "Act is done in good faith exceeding right of private defence",
      "There is sudden provocation",
      "There is negligence",
      "There is conspiracy",
    ],
    correct: 0,
    explanation:
      "Exception 2 applies where right of private defence is exceeded in good faith without premeditation.",
  },
  {
    id: 60,
    question:
      "Under the Evidence Act, presumption as to legitimacy of a child born during marriage is under:",
    options: ["Section 112", "Section 101", "Section 24", "Section 73"],
    correct: 0,
    explanation:
      "Section 112 provides presumption of legitimacy for child born during valid marriage.",
  },
  {
    id: 61,
    question:
      "Under Article 368, amendment affecting federal provisions requires:",
    options: [
      "Simple majority",
      "Special majority only",
      "Special majority plus ratification by half of States",
      "Referendum",
    ],
    correct: 2,
    explanation:
      "Amendments affecting federal structure require special majority and ratification by half of State legislatures.",
  },
  {
    id: 62,
    question: "Under IPC, grievous hurt is defined under:",
    options: ["Section 319", "Section 320", "Section 321", "Section 322"],
    correct: 1,
    explanation:
      "Section 320 IPC defines grievous hurt and lists eight categories.",
  },
  {
    id: 63,
    question: "Under Article 19(1)(b), the right guaranteed is:",
    options: [
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom of movement",
      "Freedom of residence",
    ],
    correct: 1,
    explanation:
      "Article 19(1)(b) guarantees the right to assemble peaceably and without arms.",
  },
  {
    id: 64,
    question: "Under the Indian Contract Act, anticipatory breach occurs when:",
    options: [
      "Performance is delayed",
      "Promisor refuses performance before due date",
      "Consideration fails",
      "Contract is void",
    ],
    correct: 1,
    explanation:
      "Anticipatory breach occurs when promisor repudiates contract before performance is due.",
  },
  {
    id: 65,
    question: "Under IPC Section 107, abetment by conspiracy requires:",
    options: [
      "Mere agreement",
      "Agreement plus act or illegal omission in pursuance",
      "Written conspiracy",
      "Police complaint",
    ],
    correct: 1,
    explanation:
      "Under Section 107, conspiracy requires agreement plus act or illegal omission in pursuance.",
  },
  {
    id: 66,
    question:
      "Under Article 32, which writ literally means 'produce the body'?",
    options: ["Mandamus", "Certiorari", "Habeas Corpus", "Prohibition"],
    correct: 2,
    explanation:
      "Habeas Corpus means 'produce the body' and safeguards personal liberty.",
  },
  {
    id: 67,
    question: "Under Evidence Act, accomplice evidence is dealt with under:",
    options: ["Section 24", "Section 133", "Section 101", "Section 115"],
    correct: 1,
    explanation:
      "Section 133 states that accomplice is competent witness, though corroboration rule exists.",
  },
  {
    id: 68,
    question: "Under IPC Section 52, good faith requires:",
    options: [
      "Honest belief",
      "Due care and attention",
      "Majority support",
      "Legal advice",
    ],
    correct: 1,
    explanation:
      "Section 52 defines good faith as act done with due care and attention.",
  },
  {
    id: 69,
    question: "Under Article 265, tax can be levied or collected only by:",
    options: [
      "Executive order",
      "Authority of law",
      "Judicial direction",
      "Municipal resolution",
    ],
    correct: 1,
    explanation:
      "Article 265 mandates that no tax shall be levied or collected except by authority of law.",
  },
  {
    id: 70,
    question:
      "Under the doctrine of eclipse, post-constitutional laws violating Fundamental Rights are:",
    options: [
      "Completely void ab initio",
      "Dormant until amendment",
      "Revived automatically",
      "Always enforceable",
    ],
    correct: 0,
    explanation:
      "Post-constitutional laws violating Fundamental Rights are void ab initio under Article 13(2).",
  },
  {
    id: 71,
    question:
      "Under Article 123 of the Constitution of India, an Ordinance promulgated by the President must be laid before Parliament and will cease to operate after:",
    options: [
      "Four weeks from reassembly of Parliament",
      "Six weeks from reassembly of Parliament",
      "Six months from promulgation",
      "Fourteen days from reassembly",
    ],
    correct: 1,
    explanation:
      "Article 123(2)(a) states that an Ordinance ceases to operate six weeks after reassembly of Parliament unless approved.",
  },
  {
    id: 72,
    question:
      "Under Section 53 IPC, which of the following is NOT a punishment?",
    options: [
      "Death",
      "Imprisonment for life",
      "Forfeiture of property",
      "Solitary confinement",
    ],
    correct: 3,
    explanation:
      "Section 53 IPC lists punishments; solitary confinement is regulated separately under Sections 73-74 and is not an independent punishment under Section 53.",
  },
  {
    id: 73,
    question:
      "Under Section 11 of the Indian Contract Act, a person is competent to contract if he:",
    options: [
      "Has attained majority, is of sound mind, and not disqualified by law",
      "Is above 16 years of age",
      "Is literate and earning",
      "Is married",
    ],
    correct: 0,
    explanation:
      "Section 11 requires majority, sound mind, and absence of legal disqualification.",
  },
  {
    id: 74,
    question: "Under Article 356, President’s Rule can be imposed if:",
    options: [
      "Governor resigns",
      "Financial emergency occurs",
      "Constitutional machinery in a State fails",
      "High Court declares it necessary",
    ],
    correct: 2,
    explanation:
      "Article 356 applies when the President is satisfied that constitutional machinery in a State has failed.",
  },
  {
    id: 75,
    question: "Under Section 378 IPC, theft requires:",
    options: [
      "Dishonest intention to take movable property out of possession without consent",
      "Use of force",
      "Presence of five persons",
      "Written agreement",
    ],
    correct: 0,
    explanation:
      "Section 378 IPC defines theft as dishonest moving of movable property out of possession without consent.",
  },
  {
    id: 76,
    question: "Under the Indian Evidence Act, admissions are relevant under:",
    options: ["Section 17", "Section 24", "Section 32", "Section 73"],
    correct: 0,
    explanation:
      "Section 17 defines admissions and Sections 17-23 deal with their relevance.",
  },
  {
    id: 77,
    question: "Under Article 19(1)(d), citizens have the right:",
    options: [
      "To reside in any part of India",
      "To assemble peaceably",
      "To move freely throughout the territory of India",
      "To form associations",
    ],
    correct: 2,
    explanation:
      "Article 19(1)(d) guarantees the right to move freely throughout India.",
  },
  {
    id: 78,
    question:
      "Under Section 52A IPC, harboring an offender is punishable when the offence is:",
    options: [
      "Non-cognizable",
      "Capital offence or serious offence specified",
      "Compoundable",
      "Bailable",
    ],
    correct: 1,
    explanation:
      "Harboring offenders is punishable especially in serious offences such as capital offences as provided in IPC.",
  },
  {
    id: 79,
    question:
      "Under Section 68 of the Contract Act, necessaries supplied to a person incapable of contracting are recoverable from:",
    options: [
      "The person personally",
      "His guardian",
      "His property",
      "The State",
    ],
    correct: 2,
    explanation:
      "Section 68 allows reimbursement from the property of the incapable person.",
  },
  {
    id: 80,
    question:
      "Under Article 20(3), protection against self-incrimination extends to:",
    options: [
      "Oral testimony only",
      "Compelled testimony but not physical evidence",
      "All forms of evidence",
      "Voluntary confessions",
    ],
    correct: 1,
    explanation:
      "Article 20(3) protects against compelled testimonial evidence, not physical evidence like fingerprints.",
  },
  {
    id: 81,
    question:
      "Under IPC Section 82, nothing is an offence if done by a child under:",
    options: ["10 years", "12 years", "7 years", "5 years"],
    correct: 2,
    explanation:
      "Section 82 IPC grants absolute immunity to children under 7 years.",
  },
  {
    id: 82,
    question: "Under the Evidence Act, opinion of experts is relevant under:",
    options: ["Section 24", "Section 45", "Section 73", "Section 101"],
    correct: 1,
    explanation: "Section 45 makes expert opinions relevant.",
  },
  {
    id: 83,
    question:
      "Under Article 368, a constitutional amendment bill can be introduced in:",
    options: [
      "Lok Sabha only",
      "Rajya Sabha only",
      "Either House of Parliament",
      "Joint session only",
    ],
    correct: 2,
    explanation:
      "Article 368 allows introduction of amendment bill in either House.",
  },
  {
    id: 84,
    question: "Under IPC Section 141, unlawful assembly requires minimum:",
    options: ["Three persons", "Four persons", "Five persons", "Seven persons"],
    correct: 2,
    explanation:
      "Section 141 defines unlawful assembly as five or more persons with common object.",
  },
  {
    id: 85,
    question:
      "Under Section 37 of the Contract Act, parties to a contract must:",
    options: [
      "Perform or offer to perform their promises",
      "Register the contract",
      "Not alter terms",
      "Seek court approval",
    ],
    correct: 0,
    explanation:
      "Section 37 mandates performance or offer to perform contractual promises.",
  },
  {
    id: 86,
    question:
      "Under Article 217, a High Court judge holds office until the age of:",
    options: ["60 years", "62 years", "65 years", "68 years"],
    correct: 1,
    explanation: "High Court judges retire at 62 years.",
  },
  {
    id: 87,
    question:
      "Under IPC Section 300 Exception 3, culpable homicide is not murder if:",
    options: [
      "Act done by public servant exceeding powers in good faith",
      "Act done negligently",
      "Act done by mistake",
      "Act done under intoxication",
    ],
    correct: 0,
    explanation:
      "Exception 3 covers acts done by public servant exceeding powers in good faith.",
  },
  {
    id: 88,
    question:
      "Under Section 23 Contract Act, consideration is unlawful if it is opposed to:",
    options: [
      "Morality",
      "Public policy",
      "Both morality and public policy",
      "Custom only",
    ],
    correct: 2,
    explanation:
      "Section 23 declares consideration unlawful if immoral or opposed to public policy.",
  },
  {
    id: 89,
    question: "Under Article 124, Supreme Court judges retire at age:",
    options: ["62 years", "65 years", "68 years", "70 years"],
    correct: 1,
    explanation: "Supreme Court judges retire at 65 years.",
  },
  {
    id: 90,
    question: "Under IPC Section 84, insanity is a defence if:",
    options: [
      "Accused suffers any mental illness",
      "Accused incapable of knowing nature of act or that it is wrong",
      "Accused under stress",
      "Accused intoxicated",
    ],
    correct: 1,
    explanation:
      "Section 84 IPC embodies McNaughten rule: incapacity to know nature of act or wrongfulness.",
  },
  {
    id: 91,
    question: "Under Evidence Act Section 114, court may presume:",
    options: [
      "Any fact it considers probable",
      "Only statutory facts",
      "Only admissions",
      "Only expert opinion",
    ],
    correct: 0,
    explanation:
      "Section 114 allows court to presume existence of certain facts based on common course of events.",
  },
  {
    id: 92,
    question: "Under Article 19(1)(c), citizens have right to:",
    options: [
      "Form associations or unions",
      "Practice profession",
      "Reside anywhere",
      "Freedom of religion",
    ],
    correct: 0,
    explanation:
      "Article 19(1)(c) guarantees right to form associations or unions.",
  },
  {
    id: 93,
    question: "Under IPC Section 299, culpable homicide requires:",
    options: [
      "Intention or knowledge likely to cause death",
      "Negligence only",
      "Preparation only",
      "Conspiracy",
    ],
    correct: 0,
    explanation:
      "Section 299 requires intention or knowledge that act is likely to cause death.",
  },
  {
    id: 94,
    question: "Under Section 2(d) of Contract Act, consideration means:",
    options: [
      "Something in writing",
      "Something done or abstained at desire of promisor",
      "Money only",
      "Registration fee",
    ],
    correct: 1,
    explanation:
      "Section 2(d) defines consideration as something done or abstained at desire of promisor.",
  },
  {
    id: 95,
    question: "Under Article 32, writ jurisdiction of Supreme Court is:",
    options: [
      "Discretionary only",
      "Mandatory when Fundamental Right violated",
      "Limited to civil cases",
      "Limited to criminal cases",
    ],
    correct: 1,
    explanation:
      "Article 32 provides guaranteed remedy when Fundamental Rights are violated.",
  },
  {
    id: 96,
    question:
      "Under IPC Section 300 Exception 1, grave and sudden provocation must:",
    options: [
      "Be self-invited",
      "Be voluntarily sought",
      "Not be self-invited by offender",
      "Be written",
    ],
    correct: 2,
    explanation:
      "Provocation must not be self-invited or voluntarily provoked.",
  },
  {
    id: 97,
    question: "Under Evidence Act Section 73, court may:",
    options: [
      "Compare handwriting or signature",
      "Issue warrant",
      "Record confession",
      "Grant bail",
    ],
    correct: 0,
    explanation:
      "Section 73 empowers court to compare disputed handwriting or signature.",
  },
  {
    id: 98,
    question: "Under Article 25, freedom of religion is subject to:",
    options: [
      "Public order, morality and health",
      "Economic policy",
      "Judicial discretion",
      "Parliamentary majority",
    ],
    correct: 0,
    explanation:
      "Article 25 guarantees religious freedom subject to public order, morality and health.",
  },
  {
    id: 99,
    question: "Under IPC Section 107, instigation means:",
    options: [
      "Mere silence",
      "Active suggestion or encouragement to commit offence",
      "Private intention",
      "Written conspiracy only",
    ],
    correct: 1,
    explanation:
      "Instigation involves active suggestion, encouragement or incitement to commit offence.",
  },
  {
    id: 100,
    question:
      "Under Section 56 of the Contract Act, a contract to do an impossible act is:",
    options: ["Void", "Voidable", "Illegal", "Enforceable"],
    correct: 0,
    explanation: "Section 56 declares agreement to do impossible act void.",
  },
  {
    id: 101,
    question:
      "Under Article 32 of the Constitution of India, which of the following is correct regarding the right to constitutional remedies?",
    options: [
      "It is a fundamental right enforceable only during emergency.",
      "It cannot be suspended under any circumstances.",
      "It is itself a fundamental right.",
      "It can be invoked only after exhausting alternative remedies.",
    ],
    correct: 2,
    explanation:
      "Article 32 is itself a fundamental right and guarantees the right to move the Supreme Court for enforcement of fundamental rights.",
  },
  {
    id: 102,
    question:
      "In tort law, the defence of volenti non fit injuria is not available when:",
    options: [
      "Consent is obtained by fraud.",
      "The plaintiff knew of the risk.",
      "The plaintiff expressly agreed.",
      "The harm was foreseeable.",
    ],
    correct: 0,
    explanation:
      "Consent obtained by fraud is not valid consent; hence volenti defence fails.",
  },
  {
    id: 103,
    question:
      "Under the Indian Contract Act, 1872, a contract caused by undue influence is:",
    options: [
      "Void.",
      "Voidable at the option of the aggrieved party.",
      "Illegal.",
      "Unenforceable in all cases.",
    ],
    correct: 1,
    explanation:
      "Section 19A provides that contracts induced by undue influence are voidable at the option of the aggrieved party.",
  },
  {
    id: 104,
    question: "The doctrine of eclipse applies to:",
    options: [
      "Post-constitutional laws violating fundamental rights.",
      "Pre-constitutional laws inconsistent with fundamental rights.",
      "Amendments under Article 368.",
      "Administrative orders.",
    ],
    correct: 1,
    explanation:
      "The doctrine of eclipse applies to pre-constitutional laws inconsistent with fundamental rights.",
  },
  {
    id: 105,
    question:
      "Under criminal law, common intention under Section 34 IPC requires:",
    options: [
      "Prior meeting of minds.",
      "Same intention at different times.",
      "Mere presence at the scene.",
      "Negligence by all accused.",
    ],
    correct: 0,
    explanation:
      "Section 34 IPC requires a prior meeting of minds and participation in furtherance of common intention.",
  },
  {
    id: 106,
    question: "Res ipsa loquitur shifts:",
    options: [
      "Entire burden of proof to defendant permanently.",
      "Initial burden of proof to defendant to rebut presumption.",
      "Liability automatically.",
      "Standard of proof to beyond reasonable doubt.",
    ],
    correct: 1,
    explanation:
      "It shifts the evidentiary burden to defendant to rebut the presumption of negligence.",
  },
  {
    id: 107,
    question: "Consideration under the Indian Contract Act may move:",
    options: [
      "Only from the promisee.",
      "Only from a party to the contract.",
      "From promisee or any other person.",
      "Only from a third party.",
    ],
    correct: 2,
    explanation:
      "Under Indian law, consideration may move from promisee or any other person.",
  },
  {
    id: 108,
    question: "Preventive detention laws are constitutionally permitted under:",
    options: [
      "Article 19 only.",
      "Article 21 only.",
      "Article 22.",
      "Article 14.",
    ],
    correct: 2,
    explanation:
      "Article 22 specifically provides safeguards relating to preventive detention.",
  },
  {
    id: 109,
    question: "Negligence per se arises when:",
    options: [
      "There is breach of statutory duty.",
      "There is moral wrongdoing.",
      "There is contractual breach.",
      "Harm is intentional.",
    ],
    correct: 0,
    explanation:
      "Violation of a statutory duty resulting in harm constitutes negligence per se.",
  },
  {
    id: 110,
    question: "A proposal lapses when:",
    options: [
      "Accepted conditionally.",
      "Time prescribed for acceptance expires.",
      "Promisee dies after acceptance.",
      "Offeror changes mind silently.",
    ],
    correct: 1,
    explanation:
      "An offer lapses after expiry of prescribed time under Section 6.",
  },

  {
    id: 111,
    question: "The basic structure doctrine limits:",
    options: [
      "Judicial review power.",
      "Parliament’s amending power.",
      "Executive authority.",
      "State legislative competence.",
    ],
    correct: 1,
    explanation:
      "The doctrine restricts Parliament’s amending power under Article 368.",
  },
  {
    id: 112,
    question: "Strict liability excludes liability when:",
    options: [
      "Act of God occurs.",
      "Defendant was negligent.",
      "Damage was foreseeable.",
      "Activity was dangerous.",
    ],
    correct: 0,
    explanation: "Act of God is a recognized exception to strict liability.",
  },
  {
    id: 113,
    question: "In criminal law, intention differs from motive because:",
    options: [
      "Motive determines punishment.",
      "Intention relates to purpose of act.",
      "Motive is irrelevant.",
      "Intention is never required.",
    ],
    correct: 1,
    explanation:
      "Intention refers to purpose of committing the act; motive explains reason behind it.",
  },
  {
    id: 114,
    question: "A void agreement is:",
    options: [
      "Valid unless rescinded.",
      "Enforceable at option of one party.",
      "Not enforceable by law.",
      "Illegal in all circumstances.",
    ],
    correct: 2,
    explanation:
      "Section 2(g) defines void agreement as not enforceable by law.",
  },
  {
    id: 115,
    question: "Article 14 embodies:",
    options: [
      "Absolute equality.",
      "Reasonable classification.",
      "Strict scrutiny always.",
      "Equal outcomes.",
    ],
    correct: 1,
    explanation:
      "Article 14 allows reasonable classification based on intelligible differentia.",
  },

  {
    id: 116,
    question: "Battery in tort requires:",
    options: [
      "Direct physical contact.",
      "Negligent conduct.",
      "Damage proof always.",
      "Written complaint.",
    ],
    correct: 0,
    explanation:
      "Battery involves intentional and direct physical contact without consent.",
  },
  {
    id: 117,
    question: "Under IPC, culpable homicide becomes murder when:",
    options: [
      "Intention to cause death exists.",
      "Knowledge only exists.",
      "Act is negligent.",
      "Victim survives.",
    ],
    correct: 0,
    explanation:
      "Intention to cause death makes culpable homicide murder under Section 300.",
  },
  {
    id: 118,
    question: "Free consent excludes:",
    options: [
      "Mistake of fact.",
      "Coercion.",
      "Mutual assent.",
      "Consideration.",
    ],
    correct: 1,
    explanation: "Consent caused by coercion is not free under Section 14.",
  },
  {
    id: 119,
    question: "Judicial review is part of:",
    options: [
      "Basic structure.",
      "Directive principles.",
      "Preamble only.",
      "Schedule VII.",
    ],
    correct: 0,
    explanation: "Judicial review is recognized as part of basic structure.",
  },
  {
    id: 120,
    question: "Defamation requires:",
    options: [
      "Publication to third party.",
      "Private insult only.",
      "Negligence always.",
      "Written form only.",
    ],
    correct: 0,
    explanation:
      "Publication to a third person is essential element of defamation.",
  },

  {
    id: 121,
    question: "Quasi contracts are based on:",
    options: [
      "Agreement.",
      "Equity and unjust enrichment.",
      "Offer and acceptance.",
      "Illegal consideration.",
    ],
    correct: 1,
    explanation:
      "Quasi contracts prevent unjust enrichment without actual agreement.",
  },
  {
    id: 122,
    question: "Mens rea is generally required for:",
    options: [
      "Strict liability offences.",
      "All criminal offences.",
      "Civil wrongs.",
      "Most criminal offences.",
    ],
    correct: 3,
    explanation:
      "Mens rea is required for most offences except strict liability.",
  },
  {
    id: 123,
    question: "Doctrine of severability applies when:",
    options: [
      "Entire statute invalid.",
      "Part of statute unconstitutional.",
      "Executive acts arbitrarily.",
      "Court lacks jurisdiction.",
    ],
    correct: 1,
    explanation: "Unconstitutional part may be severed if separable.",
  },
  {
    id: 124,
    question: "Injunction is a remedy in:",
    options: [
      "Criminal law.",
      "Tort law.",
      "Constitution only.",
      "Revenue law.",
    ],
    correct: 1,
    explanation: "In torts, injunction prevents continuation of wrongful act.",
  },
  {
    id: 125,
    question: "Mistake of Indian law renders contract:",
    options: ["Void.", "Voidable.", "Valid.", "Illegal."],
    correct: 2,
    explanation:
      "Mistake of Indian law is not void; ignorance of law no excuse.",
  },
  {
    id: 126,
    question: "Colourable legislation refers to:",
    options: [
      "Law violating natural justice",
      "Law beyond legislative competence disguised within power",
      "Retrospective criminal law",
      "Delegated legislation",
    ],
    correct: 1,
    explanation:
      "It applies when legislature indirectly does what it cannot do directly due to lack of competence.",
  },
  {
    id: 127,
    question: "Absolute liability differs from strict liability because:",
    options: [
      "It applies only to contracts",
      "It has no exceptions",
      "It requires negligence",
      "It applies only to State",
    ],
    correct: 1,
    explanation:
      "Absolute liability (Oleum Gas case) allows no exceptions unlike strict liability.",
  },
  {
    id: 128,
    question: "Attempt under IPC requires:",
    options: [
      "Preparation only",
      "Mere intention",
      "Direct movement towards commission",
      "Successful completion",
    ],
    correct: 2,
    explanation:
      "Attempt begins when there is direct act towards commission after preparation.",
  },
  {
    id: 129,
    question: "Promissory estoppel cannot be invoked against:",
    options: [
      "Private individuals",
      "Government in sovereign functions",
      "Minors",
      "Contracts",
    ],
    correct: 1,
    explanation:
      "It cannot compel government to act contrary to law or sovereign functions.",
  },
  {
    id: 130,
    question: "Doctrine of pith and substance determines:",
    options: [
      "Fundamental rights violation",
      "True nature of legislation for competence",
      "Judicial review scope",
      "Mens rea",
    ],
    correct: 1,
    explanation:
      "It examines the true character of legislation to test legislative competence.",
  },
  {
    id: 131,
    question: "Contributory negligence results in:",
    options: [
      "Full liability of defendant",
      "No compensation",
      "Apportionment of damages",
      "Criminal liability",
    ],
    correct: 2,
    explanation: "Damages are reduced proportionate to plaintiff’s negligence.",
  },
  {
    id: 132,
    question: "Novation under Contract Act means:",
    options: [
      "Termination by breach",
      "Substitution of new contract",
      "Void agreement",
      "Illegal contract",
    ],
    correct: 1,
    explanation:
      "Section 62 allows substitution of new contract in place of old.",
  },
  {
    id: 133,
    question: "Right to privacy is derived from:",
    options: [
      "Article 19 only",
      "Article 21",
      "Directive Principles",
      "Schedule VII",
    ],
    correct: 1,
    explanation: "Recognized as intrinsic to Article 21.",
  },
  {
    id: 134,
    question: "Private defence extends to causing death when:",
    options: [
      "Minor assault occurs",
      "Grievous hurt apprehended",
      "Public servant acts lawfully",
      "Property dispute exists",
    ],
    correct: 1,
    explanation:
      "Sections 100 IPC allows death if grievous hurt or death apprehended.",
  },
  {
    id: 135,
    question: "Quantum meruit applies when:",
    options: [
      "Contract fully performed",
      "Void agreement discovered",
      "Illegal contract",
      "Gratuitous promise",
    ],
    correct: 1,
    explanation: "Compensation allowed when agreement discovered void.",
  },

  {
    id: 136,
    question: "Manifest arbitrariness is ground under:",
    options: ["Article 14", "Article 20", "Article 22", "Article 300A"],
    correct: 0,
    explanation: "Arbitrary state action violates equality under Article 14.",
  },
  {
    id: 137,
    question: "False imprisonment requires:",
    options: [
      "Judicial order",
      "Complete restraint of movement",
      "Written complaint",
      "Negligence",
    ],
    correct: 1,
    explanation:
      "Total restraint without lawful justification constitutes false imprisonment.",
  },
  {
    id: 138,
    question: "A minor’s agreement is:",
    options: ["Voidable", "Void ab initio", "Valid", "Illegal"],
    correct: 1,
    explanation: "Minor’s contract is void from inception.",
  },
  {
    id: 139,
    question: "Ex post facto criminal law is barred under:",
    options: ["Article 19", "Article 20(1)", "Article 21", "Article 32"],
    correct: 1,
    explanation: "Article 20(1) prohibits retrospective criminal liability.",
  },
  {
    id: 140,
    question: "Abetment by conspiracy requires:",
    options: [
      "Mere agreement",
      "Agreement plus act in pursuance",
      "Presence at scene",
      "Negligence",
    ],
    correct: 1,
    explanation: "Conspiracy abetment requires act done in pursuance.",
  },

  {
    id: 141,
    question: "Unjust enrichment principle prevents:",
    options: [
      "Illegal contracts",
      "Benefit without compensation",
      "Void agreements",
      "Criminal liability",
    ],
    correct: 1,
    explanation:
      "Equity prevents one party from unjustly benefiting at another’s expense.",
  },
  {
    id: 142,
    question: "Territorial nexus doctrine relates to:",
    options: [
      "Fundamental rights",
      "Legislative competence with extra-territorial effect",
      "Tort liability",
      "Criminal conspiracy",
    ],
    correct: 1,
    explanation: "State law valid if sufficient territorial nexus exists.",
  },
  {
    id: 143,
    question: "Malice in law means:",
    options: [
      "Personal hatred",
      "Intentional unlawful act without justification",
      "Negligence",
      "Motive",
    ],
    correct: 1,
    explanation: "Malice in law is wrongful act done without lawful excuse.",
  },
  {
    id: 144,
    question: "Anticipatory breach allows:",
    options: [
      "Immediate suit before due date",
      "No remedy",
      "Criminal action",
      "Specific performance only",
    ],
    correct: 0,
    explanation: "Promisee may sue immediately upon repudiation.",
  },
  {
    id: 145,
    question: "Doctrine of legitimate expectation arises from:",
    options: [
      "Contract law",
      "Administrative fairness",
      "Criminal procedure",
      "Tort damages",
    ],
    correct: 1,
    explanation: "Ensures fairness in administrative actions.",
  },

  {
    id: 146,
    question: "Actus non facit reum nisi mens sit rea means:",
    options: [
      "Act alone guilty",
      "Act + guilty mind required",
      "Negligence sufficient",
      "Motive essential",
    ],
    correct: 1,
    explanation: "Crime requires guilty act with guilty mind.",
  },
  {
    id: 147,
    question: "Remoteness of damage limits liability to:",
    options: [
      "All consequences",
      "Foreseeable consequences",
      "Indirect harm always",
      "Punitive damages",
    ],
    correct: 1,
    explanation: "Only reasonably foreseeable damages are recoverable.",
  },
  {
    id: 148,
    question: "Impossibility after contract formation results in:",
    options: [
      "Voidable contract",
      "Frustration",
      "Specific performance",
      "Illegal agreement",
    ],
    correct: 1,
    explanation: "Supervening impossibility voids contract under frustration.",
  },
  {
    id: 149,
    question: "Double jeopardy protection is under:",
    options: ["Article 20(2)", "Article 21", "Article 32", "Article 226"],
    correct: 0,
    explanation: "Prevents prosecution and punishment twice for same offence.",
  },
  {
    id: 150,
    question: "Preparation is punishable in:",
    options: ["All offences", "Murder only", "Waging war", "Theft"],
    correct: 2,
    explanation: "Preparation punishable in grave offences like waging war.",
  },

  {
    id: 151,
    question: "Substantive due process in India is linked to:",
    options: ["Article 21", "Article 19 only", "Article 300A", "Schedule VIII"],
    correct: 0,
    explanation: "Article 21 interpreted to include substantive fairness.",
  },
  {
    id: 152,
    question: "Passing off protects:",
    options: ["Patent", "Trademark goodwill", "Copyright", "Contract rights"],
    correct: 1,
    explanation: "Protects goodwill from misrepresentation.",
  },
  {
    id: 153,
    question: "Agency by ratification requires:",
    options: [
      "Minor principal",
      "Act done on behalf of principal",
      "Illegal act",
      "No knowledge",
    ],
    correct: 1,
    explanation: "Act must be done on behalf of principal.",
  },
  {
    id: 154,
    question: "Public nuisance affects:",
    options: [
      "Individual only",
      "Community at large",
      "Private land only",
      "Contract rights",
    ],
    correct: 1,
    explanation: "Public nuisance impacts general public.",
  },
  {
    id: 155,
    question: "Mischief under IPC requires:",
    options: [
      "Intention to cause wrongful loss",
      "Negligence",
      "Accident",
      "Private defence",
    ],
    correct: 0,
    explanation: "Intent to cause wrongful loss essential.",
  },

  {
    id: 156,
    question: "Basic structure includes:",
    options: [
      "Directive principles only",
      "Federalism",
      "Fundamental duties",
      "Schedules",
    ],
    correct: 1,
    explanation: "Federalism recognized as part of basic structure.",
  },
  {
    id: 157,
    question: "Inducing breach of contract is:",
    options: ["Crime", "Tort", "Void", "Specific performance"],
    correct: 1,
    explanation: "It is economic tort of interference.",
  },
  {
    id: 158,
    question: "Coercion includes:",
    options: ["Moral pressure", "Threat of IPC act", "Persuasion", "Advice"],
    correct: 1,
    explanation: "Threat to commit IPC offence amounts to coercion.",
  },
  {
    id: 159,
    question: "Habeas corpus is for:",
    options: [
      "Compensation",
      "Illegal detention",
      "Property dispute",
      "Tax matter",
    ],
    correct: 1,
    explanation: "Issued to release unlawful detention.",
  },
  {
    id: 160,
    question: "Theft requires:",
    options: [
      "Dishonest intention",
      "Negligence",
      "Violence",
      "Breach of trust",
    ],
    correct: 0,
    explanation: "Dishonest intention to take movable property required.",
  },
  {
    id: 161,
    question:
      "Under the Indian Penal Code, criminal conspiracy under Section 120A requires proof of:",
    options: [
      "Mere intention to commit an offence",
      "Agreement between two or more persons to commit an illegal act",
      "Commission of the illegal act",
      "Presence at the scene of crime",
    ],
    correct: 1,
    explanation:
      "Criminal conspiracy is complete upon agreement to commit an illegal act; commission is not necessary except in certain cases.",
  },
  {
    id: 162,
    question:
      "The doctrine of proportionality in constitutional law primarily examines whether:",
    options: [
      "Law is enacted by competent legislature",
      "State action minimally impairs fundamental rights",
      "Law violates separation of powers",
      "Judiciary exceeded its jurisdiction",
    ],
    correct: 1,
    explanation:
      "Proportionality tests whether state action restricting rights is suitable, necessary, and balanced.",
  },
  {
    id: 163,
    question: "In tort law, vicarious liability is based on:",
    options: [
      "Personal fault of employer",
      "Principle of respondeat superior",
      "Absolute liability rule",
      "Strict contractual obligation",
    ],
    correct: 1,
    explanation:
      "Vicarious liability is founded on the principle that a master is liable for acts of servant in course of employment.",
  },
  {
    id: 164,
    question: "A contingent contract becomes enforceable when:",
    options: [
      "It is signed by both parties",
      "Consideration is paid",
      "The contingent event happens",
      "The promisor demands performance",
    ],
    correct: 2,
    explanation:
      "Under Sections 31–36 of the Contract Act, a contingent contract is enforceable only upon occurrence of the event.",
  },
  {
    id: 165,
    question:
      "Article 13 of the Constitution declares laws inconsistent with Fundamental Rights to be:",
    options: [
      "Void ab initio in entirety",
      "Void to the extent of inconsistency",
      "Automatically repealed",
      "Valid unless challenged",
    ],
    correct: 1,
    explanation:
      "Article 13 renders such laws void only to the extent of inconsistency.",
  },
  {
    id: 166,
    question: "In negligence, duty of care is determined primarily by:",
    options: [
      "Subjective intention of defendant",
      "Foreseeability of harm",
      "Moral obligation",
      "Existence of written agreement",
    ],
    correct: 1,
    explanation: "Duty of care arises when harm is reasonably foreseeable.",
  },
  {
    id: 167,
    question: "Under IPC, mistake of fact is a valid defence when:",
    options: [
      "Act is done in good faith believing facts to justify it",
      "Law is misunderstood",
      "Accused is negligent",
      "Act is immoral",
    ],
    correct: 0,
    explanation:
      "Section 76–79 IPC recognize mistake of fact done in good faith as defence.",
  },
  {
    id: 168,
    question: "Consideration is unlawful when it:",
    options: [
      "Is inadequate",
      "Is immoral or opposed to public policy",
      "Moves from third party",
      "Is executory",
    ],
    correct: 1,
    explanation:
      "Section 23 declares consideration unlawful if immoral or opposed to public policy.",
  },
  {
    id: 169,
    question: "The power of judicial review of High Courts is conferred under:",
    options: ["Article 32", "Article 136", "Article 226", "Article 368"],
    correct: 2,
    explanation:
      "Article 226 empowers High Courts to issue writs for enforcement of rights.",
  },
  {
    id: 170,
    question: "Robbery is aggravated form of:",
    options: [
      "Cheating",
      "Theft or extortion with violence",
      "Criminal breach of trust",
      "Mischief",
    ],
    correct: 1,
    explanation:
      "Robbery involves theft or extortion accompanied by violence or fear of instant death.",
  },
  {
    id: 171,
    question: "The doctrine of harmonious construction is applied to:",
    options: [
      "Resolve conflicts between constitutional provisions",
      "Invalidate statutes",
      "Amend Constitution",
      "Override judicial precedents",
    ],
    correct: 0,
    explanation:
      "It ensures provisions are interpreted to give effect to all without conflict.",
  },
  {
    id: 172,
    question: "In tort, nuisance becomes actionable per se when:",
    options: [
      "Actual damage proved",
      "Interference is substantial and unreasonable",
      "Defendant is negligent",
      "There is contractual breach",
    ],
    correct: 1,
    explanation:
      "Substantial and unreasonable interference with enjoyment of property makes nuisance actionable.",
  },
  {
    id: 173,
    question: "Under Contract Act, misrepresentation makes contract:",
    options: [
      "Void",
      "Voidable at option of aggrieved party",
      "Illegal",
      "Automatically enforceable",
    ],
    correct: 1,
    explanation:
      "Section 19 provides misrepresentation makes contract voidable.",
  },
  {
    id: 174,
    question: "Protection against self-incrimination is guaranteed under:",
    options: [
      "Article 20(3)",
      "Article 19(1)(a)",
      "Article 22(2)",
      "Article 300A",
    ],
    correct: 0,
    explanation:
      "Article 20(3) protects accused from being compelled to testify against himself.",
  },
  {
    id: 175,
    question: "Criminal breach of trust requires:",
    options: [
      "Entrustment of property and dishonest misappropriation",
      "Violence",
      "Trespass",
      "Mistake of fact",
    ],
    correct: 0,
    explanation:
      "Section 405 IPC requires entrustment and dishonest misappropriation.",
  },
  {
    id: 176,
    question: "Delegated legislation can be struck down if:",
    options: [
      "Within parent Act scope",
      "Ultra vires the parent statute",
      "Made by Parliament",
      "Retrospective",
    ],
    correct: 1,
    explanation:
      "Delegated legislation exceeding authority of parent Act is ultra vires.",
  },
  {
    id: 177,
    question: "In defamation, truth is a defence when:",
    options: [
      "Statement made maliciously",
      "Published in good faith for public good",
      "Oral statement",
      "Private conversation",
    ],
    correct: 1,
    explanation: "Truth coupled with public good is defence under IPC.",
  },
  {
    id: 178,
    question: "Doctrine of frustration applies when:",
    options: [
      "Performance becomes impossible after contract formation",
      "Party unwilling to perform",
      "Contract illegal initially",
      "Consideration inadequate",
    ],
    correct: 0,
    explanation:
      "Section 56 applies when performance becomes impossible after formation.",
  },
  {
    id: 179,
    question: "Article 19 freedoms are available to:",
    options: [
      "Citizens only",
      "All persons",
      "Foreigners only",
      "Corporations exclusively",
    ],
    correct: 0,
    explanation: "Article 19 rights are guaranteed only to citizens.",
  },
  {
    id: 180,
    question: "Grievous hurt under IPC includes:",
    options: [
      "Simple hurt",
      "Temporary pain",
      "Permanent loss of sight",
      "Verbal abuse",
    ],
    correct: 2,
    explanation:
      "Section 320 IPC includes permanent loss of sight as grievous hurt.",
  },
  {
    id: 181,
    question: "Doctrine of eclipse does not apply to:",
    options: [
      "Pre-constitutional laws",
      "Post-constitutional laws violating fundamental rights",
      "Laws inconsistent before amendment",
      "Voidable contracts",
    ],
    correct: 1,
    explanation: "It mainly applies to pre-constitutional laws.",
  },
  {
    id: 182,
    question: "Rescission of contract restores parties to:",
    options: [
      "Position after breach",
      "Original position before contract",
      "Position chosen by court",
      "Future obligation",
    ],
    correct: 1,
    explanation: "Rescission aims to restore parties to status quo ante.",
  },
  {
    id: 183,
    question: "Common intention under Section 34 IPC requires:",
    options: [
      "Independent acts",
      "Pre-arranged plan and participation",
      "Mere presence",
      "Negligence",
    ],
    correct: 1,
    explanation:
      "It requires pre-arranged plan and participation in furtherance.",
  },
  {
    id: 184,
    question: "Article 300A protects:",
    options: [
      "Right to life",
      "Right to property as constitutional right",
      "Freedom of speech",
      "Right to education",
    ],
    correct: 1,
    explanation:
      "Article 300A provides that no person shall be deprived of property except by authority of law.",
  },
  {
    id: 185,
    question: "Specific performance is granted when:",
    options: [
      "Damages are adequate remedy",
      "Contract involves personal skill",
      "Monetary compensation inadequate",
      "Agreement void",
    ],
    correct: 2,
    explanation: "Specific performance granted where damages inadequate.",
  },
  {
    id: 186,
    question: "Culpable homicide not amounting to murder occurs when:",
    options: [
      "All ingredients of Section 300 satisfied",
      "Exception to Section 300 applies",
      "No death occurs",
      "Negligence only",
    ],
    correct: 1,
    explanation: "When case falls within exceptions of Section 300.",
  },
  {
    id: 187,
    question: "Estoppel prevents a person from:",
    options: [
      "Committing crime",
      "Denying representation previously made",
      "Entering contract",
      "Filing suit",
    ],
    correct: 1,
    explanation:
      "Estoppel bars denial of previous representation relied upon by other.",
  },
  {
    id: 188,
    question: "Preventive detention must comply with safeguards under:",
    options: [
      "Article 22",
      "Article 14 only",
      "Article 19 only",
      "Article 51A",
    ],
    correct: 0,
    explanation: "Article 22 provides procedural safeguards.",
  },
  {
    id: 189,
    question: "Trespass to land requires:",
    options: [
      "Lawful authority",
      "Intentional entry without permission",
      "Negligence",
      "Damage proof mandatory",
    ],
    correct: 1,
    explanation: "Intentional unauthorized entry constitutes trespass.",
  },
  {
    id: 190,
    question: "A voidable contract remains valid until:",
    options: [
      "Court declares void",
      "Rescinded by aggrieved party",
      "Consideration paid",
      "Performance complete",
    ],
    correct: 1,
    explanation: "Voidable contract valid until rescinded.",
  },
  {
    id: 191,
    question: "Doctrine of basic structure was evolved in:",
    options: [
      "Maneka Gandhi case",
      "Kesavananda Bharati case",
      "Minerva Mills case",
      "Golaknath case",
    ],
    correct: 1,
    explanation:
      "Basic structure doctrine propounded in Kesavananda Bharati (1973).",
  },
  {
    id: 192,
    question: "Cheating under IPC requires:",
    options: [
      "Dishonest inducement and delivery of property",
      "Violence",
      "Entrustment",
      "Mere breach of contract",
    ],
    correct: 0,
    explanation: "Section 415 IPC requires deception and dishonest inducement.",
  },
  {
    id: 193,
    question: "Free consent is absent in case of:",
    options: [
      "Mutual mistake of fact essential to agreement",
      "Inadequate consideration",
      "Future uncertainty",
      "Third party consideration",
    ],
    correct: 0,
    explanation: "Mutual mistake of essential fact voids agreement.",
  },
  {
    id: 194,
    question: "Writ of mandamus cannot be issued against:",
    options: [
      "Public authority",
      "Inferior court",
      "Private individual with no public duty",
      "Statutory body",
    ],
    correct: 2,
    explanation:
      "Mandamus lies against authority performing public duty, not purely private individual.",
  },
  {
    id: 195,
    question: "Wrongful confinement is aggravated form of:",
    options: ["Assault", "Wrongful restraint", "Theft", "Cheating"],
    correct: 1,
    explanation:
      "Wrongful confinement is wrongful restraint within circumscribed limits.",
  },
  {
    id: 196,
    question: "Agreement in restraint of trade is:",
    options: [
      "Valid",
      "Void subject to statutory exceptions",
      "Illegal always",
      "Voidable",
    ],
    correct: 1,
    explanation: "Section 27 makes it void except statutory exceptions.",
  },
  {
    id: 197,
    question: "Equality before law under Article 14 is borrowed from:",
    options: ["USA", "UK", "France", "Canada"],
    correct: 1,
    explanation:
      "Concept of equality before law derived from British rule of law.",
  },
  {
    id: 198,
    question: "Section 300 Exception 4 applies when:",
    options: [
      "Premeditated murder",
      "Sudden fight without premeditation",
      "Poisoning",
      "Contract killing",
    ],
    correct: 1,
    explanation:
      "Sudden fight in heat of passion reduces murder to culpable homicide.",
  },
  {
    id: 199,
    question: "Doctrine of waiver does not apply to:",
    options: [
      "Statutory rights",
      "Fundamental rights",
      "Contractual rights",
      "Private claims",
    ],
    correct: 1,
    explanation: "Fundamental rights cannot generally be waived.",
  },
  {
    id: 200,
    question: "Remedy for breach of contract primarily aims to:",
    options: [
      "Punish defendant",
      "Restore injured party to position as if contract performed",
      "Impose criminal liability",
      "Enrich plaintiff",
    ],
    correct: 1,
    explanation:
      "Contract damages aim to place aggrieved party in position had contract been performed.",
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
