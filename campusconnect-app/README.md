# Campus Chorus Help Hub

Update my EXISTING CampusConnect interface. Do not rebuild the app and do not replace the see github : https://github.com/TheRealTopo/comp7431-campusconnect-TheRealTopo/tree/feature/week-9-multimodal-integration
current RAG answer logic.
Create one simple user journey with these sections in this order:
1. A heading: “CampusConnect Multimodal Help.”
2. The existing text/RAG question-and-answer area remains the primary path.
3. A card labeled “Ask by voice” containing the ElevenLabs Agent widget code I paste below.
4. A card labeled “Watch the orientation” containing the HeyGen embed code or share link I
paste below.
5. Directly under the video, show: “AI-generated presenter — not a live staff member.”
6. Add buttons or links labeled “Use text instead” and “Read video transcript.”
7. Add this fallback message: “If voice or video is unavailable, type your question.
Unsupported questions are referred to a human.”
8. Do not autoplay audio or video. Keep keyboard navigation and readable contrast.
9. Do not expose API keys, agent secrets, private URLs, student data, or .env values.
ELEVENLABS WIDGET CODE
<elevenlabs-convai agent-id="<agent_0701m5x6p3k4fy9b6gt9cxza10na>"></elevenlabs-convai>
<script
  src="https://unpkg.com/@elevenlabs/convai-widget-embed"
  async
  type="text/javascript"
></script>
HEYGEN SOURCE
<iframe width="560" height="315" src="https://app.heygen.com/embeds/aa229b1901e84bb79b5d4a18cf9da733" title="Check out a new AI Video I just made!" frameborder="0" allow="encrypted-media; fullscreen;" allowfullscreen></iframe>
VIDEO TRANSCRIPT
0:00 Hello. I am an AI-generated CampusConnect presenter, not a live staff member. You can use CampusConnect for approved campus IT help. Ask about password resets, secure campus Wi-Fi, or the IT Service Desk. Please do not share passwords, recovery codes, student records, or other private information. If the chatbot cannot support an answer from its approved guide, it will direct you to a human. This video is a prerecorded introduction. You can read the same script in our GitHub project.

Before changing files, summarize the files you will modify. After the change, list the exact
files modified and give four manual checks.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://campus-chorus-help-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fe9bac48-fc1a-438e-ba66-2e6f30e8c864).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
