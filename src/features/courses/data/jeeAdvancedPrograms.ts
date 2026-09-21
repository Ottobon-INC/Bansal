export interface BatchDetails {
  phase: string;
  medium: string;
  target: string;
  admission: string;
  date: string;
}

export interface ProgramDetails {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  eligibility: string;
  class: string;
  batches: BatchDetails[];
}

export const jeeAdvancedPrograms: ProgramDetails[] = [
  {
    id: "bulls-eye",
    name: "BULL'S EYE FOR JEE",
    slug: "bulls-eye",
    image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/3-2.png",
    shortDesc: "Embark on a transformative two-year journey designed to rigorously prepare you for JEE Advanced and secure your place in prestigious IITs. With expert mentorship and meticulously curated study materials...",
    fullDesc: "BULL'S EYE for JEE is a distinguished two-year program designed to prepare you for the toughest exam, JEE Advanced. This course offers unparalleled rigor, expert guidance, and comprehensive study materials that will help you achieve your goals of securing a spot in prestigious IITs.\n\nOur unique teaching methodology, combined with small, focused batches, ensures personalized attention to each student. Through one-on-one interactions with experienced instructors, every concept is made clear, helping you master the skills required for IIT-JEE success. This course goes beyond exam-oriented content by emphasizing critical thinking, problem-solving techniques, and analytical reasoning — all of which are crucial for excelling in competitive exams.\n\nIf you have the dedication and potential to achieve excellence, BULL'S EYE for JEE is the perfect platform to channel your abilities toward success.",
    duration: "2 Years (Class XI and XII) – Target JEE 2027",
    eligibility: "Class X to XI Moving Students",
    class: "X TO XI MOVING",
    batches: [
      { phase: "Phase I", medium: "English", target: "2027", admission: "BOOST", date: "02/04/2025" },
      { phase: "Phase II", medium: "English", target: "2027", admission: "BOOST", date: "23/04/2025" },
    ]
  },
  {
    id: "nucleus",
    name: "NUCLEUS FOR JEE",
    slug: "nucleus",
    image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/2-3.png",
    shortDesc: "If you are currently in Class XI or about to complete it, and aspire to become an engineering professional at top institutions like IITs, our focused guidance is here to set you on the right path...",
    fullDesc: "As you near the completion of Class XI or have recently finished it, and aspire to become a distinguished Engineering professional through prestigious institutions like IITs, our expert guidance is here to support you every step of the way. In Class XII, our focus will be on thoroughly covering the PCM syllabus while aligning it with targeted IIT-JEE preparation. While we won't teach the Class XI PCM content separately, it will be effectively integrated into the curriculum through Daily Practice Problems (DPPs), ensuring a well-rounded understanding. This carefully crafted course is designed to equip you with the strategies and knowledge needed to tackle the IIT-JEE challenges with confidence as you approach the final stage of Class XII.",
    duration: "1 Year During Class XII (Target JEE - 2026)",
    eligibility: "Class XI to XII Moving Students",
    class: "XI TO XII MOVING",
    batches: [
      { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST or Direct", date: "02/04/2025" },
      { phase: "Phase II", medium: "English", target: "2026", admission: "BOOST or Direct", date: "23/04/2025" },
    ]
  },
  {
    id: "sterling",
    name: "STERLING FOR JEE (DROPPER)",
    slug: "sterling",
    image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/1-2.png",
    shortDesc: "For students who have completed Class XII and are determined to achieve nothing less than excellence, this course is designed for you. With a focus on advanced preparation and personalized guidance...",
    fullDesc: "STERLING for JEE (DROPPER) is the perfect course for students who have completed their Class XII and aspire to crack the IIT-JEE with excellence. If you aim high, seek perfection, and are determined to settle for nothing less than your best, this course is tailored for you.\n\nThis one-year program focuses on strengthening your academic foundation, refining concepts, and boosting your preparation for both IIT-JEE and NEET. Designed for students who recognize their potential and are committed to improving, STERLING for JEE provides the ideal platform to rebuild confidence, polish your knowledge, and excel in these competitive exams.\n\nOur expert instructors provide personalized guidance in a focused, motivating environment, helping you approach JEE with a strategic mindset. With detailed study plans, mock tests, and one-on-one interactions, we ensure that you are fully equipped to tackle the challenges of the exam.",
    duration: "1 Year after Class XII – Target JEE 2026",
    eligibility: "For 12th Passed/Appeared Students",
    class: "XII PASSED",
    batches: [
      { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST or Direct", date: "09/04/2025" }
    ]
  }
];
