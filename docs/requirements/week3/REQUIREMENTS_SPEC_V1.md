# CampusConnect Requirements Specification v1
Status: Draft — Week 3
Student: Edwin Lemus
Branch: docs/week-3-requirements-ai
## 1. Problem statement
Students who need IT Support information need a reliable way to find the correct
next step because the current experience may be scattered, difficult to search, or
hard to verify as current.
## 2. Evidence carried forward from Week 2
- E-01: you can not see it
- E-02: you need to register
- A-01: contant the support 
## 3. One user journey inside the MVP
A student asks one typed IT Support question. CampusConnect searches only approved
IT Support material, returns a short answer with a visible source, or says the
available sources do not support an answer.

COPY / PASTE — REQUIREMENTS_SPEC_V1.md — Block 2 of 2
## 4. Four requirements
- FR-01 — The system shall accept one typed IT Support question.
- GR-01 — Every factual answer shall identify the approved source used.
- SF-01 — If approved sources are insufficient, the system shall not invent an
answer and shall provide a helpful IT Support next step.
- NFR-01 — A keyboard user shall be able to submit a question and read the result.
## 5. MVP boundary
IN: one typed question, approved IT Support material, one grounded answer, visible
source, safe failure, and helpful next step.
OUT: password resets, ticket creation, personal student records, voice, automatic
actions, and answers from unapproved material.
## 6. AI critique and human decision
- ChatGPT suggestion: FR-01 / GR-01 / SF-01
Specific problem: The requirements do not define what counts as “approved,” “sufficient,” or a “helpful” next step.
Why it matters: Without measurable criteria, answer grounding and safe failure cannot be tested consistently. ASSUMPTION: This ambiguity could cause different reviewers to accept different system behavior.
Smallest testable revision: Add explicit criteria defining an approved source and requiring insufficient-source cases to return a fixed support-contact next step.
- Claude suggestion: Section 4, SF-01 (with the "approved sources are insufficient" condition it depends on)
SF-01 has no measurable definition of "insufficient" or "helpful IT Support next step," so two reviewers could not agree on whether a given response passes or fails. ASSUMPTION: this is the most important gap because SF-01 is the only requirement that governs what happens when the system cannot answer, and that is where an AI feature is most likely to fail.
A requirement that cannot be tested cannot be verified, and "safe failure" is a core part of your MVP boundary. Without a pass/fail rule, a system that guesses, or one that gives a vague "contact IT" reply, could both be called compliant.
Suggested testable shape (your decision on the exact wording and threshold): "If no approved IT Support source is retrieved for the question, the system shall display a fixed message stating that no approved source supports an answer, and shall display one named IT Support contact or link taken from approved material." A test would then be: submit a question with no matching source and check for both the message and the contact. ASSUMPTION: an approved source for the contact exists; your Week 2 evidence (A-01, "contact the support") hints at this but does not confirm it.
- My decision: Accepted / Revised / Rejected
- My reason: <EXPLAIN USING WEEK 2 EVIDENCE, SCOPE, OR TESTABILITY>
