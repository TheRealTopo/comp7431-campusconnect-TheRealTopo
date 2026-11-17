# Week 10 MVP Test, CI, and Freeze
Student: Edwin Lemus
Date: Nov-16-2026
Branch: release/week-10-rc1
Application URL: https://campus-chorus-help-hub.lovable.app/
Environment: Chrome; deployed Lovable TypeScript/Bun application
## 1. Six-test MVP record
| # | Quality area | Action and expected result | Observed evidence | Result |
|---|---|---|---|---|
| 1 | Supported retrieval | Ask: "How do I reset my CampusConnect password?" The answer uses
the approved password-reset passage. | Pass | 
| 2 | Citation support | Open the displayed source from Test 1. At least one important answer
claim is directly supported by the source passage. | The agent support the password.|
| 3 | Unsupported query | Ask: "What are the Thanksgiving dining hall hours?" The system
states its IT-support limit and does not invent hours, a source, phone number, or office. |
Pass| Pass |

| 4 | Voice and text fallback | Use the supported answer. If voice works, its meaning matches
the visible grounded answer. If voice is unavailable, the text, source, and a clear Continue
in text or retry path remain. | Pass | Pass |
| 5 | Video accessibility | Mute the tab and skip the video. AI disclosure and transcript
remain visible, and the chatbot is reachable by keyboard. | Video show the caption | Pass |
| 6 | Latency and recovery | Time one supported question. Class target: grounded text in 5
seconds or less. If slower, the question is preserved and progress, retry, or text fallback is
clear. | Pass | Pass |
## 2. Lighthouse and manual accessibility evidence
Performance score: 94
Accessibility score: 96
One important Lighthouse finding or "none listed": Shows good performance
Keyboard plus muted-video result: Accesible - Pass
## 3. Defect decision and retest
Highest-severity finding: Not yet established from complete test evidence.
Severity: Pending confirmation.
Smallest repair made: No specific repair has been documented.
Focused retest result: The previous value "60" is unexplained and needs clarification before being used as evidence.
## 4. Release gate
Release decision: NO-GO
Decision reason: The CampusConnect TypeScript/Bun application successfully completed dependency installation and the production build in GitHub Actions. However, the Week 10 release-evidence validation rejected the candidate because the test record declares NO-GO. Additional verification of the manual test evidence is needed before approving the release.
GitHub Actions run: https://github.com/TheRealTopo/comp7431-campusconnect-TheRealTopo/actions/runs/313792602483
Release tag if GO: v0.9.0-rc1 — Not created.
Next action: Complete the remaining manual evidence, confirm the release criteria, and reassess the GO/NO-GO decision.
## 5. Engineering and AI Use Log
What I tested myself: I tested the CampusConnect web application in Chrome and recorded the results in the six-test MVP record. The GitHub Actions workflow separately verified dependency installation and the TypeScript/Bun production build.
What remained human-reviewed rather than automated: Evaluating answer correctness, checking source citations, assessing unsupported-query responses, verifying voice and text fallback, and reviewing video accessibility required human judgment. Any checks not actually completed remain unverified.
Known limitation carried into Week 11 Red Teaming: The release evidence requires further verification before the candidate can receive a GO decision. The current CI gate verifies the production build but does not automate AI answer correctness, citation accuracy, voice behavior, or accessibility.
