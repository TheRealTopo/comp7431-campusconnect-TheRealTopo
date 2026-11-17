import { useState } from "react";
import { FileText, Keyboard, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QUESTION_INPUT_ID } from "./TextHelpPanel";

const HEYGEN_EMBED_URL = "https://app.heygen.com/embeds/aa229b1901e84bb79b5d4a18cf9da733";

const TRANSCRIPT = `0:00 Hello. I am an AI-generated CampusConnect presenter, not a live staff member. You can use CampusConnect for approved campus IT help. Ask about password resets, secure campus Wi-Fi, or the IT Service Desk. Please do not share passwords, recovery codes, student records, or other private information. If the chatbot cannot support an answer from its approved guide, it will direct you to a human. This video is a prerecorded introduction. You can read the same script in our GitHub project.`;

function focusTextQuestion() {
  const input = document.getElementById(QUESTION_INPUT_ID);
  input?.scrollIntoView({ block: "center" });
  input?.focus({ preventScroll: true });
}

export function OrientationVideoCard() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section
      aria-labelledby="video-heading"
      className="rounded-2xl border bg-card p-6 shadow-card sm:p-8"
    >
      <h2 id="video-heading" className="flex items-center gap-2 text-2xl font-bold">
        <PlayCircle aria-hidden className="size-6 text-primary" /> Watch the orientation
      </h2>

      <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border bg-muted">
        {/* No "autoplay" permission: the video only plays when the student presses play. */}
        <iframe
          src={HEYGEN_EMBED_URL}
          title="CampusConnect orientation video with an AI-generated presenter"
          allow="encrypted-media; fullscreen"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
      <p className="mt-3 font-bold">AI-generated presenter — not a live staff member.</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button type="button" onClick={focusTextQuestion}>
          <Keyboard aria-hidden /> Use text instead
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-expanded={showTranscript}
          aria-controls="video-transcript"
          onClick={() => setShowTranscript((open) => !open)}
        >
          <FileText aria-hidden /> Read video transcript
        </Button>
      </div>

      <div
        id="video-transcript"
        hidden={!showTranscript}
        className="mt-4 rounded-xl bg-muted p-5"
      >
        <h3 className="text-lg font-bold">Video transcript</h3>
        <p className="mt-2">{TRANSCRIPT}</p>
      </div>
    </section>
  );
}
