import { CAMPUS_GUIDES, HUMAN_HANDOFF_CONTACT, type CampusGuide } from "./campus-guides";

export type CampusAnswer =
  | {
      kind: "answer";
      answer: string;
      guide: CampusGuide;
      confidence: "High";
    }
  | {
      kind: "handoff" | "privacy";
      answer: string;
      guide: null;
      confidence: "Low";
      contact: string;
    };

export const UNSUPPORTED_MESSAGE =
  "I do not have enough approved evidence to answer that. A human will help you.";

export const PRIVACY_MESSAGE =
  "Please do not share passwords, recovery codes, student records, or other private information here. A human can help you safely.";

// Signals that the student is pasting private data rather than asking a question.
const PRIVATE_DATA_PATTERNS: RegExp[] = [
  /\bmy\s+(password|passcode|pin)\s+(is|=|:)/i,
  /\b(recovery|backup|verification|2fa|mfa)\s+code\b/i,
  /\bstudent\s+(id|number|record|records)\b/i,
  /\b(ssn|social\s+security)\b/i,
  /\b\d{6,}\b/,
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
}

function scoreGuide(question: string, guide: CampusGuide): number {
  const words = new Set(question.split(/\s+/).filter(Boolean));
  let score = 0;
  for (const keyword of guide.keywords) {
    if (keyword.includes(" ") ? question.includes(keyword) : words.has(keyword)) score += 1;
  }
  return score;
}

/**
 * Answers only from approved guides. Anything unsupported, or any message that
 * contains private data, is referred to a human instead of guessed.
 */
export function answerCampusQuestion(rawQuestion: string): CampusAnswer {
  const question = rawQuestion.trim();

  if (PRIVATE_DATA_PATTERNS.some((pattern) => pattern.test(question))) {
    return {
      kind: "privacy",
      answer: PRIVACY_MESSAGE,
      guide: null,
      confidence: "Low",
      contact: HUMAN_HANDOFF_CONTACT,
    };
  }

  const normalized = normalize(question);
  let best: { guide: CampusGuide; score: number } | null = null;
  for (const guide of CAMPUS_GUIDES) {
    const score = scoreGuide(normalized, guide);
    if (score > 0 && (!best || score > best.score)) best = { guide, score };
  }

  if (!best) {
    return {
      kind: "handoff",
      answer: UNSUPPORTED_MESSAGE,
      guide: null,
      confidence: "Low",
      contact: HUMAN_HANDOFF_CONTACT,
    };
  }

  return { kind: "answer", answer: best.guide.answer, guide: best.guide, confidence: "High" };
}
