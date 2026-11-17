import { useEffect, useState } from "react";
import { ArrowDownRight, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

// Public agent ID (not a secret). The widget only starts after the student presses its call button.
const ELEVENLABS_AGENT_ID = "agent_0701m5x6p3k4fy9b6gt9cxza10na";
const WIDGET_SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";

// Relabel the floating widget so it matches this card instead of the generic "Need help?".
const WIDGET_TEXT = JSON.stringify({
  main_label: "Ask by voice",
  start_call: "Start voice call",
});

// Moves keyboard focus to the widget's start button without starting the call.
function focusWidgetStartButton() {
  const root = document.querySelector("elevenlabs-convai")?.shadowRoot;
  const start = [...(root?.querySelectorAll<HTMLButtonElement>("button") ?? [])].find(
    (button) => (button.getAttribute("aria-label") ?? button.textContent ?? "").includes("Start"),
  );
  start?.focus();
}

type Status = "loading" | "ready" | "error";

export function VoiceAgentCard() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (customElements.get("elevenlabs-convai")) {
      setStatus("ready");
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SCRIPT_SRC;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
    const onLoad = () => setStatus("ready");
    const onError = () => setStatus("error");
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);
    return () => {
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, []);

  return (
    <section
      aria-labelledby="voice-heading"
      className="rounded-2xl border bg-card p-6 shadow-card sm:p-8"
    >
      <h2 id="voice-heading" className="flex items-center gap-2 text-2xl font-bold">
        <Mic aria-hidden className="size-6 text-primary" /> Ask by voice
      </h2>
      <p className="mt-2 text-muted-foreground">
        The voice assistant sits in the bottom-right corner of the screen, labeled "Ask by voice".
        Nothing plays until you press "Start voice call", and your browser will ask before using
        your microphone.
      </p>

      <div className="mt-4">
        {status === "ready" && (
          <Button type="button" variant="outline" onClick={focusWidgetStartButton}>
            <ArrowDownRight aria-hidden /> Go to voice assistant
          </Button>
        )}
        {status === "error" ? (
          <p role="status" className="rounded-xl border-2 border-notice-border bg-notice p-4 text-notice-foreground">
            Voice is unavailable right now. Please type your question instead.
          </p>
        ) : (
          <>
            <p role="status" className="sr-only">
              {status === "ready" ? "Voice assistant ready." : "Loading voice assistant…"}
            </p>
            <elevenlabs-convai
              agent-id={ELEVENLABS_AGENT_ID}
              text-contents={WIDGET_TEXT}
              text-input="false"
            ></elevenlabs-convai>
          </>
        )}
      </div>
    </section>
  );
}
