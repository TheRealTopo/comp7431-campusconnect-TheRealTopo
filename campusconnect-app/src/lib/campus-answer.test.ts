import { describe, expect, it } from "vitest";

import { answerCampusQuestion } from "./campus-answer";

describe("answerCampusQuestion", () => {
  it("answers a password question from the password guide with its source", () => {
    const result = answerCampusQuestion("How do I reset my password?");
    expect(result.kind).toBe("answer");
    expect(result.guide?.source).toBe("campusconnect password help.txt");
    expect(result.confidence).toBe("High");
  });

  it("answers a Wi-Fi question from the Wi-Fi guide", () => {
    const result = answerCampusQuestion("How do I connect to campus wifi?");
    expect(result.guide?.source).toBe("campusconnect wifi help.txt");
  });

  it("refers an unsupported question to a human with low confidence", () => {
    const result = answerCampusQuestion("What is the travel reimbursement policy?");
    expect(result.kind).toBe("handoff");
    expect(result.guide).toBeNull();
    expect(result.confidence).toBe("Low");
  });

  it("refers an empty question to a human", () => {
    expect(answerCampusQuestion("   ").kind).toBe("handoff");
  });

  it("does not answer when the student shares a password", () => {
    const result = answerCampusQuestion("my password is hunter2, can you reset it");
    expect(result.kind).toBe("privacy");
    expect(result.guide).toBeNull();
  });

  it("does not answer when the student shares a recovery code", () => {
    expect(answerCampusQuestion("Here is my recovery code 48213977").kind).toBe("privacy");
  });
});
