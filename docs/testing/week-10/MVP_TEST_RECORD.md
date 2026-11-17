# Week 10 MVP Test, CI, and Freeze
Student: Edwin Lemus
Date: Nov-16-2026
Branch: release/week-10-rc1
Local URL: http://127.0.0.1:7860 - https://campus-chorus-help-hub.lovable.app/
Environment: Chrome
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
Highest-severity finding: Not issues
Severity: None
Smallest repair made:  shows small repairs results 
Focused retest result: 60
## 4. Release gate
Release decision: NO-GO
Decision reason: The TypeScript/Bun application build passed in GitHub Actions, but the release-evidence gate failed. The test record still requires clearer observed evidence and confirmation of the release criteria before RC1 can be approved.
GitHub Actions run: [[Paste the actual URL of Week 10 Release Check #5](https://github.com/TheRealTopo/comp7431-campusconnect-TheRealTopo/edit/release/week-10-rc1/docs/testing/week-10/MVP_TEST_RECORD.md)]
Release tag if GO: v0.9.0-rc1 (not created because the current decision is NO-GO)
Release decision: No
Decision reason: retest
GitHub Actions run: error test due not .py file
Release tag if GO: v0.9.0-rc1
## 5. Engineering and AI Use Log
What I tested myself: web app
What remained human-reviewed rather than automated: Yes
Known limitation carried into Week 11 Red Teaming: Not yet
